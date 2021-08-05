import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { random } from "lodash";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { counter: 0 },
  mutations: {
    increaseCounter(state, randomNumber) {
      state.counter++;
      console.log("random number:", randomNumber);
      state.counter += randomNumber;
    },
    decreaseCounter(state) {
      state.counter--;
    }
  },
  actions: {
    increaseCounter({ commit }) {
      /*       console.log("increase counter (action)");
       */ axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then(res => {
        /*         console.log("res:", res);
         */
        commit("increaseCounter", res.data);
      });
    }
  },
  modules: {}
});
