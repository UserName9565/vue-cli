<template>
<!-- 活期类账户 -->
  <div>
    <el-card class="mb20">
    <el-form :inline="true" @keyup.enter.native="doSearch(1)">
      <el-row>
        <el-col :span="8">
          <el-form-item label="资金账户">
            <el-input v-model="form.account" clearable></el-input>
            
          </el-form-item>
        </el-col>
         
        <el-col :span="24" class="btn-box">
        <el-form-item>
          <el-button @click="doSearch(1)" icon="el-icon-search"  type="primary">查询</el-button>
          <el-button @click="doSync()"  type="primary">手动刷新</el-button>
        </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    </el-card>
    <el-card>
    <el-table
      :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
        
      border
      stripe
      highlight-current-row="true"
      style="width: 100%"
    > <el-table-column align="center"  type="index" label="序号" ></el-table-column>
    <el-table-column align="center"  prop="status" label="存款状态" ></el-table-column>
   
       <el-table-column align="center"  prop="fullname" label="账户全称" ></el-table-column>
      <el-table-column align="center"  prop="account" label="资金账号" ></el-table-column>
      <el-table-column align="center"  prop="balance" label="账户余额(元)" ></el-table-column>
      
      <el-table-column align="center"  prop="issuingBank" label="开户行" ></el-table-column>
      <el-table-column align="center" :formatter='$util.YYMM'  prop="updateAt" label="更新时间" ></el-table-column>
    </el-table>
    <div class="pagination">
        <el-pagination
          :current-pageNum.sync="form.pageNum"
          background
          @current-change="handleCurrentChange"
          layout="total,prev, pager, next,jumper"
          :total="pageTotal"
          :pageNum-size="form.pageSize"
        ></el-pagination>
      </div>
       </el-card>
   
    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form><aprove-step v-if="AproveStepVisible" ref="aproveStep"></aprove-step>
    
  </div>
</template>

<script>
import EditForm from "./principalManagWin/edit";
import AproveStep from "../comWin/aproveStep";
// import moment from 'moment';
// //import util from '@/util'
export default {
  data() {
    return {
      editFormVisible: true,
       pageTotal: 0,
      form:{
        account:"",
        pageNum:"1",
        pageSize:"10"

      },
      tableData3: [
      ],
      
      
    };
  },
  components: {
    EditForm,
    AproveStep,
  },
  created() {
    this.doSearch(1);
  },
  methods: {
    doSync() {
      let self = this;
        var obj ={
          url:this.$url.bankAccount.sync,
          data:{}
        }
        this.common.httpPost(obj,success);
        function success(data){
            self.doSearch(1)
        }
    },
    doSearch(value) {
     
       
       this.form.pageNum = value;
        let self = this;
        var obj ={
          url:this.$url.bankAccount.getList,
          data:this.form
        }
        this.common.httpPost(obj,success);
        function success(data){
            
            self.tableData3 = data.rows;
            self.pageTotal = data.total
           
        }
     
    }
  }
};
</script>
