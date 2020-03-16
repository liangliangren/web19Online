<!-- 产品详情页 -->
<template>
  <div>
    <Head title="商品详情" />
    <div class="detail-wrap">
      <div class="banner-wrap" id="banner">
        <mt-swipe :auto="8000">
          <mt-swipe-item
            v-for="detailBannerData in detailBannerDatas"
            :key="detailBannerData.image_id"
          >
            <img :src="detailBannerData.image_url" alt />
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="detail-content">
        <h3>
          <span class="price">{{detailDatas.product_price}}</span>
          <span class="dprice">{{detailDatas.product_dprice}}</span>
        </h3>
        <h2 class="title">{{detailDatas.product_name}}</h2>
        <div class="img">
          <img :src="detailDatas.product_img_url" alt />
        </div>
        <div class="detail">{{detailDatas.product_detail}}</div>
      </div>
    </div>

    <div class="detailFooter">
      <div class="kefu">
        <i class="iconfont icon-kefu"></i>
        <span>客服</span>
      </div>
      <div class="shoucang">
        <i class="iconfont icon-dongtaiweixuanzhong"></i>
        <span>收藏</span>
      </div>
      <div class="cart">
        <router-link to="/cart">
          <i class="iconfont icon-gouwuche1"></i>
          <span>购物车</span>
          <em>{{cartDataLength}}</em>
        </router-link>
      </div>
      <div class="addCart" @click="addCartsFn(detailDatas)">添加购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Head from "@/components/Head.vue";
import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Head
  },
  data() {
    //这里存放数据
    return {
      detailBannerDatas: [],
      detailDatas: {}
    };
  },
  computed: {
    cartDataLength() {
      var cartCount = 0;
      this.$store.state.carts.forEach(cartdata => {
        cartCount += cartdata.value;
      });
      return cartCount;
    }
  },
  methods: {
    getProductDetailDatasFn(id) {
      Axios.get("http://localhost:3000/api/goodsdetail?pid=" + id).then(res => {
        console.log(res.data.detailDatas);
        this.detailBannerDatas = res.data.detailDatas[0];
        this.detailDatas = res.data.detailDatas[1];
      });
    },
    addCartsFn(data) {
      console.log(data);
      console.log(this.$store.state.carts);
      if (this.$store.state.carts != "undefined") {
        //find() 查找数组中符合条件的元素,若有多个符合条件的元素，则返回第一个元素。
        var isCarts = this.$store.state.carts.find(function(value) {
          if (value.product_id == data.product_id) {
            value.value++;
          }
          return value.product_id == data.product_id;
        });
        console.log(isCarts);
        if (!isCarts) {
          var cartData = {
            product_id: data.product_id,
            category_id: data.category_id,
            product_name: data.product_name,
            product_price: data.product_price,
            product_img_url: data.product_img_url,
            value: 1,
            showHide: false
          };
        }
      }
      this.$store.commit("setCartsDatas", cartData);
    }
  },
  mounted() {
    console.log(this.$route.params);
    this.getProductDetailDatasFn(this.$route.params.id);
    console.log(this.$store.state.carts);
  }
};
</script>
<style lang="less">
.detail-wrap {
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  margin-top: 1.3rem;
  margin-bottom: 1.4rem;
  .banner-wrap {
    height: 10rem;
    img {
      height: 10rem;
      width: 100%;
    }
    .mint-swipe-indicator {
      background: red;
      opacity: 1;
      width: 18px;
      border-radius: 0;
    }
    .mint-swipe-indicator.is-active {
      background: yellow;
    }
  }
  .detail-content {
    padding: 10px;
    width: 100%;
    h3 {
      span {
        &::before {
          content: "￥";
        }
      }
      .price {
        color: red;
        font-size: 0.8rem;
      }
      .dprice {
        color: #999;
        font-size: 0.4rem;
        margin-left: 20px;
        text-decoration: line-through;
      }
    }
    .title {
      margin: 20px 0;
      font-size: 0.37rem;
      padding: 10px 0;
      border-top: 1px solid #efefee;
      border-bottom: 1px solid #efefee;
      color: #333;
      font-weight: normal;
    }
    .img {
      text-align: center;
    }
    .detail {
      font-size: 0.37rem;
      margin: 20px 0;
      line-height: 0.5rem;
    }
  }
}
.detailFooter {
  width: 100%;
  height: 1.4rem;
  border-top: 1px solid #efefef;
  position: fixed;
  bottom: 0px;
  left: 0;
  background: #ffffff;
  display: flex;
  z-index: 999;
  div {
    font-size: 0.32rem;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    color: #666;
    i {
      font-size: 0.7rem;
    }
    span {
      display: block;
    }
  }
  .cart {
    position: relative;
    em {
      display: block;
      font-style: normal;
      background: red;
      color: #ffffff;
      position: absolute;
      top: 0.1rem;
      right: 0.1rem;
      min-width: 0.48rem;
      height: 0.48rem;
      border-radius: 50%;
    }
  }
  .addCart {
    flex: 2;
    background: #f44;
    color: #ffffff;
    font-size: 0.37rem;
  }
  .buy {
    flex: 2;
    background: #ff976a;
    color: #ffffff;
    font-size: 0.37rem;
  }
}
</style>