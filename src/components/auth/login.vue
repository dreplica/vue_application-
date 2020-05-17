<template>
  <div class="form">
    <p>Please provide your login details</p>
    <p v-show='get_error.length' class='error'>{{get_error}}</p>
    <form @submit.prevent="signin_user()">
      <label for="emial">Email</label
      ><input type="email" v-model="email" required />
      <label for="password">Password</label
      ><input type="password" v-model="password" required />
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
      error:"",
    };
  },
  methods: {
    async signin_user() {
      try {
        await Firebase.auth
          .signInWithEmailAndPassword(this.email, this.password)
          .then(async (response) => {
            const result = await Firebase.database
              .collection("users")
              .where("email", "==", this.email)
              .get();
            await result.forEach((user) =>
              this.$store.commit("change_user", {
                name: user.data().name,
                id: response.user.uid,
              })
            );
          });
      } catch (error) {
        // console.log(error.message);
        this.error = error.message
      }
    },
  },
  computed:{
    get_error(){
      return this.error
      }
    }
};
</script>

<style>
.error{
  background:red;
  }

.form {
  width: 340px;
  text-align: center;
}

form {
  width: 340px;
  display: flex;
  margin: auto;
  min-height: 230px;
  font-weight: bold;
  font-size: 20px;
  flex-direction: column;
}

input {
  height: 40px;
  margin-bottom: 10px;
  padding:5px 15px;
  font-size: 20px;
}

button {
  height: 50px;
  margin-bottom: 10px;
}
</style>
