<template>
  <div class="about">
    <h1>{{msg}}</h1>
    <AboutHeader ref="aboutheader" />
    <button @click="getChildDataFn">获取子组件about-header中的数据</button>
    <!-- 父组件获取子组件数据
      1.在调用子组件的时候定义一个ref属性  <AboutHeader ref="aboutheader" />
      2.在父组件中通过this.$refs.aboutheader.子组件中数据或者方法
    -->
  </div>
</template>
<script>
import AboutHeader from "./AboutHeader.vue";
export default {
  components: {
    AboutHeader
  },
  data() {
    return {
      msg: "about组件"
    };
  },
  methods: {
    getChildDataFn() {
      //console.log(this.$refs.aboutheader.msg);
      this.$refs.aboutheader.aboutFn();
    }
  }
};
</script>
