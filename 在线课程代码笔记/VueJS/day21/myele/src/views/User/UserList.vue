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
      <el-table-column fixed="right" label="操作" width="220">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="info" size="small">查看</el-button>
          <el-button type="primary" size="small" @click="handleEditUser(scope.row)">编辑</el-button>
          <el-button type="danger" size="small" @click="handleDeleteUser(scope.row)">删除</el-button>
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
    <!-- 查看用户信息对话框 -->
    <!-- userInfoDialogVisible 在data中定义数据 false 隐藏对话框 -->
    <el-dialog title="查看用户信息" :visible.sync="userInfoDialogVisible">
      <el-card class="box-card">
        <div>{{userInfoDatas.user_name}}</div>
        <div>{{userInfoDatas.user_phone}}</div>
        <div>{{userInfoDatas.user_address}}</div>
        <div>{{userInfoDatas.user_photo}}</div>
      </el-card>
    </el-dialog>
    <!-- 修改用户信息对话框 -->
    <el-dialog title="修改用户" :visible.sync="editUserDialogVisible">
      <el-form :model="editForm" ref="addForm" :rules="addRules">
        <el-form-item label="用户名" prop="user_name">
          <el-input v-model="editForm.user_name" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="手机号" prop="user_phone">
          <el-input v-model="editForm.user_phone" placeholder="请输入手机号"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editUserDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="editUserSubmitForm('addForm')">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 分页 -->
    <el-row>
      <el-col :span="24">
        <el-pagination
          @current-change="handleCurrentChange"
          :current-page="page.pageindex"
          :page-size="page.pagesize"
          layout="total,  prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </el-col>
    </el-row>
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
      total: 0,
      page: {
        pageindex: 1,
        pagesize: 10
      },
      addUserDialogVisible: false,
      userInfoDialogVisible: false,
      editUserDialogVisible: false,
      userInfoDatas: {},
      addForm: {
        user_name: "",
        login_password: "",
        user_phone: ""
      },
      editForm: {
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
    // getUserList() {
    //   Axios.get("http://localhost:3000/api/getuserlist").then(res => {
    //     console.log(res);
    //     if (res.data.status == 1) {
    //       this.userListDatas = res.data.dataList;
    //     }
    //   });
    // },
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
    //查看用户信息
    handleClick(row) {
      //get传值
      Axios.get("http://localhost:3000/api/getuserinfo", {
        params: {
          id: row.user_id
        }
      }).then(res => {
        console.log(res);
        if (res.data.status == 1) {
          this.userInfoDatas = res.data.dataList[0];
          this.userInfoDialogVisible = true; //让对话框显示
        }
      });
      console.log(row);
    },
    //修改用户信息
    handleEditUser(rowEditInfo) {
      this.editUserDialogVisible = true;
      console.log(rowEditInfo);
      this.editForm = rowEditInfo;
    },
    //提交修改之后的用户信息
    editUserSubmitForm(formName) {
      // http://localhost:3000/api/edituserinfo

      this.$refs[formName].validate(valid => {
        if (valid) {
          Axios.post(
            "http://localhost:3000/api/edituserinfo",
            JSON.stringify(this.editForm)
          ).then(res => {
            console.log(res);
            if (res.data.status == 1) {
              this.editUserDialogVisible = false;
              this.$router.push({ path: "/" });
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //删除用户
    handleDeleteUser(row) {
      console.log(row);

      this.$confirm("您确定要删除该用户吗？", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          //get传值的第二种形式
          Axios.get(
            "http://localhost:3000/api/deleteuser?id=" + row.user_id
          ).then(res => {
            console.log(res);
            if (res.data.status == 1) {
              this.$message({
                type: "success",
                message: "删除成功"
              });
              this.$router.push({ path: "/" });
            }
          });
        })
        .catch(() => {
          //异常捕获
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //分页效果
    handleCurrentChange(page) {
      console.log(page);
      Axios.get(
        `http://localhost:3000/api/getuserlist?pageIndex=${page}&pageSize=${
          this.page.pagesize
        }`
      ).then(res => {
        console.log(res);
        if (res.data.status == 1) {
          this.total = res.data.datalist[0].total;
          this.userListDatas = res.data.datalist[1];
        }
      });
    }
  },
  mounted() {
    // this.getUserList();
    this.handleCurrentChange(this.page.pageindex);
  }
};
</script>
<style lang="less">
.el-breadcrumb {
  margin-bottom: 20px;
}
</style>