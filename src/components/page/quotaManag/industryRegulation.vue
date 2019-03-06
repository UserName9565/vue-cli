<template>
  <div>
    <!-- 行业监管额度占用情况 -->
    <el-card class="mb20">
      <el-form :inline="true" @keyup.enter.native="doSearch()">
        <el-row>
          <el-form-item label="数据监控时点">
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
          <el-col :span="24" class="btn-box">
            <el-button @click="doSearch()" icon="el-icon-search" type="primary">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card>
      <el-table
        :data="tableData3"
        :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
        :span-method="objectSpanMethod"
        border
        stripe
        highlight-current-row="true"
        style="width: 100%"
      >
        <el-table-column align="center" prop="compan" label="投资主体"></el-table-column>
        <el-table-column align="center" prop="pro" label="投资项目"></el-table-column>
        <el-table-column align="center" prop="used" label="已用额度">
           <template slot="header" slot-scope="scope">
             <input type="hidden" :value="scope.row">
              <span slot="reference"> 已用额度   </span>
              <el-popover
                placement="top-start"
                width="200"
                trigger="hover"
                content="已用额度：
                表示某一监控时点下，未到期的产品资金规模。即，台账中产品到期日晚于监控时点的投资项目资金规模。">
                <span slot="reference"> <i class="el-icon-warning redColor"></i> </span>
              </el-popover>
           </template>
        </el-table-column>
        <el-table-column align="center" prop="frozen" label="冻结额度">
          <template slot="header" slot-scope="scope">
             <input type="hidden" :value="scope.row">
              <span slot="reference"> 冻结额度   </span>
              <el-popover
                placement="top-start"
                width="200"
                trigger="hover"
                content="冻结额度：
    用于方案在额度校验操作时，监控时点下，投资项目的资金规模占用情况。
冻结额度发生在，方案校验额度通过后产生，持续至方案执行并审批通过后，释放并转化为已用额度。">
                <span slot="reference"> <i class="el-icon-warning redColor"></i> </span>
              </el-popover>
           </template>
        </el-table-column>
        <el-table-column align="center" prop="total" label="监管总额度">
          <template slot="header" slot-scope="scope">
             <input type="hidden" :value="scope.row">
              <span slot="reference"> 监管总额度   </span>
              <el-popover
                placement="top-start"
                width="200"
                trigger="hover"
                content="根据规定：
1、投资项目为银行理财、债券投资、货币基金，其投资额度不允许超过监管额度；
2、其余投资项目，在超额预警提示下，仍可进行投资，不做严格控制。但会同时告知风控部门，由双方自行商议解决。">
                <span slot="reference"> <i class="el-icon-warning redColor"></i> </span>
              </el-popover>
           </template>
        </el-table-column>
        <el-table-column align="center" prop="surplus" label="剩余额度">
          <template slot="header" slot-scope="scope">
             <input type="hidden" :value="scope.row">
              <span slot="reference"> 剩余额度   </span>
              <el-popover
                placement="top-start"
                width="200"
                trigger="hover"
                content="剩余额度：
    监控时点下：
剩余额度=监管总额度-已用额度-冻结额度 ">
                <span slot="reference"> <i class="el-icon-warning redColor"></i> </span>
              </el-popover>
           </template>
        </el-table-column>
      </el-table>
      <div class="font" style="margin-top:10px">
        <p >*非存款类金融机构包括基金公司、证券公司、信托公司、金融租赁公司</p>
        <p>*广义信贷为银行理财+债券投资+货币基金+同业拆借(非存款类)+质押式逆回购(非存款类)</p>   
      </div>
    </el-card>
    <!-- <t-grid ref="searchReulstList" :options="gridOptions" @selection-change="handleSelectionChange">
    </t-grid>-->
    <!-- 弹窗, 新增 / 修改 -->
    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form>
  </div>
</template>

<script>
// import moment from 'moment';
// //import util from '@/util'
export default {
  data() {
    return {
      editFormVisible: true,
      adminChangePasswordFormVisible: false,
      importExcelVisible: false,
      importExcelService: "",
      pageTotal: 0,
      form: {
        searchKey: "",
        region: "",
        status: "",
        pageNo: "",
        pageSize: ""
      },
      tableData3: [
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen: "111.02",
          total: "119",
          surplus: "11"
        },
        {
          compan: "财务公司",
          pro: "债券投资",
          used: "110",
          frozen: "111.02",
          total: "119",
          surplus: "11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen: "111.02",
          total: "119",
          surplus: "11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen: "111.02",
          total: "119",
          surplus: "11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen: "111.02",
          total: "119",
          surplus: "11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen: "111.02",
          total: "119",
          surplus: "11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen: "111.02",
          total: "119",
          surplus: "11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen: "111.02",
          total: "119",
          surplus: "11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen: "111.02",
          total: "119",
          surplus: "11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen: "111.02",
          total: "119",
          surplus: "11"
        },
        {
          compan: "集团公司",
          pro: "银行理财",
          used: "110",
          frozen: "111.02",
          total: "119",
          surplus: "11"
        },
        {
          compan: "集团公司",
          pro: "银行理财",
          used: "110",
          frozen: "111.02",
          total: "119",
          surplus: "11"
        },
        {
          compan: "有限公司",
          pro: "银行理财",
          used: "110",
          frozen: "111.02",
          total: "119",
          surplus: "11"
        }
      ],

      column_row_offset: {
        compan: [10, 2, 1],
        pro: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        used: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        frozen: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        total: [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        surplus: [3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
      },
      now_col_row_num: {},
      now_col_offset: {},
      selectedRows: [],
      OrderIndexArr: []
    };
  },
  mounted() {
    //this.getOrderNumber()
  },
  methods: {
    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      debugger;
      if (!this.now_col_row_num[column.property]) {
        this.now_col_row_num[column.property] = Object.assign(
          [],
          this.column_row_offset[column.property]
        );
        let a = this.now_col_row_num[column.property].shift();
        this.now_col_offset[column.property] = a;
        return {
          rowspan: a,
          colspan: 1
        };
      } else if (rowIndex >= this.now_col_offset[column.property]) {
        let a = this.now_col_row_num[column.property].shift();
        this.now_col_offset[column.property] += a;
        return {
          rowspan: a,
          colspan: 1
        };
      } else {
        return {
          rowspan: 0,
          colspan: 0
        };
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
    doSearch() {
      this.$refs.searchReulstList.refresh();
    }
  }
};
</script>
