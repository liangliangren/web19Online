<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>显示state中定义的num值---{{this.$store.state.num}}</h2>
    <button @click="changeAboutNum">修改state中的num值</button>
    <button @click="changeAboutNum1">num的值每次点击改变10</button>
  </div>
</template>
<script>
export default {
  methods: {
    changeAboutNum() {
      this.$store.commit("addNum");
    },
    changeAboutNum1() {
      this.$store.commit("addNum1", 10);
    }
  }
};
</script>

