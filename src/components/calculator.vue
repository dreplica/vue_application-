<template>
  <div>
    <Input :inputed="show_input" />
    {{show_input}}
    <Buttons @send_values="get_values"></Buttons>
    <button>Run</button>
  </div>
</template>

<script>
import Buttons from "./Button";
import Input from "./Input";

export default {
  name: "calculator",
  components: {
    Buttons,
    Input
  },
  data() {
    return {
      input: "500",
      add: "+",
      minus: "-",
      divide: "/",
      multiply: "*"
    };
  },
  methods: {
    get_values(arg) {
      this.input += "" + arg;
      console.log(this.input);
    }
  },
  computed: {
    show_input() {
      return this.input;
    }
  }
};
</script>

<style  scoped>
</style>