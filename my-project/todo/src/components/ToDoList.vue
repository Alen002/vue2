<template>
  <div class="todo">
    <h3>
      {{ rsp }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "todo-list",
  data() {
    return {
      rsp: "this is the todo list"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
