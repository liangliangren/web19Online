<!-- 首页banner组件 -->
<template>
  <div class="home-banner" id="banner">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="homeBannerData in homeBannerDatas" :key="homeBannerData.id">
        <img :src="homeBannerData.imgsrc" alt />
      </mt-swipe-item>
    </mt-swipe>
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
    return {
      homeBannerDatas: [
        {
          id: "1",
          imgsrc:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/BIImc29YqCsOYSTnx9rCsg7l7oeubM2huJlsbxJJ.jpeg"
        },
        {
          id: "2",
          imgsrc:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/i6KLfnI0uFRJhzDj5Q4aRLFNRu3if1kEvkZUAv8D.jpeg"
        },
        {
          id: "3",
          imgsrc:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/7txm6kuxlEDKXetGsx0gZCVYIi8VJrxurSRCahDr.jpeg"
        },
        {
          id: "4",
          imgsrc:
            "https://x.dscmall.cn/storage/data/gallery_album/original_img/RsvgpE2UrCSvkUx7ChIw9aWlYmQzhXVQYGSCWN99.jpeg"
        }
      ]
    };
  },
  mounted() {
    console.log($("#banner"));
    $("#banner").css({
      height: "4.5rem"
    });
  }
};
</script>
<style lang="less">
.home-banner {
  // margin-top: 1.3rem;
  height: 4.5rem;
  img {
    width: 100%;
    height: 4.5rem;
  }
}
</style>
