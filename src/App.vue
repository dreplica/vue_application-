<template>
  <div id="app">
    <h1>Rock your calculator app</h1>
    <button @click="signout">logout</button>
    <router-view></router-view>
  </div>
</template>

<script>
import * as Firebase from "./config/firebase";
// import auth from "./components/auth/auth";

export default {
  name: "App",
  components: {
    // Calculator,
    // authorize: auth,
  },
  beforeCreate() {
    console.log("hello");
    Firebase.auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user);
        this.$router.push("/calculator");
        // update the store here to do protected route.
      } else {
        console.log("badoo");
        //update the store here to do protected route
      }
    });
  },

  data() {
    return {};
  },

  methods: {
    async signout() {
      await Firebase.auth.signOut();
      await this.$router.push("/");
    },
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
  margin: auto;
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
