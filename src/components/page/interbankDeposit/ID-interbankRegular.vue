<template>
  <div>
   <el-card class="mb20">
    <el-form :inline="true" @keyup.enter.native="doSearch()">
      <el-row>
         <el-col :span="24">
          <el-form-item label="金融机构">
              <el-date-picker
                v-model="value7"
                type="daterange"
                align="right"
                unlink-panels
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :picker-options="pickerOptions2">
              </el-date-picker>
            
          </el-form-item>
        </el-col>
         
         <el-col :span="24" class="btn-box">
        <el-form-item>
          <el-button @click="doSearch()" icon="el-icon-search"  type="primary">查询</el-button>
          <el-button icon="el-icon-plus" type="primary" @click="doNew()">新增</el-button>
           
        </el-form-item>
        </el-col>
      </el-row>
    </el-form>
   </el-card>
    <el-table
      :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
        
      border
      stripe
      highlight-current-row="true"
      style="width: 100%"
    >
       
      <el-table-column align="center"  prop="date" label="交易对手" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="同业定期收入(元)" width="180"></el-table-column>
      
    </el-table>
   
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
      form:{
        searchKey:"",
        region:"",
        status:"",
        pageNo:"",
        pageSize:""

      },
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",id:1,
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-02",
          name: "王小虎",id:1,
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-04",
          name: "王小虎",id:1,
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-01",
          name: "王小虎",id:1,
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-08",
          name: "王小虎",id:1,
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-06",
          name: "王小虎",id:1,
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-07",
          name: "王小虎",id:1,
          address: "上海市普陀区金沙"
        }
      ],pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
      selectedRows: []
      
    };
  },
  
  created() {},
  methods: {
    doNew() {
      
      this.$router.push('BF-addInquiry')
      // this.editFormVisible = true;
      // this.$nextTick(() => {
      //   this.$refs.editForm.init(null);
      // });
    },
    doEdit(row) {
       
      this.$router.push({ path:'/BF-editInquiry',query: { userId: row.id}});
       
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
