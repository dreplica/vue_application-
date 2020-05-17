<template>
  <div id="app">
    <login />
    <calculator msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Calculator from './components/calculator.vue'
import login from './components/auth/login'
export default {
  name: 'App',
  components: {
    Calculator,
    login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
