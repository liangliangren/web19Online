import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


// 总结vuex
// 1.在state定义数据
// 2.在mutations中定义改变数据的方法
// 3.在组件中的methods中定义方法来提交(commit("mutaions中定义的方法"))

export default new Vuex.Store({
  //1.state主要用来存放数据
  state: {
    num: 1
  },
  //2.mutations里面主要是存放方法的，里面的方法只用来改变state中的数据,而且是改变数据的唯一方法
  mutations: {
    addNum() { //方法来改变state中的num值
      ++this.state.num
    },
    addFn(state, data) {
      //state 代表当前Store中定义的state数据
      //data  代表使用方法是传递的数据
      state.num = state.num + data
    }
  },
  actions: {
  },
  modules: {
  }
})
