import Vue from 'vue'
import App from './App.vue'
//引入路由模块
import router from "./router/index.js"
//默认下载项目，
//1.需要配置路由   cnpm install vue - router--save
//2.使用less      cnpm install less less-loader --save  


Vue.config.productionTip = false
import rem from "./rem/rem.js";
new Vue({
  router,
  rem,
  render: h => h(App),
}).$mount('#app')
