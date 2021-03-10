<template>
  <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  height: 100%;
}

input {
  border: none;
  border-bottom: 1px solid #a35437;
  background-color: #ffd5c2;
  color: chocolate;
}
input:focus {
  outline: none;
  border-bottom: 1px solid #a35437;
}
input::placeholder {
  color: chocolate;
}

button {
  background-color: #d06943;
  border: none;
  color: aquamarine;
  width: 100px;
  height: 25px;
}

button:hover {
  background-color: #a35437;
}

.router-link-active {
  text-decoration: none;
  color: brown;
}
.router-link-active:hover {
  border-bottom: 2px solid brown;
}

.mts-logo, .beeline-logo, .megafon-logo {
  width: 150px;
  height: 150px;
  border: 1px solid white;
}

.mts-logo:hover, .beeline-logo:hover, .megafon-logo:hover {
  border: 1px solid brown;
}

.beeline-logo, .megafon-logo {
  margin-left: 10px;
}

</style>
