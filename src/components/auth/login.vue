<template>
  <div class="form">
    <p>Please provide your login details</p>
    <h3 v-show="get_error.length" class="error">{{ get_error }}</h3>
    <form @submit.prevent="signin_user()">
      <label for="emial">Email</label>
      <input type="email" v-model="email" required />
      <label for="password">Password</label>
      <input type="password" v-model="password" required />
      <button>Login</button>
    </form>
    <p>
      did you
      <a href @click.prevent="route_forget">forgot password?</a>
    </p>
  </div>
</template>

<script>
import * as Firebase from "../../config/firebase";
export default {
  name: "Login",
  beforeMount() {
    if (Firebase.auth.currentUser.emailVerified) {
      this.$router.push("/");
    }
  },
  data() {
    return {
      email: "",
      password: "",
      error: "",
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
            await result.forEach((user) => {
              this.$store.commit("change_user", {
                name: user.data().name,
                id: response.user.uid,
              });
            });
          });
        const user = await Firebase.auth.currentUser;
        if (user.emailVerified) {
          this.$router.push("/calculator");
        } else {
          this.error = "user is not verified yet, please check your email";
        }
      } catch (error) {
        this.error = "please check your input";
      }
    },
    route_forget() {
      this.$router.push("/fgt-email");
    },
  },
  computed: {
    get_error() {
      return this.error;
    },
  },
};
</script>

<style>
.form {
  width: 340px;
  margin: auto;
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
  padding: 5px 15px;
  font-size: 20px;
}

button {
  height: 50px;
  margin-bottom: 10px;
}
</style>
