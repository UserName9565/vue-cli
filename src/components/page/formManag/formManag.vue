<!--  -->
<template>
  <div class="container">
    <div class="mod-role">
      <el-form :inline="true" @keyup.enter.native="doSearch()">
            
        <el-form-item label="表单编码">
          <el-input v-model="ruleForm.agCode" clearable></el-input>
        </el-form-item>
         <el-form-item label="表单名称">
          <el-input v-model="ruleForm.agName" clearable></el-input>
        </el-form-item>
        <el-form-item>
          <el-button icon="el-icon-search" @click="doSearch(1)">查询</el-button>
          <el-button icon="el-icon-plus" type="primary" @click="doNew()">新增</el-button>

          <el-button
            icon="el-icon-delete"
            type="danger"
            @click="doBatchDelete()"
            :disabled="selectedRows.length <= 0"
          >批量删除</el-button>

          <!-- <el-button icon="el-icon-download" @click="doExportExcel()">导出</el-button> -->
        </el-form-item>
      </el-form>
      <el-table :data="list" border style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column type="index" :index="index" label="行数" width="50"></el-table-column>
        <el-table-column prop="key" label="模型标志" width="180"></el-table-column>
        <el-table-column prop="name" label="模型名称"></el-table-column>

        <el-table-column prop="createTime" :formatter="YYMM" label="时间"></el-table-column>
        <el-table-column prop="lastUpdateTime" :formatter="YYMM" label="最后更新时间"></el-table-column>
        <el-table-column label="操作" fixed="right" width="250">
          <template slot-scope="scope">
            <el-button @click="doEdit(scope)" type="text" size="small">查看</el-button>
            <el-button @click="doCopy(scope)" type="text" size="small">复制</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @current-change="doSearch"
        :current-page="currentPage4"
        :page-size="ruleForm.maxResultCount"
        layout="total, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
      <!-- <t-grid ref="searchReulstList" :options="gridOptions" @selection-change="handleSelectionChange">
      </t-grid>-->
      <!-- 弹窗, 新增 / 修改 -->
      <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch(1)"></edit-form>
    </div>
  </div>
</template>

<script>
import EditForm from "./formManagEdit";

export default {
  data() {
    return {
      editFormVisible: false,
      ruleForm: {
        page: 1,
        rows: 10,
        agName: "",
        agCode:""
      },
      selectedRows: [],
      index(i) {
        return ++i;
      },
      total: 0,
      list: []
    };
  },

  methods: {
    doSearch() {
      let self = this;
      var obj = {
        url: this.$url.formManag.getList,
        data: this.ruleForm
      };
      this.common.httpPost(obj, success);
      function success(data) {
        self.list = data.data.rows;
        self.total = data.data.total;
      }
    },
    doBatchDelete() {},
    doNew() {
      this.editFormVisible = true;

      this.$nextTick(() => {
        this.$refs.editForm.init(null);
      });
    }
  },
  components: {
    EditForm
  }
};
</script>
<style  scoped>
</style>