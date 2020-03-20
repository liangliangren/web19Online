<template>
  <div class="demo">
    <div>
      <el-tag
        v-for="(tag,index) in tags"
        effect="dark"
        :key="index"
        closable
        :type="tag.type"
      >{{tag.name}}</el-tag>
      <el-tag
        v-for="tag in tags"
        effect="plain"
        :key="tag.name"
        closable
        :type="tag.type"
      >{{tag.name}}</el-tag>
    </div>
    <h2>进度条</h2>
    <div class="block">
      <el-progress :percentage="50"></el-progress>
      <el-progress :percentage="100" :format="format"></el-progress>
      <el-progress :percentage="100" status="success"></el-progress>
      <el-progress :percentage="100" status="warning"></el-progress>
      <el-progress :percentage="50" status="exception"></el-progress>
    </div>
    <h2>百分比内显示</h2>
    <div>
      <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
      <el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
      <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
      <el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
    </div>
    <div>
      <el-progress type="circle" :percentage="0"></el-progress>
      <el-progress type="circle" :percentage="25"></el-progress>
      <el-progress type="circle" :percentage="100" status="success"></el-progress>
      <el-progress type="circle" :percentage="70" status="warning"></el-progress>
      <el-progress type="circle" :percentage="50" status="exception"></el-progress>
    </div>
    <h2>Tree 树形控件</h2>
    <h4>基础的树形结构展示</h4>
    <div>
      <el-tree :data="data" show-checkbox :props="defaultProps"></el-tree>
    </div>
    <h2>分页效果</h2>
    <div class="block">
      <span class="demonstration">页数较少时的效果</span>
      <el-pagination layout="prev, pager, next" :total="50"></el-pagination>
    </div>
    <div class="block">
      <span class="demonstration">大于 7 页时的效果</span>
      <el-pagination layout="prev, pager, next" :total="1000"></el-pagination>
    </div>
    <h2>设置最大页码按钮数</h2>
    <el-pagination :page-size="20" :pager-count="11" layout="prev, pager, next" :total="1000"></el-pagination>
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    <h2>Badge 标记</h2>
    <div>
      <el-badge :value="12" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="3" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>
      <el-badge :value="1" class="item" type="primary">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="2" class="item" type="warning">
        <el-button size="small">回复</el-button>
      </el-badge>
      <el-badge :value="200" :max="99" class="item">
        <el-button size="small">评论</el-button>
      </el-badge>
      <el-badge :value="100" :max="10" class="item">
        <el-button size="small">回复</el-button>
      </el-badge>

      <h2>Alert 警告</h2>
      <el-alert title="成功提示的文案" type="success"></el-alert>
      <el-alert title="消息提示的文案" type="info"></el-alert>
      <el-alert title="警告提示的文案" type="warning"></el-alert>
      <el-alert title="错误提示的文案" type="error"></el-alert>

      <h2>加载</h2>
      <el-table v-loading="loading" :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tags: [
        { name: "标签一", type: "" },
        { name: "标签二", type: "success" },
        { name: "标签三", type: "info" },
        { name: "标签四", type: "warning" },
        { name: "标签五", type: "danger" }
      ],
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      loading: false,
      data: [
        {
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: "children",
        label: "label"
      }
    };
  },
  methods: {
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    }
  }
};
</script>
<style>
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
