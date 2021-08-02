Vue.component("product", {
  props: ["item", "url"],
  template: "<p>{{item}}</p>",
  // <img src={{url}}> not working
});

new Vue({
  el: "#App",
  data: {
    test: "Vue is working",
    items: [
      {
        item: "backpack",
        url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg",
      },
      {
        item: "tshirt",
        url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/tshirt.jpg",
      },
      {
        item: "sweatshirt",
        url: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/sweatshirt.jpg",
      },
    ],
  },
});
