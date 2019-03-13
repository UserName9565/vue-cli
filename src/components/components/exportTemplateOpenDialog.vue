<template>
<el-dialog :title="title" :close-on-click-modal="false" :visible.sync="visible" :modal="true">
  <el-button type="primary" icon="el-icon-download" @click="doBatchExport()" :disabled="selectedRows.length <= 0">批量导出</el-button>
  <div class="mod-role">
    <t-grid ref="searchReulstList" :options="gridOptions" @selection-change="handleSelectionChange">
    </t-grid>
  </div>
</el-dialog>
</template>

<script>
export default {
  data() {
    return {
      selectedRows: [],
      visible: false, title:"添加",
      disabled:false,
      btn:"提交",
      aproveVisible: false,
      templateUrl: null,
      templateCategoryId: null,
      title: null,
      docId: null,
      gridOptions: {
        dataSource: {
          loadDataOnFirst: false,
          serviceInstance:'',
          serviceInstanceInputParameters: null,
        },
        grid: {
          pageable: false,
          // mutiSelect: false,
          operates: {}, // 列操作按钮
          columns: [{
              prop: 'id',
              label: '打印/导出',
              sortable: false,
              width: 120,
              formatter: (row, column, cellValue) => {
                return "<a target='_blank' href='" + this.templateUrl + "&templateId=" + row.id + "'>导出</a>";
              }
            },
            {
              prop: 'name',
              label: '名称',
              sortable: true,
              formatter: (row, column, cellValue) => {
                return "<a target='_blank' href='" + this.templateUrl + "&templateId=" + row.id + "'>"+row.name+"</a>";
              }
            },
          ], // 需要展示的列
          defaultSort: {
            prop: 'id',
            order: 'descending'
          },
        }
      }
    }
  },
  components: {},
  created() {

  },
  methods: {
    // 初始化
    init(templateUrl, templateCategoryId, title,docid) {
      this.visible = true;
      this.templateUrl = templateUrl;
      this.templateCategoryId = templateCategoryId;
      this.title = title;
      if(docid){
        this.docId = docid;
      }
      this.$nextTick(() => {
        this.gridOptions.dataSource.serviceInstanceInputParameters = templateCategoryId;
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
      })
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
    },
    handleSelectionChange(val) {
      this.selectedRows = val;
    },
    doBatchExport() {
      let ids = this.selectedRows.map(function(row) {
        return row.id;
      }); 
      window.open(window.SITE_CONFIG['serverUrl'] + '/authapi/pl_loanenter/batchExport?loanDocId=' + this.docId + '&templateId=' + ids);
    }
  }
}
</script>
