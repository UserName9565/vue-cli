<template>
<!-- 交易对手列表 -->
  <div>
   <el-card class="mb20">
    <el-form :inline="true" @keyup.enter.native="doSearch(1)">
      <el-row>
        <el-col :span="8">
          <el-form-item label="金融机构">
            <el-select v-model="form.name" placeholder="请选择">
              <el-option key="0" label="全部" value="0"></el-option>
              <el-option key="1" label="未处理" value="1"></el-option>
              <el-option key="2" label="已处理" value="2"></el-option>
            </el-select>
            
          </el-form-item>
        </el-col>
         <el-col :span="8">
          <el-form-item label="交易对手">
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
          <el-button icon="el-icon-plus" type="primary" @click="doNew()">新增对手</el-button>
          
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
      
  
      <el-table-column align="center"  prop="counterpartyId" label="序号" ></el-table-column>
      <el-table-column align="center"  prop="fullname" label="交易对手" ></el-table-column>
      <el-table-column align="center"  prop="counterpartyType" label="金融机构" ></el-table-column>
      
      <el-table-column align="center"  prop="hasInterestedShareholder" label="股东关系" ></el-table-column>
      <el-table-column align="center"  prop="createAt" label="操作人" ></el-table-column>
      
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
import EditForm from "./bankListWin/edit";
export default {
  data() {
    return {
      editFormVisible: true,
      adminChangePasswordFormVisible: false,
       pageTotal: 0,
      form:{
        name:"",
        pageNum:"1",
        pageSize:"10"

      },
      tableData3: [],
      selectedRows: []
      
    };
  },
  components: {
    EditForm
  },
  created() {
    this.doSearch(1);
  },
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
    
    doSearch(value) {
       
       this.form.pageNum = value;
    
        let self = this;
        var obj ={
          url:this.$url.counterparty.getList,
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
