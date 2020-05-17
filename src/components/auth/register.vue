<template>
  <div>
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
      error:"",
    };
  },
  methods: {
    signup_user() {
        Firebase.auth
          .createUserWithEmailAndPassword(this.email, this.password)
          .then(function(result){
            Firebase.users.doc(`${result.user.uid}`).set({
              name: this.name,
              email: this.email,
              id: result.user.uid,
            });
            this.$store.commit("change_user", {
              name: this.name,
              id: result.user.uid,
            });
          }).catch(error=>{
        console.log("hello",error)
        this.error = "please check your entry";
      })
    },
  },
  computed:{
     get_error(){
      return this.error
      }
    }
  
};
</script>

<style></style>
