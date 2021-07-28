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
    ratings: [
      { title: `White Chicks`, rating: 82 },
      { title: `Grey's Anatomy`, rating: 98 },
      { title: `Prison Break`, rating: 98 },
      { title: `How I Met Your Mother`, rating: 94 },
      { title: `Supernatural`, rating: 95 },
      { title: `Breaking Bad`, rating: 97 },
      { title: `The Vampire Diaries`, rating: 91 },
      { title: `The Walking Dead`, rating: 98 },
      { title: `Pretty Little Liars`, rating: 96 },
      { title: `Once Upon a Time`, rating: 98 },
      { title: `Sherlock`, rating: 95 },
      { title: `Death Note`, rating: 77 },
      { title: `Naruto`, rating: 88 },
      { title: `Arrow`, rating: 96 },
      { title: `Black Mirror`, rating: 80 },
      { title: `The Originals`, rating: 74 },
      { title: `The 100`, rating: 97 },
      { title: `Masha and the Bear`, rating: 81 },
      { title: `Hunter X Hunter`, rating: 57 },
      { title: `Marvel's Luke Cage`, rating: 95 },
      { title: `Marvel's Iron Fist`, rating: 98 },
    ],
    userData: "",
    counting: 0,
  },
  computed: {
    greeting() {
      return `This is a test, ${this.userData}`;
    },
    countupComp() {
      // another view of the same data
      return this.counting + 1;
    },
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
    ascending() {
      this.ratings.sort((a, b) => {
        a.rating > b.rating;
      });
    },
    countup() {
      this.counting++;
    },
  },
});
