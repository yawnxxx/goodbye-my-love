import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import "./assets/css/reset.css";
import "ant-design-vue/dist/antd.css";
import { Button } from "ant-design-vue";
Vue.config.productionTip = false;

Vue.component(Button.name, Button);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
