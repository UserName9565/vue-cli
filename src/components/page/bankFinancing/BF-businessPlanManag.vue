<template>
  <div class="container">
    <el-card>

     <el-button type="primary" @click="doNew()">新增方案</el-button>
    </el-card>
    <el-table
      :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
       
      border
      stripe
      highlight-current-row="true"
      style="width: 100%"
    >
      <el-table-column align="center"  type="index" label="序号" ></el-table-column>  
      <el-table-column align="center"  prop="date" label="业务编号" ></el-table-column>
      <el-table-column align="center"  prop="name" label="创建时间" ></el-table-column>
      <el-table-column align="center"  prop="address" label="额度校验" ></el-table-column>
      <el-table-column align="center"  prop="address" label="审批状态" >
        <template slot-scope="scope">
              <span>通过</span><br>
              <el-button @click="doDetaile(scope.row)" type="text" size="mini">审批详情</el-button>
          </template>
      </el-table-column>
      <el-table-column align="center"  prop="address" label="投委会纪要" >
        <template slot-scope="scope">
            <input type="hidden" :value="scope.row">
            <span >未上传</span><br>
              <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="text" >点击上传</el-button>
                 
              </el-upload>
              <!-- <el-button @click="doDetaile(scope.row)" type="text" size="mini">补充纪要</el-button> -->
          </template>

      </el-table-column>
      <el-table-column align="center"  fixed="left" label="操作" width="80">
        <template slot-scope="scope">
          <el-button @click="doEdit(scope.row)" type="text" size="mini">查看</el-button>
         
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
    <!-- <t-grid ref="searchReulstList" :options="gridOptions" @selection-change="handleSelectionChange">
    </t-grid>-->
    <!-- 弹窗, 新增 / 修改 -->
    <add-list v-if="AddListVisible" ref="addList" @change="doSearch"></add-list><aprove-step v-if="AproveStepVisible" ref="aproveStep"></aprove-step>
 
  </div>
</template>

<script>
 import AproveStep from "../comWin/aproveStep";
 import AddList from './BF-businessPlanManagWin/addList';
export default {
  data() {
    return {
      AddListVisible: false,
      AproveStepVisible: false,
      pageTotal: 0,
      form:{
        searchKey:"",
        region:"",
        status:"",
        page:"",
        rows:""

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
    this.doSearch(1)
  },
  components:{
    AproveStep,
    AddList
  },
  methods: {
    doNew() {
       //this.$router.push('BF-addBusinessPlanManag');
      this.AddListVisible = true;
      this.$nextTick(() => {
         this.$refs.addList.init(null,0);
      });
    },
    doEdit(row) {
      this.AddListVisible = true;
      this.$nextTick(() => {
         
        this.$refs.addList.init("11",1);
      });
    },
     
    handleSelectionChange(val) {
      this.selectedRows = val;
    }, 
    doDetaile(row) {
      this.AproveStepVisible = true;
      this.$nextTick(() => {
        this.$refs.aproveStep.init(row.date);
      });
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
