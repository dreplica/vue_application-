<template>
  <div class="display">
      <p>{{show_inputed}}</p></div>
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
  width: 340px;
  margin:auto;
  display:flex;
  align-items: center;
  font-size:30px;
  padding-left:10px;
  height: 50px;
  border: 2px solid black;
}
</style>