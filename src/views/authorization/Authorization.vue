<template>
  <div class="authorization">
    <div class="authorization--form">
      <label class="authorization--name">
        Name \ Email:
        <input v-model="name" class="authorization--input"/>
      </label>
      <label class="authorization--password">
        Password:
        <input v-model="password" type="password" class="authorization--input"/>
      </label>
      <button @click="handleClick">Sign in</button>
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
}
.authorization--form {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.authorization--input, .authorization--password {
  margin-bottom: 10px;
}
</style>