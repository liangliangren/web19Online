//定义数据

//var carts = []   //carts购物车中的数据，定义一个空的数组，因为一开始购物车是空的
// localStorage 是一个对象，一开始也是空的，向对象中添加数据 {carts:点击加入购物车的数据对象}
//localStorage["carts"] = '["a", "b"]' 
// if (localStorage["carts"]) {
//     carts=localStorage["carts"]
// }


// var obj = {}
// obj["carts"] = [{}]

const state = {
    carts: localStorage["carts"] ? JSON.parse(localStorage["carts"]) : []
}
export default state