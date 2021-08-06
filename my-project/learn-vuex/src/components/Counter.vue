<template>
  <div class="counter" :style="{ color: $store.state.colorCode }">
    {{ $store.state.counter }}
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
