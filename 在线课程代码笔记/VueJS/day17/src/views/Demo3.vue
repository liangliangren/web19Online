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
    <h2>带 icon 的输入框</h2>
    <div class="demo-input-suffix">
      属性方式：
      <el-input placeholder="请选择日期" suffix-icon="el-icon-date" v-model="input1"></el-input>
      <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input2"></el-input>
    </div>
    <div class="demo-input-suffix">
      slot 方式：
      <el-input placeholder="请选择日期" v-model="input3">
        <i slot="suffix" class="el-input__icon el-icon-date"></i>
      </el-input>
      <el-input placeholder="请输入内容" v-model="input4">
        <i slot="prefix" class="el-input__icon el-icon-search"></i>
      </el-input>
    </div>
    <h2>文本域</h2>
    <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea"></el-input>
    <h2>可自适应文本高度的文本域</h2>
    <el-input type="textarea" autosize placeholder="请输入内容" v-model="textarea1"></el-input>
    <div style="margin: 20px 0;"></div>
    <el-input
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="请输入内容"
      v-model="textarea2"
    ></el-input>
    <h2>复合型输入框</h2>
    <div>
      <el-input placeholder="请输入内容" v-model="input1">
        <template slot="prepend">Http://</template>
      </el-input>
    </div>

    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input2">
        <template slot="append">.com</template>
      </el-input>
    </div>

    <div style="margin-top: 15px;">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <h2>不同大小的输入框</h2>
    <div class="demo-input-size">
      <el-input placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input1"></el-input>
      <el-input size="medium" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input2"></el-input>
      <el-input size="small" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input3"></el-input>
      <el-input size="mini" placeholder="请输入内容" suffix-icon="el-icon-date" v-model="input4"></el-input>
    </div>
    <h2>输入长度限制</h2>
    <el-input type="text" placeholder="请输入内容" v-model="text" maxlength="10" show-word-limit></el-input>
    <div style="margin: 20px 0;"></div>
    <el-input type="textarea" placeholder="请输入内容" v-model="textarea" maxlength="30" show-word-limit></el-input>
    <h2>计数器</h2>
    <el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
    <h2>步数</h2>
    <el-input-number v-model="num1" :step="2"></el-input-number>
    <h2>严格步数</h2>
    <h4>step-strictly属性接受一个Boolean。如果这个属性被设置为true，则只能输入步数的倍数。</h4>
    <el-input-number v-model="num" :step="2" step-strictly></el-input-number>
    <h2>精度</h2>
    <el-input-number v-model="num" :precision="2" :step="0.1" :max="10"></el-input-number>
    <h2>按钮位置</h2>
    <el-input-number v-model="num" controls-position="right" :min="1" :max="10"></el-input-number>

    <h2>Select 选择器</h2>
    <el-select v-model="value" clearable placeholder="请选择">
      <el-option
        v-for="item in selectOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <el-select v-model="value1" multiple placeholder="请选择">
      <el-option
        v-for="item in selectOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></el-option>
    </el-select>
    <h2>自定义模板</h2>
    <el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in autocities"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
        <span style="float: left">{{ item.label }}</span>
        <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
      </el-option>
    </el-select>

    <h2>级联选择器--基础用法</h2>
    <!-- :show-all-levels="false" 属性show-all-levels定义了是否显示完整的路径，将其赋值为false则仅显示最后一级 -->
    <div class="block">
      <span class="demonstration">默认 click 触发子菜单</span>
      <el-cascader
        v-model="values"
        clearable
        :show-all-levels="false"
        :options="options"
        @change="handleChange"
      ></el-cascader>
    </div>
    <h2>Slider 滑块</h2>
    <div class="block">
      <span class="demonstration">默认</span>
      <el-slider v-model="sliderValue1"></el-slider>
    </div>
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
      input: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      textarea: "",
      textarea1: "",
      textarea2: "",
      select: "",
      text: "",
      num: 1,
      num1: 1,
      selectOptions: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      values: [],
      value1: [],
      autocities: [
        {
          value: "Beijing",
          label: "北京"
        },
        {
          value: "Shanghai",
          label: "上海"
        },
        {
          value: "Nanjing",
          label: "南京"
        },
        {
          value: "Chengdu",
          label: "成都"
        },
        {
          value: "Shenzhen",
          label: "深圳"
        },
        {
          value: "Guangzhou",
          label: "广州"
        }
      ],
      options: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致"
                },
                {
                  value: "fankui",
                  label: "反馈"
                },
                {
                  value: "xiaolv",
                  label: "效率"
                },
                {
                  value: "kekong",
                  label: "可控"
                }
              ]
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航"
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航"
                }
              ]
            }
          ]
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局"
                },
                {
                  value: "color",
                  label: "Color 色彩"
                },
                {
                  value: "typography",
                  label: "Typography 字体"
                },
                {
                  value: "icon",
                  label: "Icon 图标"
                },
                {
                  value: "button",
                  label: "Button 按钮"
                }
              ]
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框"
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框"
                },
                {
                  value: "input",
                  label: "Input 输入框"
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器"
                },
                {
                  value: "select",
                  label: "Select 选择器"
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器"
                },
                {
                  value: "switch",
                  label: "Switch 开关"
                },
                {
                  value: "slider",
                  label: "Slider 滑块"
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器"
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器"
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器"
                },
                {
                  value: "upload",
                  label: "Upload 上传"
                },
                {
                  value: "rate",
                  label: "Rate 评分"
                },
                {
                  value: "form",
                  label: "Form 表单"
                }
              ]
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格"
                },
                {
                  value: "tag",
                  label: "Tag 标签"
                },
                {
                  value: "progress",
                  label: "Progress 进度条"
                },
                {
                  value: "tree",
                  label: "Tree 树形控件"
                },
                {
                  value: "pagination",
                  label: "Pagination 分页"
                },
                {
                  value: "badge",
                  label: "Badge 标记"
                }
              ]
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告"
                },
                {
                  value: "loading",
                  label: "Loading 加载"
                },
                {
                  value: "message",
                  label: "Message 消息提示"
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框"
                },
                {
                  value: "notification",
                  label: "Notification 通知"
                }
              ]
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单"
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页"
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑"
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单"
                },
                {
                  value: "steps",
                  label: "Steps 步骤条"
                }
              ]
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框"
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示"
                },
                {
                  value: "popover",
                  label: "Popover 弹出框"
                },
                {
                  value: "card",
                  label: "Card 卡片"
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯"
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板"
                }
              ]
            }
          ]
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components"
            },
            {
              value: "sketch",
              label: "Sketch Templates"
            },
            {
              value: "jiaohu",
              label: "组件交互文档"
            }
          ]
        }
      ],
      sliderValue1: 0
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
    },
    handleChange(value) {
      console.log(value);
    }
  }
};
</script>
<style>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>