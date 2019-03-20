<template>
  <!-- 角色管理 -->
  <div>
    <el-card class="mb20">
      <el-form :inline="true" @keyup.enter.native="doSearch(1)">
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item label="角色名称">
              <el-input v-model="form.name" clearable></el-input>
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

        <el-table-column align="center" prop="code" label="角色ID"></el-table-column>
        <el-table-column align="center" prop="name" label="角色名称"></el-table-column>
        <el-table-column align="center" prop="org" label="所属部门"></el-table-column>
        <el-table-column align="center" prop="description" label="角色描述"></el-table-column>
        <el-table-column align="center" prop="locked" label="角色状态">
          <template slot-scope="scope">
              <el-tag type="success" v-show="!scope.locked">启用</el-tag>
              <el-tag type="danger" v-show="scope.locked">停用</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" fixed="left" label="操作" width="130">
          <template slot-scope="scope">
            <el-button @click="doEdit(scope.row,1)" type="text" size="mini">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          :current-page.sync="form.pageNum"
          background
          @current-change="doSearch"
          layout="total,prev, pager, next,jumper"
          :total="pageTotal"
          :page-size="form.rows"
        ></el-pagination>
      </div>
    </el-card>
    <!-- <t-grid ref="searchReulstList" :options="gridOptions" @selection-change="handleSelectionChange">
    </t-grid>-->
    <!-- 弹窗, 新增 / 修改 -->
    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch(1)"></edit-form><aprove-step v-if="AproveStepVisible" ref="aproveStep"></aprove-step>
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
        name: "",
        pageNum: "1",
        pageSize: "10"
      },
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        
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
        this.$refs.editForm.init(row.id,type);
      });
    },
    
    handleSelectionChange(val) {
      this.selectedRows = val;
    },
    doSearch(value) {
       this.form.pageNum = value;
      console.log(this.$url.roleManag.getList)
        let self = this;
        var obj ={
          url:this.$url.roleManag.getList,
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
