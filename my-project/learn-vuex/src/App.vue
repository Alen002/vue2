<template>
  <div id="app">
    <!-- In Counter.vue <div class="counter" :style="{ color: $store.state.colorCode }">
      {{ $store.state.counter }}
    </div> -->
    <Counter />
    <!-- component -->
    <!-- <div class="counter-squared">
      {{ $store.state.counter }}
      <sup>2 </sup> = {{ $store.getters.counterSquare }}
    </div> -->
    <CounterSquare />
    <Buttons />
    <ColorCode />
  </div>
</template>

<script>
import store from "./store/index";
/* import Counter from "./components/Counter.vue"; */

export default {
  name: "App",
  components: {
    Counter: require("@/components/Counter.vue").default,
    CounterSquare: require("@/components/CounterSquare").default,
    Buttons: require("@/components/Buttons").default,
    ColorCode: require("@/components/ColorCode").default
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
