import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    current_user: "",
    id: null,
    auth: "hide",
     },
  mutations: {
    change_user(state, arg) {
      state.current_user = arg.name;
      state.id = arg.id;
    },
    change_auth_screen(state, arg) {
      state.auth = arg;
    },
},
  getters: {
    get_auth: (state) => {
      return state.auth;
    },
  },
});
