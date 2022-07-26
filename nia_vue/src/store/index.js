import Vue from "vue";
import Vuex from "vuex";
import router from "../router"
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    HeaderShow:false,
    FooterShow:false
  },
  getters: {},
  mutations: {
    HeaderSee(state){
      router.afterEach((to) => {
        if((to.path === '/')){
          state.HeaderShow=false;
        }
        else {
          state.HeaderShow=true;
        }
      })
    },
    FooterSee(state){
      router.afterEach((to)=> {
        if((to.path === '/')){
          state.FooterShow=false;
        }
        else {
          state.FooterShow=true;
        }
      })
    }
  },
  actions: {},
  modules: {},
});
