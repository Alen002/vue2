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
  },
});
