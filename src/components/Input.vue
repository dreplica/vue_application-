<template>
  <div class="display">{{show_inputed}}</div>
</template>

<script>
export default {
  name: "Input",
  props: {
    inputed: { type: String}
  },
  methods: {},
  computed: {
    show_inputed() {
      return this.inputed;
    }
  }
};
</script>

<style scoped>
.display {
  width: 400px;
  height: 50px;
  border: 2px solid black;
}
</style>