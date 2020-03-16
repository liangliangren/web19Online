<!-- 首页list组件 -->
<template>
  <div class="home-product">
    <div class="title">
      <img src="@/assets/images/tuijian.jpg" alt />
    </div>
    <div class="home-product-list">
      <ul>
        <li v-for="homeListData in homeListDatas" :key="homeListData.product_id">
          <router-link :to="'/productdetail/' +homeListData.product_id">
            <img :src="homeListData.product_img_url" alt />
            <h3>{{homeListData.product_name}}</h3>
            <p>{{homeListData.product_price}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      homeListDatas: []
    };
  },
  methods: {
    getHomeListDatasFn() {
      Axios.get("http://localhost:3000/api/product").then(res => {
        console.log(res.data);
        this.homeListDatas = res.data;
      });
    }
  },
  mounted() {
    this.getHomeListDatasFn();
  }
};
</script>
<style lang="less">
.home-product {
  margin-bottom: 2rem;
  width: 100%;
  .title img {
    width: 100%;
  }
  .home-product-list {
    width: 100%;
    ul {
      display: flex;
      flex-wrap: wrap;
      li {
        width: 50%;
        text-align: center;
        img {
          width: 90%;
        }
        h3,
        p {
          text-align: left;
          margin-left: 10px;
        }
        h3 {
          font-size: 0.37rem;
          height: 1rem;
          margin-bottom: 10px;
          font-weight: normal;
          // 下面几行css让多行文本出现省略号
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2; //第几行出现省略号
          text-overflow: ellipsis;
          -webkit-box-orient: vertical;
        }
        p {
          font-size: 0.4rem;
          color: #ec5151;
          &::before {
            content: "￥";
          }
        }
      }
    }
  }
}
</style>
