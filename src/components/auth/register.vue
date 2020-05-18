<template>
  <div>
    <div v-if="message.length">
      <p>{{ get_message }}</p>
    </div>
    <p>Please Register below</p>
    <p v-show="get_error.length" class="error">{{ get_error }}</p>
    <form @submit.prevent="signup_user()">
      <label for="name">Name</label
      ><input type="text" v-model="name" required />
      <label for="emial">Email</label
      ><input type="email" v-model="email" required />
      <label for="password">Password</label
      ><input type="password" v-model="password" required />
      <button>Register</button>
    </form>
    <p>already have an account?<a href @click.prevent="login_">Login</a></p>
  </div>
</template>

<script>
import * as Firebase from "../../config/firebase";
export default {
  name: "Registration",
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
      email: "",
      password: "",
      name: "",
      error: "",
      message: "",
    };
  },
  methods: {
    signup_user() {
      try {
        Firebase.auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then((result) => {
            Firebase.users.doc(`${result.user.uid}`).set({
              name: this.name,
              email: this.email,
              id: result.user.uid,
            });
            this.$store.commit("change_user", {
              name: this.name,
              id: result.user.uid,
            });
            Firebase.auth.currentUser.sendEmailVerification(
              Firebase.actionCodeSettings
            );
            this.message = "please check your email for verification";
          });
      } catch (error) {
        this.error = error.message;
      }
    },
    login_() {
      this.$router.push("/login");
    },
  },
  computed: {
    get_error() {
      return this.error;
    },
    get_message() {
      return this.message;
    },
  },
};
</script>

<style></style>
