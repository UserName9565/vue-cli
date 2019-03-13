<template>
  <div class="container">
<!-- 授信标准设定 -->
    
    <el-form :inline="true" @keyup.enter.native="doSearch(1)">
      <el-row>
       
        
        
        <el-form-item>
          <el-button @click="doSearch(1)" type="primary" >流程图</el-button>
           
        </el-form-item>
      </el-row>
    </el-form>
    <h3 class="table-title">行业监管额度设定申请表</h3>
    <el-table
      :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
      border
      style="width: 100%"
    >
      
        <el-table-column align="center"    label="投资主体" >
          <template slot-scope="scope">
            <input type="hidden" :value=" scope.row.pro">
             <el-select>
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
        </template>

        </el-table-column>
      <el-table-column align="center"  prop="pro" label="投资项目" >
        <template slot-scope="scope">
          <input type="hidden" :value=" scope.row.pro">
         <el-select>
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
      </template>
      </el-table-column>
      <el-table-column align="center"   label="是否受监管" >
        <template slot-scope="scope">
<input type="hidden" :value=" scope.row.pro">
        <el-select>
          <el-option value="1">是</el-option>
          <el-option value="2">否</el-option>
        </el-select>
        </template>
      </el-table-column>
      <el-table-column align="center"   label="与上一项共用额度" >
        <template slot-scope="scope">
         <input type="hidden" :value=" scope.row.pro">
        <el-select>
          <el-option value="1">是</el-option>
          <el-option value="2">否</el-option>
        </el-select>
        </template>
      </el-table-column>
      <el-table-column align="center"  prop="total" label="监管额度(单位:亿元)" ></el-table-column>
       
    </el-table>
    
    <!-- <t-grid ref="searchReulstList" :options="gridOptions" @selection-change="handleSelectionChange">
    </t-grid>-->
    <!-- 弹窗, 新增 / 修改 -->
     
     
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
       value:"",
      form:{
        searchKey:"",
        region:"",
        status:"",
        page:"",
        rows:""

      },
      options: [{
          value: '1',
          label: '集团公司'
        }, {
          value: '选项2',
          label: '财务公司'
        }, {
          value: '选项3',
          label: '有限公司'
        }],
        options2: [{
          value: '1',
          label: '银行理财'
        }, {
          value: '选项2',
          label: '债券公司'
        }, {
          value: '选项3',
          label: '同业拆借'
        }],
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
