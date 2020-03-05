<!-- 个人中心组件 -->
<template>
  <div class="mine">
    <h2>Mine个人中心组件</h2>
    <button @click="emitYour">给Your组件广播数据</button>
    <div>接收的数据:{{msg}}</div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import VueEvent from "../model/VueEvent.js"; //引入自定义模块
export default {
  data() {
    //这里存放数据
    return {
      msg: "mine组件中的数据"
    };
  },
  methods: {
    emitYour() {
      //广播数据给Your组件
      VueEvent.$emit("to-your", this.msg);
    }
  },
  mounted() {
    VueEvent.$on("to-mine", data => {
      console.log(data);
      this.msg = data;
    });
  }
};
</script>
<style lang='scss' scoped>
.mine {
  background: pink;
  width: 300px;
  height: 150px;
}
</style>