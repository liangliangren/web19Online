<!-- 首页Main组件 -->
<template>
  <div class="main">
    <div class="home-news">
      <div class="home-news-img">
        <img src="@/assets/images/title-hot.png" alt />
      </div>
      <div class="home-news-list">
        <ul id="newsList">
          <li>新闻标题001</li>
          <li>新闻标题002</li>
          <li>新闻标题003</li>
          <li>新闻标题004</li>
          <li>新闻标题005</li>
        </ul>
      </div>
      <div class="home-news-more">
        更多
        <i class="iconfont icon-jiantou1"></i>
      </div>
    </div>
    <div class="ad">
      <div>
        <img src="@/assets/images/ad01.jpg" alt />
      </div>
      <div>
        <img src="@/assets/images/ad02.jpg" alt />
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import $ from "jquery";
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {};
  },
  methods: {
    moveNewsList() {
      //console.log($);
      $("#newsList").animate(
        {
          top: "-1.3rem"
        },
        500,
        function() {
          $(this).css({ top: 0 });
          $("#newsList")
            .find("li:first")
            .appendTo($("#newsList"));
        }
      );
    }
  },
  mounted() {
    var that = this;
    setInterval(function() {
      that.moveNewsList();
    }, 5000);
  }
};
</script>
<style lang="less">
.home-news {
  width: 100%;
  display: flex;
  height: 1.3rem;
  line-height: 1.3rem;
  background: #efefef;
  margin-top: 15px;
  overflow: hidden;
  .home-news-img {
    width: 10%;
    img {
      height: 0.9rem;
      margin-top: 0.2rem;
      margin-left: 10px;
    }
  }
  .home-news-list {
    width: 75%;
    position: relative;
    ul {
      position: absolute;
      width: 100%;
      top: 0rem;
      li {
        font-size: 0.37rem;
        margin-left: 20px;
      }
    }
  }
  .home-news-more {
    width: 15%;
    font-size: 0.37rem;
    margin-right: 10px;
  }
}
.ad {
  display: flex;
  div {
    widows: 50%;
    img {
      width: 100%;
    }
  }
}
</style>
