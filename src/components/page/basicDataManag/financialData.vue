<template>
  <!-- 金融数据 -->
  <div>
    <el-card class="mb20">
      <div slot="header">
        <span>存款存款利率：</span>
        <div style="float:right">更新时间：<span>{{updateTime1}}</span></div>
        
      </div>
      <el-table :data="tableData1"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}" border stripe highlight-current-row="true" style="width: 100%">
         <el-table-column align="center"  prop="organizationName" label="名称"></el-table-column>
        <el-table-column align="center"  prop="currentrate" label="活期(%)"></el-table-column>
        <el-table-column align="center"  prop="rateof3m" label="3月定期(%)"></el-table-column>
        <el-table-column align="center"  prop="rateof6m" label="6月定期(%)"></el-table-column>
        <el-table-column align="center"  prop="rateof1y" label="1年定期(%)"></el-table-column>
        <el-table-column align="center"  prop="rateof2y" label="2年定期(%)"></el-table-column>
        <el-table-column align="center"  prop="rateof3y" label="3年定期(%)"></el-table-column>
      </el-table>
      </el-card>
      <el-card class="mb20">
      <div slot="header">
        <span>上海银行间同业拆放利率:</span>
        <div style="float:right">更新时间：
          <span>{{updateTime2}}</span>
          </div>
      </div>
      <el-table :data="tableData2"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}" border stripe highlight-current-row="true" style="width: 100%">
         <el-table-column align="center"  prop="compan" label="名称">
           <template slot-scope="scope">

             {{$index}}
              <span v-if="scope.$index==0">Shibor</span>
              <span v-if="scope.$index==1">涨跌(BP)</span>
           </template>
         </el-table-column>
        <el-table-column align="center"  prop="bpofon" label="隔夜">
          <template slot-scope="scope">
              <span v-if="scope.$index==0">{{scope.row.rateofon}}</span>
              <span v-if="scope.$index==1">{{scope.row.bpofon}}</span>
           </template>
        </el-table-column>
        <el-table-column align="center"  prop="bpof1w" label="1周(%)">
          <template slot-scope="scope">
              <span v-if="scope.$index==0">{{scope.row.rateof1w}}</span>
              <span v-if="scope.$index==1">{{scope.row.bpof1w}}</span>
           </template>
        </el-table-column>
        <el-table-column align="center"  prop="bpof2w" label="2周(%)">
          <template slot-scope="scope">
              <span v-if="scope.$index==0">{{scope.row.rateof2w}}</span>
              <span v-if="scope.$index==1">{{scope.row.bpof2w}}</span>
           </template>
        </el-table-column>
        <el-table-column align="center"  prop="bpof1m" label="1月(%)">
          <template slot-scope="scope">
              <span v-if="scope.$index==0">{{scope.row.rateof1m}}</span>
              <span v-if="scope.$index==1">{{scope.row.bpof1m}}</span>
           </template>
        </el-table-column>
        <el-table-column align="center"  prop="bpof3m" label="3月(%)">
          <template slot-scope="scope">
              <span v-if="scope.$index==0">{{scope.row.rateof3m}}</span>
              <span v-if="scope.$index==1">{{scope.row.bpof3m}}</span>
           </template>
        </el-table-column>
        <el-table-column align="center"  prop="bpof6m" label="6月(%)">
          <template slot-scope="scope">
              <span v-if="scope.$index==0">{{scope.row.rateof6m}}</span>
              <span v-if="scope.$index==1">{{scope.row.bpof6m}}</span>
           </template>
        </el-table-column>
         <el-table-column align="center"  prop="bpof9m" label="9月(%)">
           <template slot-scope="scope">
              <span v-if="scope.$index==0">{{scope.row.rateof9m}}</span>
              <span v-if="scope.$index==1">{{scope.row.bpof9m}}</span>
           </template>
         </el-table-column>
        <el-table-column align="center"  prop="bpof1y" label="1年(%)">
          <template slot-scope="scope">
              <span v-if="scope.$index==0">{{scope.row.rateof1y}}</span>
              <span v-if="scope.$index==1">{{scope.row.bpof1y}}</span>
           </template>
        </el-table-column>
      </el-table>
    </el-card>
   
    
  </div>
</template>

<script>
import EditForm from "./financialDataWin/edit";
import AdminChangePasswordForm from "./financialDataWin/adminChangePassword";
import AproveStep from "../comWin/aproveStep";
// import moment from 'moment';
// //import util from '@/util'
export default {
  data() {
    return {
      editFormVisible: true,
      adminChangePasswordFormVisible: false,
      updateTime1:"21",
      updateTime2:"22",
      
      pageTotal: 0,
      tableData1: [
      ],
      tableData2: [
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
    this.doSearch1();
    this.doSearch2();
  },
  methods: {
    doSearch1() {
      
        let self = this;
        var obj ={
          url:this.$url.financialData.findLatest1,
          data:{}
        }
        this.common.httpPost(obj,success);
        function success(data){
            self.tableData1 = data.rows;
           self.updateTime1=self.$util.datetimeFormat(data.rows[0].updateTime)
        }
    },
    doSearch2(value) {
      let self = this;
      var obj ={
        url:this.$url.financialData.findLatest2,
        data:{}
      }
      this.common.httpPost(obj,success);
      function success(data){
          for(let i = 0;i<=1;i++){
            self.tableData2.push(data.rows[0])
          }
      
          self.updateTime2=self.$util.datetimeFormat(data.rows[0].updateTime)
      }
    }
  }
};
</script>
