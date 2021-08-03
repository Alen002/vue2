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
    <button @click="addTask">Add Task</button>

    <!-- Start of Show Tasks -->
    result: {{ newTodo }}
    <div v-for="todo in todos" :key="todo.id" class="todo-item">
      {{ todo.title }}
    </div>
    <!-- End of Show Tasks -->
  </div>
</template>

<script>
export default {
  name: "todo-list",
  data() {
    return {
      rsp: "Listings",
      newTodo: "",
      todos: [
        { id: 1, title: "Learning basic vue in progress", completed: false },
        { id: 2, title: "basic objects overview", completed: false }
      ]
    };
  },
  methods: {
    addTask() {
      let title = this.newTodo;
      let id = this.todos.length + 1;
      console.log("result is  id:", id, " title: ", title);
      this.todos.push({ id, title });
    }
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
