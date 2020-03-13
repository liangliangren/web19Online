<!-- 公共底部组件 -->
<template>
  <div class="footer" id="footer">
    <ul>
      <router-link to="/home" tag="li">
        <div class="navimg">
          <i class="iconfont icon-shouye2" v-if="active==='home'"></i>
          <i class="iconfont icon-1" v-else></i>
        </div>
        <span>首页</span>
      </router-link>
      <router-link to="/category/858" tag="li">
        <div class="navimg">
          <i class="iconfont icon-leimupinleifenleileibie2" v-if="active==='category'"></i>
          <i class="iconfont icon-leimupinleifenleileibie" v-else></i>
        </div>
        <span>分类</span>
      </router-link>
      <router-link to="/search" tag="li">
        <div class="navimg">
          <i class="iconfont icon-sousuo2" v-if="active==='search'"></i>
          <i class="iconfont icon-sousuo2" v-else></i>
        </div>
        <span>搜索</span>
      </router-link>
      <router-link to="/cart" tag="li">
        <div class="navimg">
          <i class="iconfont icon-gouwucheman" v-if="active==='cart'"></i>
          <i class="iconfont icon-gouwuche" v-else></i>
        </div>
        <span>购物车</span>
      </router-link>
      <router-link to="/mine" tag="li">
        <div class="navimg">
          <i class="iconfont icon-wodedangxuan" v-if="active==='mine'"></i>
          <i class="iconfont icon-wode" v-else></i>
        </div>
        <span>我的</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  data() {
    //这里存放数据
    return {
      active: "home"
    };
  },
  mounted() {
    //生命周期模板编译完成
    console.log(this.$route.path); //"/category"
    this.active = this.$route.path.slice(1);
  }
};
</script>
<style lang="less">
@import "../styles/foot.less";
.router-link-active {
  color: #ff495e;
}
</style>
