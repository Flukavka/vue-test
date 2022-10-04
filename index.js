const RootComponent = {
  data() {
    return {
      likes: 0,
    };
  },
};
const app = Vue.createApp(RootComponent);
const vm = app.mount("#app");
