import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  // Vuex Store constructor, Store begins with capital S
  state: {
    // = data
    products: [] // products array to make it available to ALL components
  },
  getters: { productsCount() {} }, // getters are equivalent to computed properties
  actions: {
    // same as methods
    // with actions you never update state. This is done with mutations

    fetchProducts() {
      // make the call
      // run setProducts mutation
    }
  },
  mutations: {
    setProducts(state, products) {
      // update products and the state
      state.products = products;
    }
  }
});
