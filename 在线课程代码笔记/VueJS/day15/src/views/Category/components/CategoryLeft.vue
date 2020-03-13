<!-- 分类左边  -->
<template>
  <div id="categoryLeft">
    <div class="category-left">
      <ul class="categoryNav">
        <!-- router-link 动态路由，需要修改一些路由配置 -->
        <li v-for="catagoryDataList in catagoryDataLists" :key="catagoryDataList.cat_id">
          <router-link :to="'/category/'+catagoryDataList.cat_id">{{catagoryDataList.cat_name}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      catagoryDataLists: []
    };
  },
  methods: {
    getCategoryListFn() {
      //console.log(this.$http);
      this.$http.get("/v4/catalog/list").then(res => {
        console.log(res.data.data);
        this.catagoryDataLists = res.data.data;
      });
    }
  },
  mounted() {
    this.getCategoryListFn();
  }
};
</script>
<style lang="less">
.category-left {
  height: 100%;
  width: 90px;
  background: #efefef;
  ul {
    li {
      height: 1.2rem;
      line-height: 1.2rem;
      text-align: center;
      a {
        font-size: 0.37rem;
        display: block;
      }
      .router-link-active {
        background: #ffffff;
      }
    }
    .active {
      background: #ffffff;
      a {
        color: #f23030;
      }
    }
  }
}
</style>
