<!-- 购物车组件 -->
<template>
  <div class="cart">
    <Head title="购物车" />
    <div class="cart-content">
      <ul>
        <li v-for="cartsListData in cartsListDatas" :key="cartsListData.product_id">
          <div class="select">
            <i class="iconfont icon-danxuankuang" v-show="!showHide"></i>
            <i class="iconfont icon-danxuankuangxuanzhong" v-show="showHide"></i>
          </div>
          <div class="cart-img">
            <img :src="cartsListData.product_img_url" alt />
          </div>
          <div class="cart-info">
            <div class="cart-title">{{cartsListData.product_name}}</div>
            <div class="cart-wrap">
              <span class="price">{{cartsListData.product_price}}</span>
              <div class="number">
                <a href="javascript:;">-</a>
                <input type="text" value="1" />
                <a href="javascript:;">+</a>
                <button>删除</button>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

import Head from "@/components/Head.vue";
import Footer from "@/components/Footer.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Head,
    Footer
  },
  data() {
    //这里存放数据
    return {};
  },
  computed: {
    cartsListDatas() {
      return this.$store.state.carts;
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
</style>
