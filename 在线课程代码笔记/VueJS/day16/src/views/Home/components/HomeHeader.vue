<!-- 首页头部组件 -->
<template>
  <div class="home-header" id="header">
    <header class="header">
      <a href class="icon-left">111</a>
      <form>
        <i class="iconfont icon-sousuo"></i>
        <input type="search" placeholder="点击搜索" @click="gotoSearch" />
      </form>
      <a href>登录</a>
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
  methods: {
    gotoSearch() {
      console.log(this);
      this.$router.push("/search");
    }
  }
};
</script>
<style lang="less">
.home-header {
  width: 100%;
  height: 1.3rem;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  background-image: linear-gradient(180deg, rgba(0, 0, 0, 0.8), transparent);
  z-index: 9999;
  .header {
    display: flex;
    form {
      width: 70%;
      position: relative;
      input {
        width: 100%;
        position: relative;
        height: 0.9rem;
        border-radius: 0.9rem;
        border: none;
        outline: none;
        top: 0.1rem;
        text-indent: 0.8rem;
      }
      i {
        position: absolute;
        z-index: 999;
        top: 38%;
        left: 0.3rem;
        color: #999;
      }
    }
    a {
      display: block;
      width: 15%;
      font-size: 0.37rem;
      line-height: 1.3rem;
      color: #fff;
    }
  }
}
</style>
