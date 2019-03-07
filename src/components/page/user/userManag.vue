<template>
<!-- 用户管理 -->
  <div>
  <el-card class="mb20">
    <el-form :inline="true" @keyup.enter.native="doSearch(1)">
      <el-row>
        <el-col :span="8">
          <el-form-item label="姓名">
            <el-input v-model="searchKey" clearable></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="所属部门">
            <el-select v-model="form.region" placeholder="请选择">
              <el-option key="bbk" label="测试1" value="bbk"></el-option>
              <el-option key="xtc" label="测试2" value="xtc"></el-option>
              <el-option key="imoo" label="测试3" value="imoo"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="用户状态">
            <el-select v-model="form.status" placeholder="请选择">
              <el-option key="bbk" label="测试1" value="bbk"></el-option>
              <el-option key="xtc" label="测试2" value="xtc"></el-option>
              <el-option key="imoo" label="测试3" value="imoo"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="24" class="btn-box">
        <el-form-item>
          <el-button @click="doSearch(1)" icon="el-icon-search"  type="primary">查询</el-button>
          <el-button icon="el-icon-plus" type="primary" @click="doNew()">新增</el-button>
         
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
      <el-table-column align="center"  type="selection" width="55"></el-table-column>
      <el-table-column align="center"  prop="date" label="行号" width="180"></el-table-column>
      <el-table-column align="center"  prop="date" label="登录名" width="180"></el-table-column>
      <el-table-column align="center"  prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="邮箱" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="所属机构" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="角色权限" width="180"></el-table-column>
       

      <el-table-column align="center"  prop="date" label="创建时间" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="用户状态" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="审批状态" width="180"></el-table-column>
      <el-table-column align="center"  fixed="left" label="操作" width="130">
        <template slot-scope="scope">
          <el-button @click="doEdit(scope.row)" type="text" size="mini">查看</el-button>
          <el-button @click="doAdminChangePassword(scope.row)" type="text" size="mini">重置密码</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="pagination">
        <el-pagination
          :current-page.sync="form.pageNo"
          background
          @current-change="doSearch"
          layout="total,prev, pager, next,jumper"
          :total="pageTotal"
          :page-size="form.pageSize"
        ></el-pagination>
      </div>
   </el-card>
    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch(1)"></edit-form>
    <admin-change-password-form v-if="adminChangePasswordFormVisible" ref="adminChangePasswordForm"></admin-change-password-form>
     
  </div>
</template>

<script>
import EditForm from "./userManagaWin/edit";
import AdminChangePasswordForm from "./userManagaWin/adminChangePassword";
// import moment from 'moment';
// //import util from '@/util'
export default {
  data() {
    return {
      editFormVisible: true,
      adminChangePasswordFormVisible: false,
       pageTotal: 1,
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
    AdminChangePasswordForm
  },
  created() {},
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
   
    doSearch(value) {
       
       this.ruleForm.skipCount = value;
    
        let self = this;
        var obj ={
          url:this.$url.workflowdef.getList,
          data:this.ruleForm
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
