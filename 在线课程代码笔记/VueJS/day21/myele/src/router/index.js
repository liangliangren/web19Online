import Vue from 'vue'
import VueRouter from 'vue-router'
import Demo from '../views/Demo.vue'
import Login from '../views/Login.vue'
import Home from "../views/Home.vue"
import UserList from "../views/User/UserList.vue"
import ProductList from "../views/Product/ProductList.vue"
import ProductAdd from "../views/Product/ProductAdd.vue"
import CategoryList from "../views/Category/CategoryList.vue"
import CategoryAdd from "../views/Category/CategoryAdd.vue"
import Welcome from "../views/Welcome.vue"
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
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        name: 'Welcome',
        path: "welcome",
        component: Welcome
      },
      {
        name: 'UserList',
        path: "userslist",
        component: UserList
      }, {
        name: 'ProductList',
        path: "productlist",
        component: ProductList
      }, {
        name: 'ProductAdd',
        path: "productadd",
        component: ProductAdd
      }, {
        name: 'CategoryList',
        path: "categorylist",
        component: CategoryList
      }, {
        name: 'CategoryAdd',
        path: "categoryadd",
        component: CategoryAdd
      }
    ],
    redirect: { path: "welcome" }
  }
]

const router = new VueRouter({
  routes
})

export default router
