<template>
  <form @submit.prevent="send_link">
    <p v-show="errormsg.length">{{ errormsg }}</p>
    <input v-model="email" type="email" placeholder="enter email address" />
    <button>Get reset link</button>
  </form>
</template>

<script>
import * as Firebase from "../../config/firebase";

export default {
  name: "forgotpassword",
  beforeCreate() {
    try {
      if (Firebase.auth.currentUser.emailVerified) {
        this.$router.push("/");
      }
    } catch (error) {
      console.log("");
    }
  },
  data() {
    return {
      active: false,
      email: "",
      message: "",
    };
  },
  methods: {
    async send_link() {
      try {
        await Firebase.auth.sendPasswordResetEmail(
          this.email,
          Firebase.actionCodeSettings
        );
        this.message = "check your email for reset link or your spam box";
      } catch (error) {
        this.message = error.message;
      }
    },
  },
  computed: {
    errormsg() {
      return this.message;
    },
  },
};
</script>

<style></style>
