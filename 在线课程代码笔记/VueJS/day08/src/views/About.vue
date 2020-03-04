<template>
  <div class="about">
    <ul>
      <li v-for="listData in listDatas" :key="listData.id">
        <a href>{{listData.title}}</a>
      </li>
    </ul>

    <ul class="list">
      <li v-for="productList in productLists" :key="productList.id">
        <a href>{{productList.category}}</a>
        <ol>
          <li v-for="list in productList.lists" :key="list.id">
            <a href>{{list.title}}</a>
          </li>
        </ol>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      listDatas: [
        {
          id: 1,
          title: "标题1"
        },
        {
          id: 2,
          title: "标题2"
        },
        {
          id: 3,
          title: "标题3"
        },
        {
          id: 4,
          title: "标题4"
        }
      ],
      productLists: [
        {
          id: 1,
          category: "家用电器",
          lists: [
            {
              id: 100001,
              title: "平板电视"
            },
            {
              id: 100002,
              title: "冰箱"
            },
            {
              id: 100003,
              title: "洗衣机"
            }
          ]
        },
        {
          id: 2,
          category: "手机数码",
          lists: [
            {
              id: 200001,
              title: "华为手机"
            },
            {
              id: 200002,
              title: "小米手机"
            },
            {
              id: 200003,
              title: "苹果手机"
            }
          ]
        },
        {
          id: 3,
          category: "图书影像",
          lists: [
            {
              id: 300001,
              title: "小说"
            },
            {
              id: 300002,
              title: "漫画"
            },
            {
              id: 300003,
              title: "音乐"
            }
          ]
        }
      ]
    };
  },
  methods: {}, //定义方法
  computed: {}, //计算属性
  watch: {}, //监视
  beforeCreate() {}, //生命周期 - 创建之前
  created() {}, //生命周期 - 创建之后
  beforeMount() {}, //生命周期 - 挂载之前
  mounted() {}, //生命周期 - 挂载之后
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  filters: {}, //定义私有过滤器
  directives: {} //定义私有指令
};
</script>
<style lang="less" scoped>
// lang="less"  配置css的书写规则
// scoped   作用域，如果添加上这个属性，那么style中的样式只能在该组件中有效
ul {
  li {
    list-style: none;
  }
}
</style>
