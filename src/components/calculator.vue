<template>
  <div>calculator</div>
  <Input></Input>
  <Buttons></Buttons>
</template>

<script>

import Buttons from './Button';
import Input from './input';

export default {
  name: "calculator",
  components:{
      Buttons,Input
  },
  data() {
    return {
      input: "",
      add: "+",
      minus: "-",
      divide: "/",
      multiply: "*"
    };
  },
  methods: {},
  computed: {}
};
</script>

<style  scoped>
</style>