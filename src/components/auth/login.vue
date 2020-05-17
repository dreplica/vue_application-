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
    check(arg) {
      console.log("tring to check", arg);
      this.$emit("updating_user", arg);
    },
    async signin_user() {
      let user = "";
      await Firebase.auth
        .signInWithEmailAndPassword(this.email, this.password)
        .then(async () => {
          const result = await Firebase.database
            .collection("users")
            .where("email", "==", this.email)
            .get();
          await result.forEach((x) => (user = x.data().name));
        });
      await this.$store.commit("change_user", user);
    },
  },
};
</script>

<style></style>
