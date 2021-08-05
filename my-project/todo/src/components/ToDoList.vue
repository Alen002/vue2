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
      <div class="todo-title">{{ todo.title }}</div>
      <div class="remove-item" @click="removeTodo(index)">&times</div>
      <div class="edit-item" @click="editTodo(todo)">edit</div>
      <!-- @dblclick -->

      <input
        type="text"
        class="show-item"
        :style="{ backgroundColor: color }"
      />
      <!-- hidden text field for editing -->
      <div>
        <input
          type="text"
          v-if="todo.editing"
          class="todo-item-edit"
          v-model="todo.title"
          @keyup.enter="editTodoChange(todo)"
        />
        <!--  <h3 v-else>TEST SHOW RESULT</h3> -->
      </div>
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
        {
          id: 1,
          title: "Learning basic vue in progress",
          completed: false,
          editing: false
        },
        {
          id: 2,
          title: "basic objects overview",
          completed: false,
          editing: false
        }
      ],
      color: "yellow"
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
        completed: false,
        editing: false
      });
      this.newTodo = ""; // reset input after user entered task
    },
    removeTodo(index) {
      this.todos.splice(index, 1); // array.splice(i, 1) -> remove one item
    },
    editTodo(todo) {
      // toggle edit input field with v-if="todo.editing"
      console.log("edit Todo");
      if (todo.editing == true) {
        todo.editing = false;
      } else {
        todo.editing = true;
      }
    },
    editTodoChange(todo) {
      console.log("title changed");
      title: this.todo.title;
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
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  text-align: right;
  padding: 5px 10px 5px 10px;
  margin-top: 10px;
  background-color: lightgrey;
}

.todo-title {
  text-align: left;
}
.remove-item:hover {
  background-color: red;
}

.edit-item:hover {
  background-color: green;
}

.show-item {
  display: none;
}

.todo-item-edit {
  text-align: left;
}
</style>
