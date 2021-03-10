import axios from "axios";
import LocaleStorage from "@/services/storage/storage";

const http = axios.create({
    baseURL: 'URL',
    headers: {
        'Content-Type': 'application/json'
    }
});

http.interceptors.request.use(
  (config) => {
      const token = LocaleStorage.getToken();
      if (token) {
          return {
              ...config,
              headers: {
                  ...config.headers,
                  Authorization: `Token ${token}`,
              }
          }
      }
      return config;
  },
  (error) => Promise.reject(error)
)

export default http;