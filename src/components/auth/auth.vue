<template>
  <div class="auth">
    <login v-show="set_toggle" @updating_user='pass_user'/>
    <register v-show="!set_toggle" />
    <button v-show="set_toggle" :click="change_toggle()">Register here</button>
    <button v-show="!set_toggle" :click="change_toggle()">Login here</button>
  </div>
</template>

<script>
import login from "./login.vue";
import register from "./register.vue";

export default {
  components: {
    login: login,
    register: register,
  },
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    change_toggle() {
      console.log("ki");
      if (this.togle) {
        this.toggle = false;
      } else {
        this.toggle = true;
      }
    },
    pass_user(arg){
        console.log("is passing",arg)
        this.$emit('showUser',arg)
        }
  },
  computed: {
    set_toggle() {
      return this.toggle;
    },
  },
};
</script>

<style></style>
