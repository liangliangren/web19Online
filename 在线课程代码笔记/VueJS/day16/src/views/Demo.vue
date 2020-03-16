<!--Demo 路由的传值-->
<template>
  <div class>
    <h2>路由传值形式</h2>
    <img src="@/assets/images/ad01.jpg" alt />
    <img :src="imgsrc" alt />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import img1 from "@/assets/images/ad01.jpg";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      imgsrc: img1
    };
  },
  mounted() {
    console.log(this);
    console.log(this.$route.query);
  }
};
</script>
<style lang="less">
.listimg {
  width: 100%;
  height: 10rem;
  img {
    width: 50%;
    height: 3rem;
  }
}
</style>
