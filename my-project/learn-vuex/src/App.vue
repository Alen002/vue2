<template>
  <div id="app">
    <div class="counter">
      {{ counter }}
    </div>
    <div class="buttons">
      <button @click="decreaseCounter">-</button>
      <button @click="increaseCounter">+</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      counter: 0
    };
  },

  methods: {
    increaseCounter() {
      this.counter++;
    },
    decreaseCounter() {
      this.counter--;
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
div {
  background-color: lightblue;
  padding: 10px 40px 10px 40px;
}
button {
  width: 40px;
  height: 40px;
  font-size: 20px;
}
.counter {
  font-size: 20px;
}
</style>
