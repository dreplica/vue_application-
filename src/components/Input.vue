<template>
  <div class="display">{{show_inputed}}</div>
</template>

<script>
export default {
  name: "Input",
  props: {
    inputed: { type: Number, default: 10 }
  },
  data() {
    return {
      content: `${this.inputed}`
    };
  },
  methods: {},
  computed: {
    show_inputed() {
      return this.content;
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