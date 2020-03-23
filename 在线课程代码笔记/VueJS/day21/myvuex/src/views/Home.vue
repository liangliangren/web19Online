<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2>显示state中定义的num值---{{this.$store.state.num}}</h2>
    <h1>计算属性num的值---{{getNumabc}}</h1>
    <button @click="changeNum">修改state中的num值</button>
    <button @click="changeNum1">自定义修改state中的num值</button>
    <div>
      <button @click="changeActNum">提交actions中的方法来改变num的值</button>
      <button @click="changeActNum1">自定义提交actions中的方法来改变num的值</button>
    </div>
    <ul>
      <li
        v-for="productlist in this.$store.state.productListDatas"
        :key="productlist.product_id"
      >{{productlist.product_name}}</li>
    </ul>
    <h1>大商创</h1>
    <ul>
      <li v-for="dsc in this.$store.state.datalist" :key="dsc.cat_id">{{dsc.cat_name}}</li>
    </ul>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  name: "Home",
  methods: {
    changeNum() {
      this.$store.commit("addNum"); //addNum这个方法是在mutations中定义的方法
    },
    changeNum1() {
      this.$store.commit("addNum1", 5); //5值得是mutations中定义的方法addNum1中传递的参数data
    },
    changeActNum() {
      this.$store.dispatch("actAddNum");
    },
    changeActNum1() {
      this.$store.dispatch("actAddNum1", 100);
    },
    getProductList() {
      //http://localhost:3000/api/product
      Axios.get("http://localhost:3000/api/product").then(res => {
        console.log(res);
        console.log(res.data.dataList);
        this.$store.commit("addProductList", res.data.dataList);
      });
    },
    getDscListData() {
      Axios.get("/api/v4/catalog/list").then(res => {
        console.log(res);
        this.$store.commit("dsclist", res.data.data);
      });
    }
  },
  computed: {
    //计算属性
    getNumabc() {
      return this.$store.getters.getNum;
    }
  },
  mounted() {
    this.getProductList();
    this.getDscListData();
  }
};
</script>
