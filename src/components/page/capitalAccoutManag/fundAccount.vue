<template>
<!-- 活期类账户 -->
  <div>
    <el-card class="mb20">
    <el-form :inline="true" @keyup.enter.native="doSearch(1)">
      <el-row>
        <el-col :span="8">
          <el-form-item label="委托方账号">
            <el-input v-model="form.entrusterCode" clearable></el-input>
            
          </el-form-item>
        </el-col>
         <el-col :span="8">
          <el-form-item label="entrusterName">
            <el-select v-model="form.region" placeholder="请选择">
              <el-option key="0" label="全部" value="0"></el-option>
              <el-option key="1" label="未处理" value="1"></el-option>
              <el-option key="2" label="已处理" value="2"></el-option>
            </el-select>
            
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
    >
    
      <el-table-column align="center" type="index" label="序号" ></el-table-column>
       <el-table-column align="center"  prop="entrusterShortname" label="委托方简称" ></el-table-column>
      <el-table-column align="center"  prop="entrusterFullname" label="委托方账户全称" ></el-table-column>
      <el-table-column align="center"  prop="entrusterAccount" label="委托方编号" ></el-table-column>
      
      <el-table-column align="center"  prop="entrusterCode" label="委托方账号" ></el-table-column>
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
        region:"",
        pageNum:"1",
        pageSize:"10"

      },
      tableData3: [],
      selectedRows: []
      
    };
  },
  components: {
    EditForm,
    AproveStep
  },
  created() {
    this.doSearch(1)
  },
  methods: {
    doSync() {
        let self = this;
        var obj ={
          url:this.$url.entrusterBankAccount.sync,
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
          url:this.$url.entrusterBankAccount.getList,
          data:this.form
        }
        this.common.httpPost(obj,success);
        function success(data){
            
            self.tableData3 = data.rows
            self.pageTotal = data.total
           
        }
    }
  }
};
</script>
