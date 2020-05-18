import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";
// import VueRouter from "vue-router";
import router from "./Routing.js";

Vue.config.productionTip = false;

// const router = new VueRouter({ Routes });

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
