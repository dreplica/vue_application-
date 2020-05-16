<template>
  <div>
    <div class="numbers">
      <button v-for="(num,key) in show_numbers" @click="pressed(num)" :key="key">{{num}}</button>
    </div>
    <div class="operators">
      <button v-for="(logic,key) in show_operators" @click="pressed(logic)" :key="key">{{logic}}</button>
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
      remove_item: "<",
      pressed_button: ""
    };
  },
  methods: {
    pressed(arg) {
      console.log(arg);
      this.pressed_button = arg;
      this.$emit("send_values", arg);
    },
    send_value() {},

    remove_value() {
      //deletes tyhe last element
      this.$emit("remove_values");
    }
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