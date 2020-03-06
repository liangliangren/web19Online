import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import News from '../views/News.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }, {
    path: '/product',
    name: 'Product',
    component: Product
  }, {
    path: '/news',
    name: 'News',
    component: News
  }, {
    path: '/newsdetail',
    name: 'NewsDetail',
    //component: () => import('../views/NewsDetail.vue')
    component: function () { //和上面的箭头函数等价
      return import('../views/NewsDetail.vue')
    }
  }, {
    path: '/productdetail/:pid', //配置动态路由
    name: 'ProductDetail',
    component: () => import('../views/ProductDetail.vue')
  }, {
    path: '/aboutdetail',
    name: 'AboutDetail',
    component: () => import('../views/AboutDetail.vue')
  }
]

const router = new VueRouter({
  mode: "history",
  //修改路由模式  默认是hash模式，浏览器地址栏中会有#
  //history 历史模式
  routes  //这里属性值和属性值一致   相当于  routes:routes 的简写
})

export default router
