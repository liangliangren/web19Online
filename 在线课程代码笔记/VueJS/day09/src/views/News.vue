<!-- 新闻组件- -->
<template>
  <div class="news">
    <h2>新闻组件-我是父组件</h2>
    <Header :title="title" :newsmsg="msg" :parentFn="parentFn" />
    <!-- 这个是news组件的子组件 
    父子组件数据传递
    //1.父组件调用子组件的时候  绑定属性title，title这个属性是子组件中通过props定义的数据
    //2.绑定的title属性值为父组件中data中的数据msg
    -->
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "./Header.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Header
  },
  data() {
    //这里存放数据
    return {
      msg: "newsmsg我是父组件news中定义的数据",
      title: "title我是很好记的方法"
    };
  },
  methods: {
    parentFn(a) {
      alert("我是父组件中的方法parentFn---" + a);
    }
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>