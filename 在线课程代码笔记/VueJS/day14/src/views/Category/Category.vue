<!-- 分类组件 -->
<template>
  <div class="category">
    <CategoryHeader />
    <CategoryMain />
    <Footer />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CategoryHeader from "./components/CategoryHeader.vue";
import CategoryMain from "./components/CategoryMain.vue";
import Footer from "@/components/Footer.vue";
import { moveScrollFn } from "@/assets/js/category.js";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    CategoryHeader,
    CategoryMain,
    Footer
  },
  data() {
    //这里存放数据
    return {};
  },
  mounted() {
    moveScrollFn();
  }
};
</script>
