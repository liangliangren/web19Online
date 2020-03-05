<!--about组件的子组件 -->
<template>
  <div class="about-header">
    <h2>我是about组件的子组件AboutHeader</h2>
  </div>
</template>

<script>
export default {
  data() {
    //这里存放数据
    return {
      msg: "about-header组件数据"
    };
  },
  methods: {
    aboutFn() {
      alert("about-header方法");
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>