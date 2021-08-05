<template>
  <div>
    <h3>Product List</h3>
    <ul>
      <li v-for="product in products">
        {{ product.title }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import shop from "@/api/shop";
import store from "@/store/index";
export default {
  computed: {
    products() {
      return store.state.products;
    }
  }, // return products from the state
  /* data() {
    return { products: [] };
  }, */
  created() {
    // update the state means update mutation, here commit a mutation
    shop.getProducts(products => {
      store.commit("setProducts", products);
    });
  } // hook for initialization
};
</script>

<style scoped></style>
