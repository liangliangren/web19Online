import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {  //state中主要定义数据的
    num: 10,
    productListDatas: [],
    datalist: []
  },
  mutations: {  //定义改变state中数据的方法
    addNum(state) {  //参数state指的是上面定义的state对象
      ++state.num
    },
    addNum1(state, data) {
      state.num = state.num + data
    },
    addProductList(state, data) {
      state.productListDatas = data
    },
    dsclist(state, data) {
      state.datalist = data
    }
  },
  getters: { //派生出来的状态，在组件中使用计算属性获取this.$store.getters.getNum
    getNum(state) {
      return state.num * 10
    }
  },
  actions: { //提交mutations中定义的方法，在组件中methods中定义方法，使用dispatch来提交actions中定义的方法
    actAddNum(context) {
      context.commit("addNum")
    },
    actAddNum1(context, data) {
      context.commit("addNum1", data)
    }
  },
  modules: {
  }
})
