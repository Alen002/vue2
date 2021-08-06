<template>
  <div class="buttons">
    <!-- trigger the commit mutation -->
    <button @click="$store.dispatch('decreaseCounter')">-</button>
    <!-- trigger the dispatch action -->
    <button @click="$store.dispatch('increaseCounter')">+</button>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
