<!-- 产品详情也 -->
<template>
  <div class="productdetail">
    <h2>产品详情页面</h2>
    <div>{{productDetail.detail}}</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  data() {
    //这里存放数据
    return {
      productDetail: {},
      listDatas: [
        {
          id: 1,
          title: "产品标题001",
          detail: "产品标题001详情页数据"
        },
        {
          id: 2,
          title: "产品标题002",
          detail: "产品标题002详情页数据"
        },
        {
          id: 3,
          title: "产品标题003",
          detail: "产品标题003详情页数据"
        },
        {
          id: 4,
          title: "产品标题004",
          detail: "产品标题004详情页数据"
        },
        {
          id: 5,
          title: "产品标题005",
          detail: "产品标题005详情页数据"
        }
      ]
    };
  },
  mounted() {
    console.log(this);
    console.log(this.$route.params.pid); //pid是在router文件夹中index.js配置的动态路由
    let pid = this.$route.params.pid;
    this.listDatas.map(lists => {
      if (lists.id == pid) {
        this.productDetail = lists;
      }
    });
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>