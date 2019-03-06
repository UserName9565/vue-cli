<template>
  <!-- 金融数据 -->
  <div>
    <el-card class="mb20">
      <div slot="header">
        <span>存款存款利率：</span>
        <span style="float:right">更新时间：2019-01-30 11:00</span>
      </div>
      <el-table :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}" border stripe highlight-current-row="true" style="width: 100%">
        <el-table-column align="center"  prop="compan" label="活期(%)"></el-table-column>
        <el-table-column align="center"  prop="pro" label="3月定期(%)"></el-table-column>
        <el-table-column align="center"  prop="used" label="6月定期(%)"></el-table-column>
        <el-table-column align="center"  prop="frozen" label="1年定期(%)"></el-table-column>
        <el-table-column align="center"  prop="total" label="2年定期(%)"></el-table-column>
        <el-table-column align="center"  prop="surplus" label="3年定期(%)"></el-table-column>
      </el-table>
      </el-card>
      <el-card class="mb20">
      <div slot="header">
        <span>上海银行间同业拆放利率:</span>
        <span style="float:right">更新时间：2019-01-30 11:00</span>
      </div>
      <el-table :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}" border stripe highlight-current-row="true" style="width: 100%">
        <el-table-column align="center"  prop="compan" label="活期(%)"></el-table-column>
        <el-table-column align="center"  prop="pro" label="3月定期(%)"></el-table-column>
        <el-table-column align="center"  prop="used" label="6月定期(%)"></el-table-column>
        <el-table-column align="center"  prop="frozen" label="1年定期(%)"></el-table-column>
        <el-table-column align="center"  prop="total" label="2年定期(%)"></el-table-column>
        <el-table-column align="center"  prop="surplus" label="3年定期(%)"></el-table-column>
      </el-table>
    </el-card>
    <el-card>
      <div slot="header">
        <span>中债估值：  </span>
        <span style="float:right">更新时间：2019-01-30 11:00</span>
      </div>
      <el-table :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}" border stripe highlight-current-row="true" style="width: 100%">
        <el-table-column align="center"  prop="compan" label="活期(%)"></el-table-column>
        <el-table-column align="center"  prop="pro" label="3月定期(%)"></el-table-column>
        <el-table-column align="center"  prop="used" label="6月定期(%)"></el-table-column>
        <el-table-column align="center"  prop="frozen" label="1年定期(%)"></el-table-column>
        <el-table-column align="center"  prop="total" label="2年定期(%)"></el-table-column>
        <el-table-column align="center"  prop="surplus" label="3年定期(%)"></el-table-column>
      </el-table>
    </el-card>
    
  </div>
</template>

<script>
import EditForm from "./financialDataWin/edit";
import AdminChangePasswordForm from "./financialDataWin/adminChangePassword";
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
    EditForm,
    AdminChangePasswordForm
  },
  created() {},
  methods: {
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
