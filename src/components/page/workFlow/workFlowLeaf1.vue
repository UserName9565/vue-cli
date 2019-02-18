 
<template>
  <div>
      <el-dialog width="80%"  height="100%" title="编辑" :visible.sync="editVisible1"  >
      <iframe src="http://47.94.229.181:81/jrtech/modeler.html?modelId=280006" frameborder="0" height="100%" width="100%"></iframe>


      </el-dialog>
    <div class="container">
      <el-button @click="add">新增</el-button>
      <el-table :data="dataF" style="width: 100%">
        <el-table-column prop="userName" label="用户名称"></el-table-column>
        <el-table-column prop="departName" label="用户所属机构"></el-table-column>
        <el-table-column prop="userEmail" label="用户EMAIL"></el-table-column>
        <el-table-column prop="userPhone" label="用户手机号码"></el-table-column>
        <el-table-column prop="userIdTypeName" label="用户证件类型"></el-table-column>
        <el-table-column prop="createDate" label="创建用户时间"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination
          :current-page.sync="form.pageNo"
          background
          @current-change="handleCurrentChange"
          layout="total,prev, pager, next,jumper"
          :total="pageTotal"
          :page-size="form.pageSize"
        ></el-pagination>
      </div>
    </div>

    <el-dialog title="编辑" :visible.sync="editVisible" height="100%" width="60%">
      <el-form ref="form" :model="form" label-width="100px">
        <el-form-item label="选择器">
          <el-select v-model="form.leaveType" placeholder="请选择">
            <el-option key="0" label="公休" value="0"></el-option>
            <el-option key="1" label="病假" value="1"></el-option>
            <el-option key="2" label="调休" value="2"></el-option>
            <el-option key="3" label="事假" value="3"></el-option>
            <el-option key="4" label="婚假" value="4"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="开始日期">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="开始日期"
              v-model="form.date1"
              style="width: 100%;"
               :picker-options="pickerOptions1"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="结束日期">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="结束日期"
              v-model="form.date2"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
        </el-form-item>
        <el-form-item label="请假原因">
          <el-input type="textarea" rows="5" v-model="form.desc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveEdit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        pageNo: "1",
        workName: "",
        userState: "0",
        userName: "admin",
        userId: "df655ad8d3229f3269fad2a8bab59b6c",
        workAccount: "admin",
        workDepartNumber: "1",
        pageSize: 2,
        desc: "",
        date1: "",
        date2: "",
        leaveType: ""
      },
      pickerOptions1: {
          disabledDate(time) {
            return time.getTime() > Date.now();
          }
      },
      editVisible: false,
      editVisible1:true,
      pageTotal: 0,
      dataF: []
    };
  },

  methods: {
    add() {
      this.editVisible = true;
    },
    saveEdit(){

    }
  }
};
</script>
<style  scoped>
</style>