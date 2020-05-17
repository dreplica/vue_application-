<template>
  <div class='buttons'>
    <div class="numbers">
      <button v-for="(num,key) in show_numbers" @click="pressed(num)" :key="key">{{num}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Buttons",
  data() {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,"+", "-", "/", "*", ".","C"]
    };
  },
  methods: {
    pressed(arg) {
      console.log(arg);
      this.pressed_button = arg;
      this.$emit("send_values", arg);
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

<style scoped>

  .buttons{
    width:340px;
    margin:auto;
    height:auto;
    display:column;

    }

  .numbers,.operators{
      width:100%;
      display:flex;
      flex-wrap:wrap;
      justify-content:center;
    }
  button{
    width:100px;
    font-size:20px;
    font-weight:bolder;
    border:1px solid whitesmoke;
    height:100px;
    }
  button:hover{
      background:rgba(0,0,0,0.4);
      border:2px solid black;
      color:rgb(255, 255, 255);
    }

  button:active{
    background:linear-gradient(to right,rgb(225, 236, 163),rgb(153, 199, 230));
    }

</style>