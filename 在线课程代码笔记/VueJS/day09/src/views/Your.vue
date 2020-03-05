<!-- your组件 -->
<template>
  <div class="your">
    <h2>Your组件</h2>
    <button @click="emitMine()">给Mine组件广播数据</button>
    <div>接收mine组件的数据:{{msg}}</div>
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
      msg: "Your组件中的数据"
    };
  },
  methods: {
    emitMine() {
      //广播数据
      //$emit(自定的事件,数据)
      VueEvent.$emit("to-mine", this.msg);
    }
  },
  mounted() {
    //接收Mine组件广播出来的数据
    VueEvent.$on("to-your", data => {
      console.log(data);
      this.msg = data;
    });
  }
};
</script>
<style lang='scss' scoped>
.your {
  width: 300px;
  height: 150px;
  background: #ccc;
}
</style>