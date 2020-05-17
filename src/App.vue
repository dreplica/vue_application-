<template>
  <div id="app">
    <p>Hello {{ get_user }}</p>
    <authorize :class="!get_auth ? 'show' : 'hide'" @showUser="update" />
    <!-- {{ get_user }} -->
    <calculator
      msg="Welcome to Your Vue.js App"
      :class="get_auth ? 'show' : 'hide'"
    />
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
      showAuth: false,
      user: "Guest",
    };
  },

  method: {
    update(arg) {
      console.log("something entere");
      this.user = arg;
      this.showAuth = true;
    },
  },

  computed: {
    get_user() {
      return this.user;
    },
    get_auth() {
      return this.showAuth;
    },
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

.hide {
  animation: hidden 1s linear;
  position: absolute;
  display: none;
  z-index: -1;
}

.show {
  animation: display 2s linear;
  position: absolute;
  z-index: 1;
}

@keyframes display {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes hidden {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
