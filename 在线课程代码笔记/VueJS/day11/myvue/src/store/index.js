import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {  //定义数据，在组件中可以通过this.$store.state.num 来获取定义的num数据
  num: 1,
  productListDatas: []  //想利用vuex来管理我的产品数据，组件中可以通过this.$store.state.productListDatas来获取
}
var mutations = { //定义改变state中数据的方法，Vuex 的 store 中的状态改变的唯一方法是提交 mutation，在组件中通过methdos中定义的方法提交  this.$store.commit("addNum")
  addNum() {
    ++state.num
  },
  addNumFn(state, data) {
    //state 指的是vuex中的state对象
    //data  提交的数据
    state.num = state.num + data
  },
  changeProductList(state, data) {
    state.productListDatas = data
  }
}
var getters = { //store仓库中派生出来的一些状态,使用计算属性  conputed来获取
  getNum: function (state) {
    //state 指的是vuex中的state对象
    return state.num * 10
  }
}
var actions = {
  actNum: function (context) {
    //Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象
    context.commit('addNum');  //提交mutations中定义的方法
    //addNum这个方法是在mutatios中定义的
  },
  actNumFn(context, data) {
    context.commit("addNumFn", data)
    //addNumFn 这个方法是在mutatios中定义的
  }
}


export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules
})
