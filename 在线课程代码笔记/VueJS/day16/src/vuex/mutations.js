//主要定义修改state数据的方法
//操作state中的数据先引入state模块

// import state from './state.js'
import { MessageBox } from "mint-ui";
const mutations = {
    //定义方法来改变state中的数据
    setCartsDatas(state, data) {
        if (data) {
            state.carts.push(data)
        }
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    //点击购物车中的加号
    addCartsFn(state, index) {
        state.carts[index].value++
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    //点击购物车中的减号
    jianCartsFn(state, index) {
        if (state.carts[index].value == 1) {
            state.carts[index].value = 1
            MessageBox("提示", "商品个数不能小于1")
        } else {
            state.carts[index].value--
            localStorage.setItem("carts", JSON.stringify(state.carts))
        }
    },
    //点击购物车删除按钮
    deleteCartsFn(state, index) {
        MessageBox.confirm('亲,您确定要放弃该宝贝吗？').then(() => {
            state.carts.splice(index, 1)
            localStorage.setItem("carts", JSON.stringify(state.carts))
        });
    }
}
export default mutations