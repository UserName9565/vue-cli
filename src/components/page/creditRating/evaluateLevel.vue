<template>
  <div>
    <!-- 对手授信评级  -->
    <el-card class="mb20">
      <el-form :inline="true" @keyup.enter.native="doSearch(1)">
        <el-row>
          <el-col :span="8">
            <el-form-item label="金融机构">
              <el-select v-model="form.status" placeholder="请选择">
                <el-option key="bbk" label="测试1" value="bbk"></el-option>
                <el-option key="xtc" label="测试2" value="xtc"></el-option>
                <el-option key="imoo" label="测试3" value="imoo"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="交易对手">
              <el-select v-model="form.status" placeholder="请选择">
                <el-option key="bbk" label="测试1" value="bbk"></el-option>
                <el-option key="xtc" label="测试2" value="xtc"></el-option>
                <el-option key="imoo" label="测试3" value="imoo"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="关联股东">
              <el-select v-model="form.status" placeholder="请选择">
                <el-option key="bbk" label="测试1" value="bbk"></el-option>
                <el-option key="xtc" label="测试2" value="xtc"></el-option>
                <el-option key="imoo" label="测试3" value="imoo"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24" class="btn-box">
            <el-form-item>
              <el-button @click="doSearch(1)" icon="el-icon-search" type="primary">查询</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card>
      <h3 class="table-title">信用等级及综合授信评定表</h3>
      <el-row :gutter="20">
        <el-col :offset="12" :span="11" class="titlecre label-diy">
          <el-col :span="8">
            <span>设置失效日期</span>
          </el-col>
          <el-col :span="16">
            <el-date-picker v-model="form.searchKey" type="date" placeholder="选择日期"></el-date-picker>
          </el-col>
        </el-col>
      </el-row>
      <el-table
        :data="tableData3"
        :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
        style="width: 100%"
        :cell-class-name="heilight"
      >
        <el-table-column align="center" prop="compan" label="评分项目"></el-table-column>
        <el-table-column align="center" prop="pro" label="满分"></el-table-column>
        <el-table-column align="center" prop="used" label="内容及计算公式"></el-table-column>
        <el-table-column align="center" prop="frozen" label="评分标准"></el-table-column>
        <el-table-column align="center" prop="total" label="取值(亿元)"></el-table-column>
        <el-table-column align="center" prop="surplus" label="初评分"></el-table-column>
        <el-table-column align="center" prop="surplus" label="复评"></el-table-column>
      </el-table>
    </el-card>
  </div>
</template>
<style>
.heightLine {
  background-color: #005e8c;
  color: #fff;
}
</style>

<script>
// import moment from 'moment';
// //import util from '@/util'
export default {
  data() {
    return {
      editFormVisible: true,
      adminChangePasswordFormVisible: false,
     
      
      pageTotal: 0,
      form: {
        searchKey: "",
        region: "",
        status: "",
        page: "",
        rows: ""
      },
      tableData3: [
        {
          compan: "定性分析",
          pro: "30",
          used: "",
          frozen: "",
          total: "",
          surplus: "",
          surplus1: "1"
        },
        {
          compan: "一、行业地位",
          pro: "10",
          used: "行业地位情况",
          frozen:
            "上一年度被评为全球系统重要性银行（G-SIBs）得10分；未被评为G-SIBs但期末表内外资产余额超过1.6万亿元得7-9分，低于1.6万亿元得3-6分；低于1万亿元得0-2分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "二、治理及管理水平",
          pro: "10",
          used: "公司治理、内部控制及风险管理情况",
          frozen:
            "治理及管理水平高得10分；较高得8分；一般得5分：较差得3分；可打区间分。如公司治理、内部控制或风险管理情况存在违规的，可根据行政处罚情况及对企业的影响程度进行相应扣分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "三、信誉状况",
          pro: "10",
          used: "是否存在重大违约、重大负面新闻或影响公司管理的未决事项等",
          frozen:
            "信誉好、不存在违约等负面行为得9-10分；如存在涉及企业信誉方面的行政处罚、重大违约、重大负面新闻或影响公司管理的未决事项的，可根据对企业的影响程度进行相应扣分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "定性分析",
          pro: "30",
          used: "",
          frozen: "",
          total: "",
          surplus: "",
          surplus1: "1"
        },
        {
          compan: "一、行业地位",
          pro: "10",
          used: "行业地位情况",
          frozen:
            "上一年度被评为全球系统重要性银行（G-SIBs）得10分；未被评为G-SIBs但期末表内外资产余额超过1.6万亿元得7-9分，低于1.6万亿元得3-6分；低于1万亿元得0-2分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "二、治理及管理水平",
          pro: "10",
          used: "公司治理、内部控制及风险管理情况",
          frozen:
            "治理及管理水平高得10分；较高得8分；一般得5分：较差得3分；可打区间分。如公司治理、内部控制或风险管理情况存在违规的，可根据行政处罚情况及对企业的影响程度进行相应扣分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "三、信誉状况",
          pro: "10",
          used: "是否存在重大违约、重大负面新闻或影响公司管理的未决事项等",
          frozen:
            "信誉好、不存在违约等负面行为得9-10分；如存在涉及企业信誉方面的行政处罚、重大违约、重大负面新闻或影响公司管理的未决事项的，可根据对企业的影响程度进行相应扣分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "定性分析",
          pro: "30",
          used: "",
          frozen: "",
          total: "",
          surplus: "",
          surplus1: "1"
        },
        {
          compan: "一、行业地位",
          pro: "10",
          used: "行业地位情况",
          frozen:
            "上一年度被评为全球系统重要性银行（G-SIBs）得10分；未被评为G-SIBs但期末表内外资产余额超过1.6万亿元得7-9分，低于1.6万亿元得3-6分；低于1万亿元得0-2分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "二、治理及管理水平",
          pro: "10",
          used: "公司治理、内部控制及风险管理情况",
          frozen:
            "治理及管理水平高得10分；较高得8分；一般得5分：较差得3分；可打区间分。如公司治理、内部控制或风险管理情况存在违规的，可根据行政处罚情况及对企业的影响程度进行相应扣分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "三、信誉状况",
          pro: "10",
          used: "是否存在重大违约、重大负面新闻或影响公司管理的未决事项等",
          frozen:
            "信誉好、不存在违约等负面行为得9-10分；如存在涉及企业信誉方面的行政处罚、重大违约、重大负面新闻或影响公司管理的未决事项的，可根据对企业的影响程度进行相应扣分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "定性分析",
          pro: "30",
          used: "",
          frozen: "",
          total: "",
          surplus: "",
          surplus1: "1"
        },
        {
          compan: "一、行业地位",
          pro: "10",
          used: "行业地位情况",
          frozen:
            "上一年度被评为全球系统重要性银行（G-SIBs）得10分；未被评为G-SIBs但期末表内外资产余额超过1.6万亿元得7-9分，低于1.6万亿元得3-6分；低于1万亿元得0-2分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "二、治理及管理水平",
          pro: "10",
          used: "公司治理、内部控制及风险管理情况",
          frozen:
            "治理及管理水平高得10分；较高得8分；一般得5分：较差得3分；可打区间分。如公司治理、内部控制或风险管理情况存在违规的，可根据行政处罚情况及对企业的影响程度进行相应扣分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "三、信誉状况",
          pro: "10",
          used: "是否存在重大违约、重大负面新闻或影响公司管理的未决事项等",
          frozen:
            "信誉好、不存在违约等负面行为得9-10分；如存在涉及企业信誉方面的行政处罚、重大违约、重大负面新闻或影响公司管理的未决事项的，可根据对企业的影响程度进行相应扣分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "定性分析",
          pro: "30",
          used: "",
          frozen: "",
          total: "",
          surplus: "",
          surplus1: "1"
        },
        {
          compan: "一、行业地位",
          pro: "10",
          used: "行业地位情况",
          frozen:
            "上一年度被评为全球系统重要性银行（G-SIBs）得10分；未被评为G-SIBs但期末表内外资产余额超过1.6万亿元得7-9分，低于1.6万亿元得3-6分；低于1万亿元得0-2分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "二、治理及管理水平",
          pro: "10",
          used: "公司治理、内部控制及风险管理情况",
          frozen:
            "治理及管理水平高得10分；较高得8分；一般得5分：较差得3分；可打区间分。如公司治理、内部控制或风险管理情况存在违规的，可根据行政处罚情况及对企业的影响程度进行相应扣分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "三、信誉状况",
          pro: "10",
          used: "是否存在重大违约、重大负面新闻或影响公司管理的未决事项等",
          frozen:
            "信誉好、不存在违约等负面行为得9-10分；如存在涉及企业信誉方面的行政处罚、重大违约、重大负面新闻或影响公司管理的未决事项的，可根据对企业的影响程度进行相应扣分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "定性分析",
          pro: "30",
          used: "",
          frozen: "",
          total: "",
          surplus: "",
          surplus1: "1"
        },
        {
          compan: "一、行业地位",
          pro: "10",
          used: "行业地位情况",
          frozen:
            "上一年度被评为全球系统重要性银行（G-SIBs）得10分；未被评为G-SIBs但期末表内外资产余额超过1.6万亿元得7-9分，低于1.6万亿元得3-6分；低于1万亿元得0-2分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "二、治理及管理水平",
          pro: "10",
          used: "公司治理、内部控制及风险管理情况",
          frozen:
            "治理及管理水平高得10分；较高得8分；一般得5分：较差得3分；可打区间分。如公司治理、内部控制或风险管理情况存在违规的，可根据行政处罚情况及对企业的影响程度进行相应扣分",
          total: "",
          surplus: "",
          surplus1: ""
        },
        {
          compan: "三、信誉状况",
          pro: "10",
          used: "是否存在重大违约、重大负面新闻或影响公司管理的未决事项等",
          frozen:
            "信誉好、不存在违约等负面行为得9-10分；如存在涉及企业信誉方面的行政处罚、重大违约、重大负面新闻或影响公司管理的未决事项的，可根据对企业的影响程度进行相应扣分",
          total: "",
          surplus: "",
          surplus1: ""
        }
      ],
      selectedRows: []
    };
  },
  created() {},
  methods: {
    heilight(row, column, rowIndex, columnIndex) {
      console.log(row);
      if (row.row.surplus1 == 1) {
        return "heightLine";
      }
    },
    doNew() {
      this.editFormVisible = true;
      this.$nextTick(() => {
        this.$refs.editForm.init(null);
      });
    },
    doEdit(row) {
      this.editFormVisible = true;
      this.$nextTick(() => {
        this.$refs.editForm.init("11");
      });
    },
    doAdminChangePassword(row) {
      this.adminChangePasswordFormVisible = true;

      this.$nextTick(() => {
        this.$refs.adminChangePasswordForm.init(row.name);
      });
    },
    handleSelectionChange(val) {
      this.selectedRows = val;
    },
    doBatchDelete() {
      let self = this;
      if (!self.selectedRows || self.selectedRows.length == 0) {
        self.$notify.info({
          title: "系统提示",
          message: "您没选择任何行，无法操作！"
        });
        return;
      }
      let ids = self.selectedRows.map(function(row) {
        return row.id;
      });
      self
        .$confirm(
          "此操作将永久删除" + ids.length + "个用户, 是否继续?",
          "提示",
          {
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            type: "warning"
          }
        )
        .then(() => {
          tapp.services.base_User.batchDelete(ids).then(function(result) {
            self.$notify.success({
              title: "系统删除成功",
              message: "用户信息已删除成功！"
            });
            self.$refs.searchReulstList.refresh();
          });
        });
    },
    // doExportExcel() {
    //   this.$refs.searchReulstList.exportCSV('用户列表');
    // },
    // doImportExcel() {
    //   this.importExcelVisible = true;
    //   this.$nextTick(() => {
    //     this.$refs.importExcel.show();
    //   })
    // },
    doSearch(value) {
      this.form.page = value;
    
        let self = this;
        var obj ={
          url:this.$url.workflowdef.getList,
          data:this.form
        }
        this.common.httpPost(obj,success);
        function success(data){
            
            self.list = data.data.rows
            self.total = data.data.total
           
        }
    }
  }
};
</script>
