<!-- 表单 -->
<template>
  <div class="myform">
    <h2>Radio 单选框</h2>
    <el-radio v-model="radio" label="1">备选项</el-radio>
    <el-radio v-model="radio" label="2">备选项</el-radio>
    <h2>多选框组</h2>
    <el-checkbox-group v-model="checkList">
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>

    <h2>indeterminate 状态</h2>
    <el-checkbox
      :indeterminate="isIndeterminate"
      v-model="checkAll"
      @change="handleCheckAllChange"
    >全选</el-checkbox>
    <div style="margin: 15px 0;"></div>
    <el-checkbox-group
      v-model="checkedCities"
      @change="handleCheckedCitiesChange"
      :min="1"
      :max="2"
    >
      <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
    </el-checkbox-group>
    <h2>按钮样式的多选组合</h2>
    <div>
      <el-checkbox-group v-model="checkboxGroup1">
        <el-checkbox-button v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox-button>
      </el-checkbox-group>
    </div>
    <h2>带有边框</h2>
    <div>
      <el-checkbox v-model="checked1" label="备选项1" border></el-checkbox>
      <el-checkbox v-model="checked2" label="备选项2" border></el-checkbox>
    </div>
    <h2>Input 输入框</h2>
    <el-input v-model="input" placeholder="请输入内容"></el-input>
    <h2>禁用的输入框</h2>
    <el-input placeholder="请输入内容" v-model="input" :disabled="true"></el-input>
    <h2>可清空的输入框</h2>
    <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
    <h2>密码框</h2>
    <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
// const cityOptions = ["上海", "北京", "广州", "深圳"];
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      radio: "1",
      checkList: ["复选框 A", "复选框 B", "选中且禁用"],
      checkAll: false,
      checkedCities: ["北京", "广州"],
      cities: ["上海", "北京", "广州", "深圳"],
      isIndeterminate: true,
      checkboxGroup1: ["北京"],
      checked1: true,
      checked2: false,
      input: ""
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? this.cities : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length;
    }
  }
};
</script>
<style>
</style>