<template>
  <div class="container">
<!-- 规则列表 -->
    
     
    <el-table
      :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
      border
      style="width: 100%"
    >
      
        <el-table-column align="center"  prop="compan" label="金融机构" ></el-table-column>
      <el-table-column align="center"  prop="pro" label="流程标题" ></el-table-column>
      <el-table-column align="center"  prop="used" label="生效日期" ></el-table-column>
      <el-table-column align="center"  prop="frozen" label="审核状态" ></el-table-column>
       <el-table-column align="center"  fixed="left" label="操作" width="130">
        <template slot-scope="scope">
          <el-button @click="doEdit(scope.row)" type="text" size="mini">查看</el-button>
         
        </template>
      </el-table-column>
    </el-table>
    
    <!-- <t-grid ref="searchReulstList" :options="gridOptions" @selection-change="handleSelectionChange">
    </t-grid>-->
    <!-- 弹窗, 新增 / 修改 -->
    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form><aprove-step v-if="AproveStepVisible" ref="aproveStep"></aprove-step>
    <admin-change-password-form v-if="adminChangePasswordFormVisible" ref="adminChangePasswordForm"></admin-change-password-form>
    <t-excel-import
      @change="doSearch"
      v-if="importExcelVisible"
      ref="importExcel"
      :service="importExcelService"
      :rowRule="importExcelRowRule"
      title="用户Excel导入"
      template-path="用户导入模板.xlsx"
    ></t-excel-import>
  </div>
</template>
<style>
.heightLine{
  background-color: yellowgreen;
  border-color:yellowgreen;
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
      form:{
        searchKey:"",
        region:"",
        status:"",
        page:"",
        rows:""

      },
     tableData3: [
        {
          compan: "商业银行",
          pro: "小计：",
          used: "10426.00",
          frozen:"7300.00",
          total:"54.37",
          surplus:"1"
        },
        {
          compan: "",
          pro: "债券投资",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "财务公司",
          pro: "小计：",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"1"
        },
        {
          compan: "",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        }
      ],
      selectedRows: []
      
    };
  },
  created() {},
  methods: {
    heilight(row, column, rowIndex, columnIndex){
      console.log(row)
      if(row.row.surplus==1){
        return "heightLine"
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
