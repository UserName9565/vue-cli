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
      <el-table-column align="center" type="index" label="行号" ></el-table-column>
      <el-table-column align="center"  prop="loginName" label="登录名" width="180"></el-table-column>
      <el-table-column align="center"  prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column align="center"  prop="email" label="邮箱" width="180"></el-table-column>
      <el-table-column align="center"  prop="organizationNames" label="所属机构" width="180"></el-table-column>
      <el-table-column align="center"  prop="roleNames" label="角色权限" width="180"></el-table-column>
       

      <el-table-column align="center"  prop="createdAt" label="创建时间" width="180"></el-table-column>
      <el-table-column align="center"  prop="locked" label="用户状态" width="180">
        <template slot-scope="scope">
              <el-tag type="success" v-show="!scope.locked">启用</el-tag>
              <el-tag type="danger" v-show="scope.locked">停用</el-tag>
          </template>
      </el-table-column> 
      <el-table-column align="center"  prop="address" label="审批状态" width="180"></el-table-column>
      <el-table-column align="center"  fixed="left" label="操作" width="130">
        <template slot-scope="scope">
          <el-button @click="doEdit(scope.row,1)" type="text" size="mini">编辑</el-button>
          <el-button @click="doAdminChangePassword(scope.row)" type="text" size="mini">重置密码</el-button>
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
    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch(1)"></edit-form>
    <admin-change-password-form v-if="adminChangePasswordFormVisible" ref="adminChangePasswordForm"></admin-change-password-form>
     
  </div>
</template>

<script>
import EditForm from "./userManagaWin/edit";
import AdminChangePasswordForm from "./userManagaWin/adminChangePassword";
import AproveStep from "../comWin/aproveStep";
// import {mapState,mapMutations} from "vuex";
export default {
  data() {
    
    return {
      editFormVisible: true,
      adminChangePasswordFormVisible: false,
      pageTotal: 0,
      form:{
        // searchKey:"",
        // region:"",
        // status:"",
        pageNum:"1",
        pageSize:"10"

      },
      tableData3: [
        {
          date: "2016-05-03",
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
    doAdminChangePassword(row) {
      this.adminChangePasswordFormVisible = true;

      this.$nextTick(() => {
         
        this.$refs.adminChangePasswordForm.init(row.id,row.name,row.loginName);
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
       
       this.form.pageNum = value;
    
        let self = this;
        var obj ={
          url:this.$url.userManag.getList,
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
