<!-- 首页组件 -->
<template>
  <div class="index-home">
    <Nav />
    <h2>首页组件</h2>
    <h2>{{this.$store.state.num}}</h2>
    <br />
    <button @click="changeNum">改变state中的值</button>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Nav from "@/components/Nav.vue";
export default {
  //import引入的组件需要注入到对象中才能使用

  components: {
    Nav
  },
  data() {
    //这里存放数据
    return {};
  },
  methods: {
    changeNum() {
      this.$store.commit("addNum");
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>