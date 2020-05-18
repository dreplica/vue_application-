import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    current_user: "",
    id: null,
    auth: "hide",
    live: false,
  },
  mutations: {
    change_user(state, arg) {
      state.current_user = arg.name;
      state.id = arg.id;
    },
    live(state) {
      console.log("update");
      state.live = true;
      console.log(state);
    },
    kill(state) {
      state.live = false;
    },
  },
  getters: {
    get_auth: (state) => {
      return state.auth;
    },
    get_live: (state) => {
      console.log("requested");
      return state.live;
    },
  },
});
