<template>
  <div>
    <el-card class="mb20">
      <el-form :inline="true" @keyup.enter.native="doSearch(1)">
        <el-row>
          <el-col :span="8">
            <el-form-item label="发行银行">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option key="0" label="全部" value="0"></el-option>
                <el-option key="1" label="未处理" value="1"></el-option>
                <el-option key="2" label="已处理" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="是否到期">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option key="0" label="全部" value="0"></el-option>
                <el-option key="1" label="未处理" value="1"></el-option>
                <el-option key="2" label="已处理" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24" class="btn-box">
            <el-form-item>
              <el-button @click="doSearch(1)" icon="el-icon-search" type="primary">查询</el-button>
              <el-button icon="el-icon-plus" type="primary" @click="doNew()">导出台账</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
    <el-card>
      <el-table
        :data="tableData3"
        :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
        border
        stripe
        highlight-current-row="true"
        style="width: 100%"
      >
      <el-table-column align="center" type="index" label="操作人"></el-table-column>
        <el-table-column align="center" prop="date" label="审核状态"></el-table-column>
        <el-table-column align="center" type="index" label="编号"></el-table-column>
        <el-table-column align="center" prop="date" label="业务编号"></el-table-column>
        <el-table-column align="center" prop="name" label="存单简称"></el-table-column>
        <el-table-column align="center" prop="address" label="委托方"></el-table-column>
        <el-table-column align="center" type="index" label="规模(亿元)"></el-table-column>
        <el-table-column align="center" prop="date" label="预期收益率(%)"></el-table-column>


        <el-table-column align="center" prop="name" label="交易对手"></el-table-column>
        <el-table-column align="center" prop="address" label="投资开始日"></el-table-column>
        <el-table-column align="center" prop="address" label="投资到期日"></el-table-column>
        <el-table-column align="center" prop="address" label="投资期限(天)"></el-table-column>
        <el-table-column align="center" type="index" label="产品类别"></el-table-column>
        <el-table-column align="center" prop="date" label="风险级别"></el-table-column>
        <el-table-column align="center" prop="name" label="收益匡算(元)"></el-table-column>

        <el-table-column align="center" prop="address" label="手续费收入(元)"></el-table-column>
        <el-table-column align="center" prop="address" label="预期投资净收益(元)"></el-table-column>
        <el-table-column align="center" prop="address" label="投资财务公司扣款日"></el-table-column>
        <el-table-column align="center" prop="address" label="投资补息天数(天)"></el-table-column>
        <el-table-column align="center" prop="address" label="投资手工补息日"></el-table-column>
        <el-table-column align="center" prop="address" label="到期银行清算日"></el-table-column>
        <el-table-column align="center" prop="address" label="到期收益(元)"></el-table-column>
        <el-table-column align="center" prop="address" label="到期手续费收入(元)"></el-table-column>
        <el-table-column align="center" prop="address" label="到期投资净收益(元)"></el-table-column>
        <el-table-column align="center" prop="address" label="到期财务公司清算日"></el-table-column>
        <el-table-column align="center" prop="address" label="到期补息天数"></el-table-column>
        <el-table-column align="center" prop="address" label="到期手工补息日"></el-table-column>
        <el-table-column align="center" prop="address" label="投向说明"></el-table-column>
        <el-table-column align="center" prop="address" label="协议编号"></el-table-column>
        <el-table-column align="center" prop="address" label="合同编号"></el-table-column>
        <el-table-column align="center" prop="address" label="合同名称"></el-table-column>
        <el-table-column align="center" prop="address" label="产品编码"></el-table-column>
        <el-table-column align="center" prop="address" label="签订日期"></el-table-column>
        <el-table-column align="center" fixed="left" label="操作" width="80">
          <template slot-scope="scope">
            <el-button @click="doEdit(scope.row)" type="text" size="mini">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          :current-page.sync="form.page"
          background
          @current-change="handleCurrentChange"
          layout="total,prev, pager, next,jumper"
          :total="pageTotal"
          :page-size="form.rows"
        ></el-pagination>
      </div>
    </el-card>

    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form><aprove-step v-if="AproveStepVisible" ref="aproveStep"></aprove-step>
  </div>
</template>

<script>
import EditForm from "./EI-businessPlanManagWin/edit";
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
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙"
        }
      ],
      selectedRows: []
    };
  },

  components: {
    EditForm
  },
  methods: {
    doNew() {
      this.$router.push("EI-addBusinessPlanManag");
      // this.editFormVisible = true;
      // this.$nextTick(() => {
      //   this.$refs.editForm.init(null);
      // });
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
