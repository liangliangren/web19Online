<!-- 产品组件-动态路由 -->
<template>
  <div class="product">
    <Header />
    <h2>产品组件</h2>
    <ul>
      <li v-for="listData in listDatas" :key="listData.id">
        <router-link :to="'/productdetail/'+listData.id">{{listData.title}}</router-link>
      </li>
    </ul>
    <!-- http://localhost:8081/#/productdetail/1 
        需要在router--》index.js 中配置 path: '/productdetail/:pid',
        在详情也面  通过this.$route.params.pid
    -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "./Header.vue";
export default {
  components: {
    Header
  },
  data() {
    //这里存放数据
    return {
      listDatas: [
        {
          id: 1,
          title: "产品标题001"
        },
        {
          id: 2,
          title: "产品标题002"
        },
        {
          id: 3,
          title: "产品标题003"
        },
        {
          id: 4,
          title: "产品标题004"
        },
        {
          id: 5,
          title: "产品标题005"
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>