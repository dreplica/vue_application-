<template>
  <form @submit.prevent="send_link">
    <p v-show="active">Please check your email for link to reset</p>
    <input v-model="email" type="email" placeholder="enter email address" />
    <button>Get reset link</button>
  </form>
</template>

<script>
export default {
  name: "forgotpassword",
  data() {
    return {
      active: false,
      email:""
    };
  },
  methods: {
    send_link() {
      //on sending link, change active to true
    },
  },
};
</script>

<style></style>
