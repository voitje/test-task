<template>
  <div class="authorization">
    <div class="authorization--form">
      <label class="authorization--name">
        <input
          v-model="name"
          class="authorization--input"
          placeholder="Enter name..."
        />
      </label>
      <label class="authorization--password">
        <input
            v-model="password"
            type="password"
            class="authorization--input"
            placeholder="Enter password..."
        />
      </label>
      <button class="authorization--button" @click="handleClick">Sign in</button>
    </div>
  </div>
</template>

<script>
import Api from "@/services/api";
import LocaleStorage from "@/services/storage/storage";

export default  {
  name: 'Authorization',
  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    handleClick() {
      const form = {
        name: this.name,
        password: this.password,
      }
      Api.login(form).then(res => {
        LocaleStorage.setItem('token', res.data)})
      .catch(e => {
        console.error(e)})
    }
  }
}
</script>

<style>
.authorization {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.authorization--form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: #ffd5c2;
  box-shadow: 0 0 20px rgba(0,0,0,0.3);
}
.authorization--input, .authorization--password {
  margin-bottom: 10px;
}
</style>