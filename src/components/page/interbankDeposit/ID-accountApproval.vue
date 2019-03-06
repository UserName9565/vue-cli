<template>
  <!-- 台账操作审批 -->
  <div>
    <el-card class="mb20">
      <el-form :inline="true" @keyup.enter.native="doSearch()">
        <el-row>
          <el-col :span="8">
            <el-form-item label="编号">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="处理状态">
              <el-select v-model="form.region" placeholder="请选择">
                <el-option key="0" label="全部" value="0"></el-option>
                <el-option key="1" label="未处理" value="1"></el-option>
                <el-option key="2" label="已处理" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="24" class="btn-box">
            <el-form-item>
              <el-button @click="doSearch()" icon="el-icon-search" type="primary">查询</el-button>
              <el-button icon="el-icon-plus" type="primary" @click="doNew()">查看流程</el-button>
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
        <el-table-column align="center" prop="date" label="审批ID"></el-table-column>
        <el-table-column align="center" prop="name" label="编号"></el-table-column>
        <el-table-column align="center" prop="address" label="业务编号"></el-table-column>
        <el-table-column align="center" prop="address" label="申请人"></el-table-column>
        <el-table-column align="center" prop="address" label="最终审核人"></el-table-column>
        <el-table-column align="center" prop="address" label="审批状态"></el-table-column>
        <el-table-column align="center" prop="address" label="处理状态"></el-table-column>
        <el-table-column align="center" fixed="left" label="操作" width="80">
          <template slot-scope="scope">
            <el-button @click="doEdit(scope.row)" type="text" size="mini">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          :current-page.sync="form.pageNo"
          background
          @current-change="handleCurrentChange"
          layout="total,prev, pager, next,jumper"
          :total="pageTotal"
          :page-size="form.pageSize"
        ></el-pagination>
      </div>
    </el-card>

    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form>
  </div>
</template>

<script>
import EditForm from "./ID-accountApprovalWin/edit";
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
    doSearch() {
      this.$refs.searchReulstList.refresh();
    }
  }
};
</script>
