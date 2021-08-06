import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { random } from "lodash";

Vue.use(Vuex); // provides the $store to components

export default new Vuex.Store({
  state: { counter: 0, colorCode: "blue" },
  mutations: {
    // randomNumber obtained payload from commit("increaseCounter", res.data)
    increaseCounter(state, randomNumber) {
      /* state.counter++; */
      console.log("random number:", randomNumber);
      state.counter += randomNumber;
    },
    decreaseCounter(state, randomNumber) {
      /* state.counter--; */
      state.counter -= randomNumber;
    },
    setColorCode(state, newValue) {
      state.colorCode = newValue;
    } // newValue -> the payload we are sending from computed colorCode
  },
  actions: {
    // for API calls, for asynchronous code, data cannot be changed with actions
    increaseCounter({ commit }) {
      /* console.log("increase counter (action)"); */
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then(res => {
        /* console.log("res:", res); */
        commit("increaseCounter", res.data); // commit API data res.Data as a payload to increaseCounter mutation
        // send payload to mutation
      });
    },
    decreaseCounter({ commit }) {
      axios(
        "https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new"
      ).then(res => {
        commit("decreaseCounter", res.data);
      });
    }
  },
  getters: {
    counterSquare(state) {
      return state.counter * state.counter;
    }
  }
});
