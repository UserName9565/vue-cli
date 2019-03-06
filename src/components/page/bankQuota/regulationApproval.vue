<template>
  <div>
<!-- 规则标准审批 -->
    <el-card class="mb20">
    <el-form :inline="true" @keyup.enter.native="doSearch()">
      <el-row>
        <el-col :span="8">
          <el-form-item label="申请时间">
             <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
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
          <el-button @click="doSearch()" icon="el-icon-search"  type="primary">查询</el-button>
          <el-button  type="primary">流程图</el-button>
          
        </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    </el-card>
    <el-card>

    
    <el-table
      :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
      style="width: 100%"
    >
      
        <el-table-column align="center"  prop="compan" label="审批ID" ></el-table-column>
      <el-table-column align="center"  prop="pro" label="审批业务名称" ></el-table-column>
      <el-table-column align="center"  prop="used" label="申请人" ></el-table-column>
      <el-table-column align="center"  prop="frozen" label="最终审核人" ></el-table-column>
      <el-table-column align="center"  prop="total" label="审批状态" ></el-table-column>
      <el-table-column align="center"  prop="surplus" label="处理状态" ></el-table-column>
       <el-table-column align="center"  fixed="left" label="操作" width="130">
        <template slot-scope="scope">
          <el-button @click="doEdit(scope.row)" type="text" size="mini">查看</el-button>
          
        </template>
      </el-table-column>
    </el-table>
    </el-card>
    <!-- <t-grid ref="searchReulstList" :options="gridOptions" @selection-change="handleSelectionChange">
    </t-grid>-->
    <!-- 弹窗, 新增 / 修改 -->
    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form>
    
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
      importExcelVisible: false,
      importExcelService: "",
       pageTotal: 0,
      form:{
        searchKey:"",
        region:"",
        status:"",
        pageNo:"",
        pageSize:""

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
    doSearch() {
      this.$refs.searchReulstList.refresh();
    }
  }
};
</script>
