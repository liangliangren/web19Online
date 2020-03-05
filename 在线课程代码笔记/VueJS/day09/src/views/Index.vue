<!-- index组件 -->
<template>
  <div class="index">
    <h2>index组件</h2>
    <Mine />
    <Your />
    <!-- 总结Mine组件和Your组件是非父子组件
    非父子组件通信：
    1.新建一个第三方模块，如model--》VueEvent.js,并且初始化一个VueEvent实例对象并暴露
    2.分别在Mine组件和Your组件中引入自定义的VueEvent.js
    3.在一个组件中广播数据   VueEvent.$emit(自定义事件名,要广播的数据)
    4.在另一个组件中来接收数据，可以在mounted模版编译完成生命周期中接收，VueEvent.$on("事件名",(data)=>{}) ,data就是我们想要的数据
    -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Mine from "./Mine.vue";
import Your from "./Your.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Mine,
    Your
  },
  data() {
    //这里存放数据
    return {};
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>