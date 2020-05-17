<template>
  <div>
    <Input :inputed="show_input" />
    {{show_input}}
    <Buttons @send_values="get_values"></Buttons>
    <button @click="calculate">Run</button>
  </div>
</template>

<script>
import Buttons from "./Button";
import Input from "./Input";
import calculate from "../logic/calculate";

export default {
  name: "calculator",
  components: {
    Buttons,
    Input
  },
  data() {
    return {
      input: "0"
    };
  },
  methods: {
    get_values(arg) {
      this.input += "" + arg;
      console.log(this.input);
    },
    calculate() {
      this.input = calculate(this.input);
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