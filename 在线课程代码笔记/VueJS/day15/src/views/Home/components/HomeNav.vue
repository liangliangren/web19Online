<!-- 首页Nav组件 -->
<template>
  <div class="home-nav">
    <ul>
      <li v-for="homeNavListData in homeNavListDatas" :key="homeNavListData.id">
        <img :src="homeNavListData.imgsrc" alt />
        <span>{{homeNavListData.title}}</span>
      </li>
    </ul>
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
    return {
      homeNavListDatas: [
        {
          id: 1,
          imgsrc:
            "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792341842.png",
          title: "店铺街1"
        },
        {
          id: 2,
          imgsrc:
            "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792341842.png",
          title: "店铺街2"
        },
        {
          id: 3,
          imgsrc:
            "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792341842.png",
          title: "店铺街3"
        },
        {
          id: 4,
          imgsrc:
            "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792341842.png",
          title: "店铺街4"
        },
        {
          id: 5,
          imgsrc:
            "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792341842.png",
          title: "店铺街5"
        },
        {
          id: 6,
          imgsrc:
            "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792341842.png",
          title: "店铺街6"
        },
        {
          id: 7,
          imgsrc:
            "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792341842.png",
          title: "店铺街7"
        },
        {
          id: 8,
          imgsrc:
            "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792341842.png",
          title: "店铺街8"
        },
        {
          id: 9,
          imgsrc:
            "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792341842.png",
          title: "店铺街9"
        },
        {
          id: 10,
          imgsrc:
            "https://x.dscmall.cn/storage/data/gallery_album/108/original_img/108_P_1536792341842.png",
          title: "店铺街10"
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
.home-nav {
  width: 100%;
  ul {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
    li {
      width: 20%;
      text-align: center;
      img {
        width: 1.6rem;
        height: 1.5rem;
      }
      span {
        font-size: 0.32rem;
        display: block;
      }
    }
  }
}
</style>
