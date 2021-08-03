<template>
  <div class="todo">
    <h3>
      {{ rsp }}
    </h3>
    <input
      type="text"
      class="todo-input"
      v-model="newTodo"
      placeholder="Any tasks to do?"
    />
    result: {{ newTodo }}
  </div>
</template>

<script>
export default {
  name: "todo-list",
  data() {
    return {
      rsp: "Listings",
      newTodo: ""
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.todo-input {
  padding: 5px 10px 2px 10px;
  background-color: white;
  border-radius: 5px;
}
</style>
