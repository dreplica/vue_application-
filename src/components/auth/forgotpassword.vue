<template>
  <form @submit.prevent="change_password">
    <input v-model="first_new" type="password" placeholder="new password" />
    <input
      v-model="last_new"
      type="password"
      placeholder="new password again"
    />
    <button>Change password</button>
  </form>
</template>

<script>
export default {
  name: "forgotpassword",
  data() {
    return {
      first_new: "",
      last_new: "",
    };
  },
  methods: {
    change_password() {
      //on success route to login
    },
  },
};
</script>

<style></style>
