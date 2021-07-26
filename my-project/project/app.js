new Vue({
  el: "#App",
  data: {
    title: "hello world!",
    // v-if
    items: [1, 2, 3],
    message: "Type something in",
    // v-model
    checkedNames: [],
    // v-bind
    pie: "",
    activeClass: "active",
    // v-for objects
    jokes: {
      question: "What was the question",
      answer: `I do not know`,
      response: "silence",
    },
    counter: 0,
    num1: 0,
    num2: 0,
    text: "",
    texting: "",
    x: 0,
    y: 0,
    counter: 0,
  },
  methods: {
    xCoordinate(e) {
      this.x = e.clientX;
    },
    increment() {
      this.counter++;
    },
    decrement() {
      this.counter--;
    },
  },
});
