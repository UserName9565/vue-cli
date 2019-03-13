<template>
 
  <div>
    <el-card class="mb20">
      <el-form :inline="true" :model="form" @keyup.enter.native="doSearch(1)">
        <el-row>
          <el-col :span="8">
            <el-form-item label="userId">
              <el-input v-model="form.userId"></el-input>
            </el-form-item>
          </el-col>
          
          <el-col :span="8">
            <el-form-item label="businessKey">
              <el-input v-model="form.businessKey"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="businessType">
              <el-input v-model="form.businessType"></el-input>
            </el-form-item>
          </el-col>
         
          <el-col :span="24" class="btn-box">
            <el-form-item>
              <el-button @click="doSearch(1)" icon="el-icon-search" type="primary">查询</el-button>
              <!-- <el-button icon="el-icon-plus" type="primary" @click="doNew()">查看流程</el-button> -->
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

 <el-table-column align="center" prop="taskId" label="taskId"></el-table-column>
        <el-table-column align="center" prop="assign" label="assign"></el-table-column>
        <el-table-column align="center" prop="businessKey" label="businessKey"></el-table-column>
        <el-table-column align="center" prop="createTime" label="createTime"></el-table-column>
        <el-table-column align="center" prop="taskName" label="taskName"></el-table-column>
        <el-table-column align="center" fixed="left" label="操作" width="250">
          <template slot-scope="scope">
            <el-button @click="doEdit(scope.row)" type="primary" size="mini">审核</el-button>
             <el-button @click="doViews(scope.row)" type="primary" size="mini">查看流程图</el-button>
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
    <el-dialog title="查看" :visible.sync="editFormVisible" width="80%" style="text-align:center">
      <div>

            <img :src="viewImg" alt="">
      </div>
            <span slot="footer" class="dialog-footer">
                 <el-button type="primary" @click="editFormVisible = false">确 定</el-button>
            </span>
        </el-dialog>
    <!-- <t-grid ref="searchReulstList" :options="gridOptions" @selection-change="handleSelectionChange">
    </t-grid>-->
    <!-- 弹窗, 新增 / 修改 -->
    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form><aprove-step v-if="AproveStepVisible" ref="aproveStep"></aprove-step>
  </div>
</template>

<script>
 
export default {
  data() {
    return {
      editFormVisible: false,
      adminChangePasswordFormVisible: false,
     
      
      pageTotal: 0,
      form: {
        searchKey: "",
        region: "",
        status: "",
        page: "",
        rows: ""
      },
      form:{
        page:1,
        rows:10,
        userId:'admin',
        businessType:'1'
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
        let self = this;
        let obj = {
            url:this.$url.processinst.webPage+"/"+row.taskId,
            data:{
                taskId:row.taskId
            }
        }
        //this.common.webpage(obj,success)
        this.common.httpPost(obj,success);
        function success(data){
            console.log(data);
           
            self.$router.push({ path: data.data, query: { taskId: row.taskId } });
        }
    //   this.editFormVisible = true;
    //   this.$nextTick(() => {
    //     this.$refs.editForm.init("11");
    //   });
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
    doViews(row) {
      this.editFormVisible = true;
     
      let self = this;
      this.viewImg = this.common.ctx+this.$url.processinst.view+"?resourceType=png&processDefinitionId="+row.processDefinitionId

    },
    
    doSearch(value) {

        this.form.skipCount = value;
    
        let self = this;
        var obj ={
          url:this.$url.leave.todoTask,
          data:this.form
        }
        this.common.httpPost(obj,success);
        function success(data){
         
            self.tableData3 = data.data.rows
            self.total = data.data.total
           
        }
    }
  }
};
</script>
