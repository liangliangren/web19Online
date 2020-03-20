<!-- 用户列表 -->
<template>
  <div class="userlist">
    <el-row>
      <el-col :span="24">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>
            <a href="/">用户列表</a>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <el-input v-model="searchuser" placeholder="请输入关键字" prefix-icon="el-icon-search"></el-input>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-button type="primary" icon="el-icon-search">搜索</el-button>
      </el-col>
      <el-col :span="3" :offset="1">
        <el-button
          type="primary"
          icon="el-icon-circle-plus-outline"
          @click="addUserDialogVisible=true"
        >添加用户</el-button>
      </el-col>
    </el-row>
    <el-table :data="userListDatas" stripe border style="width: 100%">
      <el-table-column prop="user_name" label="用户名" width="180"></el-table-column>
      <el-table-column prop="user_phone" label="手机号" width="180"></el-table-column>
      <el-table-column prop="user_address" label="地址"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 添加用户对话框 -->
    <el-dialog title="添加用户" :visible.sync="addUserDialogVisible">
      <el-form :model="addForm" ref="addForm" :rules="addRules">
        <el-form-item label="用户名" prop="user_name">
          <el-input v-model="addForm.user_name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="login_password">
          <el-input v-model="addForm.login_password" show-password placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="user_phone">
          <el-input v-model="addForm.user_phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addUserDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addUserSubmitForm('addForm')">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import tools from "../../tools/tools.js";
console.log(tools);
import Axios from "axios";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //自定义一个验证手机号
    var validatePhone = (rule, value, callback) => {
      console.log(value);
      if (value === "") {
        callback(new Error("请输入手机号"));
      } else {
        if (!tools.regPhone.test(value)) {
          callback(new Error("请输入正确的手机号"));
        }
        callback();
      }
    };
    //这里存放数据
    return {
      userListDatas: [],
      searchuser: "",
      addUserDialogVisible: false,
      addForm: {
        user_name: "",
        login_password: "",
        user_phone: ""
      },
      addRules: {
        user_name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ],
        login_password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 18, message: "长度在 6 到 18 个字符", trigger: "blur" }
        ],
        user_phone: [{ validator: validatePhone, trigger: "blur" }]
      }
    };
  },
  methods: {
    getUserList() {
      Axios.get("http://localhost:3000/api/getuserlist").then(res => {
        console.log(res);
        if (res.data.status == 1) {
          this.userListDatas = res.data.dataList;
        }
      });
    },
    addUserSubmitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          Axios.post(
            "http://localhost:3000/api/register",
            JSON.stringify(this.addForm)
          ).then(res => {
            console.log(res);
            if (res.data.status == "success") {
              this.$router.push({ path: "/" });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    handleClick(row) {
      console.log(row);
    }
  },
  mounted() {
    this.getUserList();
  }
};
</script>
<style lang="less">
.el-breadcrumb {
  margin-bottom: 20px;
}
</style>