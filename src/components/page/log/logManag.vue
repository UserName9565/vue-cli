<template>
  <div>
    <el-card class="mb20">
      <el-form :inline="true" @keyup.enter.native="doSearch(1)">
        <el-row>
          
         
          <el-col :span="8">
            <el-form-item label="操作账号">
              <el-input v-model="form.loginName" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="操作类型">
              <el-input v-model="form.action" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="操作结果">
              <el-input v-model="form.result" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24">
            <el-form-item label="时间范围">
             <el-date-picker
                v-model="dateTime"
                type="datetimerange"
                :picker-options="common.pickerOptions"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                :default-time="['00:00:00', '23:59:59']"
                value-format="yyyy-MM-dd HH:mm:ss"
                :default-value="common.timeDefaultShow"
                align="right">
              </el-date-picker>
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
        <el-table-column align="center" prop="uname" label="操作人"></el-table-column>
        <el-table-column align="center" prop="uloginname" label="账号"></el-table-column>
        <el-table-column align="center" prop="uorgnames" label="所属部门"></el-table-column>
        <el-table-column align="center" prop="ip" label="ip地址"></el-table-column>

        <el-table-column align="center" prop="ctime" label="操作时间"></el-table-column>
        <el-table-column align="center" prop="target" label="操作对象"></el-table-column>
        <el-table-column align="center" prop="action" label="操作类型"></el-table-column>
        <el-table-column align="center" prop="result" label="操作结果">
          <template slot-scope="scope"> 
            <el-tag type="success" v-if="scope.row.result==1">成功</el-tag>
            <el-tag type="danger" v-else-if="scope.row.result==0">失败</el-tag>
            <el-tag type="warning" v-else>异常</el-tag>
          </template>
        </el-table-column>
        <el-table-column align="center" prop="remark" label="备注"></el-table-column>
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

    <!-- 弹窗, 新增 / 修改 -->
    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form>
    <aprove-step v-if="AproveStepVisible" ref="aproveStep"></aprove-step>
    <admin-change-password-form v-if="adminChangePasswordFormVisible" ref="adminChangePasswordForm"></admin-change-password-form>
  </div>
</template>

<script>
// import moment from 'moment';
// //import util from '@/util'
export default {
  data() {
    return {
      editFormVisible: true,
      pageTotal: 0,
      dateTime:this.common.timeDefaultShow(-7),
      form: {
        beginDate:"",
        endDate:"",
        loginName:"",
        target:"",
        action:"",
        result:"",
        pageNum: "1",
        pageSize: "10"
      },
      tableData3: [
      ]
      
    };
  },
  created() {
    this.doSearch(1);
  },
  methods: {
    

    doSearch(value) {
      this.form.pageNum = value;
      this.form.beginDate = this.dateTime[0];
      this.form.endDate = this.dateTime[1];
      let self = this;
      var obj = {
        url: this.$url.systemLog.getList,
        data: this.form
      };
      
      
      this.common.httpPost(obj, success);
      function success(data) {
        self.tableData3 = data.rows;
        self.pageTotal = data.total;
      }
    }
  }
};
</script>
