import Vue from "vue";
import Vuex from "vuex"; // 状态管理

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "郑州",
    id: "xxxxx",
  },
  mutations: {
    choosecity(state, obj) {
      (state.name = obj.name), (state.id = obj.id);
    },
  },
  actions: {},
  modules: {},
});
