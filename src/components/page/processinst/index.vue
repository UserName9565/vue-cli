<template>
<div class="container">

<div class="mod-role">
  <el-form  @keyup.enter.native="doRefresh()" >
    <!-- <el-row :gutter="20">
      <el-col :span="8">
        <el-form-item label="流程类别">
          <el-select placeholder="请选择流程类别" v-model="ruleForm.processDefinationKey" clearable>
            <el-option v-for="item in processDefinationlist" :key='item.key' :label="item.name" :value="item.key"></el-option>
          </el-select>
        </el-form-item>
      </el-col>
      <el-col :span="14">
        <el-form-item label="流程发起时间">
          <el-date-picker
            v-model="ruleForm.value13"
            type="daterange"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['00:00:00', '23:59:59']">
          </el-date-picker>
        </el-form-item>
      </el-col>
    </el-row> -->
    <el-row :gutter="20">
      <!-- <el-col :span="8">
        <el-form-item label="关键字">
          <el-input  @keyup.enter.native="doRefresh()" v-model="ruleForm.searchKey" placeholder="单号或描述或发起人" clearable></el-input>
        </el-form-item>
      </el-col> -->
      <el-col :span="14">
        <el-form-item>
          <el-button @click="doRefresh()" icon="el-icon-search">查询</el-button>
          <el-button icon="el-icon-delete" type="danger" @click="doBatchDelete()" :disabled="checkededRows.length <= 0">批量删除</el-button>
          <el-button icon="el-icon-download" @click="doExportExcel()">
            <i class="fa fa-lg fa-level-down"></i>导出
          </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>

    <el-table
    @selection-change="handleSelectionChange"
    :data="list"
    border
   v-loading="loading"
    style="width: 100%">
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column type="index" :index="index" label="行数" width="50" :data = 'list'></el-table-column>
    <el-table-column prop="category" label="category" width="180"></el-table-column>
    <el-table-column prop="deploymentId" label="deploymentId"></el-table-column>

    <!-- <el-table-column prop="category" label="分类" ></el-table-column> -->
    <el-table-column prop="deploymentTime" :formatter='YYMM' label="deploymentTime" ></el-table-column>
    <el-table-column prop="diagramResourceName"  :formatter='YYMM' label="diagramResourceName" ></el-table-column>
    <el-table-column prop="id" label="id"></el-table-column>
    <el-table-column prop="key" label="key"></el-table-column>
    <el-table-column prop="name" label="name"></el-table-column>
    <el-table-column prop="resourceName" label="resourceName"></el-table-column>
    <el-table-column prop="revision" label="revision"></el-table-column>
    <el-table-column prop="suspended" label="suspended"></el-table-column>
    <el-table-column prop="version" label="version"></el-table-column>
     <el-table-column label="操作" fixed="right" width="250">
      <template slot-scope="scope">
        <el-button @click="doStart(scope)" type="primary" size="small">启动</el-button>
        <el-button @click="doView(scope)" type="primary" size="small">查看流程图</el-button>
        <!-- <el-button @click="doCopy(scope)" type="text" size="small"></el-button> -->
        <!-- <el-button @click="doDesign(scope)" type="text" size="small">待办</el-button>
        <el-button @click="doDeploy(scope)" type="text" size="small">跳转</el-button> -->
       
         
      </template>
    </el-table-column>
     
     
  </el-table>
  <el-pagination
      
      @current-change="doSearch"
      :current-page="currentPage4"
      :page-size="ruleForm.maxResultCount"
      layout="total, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  <!-- <t-grid ref="searchReulstList" :options="gridOptions" @selection-change="handleSelectionChange">
  </t-grid> -->
  <!-- <user-open-dialog v-if="setAsigneeOpenDialogVisible" ref="setAsigneeOpenDialog" @select="onSetAsigneeOpenDialogSelect"></user-open-dialog> -->
  <wf-activity-select v-if="gotoDialogVisible" ref="gotoDialog" @select="onGotoDialogSelect"></wf-activity-select>
 
  <el-dialog title="查看" :visible.sync="editFormVisible" width="30%">
            <img :src="viewImg" alt="">
            <span slot="footer" class="dialog-footer">
                 <el-button type="primary" @click="editFormVisible = false">确 定</el-button>
            </span>
        </el-dialog>
</div>
</div>
</template>
<script>
// import UserOpenDialog from '@/page/components/userOpenDialog'
import WfActivitySelect from './wfActivitySelect'
export default {
  data() {
    return {
      editFormVisible:false,
      setAsigneeOpenDialogVisible: false,
      setAsigneeSelectedRow: null,
      gotoDialogVisible: false,
      gotoSelectedRow: null,
      checkededRows: [],
      list:null,
      viewImg:null,
      processDefinationlist: [{},{}],
      startDateRange: null,
      ruleForm:{
        skipCount:1,
        maxResultCount:10
      },
    }
  },
  components: {
    // UserOpenDialog,
    WfActivitySelect
  },
  created() {
    this.loadProcessDefList();
  },
  methods: {
    loadProcessDefList() {
      
      let self = this;
      var obj ={
          url:this.$url.processinst.getList,
          data:this.ruleForm
        }
        this.common.httpPost(obj,success);
        function success(data){
          self.list = data.data.rows;
          console.log(self.list)
            
        }
      // tapp.services.wf_Model.getMadelList().then(function(result) {
      //   self.processDefinationlist = result;
      // })
    },
    onStartDateRangeChanged(val) {
      this.ruleForm.startDateBegin = val[0];
      this.ruleForm.startDateEnd = val[1];
    },
    renderTaskBtnLabel(key, row) {
      if (row.taskAssignee != null && row.taskAssignee.length > 0) {
        return "办理";
      } else if (row.taskCandidate != null && row.taskCandidate.length > 0) {
        return "签收";
      }
      return "未知";
    },
    doTask(key, row) {
      if (row.taskAssignee != null && row.taskAssignee.length > 0) {
        //办理
        this.$router.push({
          path: row.taskFormUrl,
        });
        return;
      } else if (row.taskCandidate != null && row.taskCandidate.length > 0) {
        // "签收";
        // tapp.services.wF_Workflow.handleTask({
        //   taskId: row.taskId,
        //   claim: true,
        //   action: 'claim',
        //   taskRemark: '签收',
        //   docId: row.businessId
        // }).then(function(result) {
        //   self.doRefresh();
        //   self.$notify.success({
        //     title: '操作成功！',
        //     message: '签收任务成功！',
        //   });
        // });
      } else {
        alert('do what?')
      }
    },
    doViewProcessHistory(key, row) {
      let path = '/publicsubsystem/processinst/processHistory?procInstId=' + row.id;
      this.$router.push({
        path: path,
      });
    },
    setAsignee(key, row) {
      let taskId = row.taskId;
      let status = row.status;
      if (!taskId) {
        this.$notify.info({
          title: '系统提示',
          message: '流程审批已完成，无法操作！'
        });
        return;
      }
      if (status === 'Suspended') {
        this.$notify.info({
          title: '系统提示',
          message: '流程实例已挂起，无法操作！'
        });
        return;
      }
      this.setAsigneeSelectedRow = row;
      this.setAsigneeOpenDialogVisible = true
      this.$nextTick(() => {
        this.$refs.setAsigneeOpenDialog.init(null);
      })
    },
    onSetAsigneeOpenDialogSelect(val) {
      let self = this;
      let taskId = self.setAsigneeSelectedRow.taskId;
      // tapp.services.wF_Workflow.setAssignee({
      //   'taskId': taskId,
      //   'assignee': val.id,
      // }).then(function(result) {
      //   self.$notify.success({
      //     title: '系统提示',
      //     message: '任务转办成功！'
      //   });
      //   self.$refs.searchReulstList.refresh();
      // })
    },
    doGoto(key, row) {
      let taskId = row.taskId;
      let status = row.status;
      if (!taskId) {
        this.$notify.info({
          title: '系统提示',
          message: '流程审批已完成，无法操作！'
        });
        return;
      }
      if (status === 'Suspended') {
        this.$notify.info({
          title: '系统提示',
          message: '流程实例已挂起，无法操作！'
        });
        return;
      }
      this.gotoSelectedRow = row;
      this.gotoDialogVisible = true
      this.$nextTick(() => {
        this.$refs.gotoDialog.init(row.processDefinationKey);
      })
    },
    onGotoDialogSelect(val) {
      let self = this;
      let taskId = self.gotoSelectedRow.taskId;
      let status = self.gotoSelectedRow.status;
      let docId = self.gotoSelectedRow.businessId;
      // tapp.services.wF_Workflow.goTo({
      //   'taskId': taskId,
      //   'docId': docId,
      //   'targetTaskDefinitionKey': val,
      //   'action': '跳转',
      //   'isClaim': false,
      //   'taskStatus': '跳转',
      //   'result': '跳转',
      //   'taskRemark': null,
      // }).then(function(result) {
      //   self.$notify.success({
      //     title: '系统提示',
      //     message: '任务跳转成功！'
      //   });
      //   self.$refs.searchReulstList.refresh();
      // })
    },
    doActiveOrSuspend(key, row) {
      let self = this;
      let taskId = row.taskId;
      if (!taskId) {
        self.$notify.info({
          title: '系统提示',
          message: '流程审批已完成，无法操作！'
        });
        return;
      }
      if (row.status === 'Suspended') {
        // tapp.services.wF_Workflow.activateProcessInstance(row.id).then(function(result) {
        //   self.$notify.success({
        //     title: '系统提示',
        //     message: '流程实例激活成功！'
        //   });
        //   self.$refs.searchReulstList.refresh();
        // })
      } else {

        // tapp.services.wF_Workflow.suspendProcessInstance(row.id).then(function(result) {
        //   self.$notify.success({
        //     title: '系统提示',
        //     message: '流程实例挂起成功！'
        //   });
        //   self.$refs.searchReulstList.refresh();
        // })
      }
    },
    doDelete(key, row) {
      let self = this;
      self.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // tapp.services.wF_ProcessInst.delete(row.id).then(function(result) {
        //   self.$notify.success({
        //     title: '系统删除成功',
        //     message: '流程实例已删除成功！'
        //   });
        //   self.$refs.searchReulstList.refresh();
        // })
      });
    },
    handleSelectionChange(val) {
      this.checkededRows = val;
    },
    doBatchDelete() {
      let self = this;
      if (!self.checkededRows || self.checkededRows.length == 0) {
        self.$notify.info({
          title: '系统提示',
          message: '您没选择任何行，无法操作！'
        });
        return;
      }
      let ids = self.checkededRows.map(function(row) {
        return row.id;
      });
      self.$confirm('此操作将永久删除' + ids.length + '个流程实例, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // tapp.services.wF_ProcessInst.batchDelete(ids).then(function(result) {
        //   self.$notify.success({
        //     title: '系统删除成功',
        //     message: '流程实例已删除成功！'
        //   });
        //   self.$refs.searchReulstList.refresh();
        // })
      });
    },
    doExportExcel() {
      this.$refs.searchReulstList.exportCSV('流程实例列表');
    },
    doRefresh() {
      this.loadProcessDefList();
    },
    doStart(){

    },
    doView(scope){
      this.editFormVisible = true;
      let row = scope.row;
      let self = this;
      this.viewImg = this.common.ctx+this.$url.processinst.view+"?resourceType=png&processDefinitionId="+row.id
      // var obj ={
      //     url:this.$url.processinst.view,
      //     data:{
      //       processDefinitionId:row.id,
      //       resourceType:"png"
      //     }
      //   }
         
      //   this.common.httpPost(obj,success);
      //   function success(data){
      //     self.list = data.data.rows;
      //     console.log(self.list)
            
      //   }
    }
  }
}
</script>
