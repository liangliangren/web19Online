import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '../views/News.vue'
import Product from '../views/Product.vue'
import Parent from "../views/Parent.vue"
import Index from "../views/Index.vue"

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
    path: '/news',
    name: 'News',
    component: News
  }, {
    path: '/product',
    name: 'Product',
    component: Product
  }, {
    path: '/parent',
    name: 'Parent',
    component: Parent
  }, {
    path: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/life',
    name: 'Life',
    component: () => import('../views/Life.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
