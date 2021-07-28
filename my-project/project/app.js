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
    website: "https://duckduckgo.com",
    available: false,
    newName: "",
    names: ["Bill", "Sarah"],
    formName: "",
    formEmail: "",
    formCaps: "",
    response: "",
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
    addName() {
      this.names.push(this.newName);
      this.newName = "";
    },
    submitForm() {
      axios
        .post("//jsonplaceholder.typicode.com/posts", {
          name: this.formName,
          email: this.formEmail,
        })
        .then((response) => {
          this.response = JSON.stringify(response, null, 2);
          console.log(response);
        })
        .catch((error) => {
          this.response = "Error: " + error.response.status;
        });
    },
  },
});
