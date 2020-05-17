<template>
  <div>
    <Input :inputed="show_input" />
    <button @click="calculate" class="run">Run</button>
    <Buttons @send_values="get_values"></Buttons>
  </div>
</template>

<script>
import Buttons from "./Button";
import Input from "./Input";
import validate_run from "../logic/validate_run";
import filter from "../logic/filterentry";

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
      this.input = filter(this.input, arg);
    },
    calculate() {
      this.input = validate_run(this.input)
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
.run {
  width: 310px;
    font-size:20px;
    font-weight:bolder;
    border:1px solid whitesmoke;
    height:50px;
    }
  .run:hover{
      background:rgba(0,0,0,0.4);
      border:2px solid black;
      color:rgb(255, 255, 255);
    }

  .run:active{
    background:linear-gradient(to right,rgb(225, 236, 163),rgb(153, 199, 230));
    }
</style>