<template>
  <div id="app">
    <div class="counter" :style="{ color: $store.state.colorCode }">
      {{ $store.state.counter }}
    </div>
    <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2 </sup> = {{ $store.getters.counterSquare }}
    </div>
    <div class="buttons">
      <!-- trigger the commit mutation -->
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <!-- trigger the dispatch action -->
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
    <!-- Input field to enter a color -->
    <input placeholder="Enter color code" type="text" v-model="colorCode" />

    <!-- we do not use v-model here like v-model="$store.state.colorCode"
         we will instead use a computed property named colorCode -->
  </div>
</template>

<script>
import store from "./store/index";
export default {
  name: "App",
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(newValue) {
        this.$store.commit("setColorCode", newValue); // pass along the mutation and the payload
      }
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
