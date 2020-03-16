<!-- 购物车组件 -->
<template>
  <div class="cart">
    <Head title="购物车" />
    <div class="cart-content">
      <ul>
        <li v-for="(cartsListData,index) in cartsListDatas" :key="cartsListData.product_id">
          <div class="select" @click="changeRadio(cartsListData)">
            <i class="iconfont icon-danxuankuang" v-show="!cartsListData.showHide"></i>
            <i
              class="iconfont icon-danxuankuangxuanzhong"
              style="color:red"
              v-show="cartsListData.showHide"
            ></i>
          </div>
          <div class="cart-img">
            <img :src="cartsListData.product_img_url" alt />
          </div>
          <div class="cart-info">
            <div class="cart-title">{{cartsListData.product_name}}</div>
            <div class="cart-wrap">
              <span class="price">{{cartsListData.product_price}}</span>
              <div class="number">
                <a href="javascript:;" @click="jianCartsFn(index)">-</a>
                <input type="text" value="1" v-model="cartsListData.value" />
                <a href="javascript:;" @click="addCartsFn(index)">+</a>
                <button @click="deleteCartsFn(index)">删除</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="noCart" v-show="!cartsListDatas.length>0">
      <i class="iconfont icon-gouwuche"></i>
      <p>
        购物车空空的，
        <router-link to="/category/858">请选择您喜欢的商品</router-link>
      </p>
    </div>

    <div class="cartFooter" v-show="cartsListDatas.length>0">
      <div class="checkAll" @click="checkAllFn()">
        <i class="iconfont icon-danxuankuang" v-show="!flag"></i>
        <i class="iconfont icon-danxuankuangxuanzhong" style="color:red" v-show="flag"></i>
        <span>全选</span>
      </div>
      <div class="priceAll">
        合计:
        <span>{{total}}</span>元
      </div>
      <div class="tobuy">
        <a href="javascript:;">去结算</a>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
import { mapMutations } from "vuex";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Head,
    Footer
  },
  data() {
    //这里存放数据
    return {
      flag: false
    };
  },
  computed: {
    cartsListDatas() {
      return this.$store.state.carts;
    },
    total() {
      //计算合计总价
      var totalPrice = 0;
      this.$store.state.carts.forEach(cart => {
        if (cart.showHide) {
          totalPrice += cart.product_price * cart.value;
        }
      });
      return totalPrice;
    }
  },
  methods: {
    // addCartsFn(index) {
    //   //点击产品加号
    //   this.$store.commit("addCartsFn", index);
    // },
    // jianCartsFn(index) {
    //   //点击产品减号
    //   this.$store.commit("jianCartsFn", index);
    // }, //点击产品的删除按钮
    // deleteCartsFn(index) {
    //   this.$store.commit("deleteCartsFn", index);
    // },
    ...mapMutations(["addCartsFn", "jianCartsFn", "deleteCartsFn"]),
    //mapMutations辅助函数，使用的时候必须引入import { mapMutations } from "vuex";
    //在组件中的methods里面同...mapMutations([])
    //mapMutations 辅助函数将组件中的 methods 映射为 store.commit
    changeRadio(cartsListData) {
      //点击产品的单选框
      cartsListData.showHide = !cartsListData.showHide;

      var arr = [];
      //定义一个空的数组，来存放选中的产品,当这个数组中的数据长度，等于购物车中数据的长度是认为已经全选了所有商品
      console.log(this.$store.state.carts);
      var cartData = this.$store.state.carts; //购物车中的所有数据
      for (var i = 0; i < cartData.length; i++) {
        if (cartData[i].showHide) {
          arr.push(cartData[i]);
        }
      }
      console.log(arr);
      if (arr.length == cartData.length) {
        this.flag = true; //全选按钮选中
      }
      if (!cartsListData.showHide) {
        this.flag = false; //全选按钮取消选中
      }
    },
    checkAllFn() {
      //点击全选按钮
      this.flag = !this.flag;
      if (this.flag) {
        //this.flag条件为true的时候，全选按钮选中
        this.$store.state.carts.forEach(cart => {
          cart.showHide = true;
        });
      } else {
        this.$store.state.carts.forEach(cart => {
          cart.showHide = false;
        });
      }
    }
  },
  mounted() {
    console.log(this.$store.state.carts);
  }
};
</script>
<style lang="less">
.cart-content {
  margin-top: 1.3rem;
  width: 100%;
  margin-bottom: 1.4rem;
  li {
    display: flex;
    height: 3.6rem;
    border-bottom: 1px solid #efefef;
    .select {
      width: 10%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
    }
    .cart-img {
      width: 20%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 100%;
      }
    }
    .cart-info {
      width: 65%;
      display: flex;
      margin-left: 5%;
      flex-direction: column;
      justify-content: center;
      input {
        width: 1.2rem;
        text-align: center;
        border: 1px solid #ccc;
        outline: none;
        float: left;
        line-height: 18px;
      }
      .cart-title {
        font-size: 0.37rem;
        height: 1rem;
        margin-bottom: 10px;

        // 下面几行css让多行文本出现省略号
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2; //第几行出现省略号
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
      }
      .price {
        color: red;
        font-size: 0.5rem;
        &::before {
          content: "￥";
        }
        float: left;
      }
      .number {
        float: right;
        a {
          float: left;
          width: 20px;
          height: 20px;
          text-align: center;
          line-height: 20px;
          background: #efefef;
          font-size: 0.32rem;
        }
        button {
          width: 40px;
          height: 20px;
          background: #efefef;
          font-size: 0.32rem;
          border: none;
          outline: none;
          float: left;
          margin: 0px 10px;
        }
      }
    }
  }
}
.cartFooter {
  position: fixed;
  height: 1.2rem;
  background: #efefef;
  bottom: 1.4rem;
  width: 100%;
  display: flex;
  font-size: 0.37rem;
  line-height: 1.2rem;
  .checkAll {
    width: 30%;
    text-align: center;
  }
  .priceAll {
    width: 40%;
    span {
      color: red;
      font-weight: bold;
      font-size: 0.5rem;
    }
  }
  .tobuy {
    width: 30%;
    background: #f44;

    text-align: center;
    a {
      color: #ffffff;
    }
  }
}
.noCart {
  i {
    font-size: 4rem;
    color: #cccccc;
    margin: 2rem 0 0.5rem;
  }
  font-size: 0.37rem;
  color: #999;
  text-align: center;
}
</style>
