<template>
  <div>
    <el-card class="mb20">
      <el-form :inline="true" @keyup.enter.native="doSearch(1)">
        <el-row>
          <el-col :span="8">
            <el-form-item label="统计日期">
              <el-date-picker v-model="form.searchKey" type="date" placeholder="选择日期"></el-date-picker>
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
        <el-table-column align="center" type="index" label="序号"></el-table-column>
        <el-table-column align="center" prop="date" label="编号"></el-table-column>
        <el-table-column align="center" prop="name" label="规模（亿元）"></el-table-column>
        <el-table-column align="center" prop="address" label="预期收益率(%)"></el-table-column>
        <el-table-column align="center" prop="address" label="交易对手"></el-table-column>
        <el-table-column align="center" prop="address" label="投资开始日"></el-table-column>

        <el-table-column align="center" prop="address" label="投资到期日"></el-table-column>
        <el-table-column align="center" prop="address" label="投资期限"></el-table-column>
        <el-table-column align="center" prop="address" label="产品类型"></el-table-column>
        <el-table-column align="center" prop="address" label="风险级别"></el-table-column>
        <el-table-column align="center" prop="address" label="业务编号"></el-table-column>
        <el-table-column align="center" prop="address" label="收益匡算(元）">
          <template slot="header" slot-scope="scope">
             <input type="hidden" :value="scope.row">
              <span slot="reference"> 剩余额度   </span>
              <el-popover
                placement="top-start"
                width="200"
                trigger="hover"
                content="收益匡算 = 规模(亿)*投资天数*预期收益率*1000000000/365">
                <span slot="reference"> <i class="el-icon-warning redColor"></i> </span>
              </el-popover>
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
       <div class="tip">
        提示：请及时处理和审批台账数据，每日仅将审批通过的数据定时发送给报表系统。
      </div>
    </el-card>

    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form><aprove-step v-if="AproveStepVisible" ref="aproveStep"></aprove-step>
  </div>
</template>

<script>
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

  created() {},
  methods: {
    doNew() {
      this.$router.push("BF-addBusinessPlanManag");
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
