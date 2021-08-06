<template>
  <div>
    <!-- Input field to enter a color -->
    <input placeholder="Enter color code" type="text" v-model="colorCode" />

    <!-- we do not use v-model here like v-model="$store.state.colorCode"
         we will instead use a computed property named colorCode -->
  </div>
</template>

<script>
export default {
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

<style scoped></style>
