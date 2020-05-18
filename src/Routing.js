import Vue from "vue";
import VueRouter from "vue-router";
import Login from "./components/auth/login.vue";
import Register from "./components/auth/register.vue";
import Emailsend from "./components/auth/emailsend.vue";
import Calculator from "./components/interface/calculator.vue";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", name: "calculator", component: Calculator },
    { path: "/login", name: "login", component: Login },
    { path: "/register", name: "register", component: Register },
    { path: "/fgt-email", name: "sendemail", component: Emailsend },
    { path: "*", name: "all route", component: Calculator },
  ],
});
