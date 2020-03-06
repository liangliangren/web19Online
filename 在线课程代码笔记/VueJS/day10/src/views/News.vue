<!-- 新闻组件-路由的get传值 -->
<template>
  <div class="product">
    <h2>新闻组件</h2>
    <ul>
      <li v-for="listData in listDatas" :key="listData.id">
        <router-link :to="'/newsdetail?id='+listData.id">{{listData.title}}</router-link>
      </li>
      <!-- http://localhost:8081/#/newsdetail?id=1  get传值-->
    </ul>
    <a :href="href">百度</a>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  data() {
    //这里存放数据
    return {
      href: "https://www.baidu.com",
      listDatas: [
        {
          id: 1,
          title: "新闻标题001"
        },
        {
          id: 2,
          title: "新闻标题002"
        },
        {
          id: 3,
          title: "新闻标题003"
        },
        {
          id: 4,
          title: "新闻标题004"
        },
        {
          id: 5,
          title: "新闻标题005"
        }
      ]
    };
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>