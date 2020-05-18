<template>
  <div id="app">
    <div class="header">
      <h1>Rock your calculator app</h1>
      <button v-show="live === true" @click="signout" class="logout">
        logout
      </button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import * as Firebase from "./config/firebase";

export default {
  name: "App",
  beforeCreate() {
    try {
      Firebase.auth.onAuthStateChanged((user) => {
        if (user.emailVerified) {
          this.$router.push("/calculator");
        }
      });
    } catch (error) {
      this.$router.push("/login");
    }
  },

  updated() {
    this.live_session = this.$store.state.live;
  },

  data() {
    return {
      live_session: false,
    };
  },

  methods: {
    async signout() {
      await Firebase.auth.signOut();
      await this.$router.push("/login");
      this.$store.commit("kill");
      this.live_session = false;
    },
  },

  computed: {
    get_user() {
      return this.$store.state.current_user;
    },
    live() {
      return this.live_session;
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
  margin-bottom: 10px;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.logout {
  border: 1px solid white;
  background: transparent;
  color: white;
  font-weight: bolder;
}

.logout:hover {
  transform: scale(1.2);
  cursor: pointer;
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
