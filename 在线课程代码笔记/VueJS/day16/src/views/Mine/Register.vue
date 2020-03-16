<template>
  <div id="register">
    <header class="header">
      <a class="icon-left iconfont icon-jiantou3" onclick="window.history.back()"></a>
      <div class="title">注册</div>
    </header>
    <div class="login">
      <div class="username">
        <input type="text" name="user_name" v-model="user_name" placeholder="请输入用户名" />
      </div>
      <div class="username">
        <input type="password" name="login_password" v-model="login_password" placeholder="请输入密码" />
      </div>
      <div class="username">
        <input
          type="password"
          name="login_password_ag"
          v-model="login_password_ag"
          placeholder="请确认密码"
        />
      </div>
      <div class="username">
        <input type="button" @click="toRegister" value="注册" />
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      user_name: "",
      login_password: "",
      login_password_ag: ""
    };
  },
  methods: {
    toRegister() {
      console.log(this.user_name);
      //
      if (this.user_name == "") {
        Toast("请输入用户名");
      } else if (this.login_password == "" || this.login_password_ag == "") {
        Toast("请输入密码");
      } else if (this.login_password !== this.login_password_ag) {
        Toast("两次输入的密码不一致");
      } else {
        Axios.post("http://localhost:3000/api/register", {
          user_name: this.user_name,
          login_password: this.login_password
        }).then(res => {
          console.log(res);
          if (res.data.status == "success") {
            window.history.back();
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
  }
}
</style>