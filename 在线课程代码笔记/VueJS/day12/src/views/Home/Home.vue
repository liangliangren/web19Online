<!-- 首页组件 -->
<template>
  <div class="home">
    <HomeHeader />
    <HomeBanner />
    <HomeNav />
    <HomeMain />
    <HomeList />
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import HomeHeader from "./components/HomeHeader.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeNav from "./components/HomeNav.vue";
import HomeMain from "./components/HomeMain.vue";
import HomeList from "./components/HomeList.vue";
import Footer from "@/components/Footer.vue";
import { headerFn } from "@/assets/js/index.js"; //按需引入自定义的模块
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    HomeHeader,
    HomeBanner,
    HomeNav,
    HomeMain,
    HomeList,
    Footer
  },
  data() {
    //这里存放数据
    return {};
  },
  mounted() {
    headerFn();
  }
};
</script>
<style lang="less">
.list {
  li {
    color: red;
  }
}
</style>
