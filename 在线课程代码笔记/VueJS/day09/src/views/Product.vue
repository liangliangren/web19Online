<!--  -->
<template>
  <div class="produc">
    <h2>产品组件</h2>
    <v-abc :title="title" :newsmsg="msg" :product="this"></v-abc>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "./Header.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    "v-abc": Header
  },
  data() {
    //这里存放数据
    return {
      title: "产品组件数据123456",
      msg: "产品组件中的msg数据"
    };
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>