<template>
  <!-- 角色管理 -->
  <div>
    <el-card class="mb20">
      <el-form :inline="true" @keyup.enter.native="doSearch(1)">
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item label="角色名称">
              <el-input v-model="form.searchKey" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24" class="btn-box">
            <el-form-item>
              <el-button @click="doSearch(1)" icon="el-icon-search" type="primary">查询</el-button>
              <el-button icon="el-icon-plus" type="primary" @click="doNew()">新增</el-button>
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

        <el-table-column align="center" prop="date" label="角色ID"></el-table-column>
        <el-table-column align="center" prop="name" label="角色名称"></el-table-column>
        <el-table-column align="center" prop="address" label="所属部门"></el-table-column>
        <el-table-column align="center" prop="address" label="角色状态"></el-table-column>
        <el-table-column align="center" fixed="left" label="操作" width="130">
          <template slot-scope="scope">
            <el-button @click="doEdit(scope.row,1)" type="text" size="mini">编辑</el-button>
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
    <!-- <t-grid ref="searchReulstList" :options="gridOptions" @selection-change="handleSelectionChange">
    </t-grid>-->
    <!-- 弹窗, 新增 / 修改 -->
    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form><aprove-step v-if="AproveStepVisible" ref="aproveStep"></aprove-step>
  </div>
</template>

<script>
import EditForm from "./roleManagaWin/edit";
// import AdminChangePasswordForm from "./roleManagaWin/adminChangePassword";
import AproveStep from "../comWin/aproveStep";
// import moment from 'moment';
// //import util from '@/util'
export default {
  data() {
    return {
      editFormVisible: true,
      adminChangePasswordFormVisible: false,
     
      
      pageTotal: 0,
      form: {
        searchKey: "",
        region: "",
        status: "",
        page: "",
        rows: ""
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
    AproveStep 
  },
  created() {
    this.doSearch(1);
  },
  methods: {
    doNew() {
      this.editFormVisible = true;
    
      this.$nextTick(() => {
        this.$refs.editForm.init(null,0);
      });
    },
    doEdit(row,type) {
      this.editFormVisible = true;
      this.$nextTick(() => {
        this.$refs.editForm.init("11",type);
      });
    },
    
    handleSelectionChange(val) {
      this.selectedRows = val;
    },
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
