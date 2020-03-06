<template>
  <div class="about">
    <Header />
    <h1>This is an about page</h1>
    <button @click="gotodetail">通过事件跳转到aboutdetail详情页</button>
    <button @click="goproductdetail">通过事件跳转到产品详情页详情页</button>
  </div>
</template>
<script>
import Header from "./Header.vue";
export default {
  components: {
    Header
  },
  data() {
    return {};
  },
  methods: {
    gotodetail() {
      console.log(this);
      //this.$router.push("AboutDetail");
      this.$router.push({ path: "/aboutdetail" });
    },
    goproductdetail() {
      this.$router.push({ path: "/productdetail/1" });
      //需要在路由中配置动态路由参数path: '/productdetail/:pid'
    }
  }
};
</script>
