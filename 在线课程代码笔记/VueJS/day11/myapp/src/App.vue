<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
//引入rem.js
//
export default {
  name: "App"
};
</script>

<style>
/* 导入样式 */
@import "./fonts/iconfont.css";

* {
  margin: 0px;
  padding: 0px;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}
</style>
