<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <Life v-if="flag" />
    <button @click="flag=!flag">挂载或者卸载生命周期组件</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Life from "./Life.vue";
export default {
  name: "Home",
  components: {
    HelloWorld,
    Life
  },
  data() {
    return {
      flag: true
    };
  }
};
</script>
