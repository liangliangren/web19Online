<!-- 验证码 -->
<template>
  <div class="identifying">
    <canvas id="canvas" :width="contentWidth" :height="contentHeight"></canvas>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  props: {
    codeStr: {
      type: String,
      default: "1234"
    },
    fontSizeMin: {
      type: Number,
      default: 16
    },
    fontSizeMax: {
      type: Number,
      default: 40
    },
    backgroundColorMin: {
      type: Number,
      default: 180
    },
    backgroundColorMax: {
      type: Number,
      default: 240
    },
    colorMin: {
      type: Number,
      default: 50
    },
    colorMax: {
      type: Number,
      default: 150
    },
    contentWidth: {
      type: Number,
      default: 120
    },
    contentHeight: {
      type: Number,
      default: 40
    }
  },
  methods: {
    //生成一个随机数
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    //随机生成一个颜色
    randomColor(min, max) {
      let r = this.randomNum(min, max);
      let g = this.randomNum(min, max);
      let b = this.randomNum(min, max);
      //rgb(20,30,40)
      return "rgb(" + r + "," + g + "," + b + ")";
    },
    //canvas绘制图片
    drawPic() {
      //获取到画布节点
      let canvas = document.getElementById("canvas");
      //定义一个2d画布
      let oCanvas = canvas.getContext("2d");
      oCanvas.textBaseline = "bottom";
      //fillStyle 设置填充的颜色或者模式
      oCanvas.fillStyle = this.randomColor(
        this.backgroundColorMin,
        this.backgroundColorMax
      );
      //绘制一个矩形
      oCanvas.fillRect(0, 0, this.contentWidth, this.contentHeight);

      //绘制文字
      for (let i = 0; i < this.codeStr.length; i++) {
        this.drawText(oCanvas, this.codeStr[i], i);
        this.drawDot(oCanvas);
      }
    },
    drawText(oCanvas, txt, i) {
      oCanvas.fillStyle = this.randomColor(this.colorMin, this.colorMax);
      oCanvas.font =
        this.randomNum(this.fontSizeMin, this.fontSizeMax) + "px Arial";
      // console.log(i);
      let x = i * (this.contentWidth / this.codeStr.length + 1);
      let y = this.randomNum(this.fontSizeMax, this.contentHeight - 5);
      //deg为随机文字出现的旋转度数
      let deg = this.randomNum(-45, 45);
      //修改坐标的原点和旋转角度
      oCanvas.translate(x, y);
      oCanvas.rotate((deg * Math.PI) / 180);
      //fillText 绘制文本
      oCanvas.fillText(txt, 0, 0);
      //恢复原点和旋转角度
      //Math.PI/180
      oCanvas.rotate((-deg * Math.PI) / 180);
      oCanvas.translate(-x, -y);
    },
    //干扰项-绘制点
    drawDot(oCanvas) {
      for (let i = 0; i < 50; i++) {
        // console.log(i);
        oCanvas.fillStyle = this.randomColor(0, 255);
        oCanvas.beginPath(); //开始一条路径
        oCanvas.arc(
          this.randomNum(0, this.contentWidth),
          this.randomNum(0, this.contentHeight),
          1,
          0,
          2 * Math.PI
        );
        oCanvas.fill();
      }
    }
  },
  watch: {
    codeStr() {
      //codeStr为数据的属性
      this.drawPic();
    }
  },
  mounted() {
    this.drawPic();
  }
};
</script>
<style>
.identifying {
  float: right;
}
</style>