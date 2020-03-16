<!-- 搜索组件 -->
<template>
  <div class="search">
    <div class="category-header">
      <header class="header">
        <a class="icon-left iconfont icon-jiantou3" onclick="window.history.back(1)"></a>
        <div>
          <i class="iconfont icon-sousuo"></i>
          <input
            id="text"
            type="search"
            autocomplete="off"
            v-model="keyword"
            placeholder="点击搜索"
            @keyup.enter.prevent="gotoSearch($event)"
          />
        </div>
      </header>
    </div>
    <div class="search-wrap">
      <ul class="search-list">
        <li v-for="searchData in searchDatas" :key="searchData.product_id">
          <div class="search-img">
            <img :src="searchData.product_img_url" alt />
          </div>
          <div class="search-info">
            <h3>{{searchData.product_name}}</h3>
            <p>
              <span class="price">{{searchData.product_price}}</span>
              <span class="dprice">{{searchData.product_dprice}}</span>
            </p>
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
import Axios from "axios";
import Footer from "@/components/Footer.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Footer
  },
  data() {
    //这里存放数据
    return {
      keyword: "",
      searchDatas: []
    };
  },
  methods: {
    gotoSearch(e) {
      console.log(e);
      if (this.keyword == "") {
        alert("请输入商品名称");
      } else {
        Axios.get("http://localhost:3000/api/search", {
          params: {
            keywords: this.keyword
          }
        }).then(res => {
          console.log(res);
          this.searchDatas = res.data;
        });
      }
      e.preventDefault();
    }
  },
  mounted() {
    document.getElementById("text").focus();
  }
};
</script>
<style lang="less" scoped>
.category-header {
  width: 100%;
  height: 1.3rem;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #efefef;
  z-index: 9999;
  .header {
    display: flex;
    div {
      width: 80%;
      position: relative;
      input {
        width: 100%;
        position: relative;
        height: 0.9rem;
        border-radius: 0.9rem;
        border: none;
        outline: none;
        top: 0.1rem;
        text-indent: 0.8rem;
        background: #efefef;
      }
      i {
        position: absolute;
        z-index: 999;
        top: 38%;
        right: 0.3rem;
        color: #999;
      }
    }
    a {
      display: block;
      width: 15%;
      font-size: 0.5rem;
      line-height: 1.3rem;
      color: #666;
    }
  }
}
.search-list {
  width: 100%;
  margin-top: 1.3rem;
  li {
    display: flex;
    height: 3.6rem;
    border-bottom: 1px solid #efefef;
    .search-img {
      width: 30%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      img {
        width: 80%;
        border: 1px solid #ccc;
        margin-left: 10%;
      }
    }
    .search-info {
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h3 {
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
      p {
        span {
          &::before {
            content: "￥";
          }
        }
        .price {
          font-size: 0.8rem;
          color: #f44;
        }
        .dprice {
          font-size: 0.37rem;
          color: #999;
          text-decoration: line-through;
          margin-left: 15px;
        }
      }
    }
  }
}
</style>
