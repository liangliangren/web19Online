<!-- 登录页面 -->
<template>
  <div class="login-wrap">
    <el-form ref="loginUser" :rules="rules" :model="loginUser" class="container">
      <el-form-item class="logo">
        <img src="../assets/logo.png" alt />
      </el-form-item>
      <el-form-item prop="user_name">
        <el-input v-model="loginUser.user_name" placeholder="用户名"></el-input>
      </el-form-item>
      <el-form-item prop="login_password">
        <el-input v-model="loginUser.login_password" show-password placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item prop="validate">
        <el-input v-model="loginUser.validate" class="validate" placeholder="验证码"></el-input>
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
import Code from "./Code.vue";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    Code
  },
  data() {
    //这里存放数据
    //Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可
    return {
      codeDatas: "1234567890",
      codeData: "5678",
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
            message: "请输入验证码",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
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