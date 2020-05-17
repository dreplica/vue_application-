import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

export const store =  new Vuex.Store({
    state:{
        current_user:"ham",
        id:null,
    },
    mutations:{
        change_user(state,arg){
        state.current_user = arg
        }
    }
})