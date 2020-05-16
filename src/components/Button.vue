<template>
  <div>
    <div class="numbers">
      <button v-for="(num,key) in show_numbers" :key="key">{{num}}</button>
    </div>
    <div class="operators">
      <button v-for="(logic,key) in show_operators" :key="key">{{logic}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      operations: ["+", "-", "/", "*"],
      pressed_button:"",
    };
  },
  methods:{
      send_value(){
        this.$emit('send_values',)
          },
      
  },
  computed: {
    show_numbers() {
      return this.numbers;
    },
    show_operators() {
      return this.operations;
    }
  }
};
</script>

<style>
</style>