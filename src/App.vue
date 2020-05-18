<template>
  <div id="app">
    <div class="header">
      <h1>Rock your calculator app</h1>
      <button @click="signout">logout</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import * as Firebase from "./config/firebase";

export default {
  name: "App",
  beforeCreate() {
    console.log("hello");
    Firebase.auth.onAuthStateChanged((user) => {
      if (user.emailVerified) {
        console.log(user);
        this.$router.push("/calculator");
        // update the store here to do protected route.
      } else {
        console.log("badoo");
        this.$router.push("/login");
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

.header {
  width: 100%;
  background: black;
  height: auto;
  padding: 10px 0px;
  color: white;
  margin-bottom:10px;

  display: flex;
  justify-content: space-around;
  align-items:center;
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
