<!-- soss样式 -->
<template>
  <div class="box">
    <h2>Scss组件</h2>
    <h3>标题h3</h3>
    <h4>标题h4</h4>
    <h5>标题h5</h5>
    <ul>
      <li>
        <a href>我是一个超链接</a>
      </li>
    </ul>
    <div class="pox">pox盒子</div>
    <div class="nav">
      <div class="item">nav中的item1</div>
      <div class="item">nav中的item2</div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  }
};
</script>
<style lang='scss' scoped>
// Sass和Scss 两种文件后缀名
// Sass不使用大括号和分号
// Scss和平时写的css样式相似
$h2-color: red; //定义变量使用$,最早的scss定义变量是使用!
h2 {
  color: $h2-color; //引入变量
}
.box {
  ul {
    li {
      background: #cccccc;
      line-height: 30px;
      a {
        text-decoration: none;
        color: $h2-color;
      }
    }
  }
  h3,  //嵌套中可以使用分组选择器
  h4,
  h5 {
    color: red;
  }
  .pox {
    width: 200px;
    height: 200px;
    background: green;
    &:hover {
      //& 选择器的标示符
      background: red;
    }
  }
}

.nav {
  color: red;
  .item {
    text-decoration: underline;
  }
}
</style>