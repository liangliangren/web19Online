<!-- 生命周期-->
<template>
  <div class="life">
    <h2>生命周期组件</h2>
    <button @click="setMsg">修改msg数据</button>
    {{msg}}
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  data() {
    //这里存放数据
    return {
      msg: "llr"
    };
  },
  methods: {
    setMsg() {
      this.msg = "修改之后的数据";
      //alert("aaa");
    }
  },
  beforeCreate() {
    //实例对象创建之前，el和data并未初始化，隐藏没有办法执行methods，无法修改数据，computed没有办法使用
    console.log(this.msg); //undefined
  },
  created() {
    //实例对象创建之后,已经完成数据的初始化，el并没有，可以修改数据
    console.log(this.msg); //llr
  },
  beforeMount() {
    //模版编译之前
    //挂载开始之前被调用，methods中的方法在模版编译之前就已经执行了,完成了el和data的初始化
    //this.setMsg();
    console.log(this.msg); //llr
  },
  mounted() {
    //模版编译完成，一般可以进行ajax操作，mounted只执行一次
    //this.setMsg();
    console.log(this.msg); //llr
  },
  beforeUpdate() {
    //alert("a");
    console.log("更新之前");
  },
  updated() {
    //alert("b");
    console.log("更新之后");
    console.log(this.msg);
  },
  beforeDestroy() {
    console.log("销毁之前");
  },
  destroyed() {
    console.log("销毁之后");
  }
};
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>