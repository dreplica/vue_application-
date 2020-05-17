<template>
  <div class="auth">
      <login />
      <register />
  </div>
</template>

<script>
import login from './login.vue'
import register from './register.vue'


export default {
components:{
    login:login,
    register:register
    }
}
</script>

<style>

</style>