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
//配置路由

let routes = [{
    path: "/home",
    name: Home,
    component: Home
}, {
    path: "/category",
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
}]


//实例化路由
let router = new VueRouter({
    routes
})

export default router