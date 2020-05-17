<template>
  <div class="auth">
    <div class="display-form">
      <login v-show="show_login === '1'" />
      <register v-show="show_login === '0'" />
    </div>
    <select v-model="toggle">
      <option value="0">Register</option>
      <option value="1">Login</option>
    </select>
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
      toggle: "0",
    };
  },
  methods: {
    change(arg) {
      return arg ? false : true;
    },
    toggle_bar(arg) {
      this.toggle = this.change(arg);
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
