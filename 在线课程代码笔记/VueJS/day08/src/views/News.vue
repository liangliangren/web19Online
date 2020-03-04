<!--  -->
<template>
  <div class="news">
    <h2>我是新闻组件</h2>
    <div class="box">直接添加样式</div>
    <div :class="{'box':true,'red':true}">此处的box是定义的样式类名</div>
    <div :class="['red','box']">数组中放置样式类名</div>
    <div :class="{'box':3>2}">用到条件表达式</div>

    <div style="width:200px;height:200px;background:red">直接添加style样式</div>
    <div :style="[ostyle,fcolor]">我是绑定的style</div>
    <div class="cox" :style="{'width':owidth+'px'}"></div>

    <input type="text" v-model="msg" />
    <div>{{msg}}</div>

    <input type="text" ref="user" />
    <div ref="text">text盒子</div>
    <button @click="getUser">获取输入框中的值</button>
    <!-- ref 给元素上面设置ref="abc"属性，可以通过 this.$refs.abc 获取对应的节点 -->

    <button @click="changeMsg">修改data中的msg</button>
    <div>{{msg}}</div>
    <button data-pid="123" @click="eventFn($event)">获取自定义的data属性的值</button>
    <!-- e.srcElement 可以获取绑定事件的dom -->
    <!-- e.srcElement.dataset.pid 可以通过事件对象获取自定的data属性值 -->
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  data() {
    //这里存放数据
    return {
      msg: "hello-新闻组件",
      ostyle: { width: "200px", height: "200px", background: "yellow" },
      fcolor: { color: "red" },
      owidth: 500
    };
  },
  methods: {
    getUser() {
      console.log(this.$refs.text.innerHTML);
      console.log(this.$refs.user.value);
      this.$refs.text.innerHTML = this.$refs.user.value;
    },
    changeMsg() {
      this.msg = "修改后的msg";
    },
    eventFn(e) {
      console.log(e.srcElement); //获取绑定事件的DOM元素
      e.srcElement.style.background = "red";
      console.log(e.srcElement.dataset.pid);
    }
  }
};
</script>
<style lang='less' scoped>
.red {
  color: red;
}
.blue {
  color: blue;
}
.box {
  height: 200px;
  width: 200px;
  background: green;
  margin: 20px;
}
.cox {
  height: 200px;
  width: 200px;
  background: green;
  margin: 20px;
}
</style>