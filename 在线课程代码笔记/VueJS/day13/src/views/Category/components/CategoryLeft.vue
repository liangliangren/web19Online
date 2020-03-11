<!-- 分类左边  -->
<template>
  <div id="categoryLeft">
    <div class="category-left">
      <ul class="categoryNav">
        <li class="active">
          <a>家用电器-1</a>
        </li>
        <li>
          <a>家用电器-2</a>
        </li>
        <li>
          <a>家用电器-3</a>
        </li>
        <li>
          <a>家用电器-4</a>
        </li>
        <li>
          <a>家用电器-5</a>
        </li>
        <li>
          <a>家用电器6</a>
        </li>
        <li>
          <a>家用电器7</a>
        </li>
        <li>
          <a>家用电器8</a>
        </li>
        <li>
          <a>家用电器9</a>
        </li>
        <li>
          <a>家用电器10</a>
        </li>
        <li>
          <a>家用电器11</a>
        </li>
        <li>
          <a>家用电器12</a>
        </li>
        <li>
          <a>家用电器13</a>
        </li>
        <li>
          <a>家用电器14</a>
        </li>
        <li>
          <a>家用电器15</a>
        </li>
        <li>
          <a>家用电器16</a>
        </li>
        <li>
          <a>家用电器17</a>
        </li>
        <li>
          <a>家用电器18</a>
        </li>
        <li>
          <a>家用电器19</a>
        </li>
        <li>
          <a>家用电器20</a>
        </li>
        <li>
          <a>家用电器21</a>
        </li>
        <li>
          <a>家用电器22</a>
        </li>
        <li>
          <a>家用电器23</a>
        </li>
        <li>
          <a>家用电器-last</a>
        </li>
      </ul>
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
<style lang="less">
.category-left {
  height: 100%;
  width: 90px;
  background: #efefef;
  ul {
    li {
      height: 1.2rem;
      line-height: 1.2rem;
      text-align: center;
      a {
        font-size: 0.37rem;
        display: block;
      }
    }
    .active {
      background: #ffffff;
      a {
        color: #f23030;
      }
    }
  }
}
</style>
