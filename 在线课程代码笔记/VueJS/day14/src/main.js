import Vue from 'vue'
import App from './App.vue'
//引入路由模块
import router from "./router/index.js"
//默认下载项目，
//1.需要配置路由   cnpm install vue - router--save
//2.使用less      cnpm install less less-loader --save  

// 下载使用mint-ui框架  cnpm install mint-ui --save
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// axios全局配置  下载 cnpm install axios --save
import axios from "axios"
axios.defaults.baseURL = "/api"
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
Vue.prototype.$http = axios
Vue.config.productionTip = false
import rem from "./rem/rem.js";
new Vue({
  router,
  rem,
  render: h => h(App),
}).$mount('#app')
