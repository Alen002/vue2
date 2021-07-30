new Vue({
  el: "#App",
  data: {
    test: "Vue is working",
    customer1total: 35.43,
    number: 54,
    counter: 0,
    message: 0,
    result: ""
  },
  filters: {
    tip15(value) {
      return (value * 0.15).toFixed(2);
    },
    tip20(value) {
      return (value * 0.2).toFixed(2);
    },
    tip25(value) {
      return (value * 0.25).toFixed(2);
    },
    multiply(value) {
      return value * 100;
    }
  },
  watch: {
    counter() {
      return (this.result = `watching at counter ${this.counter}`);
    }
  }
});
