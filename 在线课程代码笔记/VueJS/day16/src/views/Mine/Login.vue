<!-- 登录组件 -->
<template>
  <div id="login">
    <header class="header">
      <a class="icon-left iconfont icon-jiantou3" onclick="window.history.back()"></a>
      <div class="title">登录</div>
    </header>
    <div class="login">
      <div class="username">
        <input type="text" name="user_name" v-model="user_name" placeholder="请输入用户名" />
      </div>
      <div class="username">
        <input type="password" name="login_password" v-model="login_password" placeholder="请输入用户名" />
      </div>
      <div class="username">
        <input type="button" @click="toLogin" value="登录" />
      </div>
      <div class="username">
        <router-link to="/register">去注册</router-link>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Axios from "axios";
import { MessageBox, Toast } from "mint-ui";
export default {
  data() {
    //这里存放数据
    return {
      user_name: "",
      login_password: ""
    };
  },
  methods: {
    toLogin() {
      if (this.user_name == "") {
        MessageBox("提示", "请输入用户名");
      } else if (this.login_password == "") {
        Toast("请输入密码");
      } else {
        console.log(this.user_name);
        Axios.post("http://localhost:3000/api/login", {
          user_name: this.user_name,
          login_password: this.login_password
        }).then(res => {
          console.log(res);
          if (res.data.status == "-1") {
            Toast(res.data.msg);
          } else if (res.data.status == "-2") {
            Toast(res.data.msg);
          } else if (res.data.status == 1) {
            this.$router.push("/home");
          }
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
.header {
  width: 100%;
  height: 1.3rem;
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  background: #fff;
  border-bottom: 1px solid #efefef;
  z-index: 9999;
  line-height: 1.3rem;
  a {
    width: 10%;
    display: block;
    text-align: center;
  }
  .title {
    width: 100%;
    height: 1.3rem;
    font-size: 0.37rem;
    text-align: center;

    position: absolute;
    top: 0px;
    left: 0;
  }
}
.login {
  margin-top: 2rem;
  width: 100%;
  .username {
    width: 90%;
    margin: 20px 0;
    input {
      width: 100%;
      margin-left: 5%;
      height: 44px;
      border: 1px solid #cccccc;
      outline: none;
      text-indent: 10px;
    }
    a {
      width: 100%;
      margin-left: 5%;
      height: 44px;
      text-decoration: underline;
      font-size: 0.37rem;
    }
  }
}
</style>
