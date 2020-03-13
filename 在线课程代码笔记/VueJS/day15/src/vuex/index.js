//入口文件
import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

// 导入自定义模块
import state from './state.js'
import mutations from './mutations'  //可以省略js后缀名
import actions from './actions.js'

// 暴露模块
export default new Vuex.Store({  //Store  仓库
    state,
    mutations,
    actions
})

