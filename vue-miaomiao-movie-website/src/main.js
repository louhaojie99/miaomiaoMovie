import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// 全局引入mint ui
import MintUI from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(MintUI);

// axios挂到原型上，全局使用
import request from "./utils/request";
Vue.prototype.$http = request;

Vue.config.productionTip = false;

new Vue({
  router,
  store, // 挂在vue实例
  render: (h) => h(App),
}).$mount("#app");
