import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from "../views/News.vue" //导入组件
import Product from "../views/Product.vue"
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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: "/news",
    name: "News",
    component: News
  }, {
    path: "/product",
    name: "Product",
    component: Product
  }
]

const router = new VueRouter({
  routes
})

export default router
