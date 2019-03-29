<template>
  <div>
   <el-card class="mb20">
    <el-form :inline="true" @keyup.enter.native="doSearch(1)">
      <el-row>
        <el-col :span="8">
          <el-form-item label="姓名">
            <el-input v-model="form.counterpartyId" clearable></el-input>
            
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="金融机构">
            <el-select v-model="form.region" placeholder="请选择">
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
          <el-button icon="el-icon-plus" type="primary" @click="doNew()">新增联络人</el-button>
        
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
      <el-table-column align="center"  prop="contactAccount" label="联络人账号" ></el-table-column>
      <el-table-column align="center"  prop="realName" label="姓名" ></el-table-column>
     <el-table-column align="center"  prop="mobile" label="手机号码" ></el-table-column>
      <el-table-column align="center"  prop="email" label="电子邮箱" ></el-table-column><el-table-column align="center"  prop="counterpartyName" label="所属交易对手" ></el-table-column>
      <el-table-column align="center"  prop="counterpartyType" label="所属金融机构" ></el-table-column>
        <el-table-column align="center"  prop="address" label="创建人" ></el-table-column><el-table-column align="locked"  prop="name" label="状态" >
          <template slot-scope="scope">
              <el-tag v-if="scope.row.locked==0" type="success">启用</el-tag>
              <el-tag v-if="scope.row.locked==1" type="danger">停用用</el-tag>
          </template>
        </el-table-column>
      <el-table-column align="center"  prop="updateAt" label="操作人" ></el-table-column>

      <el-table-column align="center"  fixed="left" label="操作" width="130">
        <template slot-scope="scope">
          <el-button @click="doEdit(scope.row)" type="text" size="mini">编辑</el-button>
          
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
          :page-size="form.pageSize"
        ></el-pagination>
      </div>
      </el-card>
  
    <!-- 弹窗, 新增 / 修改 -->
    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form><aprove-step v-if="AproveStepVisible" ref="aproveStep"></aprove-step>
   
  </div>
</template>

<script>
import EditForm from "./contactsManagWin/edit";
import AproveStep from "../comWin/aproveStep";
// import moment from 'moment';
// //import util from '@/util'
export default {
  data() {
    return {
      editFormVisible: true,
       pageTotal: 0,
      form:{
        counterpartyId:"",
        realName:"",
        page:"1",
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
    handleSelectionChange(val) {
      this.selectedRows = val;
    },
    doSearch(value) {
      this.form.page = value;
    
        let self = this;
        var obj ={
          url:this.$url.counterpartyContact.getList,
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
