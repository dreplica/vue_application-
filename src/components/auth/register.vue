<template>
  <div>
    <form @submit.prevent="signup_user()">
      <!-- add name, location, when the 
          result from registering comes back, 
          send the collection(user details) -->
      <label for="name"
        >Name:<input type="text" v-model="name" required
      /></label>
      <label for="emial"
        >Email:<input type="email" v-model="email" required
      /></label>
      <label for="password"
        >Password<input type="password" v-model="password" required
      /></label>
      <button>Register</button>
    </form>
  </div>
</template>

<script>
import * as Firebase from "../../config/firebase";
export default {
  name: "Registration",
  data() {
    return {
      email: "",
      password: "",
      name: "",
    };
  },
  methods: {
    signup_user() {
      Firebase.auth
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((result) => {
          console.log(result);
          Firebase.users.doc(`${result.user.uid}`).set({
            name: this.name,
            email: this.email,
            id: result.user.uid,
          });
          this.$emit("update_user", this.name);
        });
    },
  },
};
</script>


<style >

</style>
