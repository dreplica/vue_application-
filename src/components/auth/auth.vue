<template>
  <div class="auth">
    <button @click.prevent="gotologin()">Login</button>
    <button @click.prevent="gotoregister()">Register</button>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      toggle: "0",
    };
  },
  methods: {
    gotologin() {
      this.$router.push("/login");
    },
    gotoregister() {
      this.$router.push("/register");
    },
  },
  computed: {
    show_login() {
      return this.toggle;
    },
  },
};
</script>

<style>
.auth {
  width: 340px;
  margin: auto;
}

.display-form {
  width: 340px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

select {
  width: 340px;
  height: 50px;
  text-align: center;
}
</style>
