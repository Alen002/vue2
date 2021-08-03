<template>
  <div id="app" class="container">
    <img src="./assets/logo.png" class="logo" />
    <ToDoList />
    <!-- <HelloWorld /> -->
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import ToDoList from "./components/ToDoList";

export default {
  name: "App",
  components: {
    HelloWorld,
    ToDoList
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

.container {
  max-width: 600px;
  margin: 0 auto;
  background: lightblue;
}

.logo {
  width: 50px;
  height: 50px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
