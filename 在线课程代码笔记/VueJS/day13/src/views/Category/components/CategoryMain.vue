<!-- 分类主体 -->
<template>
  <div class="category-content">
    <CategoryLeft />
    <CategoryRight />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import CategoryLeft from "./CategoryLeft.vue";
import CategoryRight from "./CategoryRight.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    CategoryLeft,
    CategoryRight
  },
  data() {
    //这里存放数据
    return {};
  }
};
</script>
<style lang="less">
.category-content {
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  top: 0px;
  bottom: 0px;
  overflow: hidden;
  margin: 1.3rem 0 1.4rem 0;
}
</style>
