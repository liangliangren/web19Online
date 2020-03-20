<!-- 登录页面 -->
<template>
  <div class="login-wrap">
    <!-- <h2>{{navListDatas.title}}</h2> -->
    <el-form ref="loginUser" :rules="rules" :model="loginUser" class="container">
      <el-form-item class="logo">
        <img src="../assets/logo.png" alt />
      </el-form-item>
      <el-form-item prop="user_name">
        <el-input v-model="loginUser.user_name" prefix-icon="el-icon-user" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="login_password">
        <el-input
          v-model="loginUser.login_password"
          prefix-icon="el-icon-lock"
          show-password
          placeholder="密码"
        ></el-input>
      </el-form-item>
      <el-form-item prop="validate">
        <el-input
          v-model="loginUser.validate"
          prefix-icon="el-icon-lock"
          class="validate"
          placeholder="验证码"
        ></el-input>
        <div style="float:right" @click="changeCode">
          <Code :codeStr="codeData"></Code>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" class="login-btn" @click="submitForm('loginUser')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import navList from "@/data/json.json";
import Code from "./Code.vue";
import Axios from "axios";
console.log(navList);
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Code
  },
  data() {
    //这里存放数据
    //Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可
    //自定义验证码验证规则
    const validateCode = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入验证码"));
      } else {
        if (value != this.codeData) {
          callback(new Error("验证码不正确"));
        }
        callback();
      }
    };
    return {
      codeDatas: "1234567890",
      codeData: "",
      navListDatas: navList.dataListNav[0],
      loginUser: {
        user_name: "",
        login_password: "",
        validate: ""
      },
      rules: {
        user_name: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        login_password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          }
        ],
        validate: [
          {
            required: true,
            validator: validateCode,
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      console.log(this.loginUser);
      this.$refs[formName].validate(valid => {
        if (valid) {
          Axios.post(
            "http://localhost:3000/api/login",
            JSON.stringify(this.loginUser)
          ).then(res => {
            console.log(res.data);
            if (res.data.status == "-1") {
              alert("用户不存在");
            } else if (res.data.status == "-2") {
              alert("密码不正确");
            } else if (res.data.status == "1") {
              alert("登录成功");
              this.$router.push({ path: "/" });
            } else {
              alert("未知错误");
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    changeCode() {
      console.log(this.codeDatas[0]);
      this.codeData = "";
      for (let i = 0; i < 4; i++) {
        //console.log(this.randomNum(0, this.codeDatas.length));
        this.codeData += this.codeDatas[
          this.randomNum(0, this.codeDatas.length)
        ];
      }
      console.log(this.codeData);
    }
  },
  mounted() {
    this.changeCode();
  }
};
</script>
<style lang="less">
.login-wrap {
  width: 100%;
  height: 100%;
  background: #053260;
  position: fixed;
  .container {
    width: 400px;
    margin: 200px auto;
    background: #ffffff;
    padding: 0px 50px 20px;
    position: absolute;
    left: 0;
    right: 0;
    .logo {
      width: 120px;
      height: 120px;
      border: 10px solid #efefef;
      border-radius: 50%;
      overflow: hidden;
      position: relative;
      left: 50%;
      margin-left: -60px;
      margin-top: -60px;
      background: #ffffff;
      img {
        width: 100%;
      }
    }
    .validate {
      width: 260px;
    }
    .login-btn {
      width: 100%;
    }
  }
}
</style>