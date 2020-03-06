<!-- 用户组件 -->
<template>
  <div class="user">
    <h2>用户User组件</h2>
    <div class="user-content">
      <ul class="left">
        <li>
          <router-link to="/user/useradd">增加用户</router-link>
        </li>
        <li>
          <router-link to="/user/userlist">用户列表</router-link>
        </li>
      </ul>
      <div class="right">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  }
};
</script>
<style lang='scss' scoped>
.user-content {
  display: flex;
  .left {
    width: 200px;
    min-height: 500px;
    border-right: 1px solid #333;
    background: #efefef;
    text-align: center;
    li {
      line-height: 30px;
    }
  }
  .right {
    flex: 1;
    background: pink;
  }
}
</style>