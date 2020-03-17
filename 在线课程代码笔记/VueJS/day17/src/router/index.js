import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Demo from '../views/Demo.vue'
import Demo2 from '../views/Demo2.vue'
import Demo3 from '../views/Demo3.vue'
import Demo4 from '../views/Demo4.vue'
import Table from '../views/Table.vue'
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
  },
  {
    path: '/demo',
    name: 'Demo',
    component: Demo
  },
  {
    path: '/demo2',
    name: 'Demo2',
    component: Demo2
  },
  {
    path: '/demo3',
    name: 'Demo3',
    component: Demo3
  },
  {
    path: '/demo4',
    name: 'Demo4',
    component: Demo4
  },
  {
    path: '/table',
    name: 'Table',
    component: Table
  }
]

const router = new VueRouter({
  routes
})

export default router
