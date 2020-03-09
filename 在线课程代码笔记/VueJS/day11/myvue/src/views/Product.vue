<!-- 产品组件 -->
<template>
  <div class="product">
    <h2>产品组件</h2>
    <h2>{{this.$store.state.num}}</h2>
    <button @click="changeProductNum">产品组件中改变state的num</button>
    <ul>
      <li v-for="list in lists" :key="list.product_id">{{list.product_name}}</li>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios"; //需要下载 cnpm install axios --save
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      lists: []
    };
  },
  methods: {
    changeProductNum() {
      this.$store.commit("addNum");
    },
    getProductLists() {
      Axios.get("http://localhost:3000/api/product").then(res => {
        console.log(this);
        this.$store.commit("changeProductList", res.data);
      });
    }
  },
  mounted() {
    //生命周期
    this.getProductLists();
    this.lists = this.$store.state.productListDatas;
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>