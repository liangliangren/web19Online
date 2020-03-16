import Vue from "vue";
//  配置路由
import VueRouter from "vue-router"
Vue.use(VueRouter)

// 创建组件
import Home from "../views/Home/Home.vue";
import Category from "../views/Category/Category.vue";
import Search from "../views/Search/Search.vue";
import Cart from "../views/Cart/Cart.vue";
import Mine from "../views/Mine/Mine.vue";
import Demo from "../views/Demo.vue";
import DemoTwo from "../views/Demo2.vue";
import Login from "../views/Mine/Login.vue";
import Register from "../views/Mine/Register.vue";
import ProductDetail from "../views/Detail/ProductDetail.vue"
//配置路由

let routes = [{
    path: "/",
    name: Login,
    component: Login
}, {
    path: "/home",
    name: Home,
    component: Home
}, {
    path: "/category/:id",
    name: Category,
    component: Category
}, {
    path: "/search",
    name: Search,
    component: Search
}, {
    path: "/cart",
    name: Cart,
    component: Cart
}, {
    path: "/mine",
    name: Mine,
    component: Mine
}, {
    path: "/demo",
    name: Demo,
    component: Demo
}, {
    path: "/demo2/:myId",
    name: DemoTwo,
    component: DemoTwo
}, {
    path: "/demo2",
    name: DemoTwo,
    component: DemoTwo
}, {
    path: "/login",
    name: Login,
    component: Login
}, {
    path: "/register",
    name: Register,
    component: Register
}, {
    path: "/productdetail/:id",
    name: ProductDetail,
    component: ProductDetail
}]


//实例化路由
let router = new VueRouter({
    routes
})

export default router