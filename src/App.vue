<template>
  <div id="app">
    <h3>Hello {{ get_user }}</h3>
    <authorize :class="!get_user ? 'show' : 'hide'" />
    <calculator
      msg="Welcome to Your Vue.js App"
      :class="get_user ? 'show' : 'hide'"
    />
  </div>
</template>

<script>
import Calculator from "./components/calculator.vue";
import auth from "./components/auth/auth";

export default {
  name: "App",
  components: {
    Calculator,
    authorize: auth,
  },

  data() {
    return{}
  },

  computed: {
    get_user() {
      return this.$store.state.current_user;
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
  margin:auto;
}

.hide {
  animation: hidden 1s linear;
  position: absolute;
  display: none;
  z-index: -1;
}

.show {
  animation: display 2s linear;
  position: relative;
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
