<template>
  <!-- 用户审核 -->
  <div>
    <el-card class="mb20">
      <el-form :inline="true" @keyup.enter.native="doSearch(1)">
        <el-row>
          <el-col :span="8">
            <el-form-item label="申请时间">
              <el-date-picker v-model="form.searchKey" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="24" class="btn-box">
            <el-form-item>
              <el-button @click="doSearch(1)" icon="el-icon-search" type="primary">查询</el-button>
            
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
      <el-table-column align="center" type="selection" width="55"></el-table-column>

      <el-table-column align="center" prop="date" label="审批ID" width="180"></el-table-column>
      <el-table-column align="center" prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column align="center" prop="address" label="审批业务名称" width="180"></el-table-column>
      <el-table-column align="center" prop="address" label="申请人" width="180"></el-table-column>
      <el-table-column align="center" prop="address" label="最终审核人" width="180"></el-table-column>

      <el-table-column align="center"  prop="address" label="审批状态">
        <template slot-scope="scope">
              <span>通过</span><br>
              <el-button @click="doDetaile(scope.row)" type="text" size="mini">审批详情</el-button>
          </template>
      </el-table-column>
      <el-table-column align="center" prop="address" label="处理状态" width="180"></el-table-column>
      <el-table-column align="center" fixed="left" label="操作" width="130">
        <template slot-scope="scope">
          <el-button @click="doEdit(scope.row)" type="text" size="mini">查看</el-button>
          <!-- <el-button @click="doDetaile(scope.row)" type="text" size="mini">审批详情</el-button> -->
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
        :page-size="form.rows"
      ></el-pagination>
    </div>
    </el-card>
 
    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form><aprove-step v-if="AproveStepVisible" ref="aproveStep"></aprove-step>
     
    <admin-change-password-form v-if="adminChangePasswordFormVisible" ref="adminChangePasswordForm"></admin-change-password-form>
   
  </div>
</template>

<script>
import EditForm from "./userManagaWin/edit";
import AproveStep from "../comWin/aproveStep";
import AdminChangePasswordForm from "./userManagaWin/adminChangePassword";

// import moment from 'moment';
// //import util from '@/util'
export default {
  data() {
    return {
      editFormVisible: true,
      AproveStepVisible: false,
      adminChangePasswordFormVisible: false,
     
      
      pageTotal: 0,
      form: {
        searchKey: "",
        region: "",
        status: "",
        page: "1",
        rows: "10"
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
    AproveStep,
    AdminChangePasswordForm
  },
  created() {},
  methods: {
   
    doEdit(row) {
      this.editFormVisible = true;
      this.$nextTick(() => {
        this.$refs.editForm.init("11",2);
      });
    },
    doDetaile(row) {
      this.AproveStepVisible = true;
      this.$nextTick(() => {
        this.$refs.aproveStep.init(row.date);
      });
    },
    doSearch(value) {
       
       this.form.skipCount = value;
    
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
