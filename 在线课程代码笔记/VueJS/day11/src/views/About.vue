<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{this.$store.state.num}}</h2>
    <button @click="changeNum">改变state中的数据num</button>
    <button @click="changeNumFn">改变state中的数据每次增加5</button>

    <h2>通过计算属性获取的state中的num值:{{compNum}}</h2>
    <h2>计算之后的num值：{{compGetNum}}</h2>
    <button @click="changeActNum">通过actions中定义的方法改变num</button>
    <button @click="changeActNumTen">通过actions中定义的方法改变num每次增加10</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "about组件"
    };
  },
  methods: {
    changeNum() {
      this.$store.commit("addNum");
    },
    changeNumFn() {
      this.$store.commit("addNumFn", 5);
    },
    changeActNum() {
      //提交actions中定义的方法
      this.$store.dispatch("actNum"); //actNum这个 方法是在actions中定义的
    },
    changeActNumTen() {
      this.$store.dispatch("actNumFn", 10);
    }
  },
  computed: {
    compNum() {
      //直接获取state中定义的num
      return this.$store.state.num;
    },
    //通过在vuex中定义的getters中的getNum方法来获取num值
    compGetNum() {
      return this.$store.getters.getNum;
    }
  },
  mounted() {
    //生命周期，模板编译完成
    console.log(this);
  }
};
</script>
