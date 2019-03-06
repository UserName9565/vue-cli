<template>
<div class="container">

<div class="mod-role">
  <el-form :inline="true" @keyup.enter.native="doSearch()">
    <el-form-item>
      <el-input v-model="ruleForm.searchKey" placeholder="模型名称" clearable></el-input>
    </el-form-item>
    <el-form-item>
      <el-button icon="el-icon-search"  type="primary" @click="doSearch(1)">查询</el-button>
      <el-button icon="el-icon-plus" type="primary" @click="doNew()">新增</el-button>
      
      <el-button icon="el-icon-delete" type="danger" @click="doBatchDelete()" :disabled="selectedRows.length <= 0">批量删除</el-button>

      <!-- <el-button icon="el-icon-download" @click="doExportExcel()">导出</el-button> -->
    </el-form-item>
  </el-form>
   <el-table
    @selection-change="handleSelectionChange"
    :data="list"
    border
  
    style="width: 100%">
    <el-table-column align="center" 
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column align="center"  type="index" :index="index" label="行数" width="50"></el-table-column>
    <el-table-column align="center"  prop="key" label="模型标志" width="180"></el-table-column>
    <el-table-column align="center"  prop="name" label="模型名称"></el-table-column>

    <!-- <el-table-column align="center"  prop="category" label="分类" ></el-table-column> -->
    <el-table-column align="center"  prop="createTime" :formatter='YYMM' label="时间" ></el-table-column>
    <el-table-column align="center"  prop="lastUpdateTime"  :formatter='YYMM' label="最后更新时间" ></el-table-column>
     <el-table-column align="center"  label="操作"  fixed="right" width="250">
      <template slot-scope="scope">
        <el-button @click="doEdit(scope)" type="text" size="small">查看</el-button>
        <el-button @click="doCopy(scope)" type="text" size="small">复制</el-button>
        <el-button @click="doDesign(scope)" type="text" size="small">设计</el-button>
        <el-button @click="doDeploy(scope)" type="text" size="small">部署</el-button>
        <!-- <el-button @click="dd" type="text" size="small">下载</el-button>
        <el-button @click="dd" type="text" size="small">上传</el-button> -->
         
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
  <!-- 弹窗, 新增 / 修改 -->
  <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch(1)"></edit-form>
  <design-form  v-if="designFormVisible" ref="designForm"></design-form>
  <code-view-form v-if="codeViewFormVisible" ref="codeViewForm"></code-view-form>
  
</div>
</div>
</template>

<script>
import EditForm from './edit'
import DesignForm from './design'
import CodeViewForm from './codeView'
 
export default {
  data() {
    return {
      editFormVisible: false,
      designFormVisible: false,
      codeViewFormVisible: false,
      uploadFormVisible: false,
 
      selectedRows: [],
      index(i){
        return ++i
      },
      total:0,
      list:[],
      ruleForm:{
        skipCount:1,
        maxResultCount:10,
        searchKey:''
      },
    }
  },
  components: {
    EditForm,
    DesignForm,
    CodeViewForm
  },
  created() {
    this.doSearch(1);
  },
  methods: {
    YYMM(row, column,cellValue){
      
      return this.$util.datetimeFormat(cellValue)
        // console.log(row, column)
    },
     
    doSearch(value){
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
    },
    doNew() {
      this.editFormVisible = true
      this.$nextTick(() => {
         console.log(this.$refs.editForm)
        this.$refs.editForm.init(null)
      })
    },
    doEdit(row) {
      this.editFormVisible = true;
      
      this.$nextTick(() => {
       
        this.$refs.editForm.init(row.row.id)
      })
    },
    doCopy(row) {
      row = row.row
      let self = this;
      var obj ={
          url:this.$url.workflowdef.copyById,
          data:{
            id:row.id
          }
        }
        this.common.httpPost(obj,success);
        function success(data){
            
           self.$notify.success({
            title: '操作成功',
            message: '模型已复制成功！'
          });
          self.doSearch(1);
        }
      // tapp.services.wf_Model.copy(row.id).then(function(result) {
      //   self.$notify.success({
      //     title: '操作成功',
      //     message: '模型已复制成功！'
      //   });
      //   self.$refs.searchReulstList.refresh();
      // })
    },
    doDesign(row) {
       row = row.row
      this.designFormVisible = true
      this.$nextTick(() => {
        this.$refs.designForm.init(row.id)
      })
    },
    doViewCode(row) {
      this.codeViewFormVisible = true;
      console.log(row)
      this.$nextTick(() => {

        this.$refs.codeViewForm.init(row.key)
      })
    },
     
    doDeploy(row) {
      row =row.row;
      let self = this;
      var obj ={
          url:this.$url.workflowdef.deploy,
          data:{
            modelId:row.id
          }
        }
        this.common.httpPost(obj,success);
        function success(data){
            
            self.$notify.success({
              title: '操作成功',
              message: '模型已部署成功！'
            });
            self.doSearch(1);
        }
       
    },
    handleSelectionChange(val) {
      this.selectedRows = val;
    },

    doBatchDelete() {
      let self = this;
      if (!self.selectedRows || self.selectedRows.length == 0) {
        self.$notify.info({
          title: '系统提示',
          message: '您没选择任何行，无法操作！'
        });
        return;
      }
       let ids = new Array();
      // ids[0] = '5';
      // for(let i=0;i<self.selectedRows.length;i++){
      //   ids.push(self.selectedRows[i].id)
      // }
      self.selectedRows.map(function(row) {
        ids.push(row.id)
      });
      ids =  ids.join(",");
      console.log(ids)
      self.$confirm('此操作将永久删除' + ids.length + '个模型, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
         var obj ={
          url:this.$url.workflowdef.del,
           data:{
             ids:ids
           }
        }
        this.common.httpPost(obj,success);
        function success(data){
            
            self.$notify.success({
              title: '操作成功',
              message: '模型已删除成功！'
            });
            self.doSearch(1);
        }
         
      });
    },
    doExportExcel() {
      this.$refs.searchReulstList.exportCSV('模型列表');
    }
    // ,
    // doSearch() {
    //   this.$refs.searchReulstList.refresh();
    // }
  }
}
</script>
