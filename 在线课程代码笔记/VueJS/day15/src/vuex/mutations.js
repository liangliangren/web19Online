//主要定义修改state数据的方法
//操作state中的数据先引入state模块

// import state from './state.js'
import { MessageBox } from "mint-ui";
const mutations = {
    //定义方法来改变state中的数据
    setCartsDatas(state, data) {
        if (data) {
            state.carts.push(data)
        } else {
            MessageBox("提示", "不能重复添加")
        }
        localStorage.setItem("carts", JSON.stringify(state.carts))
    }
}
export default mutations