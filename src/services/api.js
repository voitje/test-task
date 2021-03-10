import http from "@/services/apiConfig";

class Api {
    static login = (form) => {
        return http.post('auth/login', form)
    }

    static getBalance = () => {
        return http.get('balance/get')
    }

    static setBalance = (body) => {
        return http.post('balance/set', body)
    }
}

export default Api;