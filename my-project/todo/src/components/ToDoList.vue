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
      @keyup.enter="addTodo"
    />
    <!-- <button @click="addTask">Add Task</button> -->

    <!-- Start of Show Tasks -->
    result: {{ newTodo }}
    <div v-for="(todo, index) in todos" :key="todo.id" class="todo-item">
      <div>{{ todo.title }}</div>
      <div class="remove-item" @click="removeTodo(index)">&times</div>
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
    addTodo() {
      let id = this.todos.length + 1;
      if (this.newTodo.trim() == 0) {
        // trim() -> remove trailing spaces
        return;
      }
      this.todos.push({
        id: this.todos.length + 1,
        title: this.newTodo,
        completed: false
      });
      this.newTodo = ""; // reset input after user entered task
    },
    removeTodo(index) {
      alert(index);
      this.todos.splice(index, 1); // array.splice(i, 1)
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
.todo-item {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 5px 10px 5px 10px;

  margin-top: 10px;
  background-color: lightgrey;
}

.remove-item:hover {
  background-color: red;
}
</style>
