<!-- 公共头部组件2 -->
<template>
  <div id="head">
    <header class="header">
      <a class="icon-left iconfont icon-jiantou3" onclick="window.history.back()"></a>
      <div class="title">{{title}}</div>
    </header>
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
  props: ["title"]
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 1.3rem;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  border-bottom: 1px solid #efefef;
  z-index: 9999;
  line-height: 1.3rem;
  a {
    width: 10%;
    display: block;
    text-align: center;
    position: relative;
    z-index: 9999;
  }
  .title {
    width: 100%;
    height: 1.3rem;
    font-size: 0.37rem;
    text-align: center;

    position: absolute;
    top: 0px;
    left: 0;
  }
}
</style>