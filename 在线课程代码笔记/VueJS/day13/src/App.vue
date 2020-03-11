<template>
  <div id="app">
    <router-view></router-view>
    <!-- 路由视图容器 -->
  </div>
</template>

<script>
//引入rem.js
//
export default {
  name: "App"
};
</script>

<style lang="less">
/* 导入样式 */
@import "./fonts/iconfont.css";
@import "./styles/common.css";
</style>
