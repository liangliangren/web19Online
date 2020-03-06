<template>
  <div class="about">
    <Nav />
    <h1>about组件---》获取state中定义的num数据</h1>
    <h2>{{this.$store.state.num}}</h2>
    <br />
    <button @click="changeStateNum">改变state中的值</button>
    <br />
    <button @click="changeFn">改变state中的值</button>
  </div>
</template>
<script>
import Nav from "@/components/Nav.vue";
export default {
  name: "about",
  components: {
    Nav
  },
  methods: {
    changeStateNum() {
      //这个方法改变state中的num
      //用methods中定义的方法来提交mutations中定义的方法，通过commit() 来提交
      this.$store.commit("addNum");
    },
    changeFn() {
      this.$store.commit("addFn", 5); //addFn是mutations中定义的方法，5是addFn中的data参数
    }
  },
  mounted() {
    console.log(this);
  }
};
</script>