

<template>
<el-dialog title="查看报价" width="90%" :close-on-click-modal="false" :visible.sync="visible">
 
    <h3 class="table-title">自营2019年200号(银行理财)报价</h3>
    <div class="table-title">报价时间：2019-12-22 12:22:22</div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>询价表单：</span>
      </div>
      <el-table :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}" border stripe highlight-current-row="true" style="width: 100%">
        <el-table-column align="center"  prop="date" label="投资形式"></el-table-column>
        <el-table-column align="center"  prop="name" label="开展日期"></el-table-column>
        <el-table-column align="center"  prop="address" label="开展规模(亿元)"></el-table-column>
        <el-table-column align="center"  prop="address" label="投资期限"></el-table-column>
        <el-table-column align="center"  prop="address" label="产品类型"></el-table-column>
      </el-table>
    </el-card>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>报价表单：</span>
      </div>
      <el-tabs type="border-card">
        <el-tab-pane label="报价汇总">
          <el-table
            :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
            border
            stripe
            highlight-current-row="true"
            style="width: 100%"
          >
            <el-table-column align="center"  type="index" width="50" label="序号"></el-table-column>
            <el-table-column align="center"  prop="date" label="投资形式"></el-table-column>
            <el-table-column align="center"  prop="name" label="报价银行"></el-table-column>
            <el-table-column align="center"  prop="address" label="规模上限
(亿元)"></el-table-column>
            <el-table-column align="center"  prop="address" label="投资期限
(天)"></el-table-column>
            <el-table-column align="center"  prop="address" label="预计到期收益
（元）"></el-table-column>
            <el-table-column align="center"  prop="address" label="预期收益率
（%）"></el-table-column>
            <el-table-column align="center"  prop="address" label="产品类型"></el-table-column>
            <el-table-column align="center"  prop="address" label="风险级别"></el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="报价箱单">
          <el-table
            :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
            border
            stripe
            highlight-current-row="true"
            style="width: 100%"
          >
            <el-table-column align="center"  type="index" width="50" label="序号"></el-table-column>
            <el-table-column align="center"  prop="date" label="投资形式"></el-table-column>
            <el-table-column align="center"  prop="name" label="报价银行"></el-table-column>
            <el-table-column align="center"  prop="address" label="规模上限
(亿元)"></el-table-column>
            <el-table-column align="center"  prop="address" label="询价期限"></el-table-column>

            <el-table-column align="center"  prop="address" label="投资要素">
              <el-table-column align="center"  prop="address" label="投资期限
(天)"></el-table-column>
              <el-table-column align="center"  prop="address" label="开始日"></el-table-column>
              <el-table-column align="center"  prop="address" label="到期日"></el-table-column>
              <el-table-column align="center"  prop="address" label="预期收益率
（%）"></el-table-column>
              <el-table-column align="center"  prop="address" label="收益计算方式"></el-table-column>
              <el-table-column align="center"  prop="address" label="到期收益(元)"></el-table-column>
            </el-table-column>
            <el-table-column align="center"  prop="address" label="募集期">
              <el-table-column align="center"  prop="address" label="开始日"></el-table-column>
              <el-table-column align="center"  prop="address" label="截止日"></el-table-column>
              <el-table-column align="center"  prop="address" label="利率"></el-table-column>
            </el-table-column>

            <el-table-column align="center"  prop="address" label="开始日"></el-table-column>
            <el-table-column align="center"  prop="address" label="截止日"></el-table-column>
            <el-table-column align="center"  prop="address" label="利率"></el-table-column>
            <el-table-column align="center"  prop="address" label="产品类型"></el-table-column>

            <el-table-column align="center"  prop="address" label="风险级别"></el-table-column>
          </el-table>
          <el-table-column align="center"  prop="address" label="历史发行情况">
            <el-table-column align="center"  prop="address" label="是否存在未兑付情况"></el-table-column>
            <el-table-column align="center"  prop="address" label="是否存在预期收益"></el-table-column>
          </el-table-column>
        </el-tab-pane>
      </el-tabs>
    </el-card>
   
</el-dialog>
</template>

<script>
export default {
  data() {
    return {
      visible: false, title:"添加",
      disabled:false,
      btn:"提交",
      aproveVisible: false,
      model: {},
      tableData3: [
        {
          date: "自营投资",
          name: "2019-01-11",
          address: "60"
        }
      ]
    };
  },
  created() {},
  activated() {},
  methods: {
    // 初始化
    init(id) {
      this.visible = true;
      let self = this;
      if (id) {
        let model = self.model;
        var obj = {
          url: this.$url.workflowdef.getList,
          data: model
        };
        this.common.httpPost(obj, success);
        function success(data) {
          self.model = result;
          self.$refs.form.resetFields();
        }
      }
    },
     
    doAprove() {
      let self = this;
      self.$refs["form"].validate(valid => {
        if (valid) {
          this.aproveVisible = true;
          this.$nextTick(() => {
            this.$refs.aproveForm.init(null);
          });
        } else {
          
          return false;
        }
      });
    },
    dataFormSubmit() {
      let self = this;
      let model = self.model;
      var obj = {
        url: this.$url.workflowdef.getList,
        data: model
      };
      this.common.httpPost(obj, success);
      function success(data) {
        self.list = data.data.rows;
        self.total = data.data.total;
      }
    }
  }
};
</script>
