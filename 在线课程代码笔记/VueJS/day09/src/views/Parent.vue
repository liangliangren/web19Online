<!--父组件  -->
<template>
  <div class="parent">
    <h2>父组件</h2>
    <Common title="parent组件中的title数据123456" />
    <!-- 在子组件中 Common 通过props 对象形式绑定一个
            props: {
                title: String
            }
         在父组件中Parent 中使用子组件的时候 直接定数据 
         <Common title="parent组件中的title数据123456" />
    -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Common from "./Common.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Common
  },
  data() {
    //这里存放数据
    return {
      msg: "hello"
    };
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>