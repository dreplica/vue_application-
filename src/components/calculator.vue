<template>
  <div>
  <Input />
  <Buttons></Buttons>
  </div>
</template>

<script>

import Buttons from './Button';
import Input from './Input';

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