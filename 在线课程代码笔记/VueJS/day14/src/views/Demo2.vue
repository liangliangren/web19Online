<!-- 动态路由 -->
<template>
  <div class>
    <h2>动态路由</h2>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  data() {
    //这里存放数据
    return {};
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    console.log(this);
    console.log(this.$route.params);
  }
};
</script>
