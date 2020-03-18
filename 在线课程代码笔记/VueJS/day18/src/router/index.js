import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from '../views/Demo.vue'
import Login from '../views/Login.vue'
import Code from "../views/Code.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }, {
    path: '/code',
    name: 'Code',
    component: Code
  }
]

const router = new VueRouter({
  routes
})

export default router
