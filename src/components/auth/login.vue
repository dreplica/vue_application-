<template>
  <div>
    <form @submit.prevent="signin_user()">
      <!-- add name, location, when the 
          result from registering comes back, 
          send the collection(user details) -->
      <label for="emial"
        >Email:<input type="email" v-model="email" required
      /></label>
      <label for="password"
        >Password<input type="password" v-model="password" required
      /></label>
      <button>Login</button>
    </form>
  </div>
</template>

<script>
import * as Firebase from "../../config/firebase";
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signin_user() {
      Firebase.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          console.log(result);
          this.$emit("user_created", result);
        });
    },
  },
};
</script>

<style></style>
