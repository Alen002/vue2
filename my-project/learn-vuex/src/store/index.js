import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { counter: 0 },
  mutations: {
    increaseCounter(state) {
      state.counter++;
    },
    decreaseCounter(state) {
      state.counter--;
    }
  },
  actions: {},
  modules: {}
});
