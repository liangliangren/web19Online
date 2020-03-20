<!-- 首页组件 -->
<template>
  <div class="home">
    <el-container>
      <el-aside width="200px">
        <div class="logo">
          <img src="@/assets/logo.png" alt />
        </div>
        <!-- :unique-opened="true" 是否只保持一个子菜单的展开 -->
        <!-- :router 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
        <el-menu
          :unique-opened="true"
          :router="true"
          default-active="/userlist"
          class="el-menu-admin"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ff0000"
        >
          <el-submenu
            :index="menuListData.path"
            v-for="menuListData in menuListDatas"
            :key="menuListData.id"
          >
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{menuListData.title}}</span>
            </template>
            <el-menu-item
              :index="menuList.path"
              v-for="menuList in menuListData.child"
              :key="menuList.id"
            >
              <i class="el-icon-menu"></i>
              <span slot="title">{{menuList.title}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
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
    return {
      menuListDatas: [
        {
          id: 1,
          title: "用户管理",
          path: "userslist",
          child: [
            {
              id: 10001,
              title: "用户列表",
              path: "userslist"
            }
          ]
        },
        {
          id: 2,
          title: "产品管理",
          path: "productlist",
          child: [
            {
              id: 20001,
              title: "产品列表",
              path: "productlist"
            },
            {
              id: 20002,
              title: "添加产品",
              path: "productadd"
            }
          ]
        },
        {
          id: 3,
          title: "分类管理",
          path: "categorylist",
          child: [
            {
              id: 30001,
              title: "类别列表",
              path: "categorylist"
            },
            {
              id: 30002,
              title: "添加分类",
              path: "categoryadd"
            }
          ]
        }
      ]
    };
  }
};
</script>
<style lang="less">
.home {
  height: 100%;
  width: 100%;
  background: #e5e5e5;
  position: absolute;
  top: 0px;
  bottom: 0px;
  .el-menu {
    border-right: 0px;
  }
  .el-menu-admin {
    min-height: 450px;
  }
  .el-container {
    height: 100%;
  }
  .el-aside {
    background: #545c64;
  }
  .el-header {
    background: #545c64;
  }
  .logo {
    width: 100px;
    height: 100px;
    border: 10px solid #333333;
    border-radius: 50%;
    overflow: hidden;
    margin: 10px auto;
    img {
      width: 100%;
    }
  }
}
</style>