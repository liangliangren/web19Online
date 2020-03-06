<!-- 新闻详情页 -->
<template>
  <div class="newsdetail">
    <h2>新闻详情页</h2>
    <div>{{newsDetailDatas.detail}}</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  data() {
    //这里存放数据
    return {
      newsDetailDatas: {},
      listDatas: [
        {
          id: 1,
          title: "新闻标题001",
          detail: "新闻标题001的新闻详情页面数据"
        },
        {
          id: 2,
          title: "新闻标题002",
          detail: "新闻标题002的新闻详情页面数据"
        },
        {
          id: 3,
          title: "新闻标题003",
          detail: "新闻标题003的新闻详情页面数据"
        },
        {
          id: 4,
          title: "新闻标题004",
          detail: "新闻标题004的新闻详情页面数据"
        },
        {
          id: 5,
          title: "新闻标题005",
          detail: "新闻标题005的新闻详情页面数据"
        }
      ]
    };
  },
  mounted() {
    //模板编译完成
    //http://localhost:8081/#/newsdetail?id=1
    console.log(this);
    console.log(this.$route.query); //{id: "1"}
    let myId = this.$route.query.id;
    this.listDatas.map(lists => {
      if (lists.id == myId) {
        this.newsDetailDatas = lists;
      }
    });
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>