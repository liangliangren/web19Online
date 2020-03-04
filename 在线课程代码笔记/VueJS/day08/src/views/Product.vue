<!-- 请求数据使用第三方模块 axios 
//使用方式
//第一步：下载  cnpm install axios --save
//第二步: 在哪里使用哪里引入
-->


<template>
  <div class="product">
    <h2>产品组件-{{msg}}</h2>
    <ul>
      <li v-for="productData in productDatas" :key="productData.product_id">
        <a href>{{productData.product_name}}</a>
      </li>
    </ul>
    <h2>分类数据</h2>
    <ul>
      <li v-for="categoryData in categoryDatas" :key="categoryData.category_id">
        <a href>{{categoryData.category_name}}</a>
      </li>
    </ul>
    <h2>加载大商创的数据接口</h2>
    <ul>
      <li v-for="cateDscData in cateDscDatas" :key="cateDscData.cat_id">
        <a :href="cateDscData.url">{{cateDscData.cat_name}}</a>
      </li>
    </ul>
    <h2>大商创数据接口</h2>
    <ul>
      <li v-for="cateDscProductData in cateDscProductDatas" :key="cateDscProductData.cat_id">
        <h2>{{cateDscProductData.cat_name}}</h2>
        <ol>
          <li v-for="cateDscProduct in cateDscProductData.child" :key="cateDscProduct.cat_id">
            <a href>{{cateDscProduct.cat_name}}</a>
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
//引入 下载的axios模块
import Axios from "axios";
export default {
  data() {
    //这里存放数据
    return {
      msg: "产品组件数据",
      productDatas: [],
      categoryDatas: [],
      cateDscDatas: [],
      cateDscProductDatas: []
    };
  },
  methods: {
    getProductDatas() {
      let that = this; //注意如果then中使用es5作为回调函数，需要中转一下this
      //   then(成功的回调,失败的回调)
      let productApi = "http://localhost:3000/api/product";
      Axios.get(productApi).then(function(response) {
        console.log(response.data);
        that.productDatas = response.data;
      });
    },
    getCategoryDatas() {
      Axios.get("http://localhost:3000/api/category").then(res => {
        console.log(res.data);
        this.categoryDatas = res.data;
      });
    },
    getDscDatas() {
      Axios.get("api/v4/catalog/list").then(res => {
        console.log(res.data.data);
        this.cateDscDatas = res.data.data;
      });
    },
    getDscProductDatas() {
      Axios.get("api/v4/catalog/list/858").then(res => {
        console.log(res.data.data);
        this.cateDscProductDatas = res.data.data;
      });
    }
  },
  mounted() {
    this.getProductDatas();
    this.getCategoryDatas();
    this.getDscDatas();
    this.getDscProductDatas();
  }
};
</script>
<style lang='less' scoped>
</style>