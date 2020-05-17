<template>
  <div id="app">
    <authorize :class="!showAuth && 'hide'"/>
    <!-- {{ get_user }} -->
    <calculator msg="Welcome to Your Vue.js App" :class='showAuth && "hide"'/>
  </div>
</template>

<script>
import Calculator from "./components/calculator.vue";
import auth from "./components/auth/auth";
import * as Firebase from "./config/firebase";

export default {
  name: "App",
  components: {
    Calculator,
    authorize: auth,
  },

  data() {
    return {
      activeUser: Firebase.auth.currentUser,
      showAuth:false,
    };
  },

  method: {},

  computed: {
    get_user(){
      return this.activeUser
      }
  },
};
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

.hide{
  display:none;
  }
</style>
