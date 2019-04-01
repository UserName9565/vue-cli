<template>
  <!-- 数据字典 -->
  <div>
    <el-row :gutter="20">
        <el-col :span="24">
          <el-card class="mb20">

          
      <el-form :inline="true" @keyup.enter.native="doSearch(1)">
     
          <el-col :span="8">
            <el-form-item label="检索">
               <el-input v-model="form.name" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" class="btn-box">
            <el-form-item>
              <el-button @click="findTree()" icon="el-icon-search" type="primary">查询</el-button>
             
            </el-form-item>
          </el-col>
      </el-form>
      </el-card>
        </el-col>
      <el-col :span="7">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>基础数据管理</span>
            <div style="float: right; padding: 3px 0">
            <el-button icon="el-icon-edit" type="primary" @click="editTree=!editTree" >{{editTree?'完成':'编辑'}}</el-button>
            </div>
          </div>
          <div class="text item">
            
            <el-tree
              :expand-on-click-node="false"
              :data="treeData"
              :props="defaultProps"
              @node-click="handleNodeClick"
              node-key="dictionaryId"
              :default-expanded-keys='[1]'
               ref="tree"
            >
              <span  class="custom-tree-node" slot-scope="{ node, data }">
                <span>{{ node.label }}</span>
                <span v-if="editTree">
                  <el-button type="text" size="mini" @click="() => append(data)">添加</el-button>
                  <!-- <el-button type="text" size="mini" @click="() => remove(node, data)">删除</el-button> -->
                </span>
              </span>
            </el-tree>
          </div>
        </el-card>
      </el-col>
      <el-col :span="17">
        <el-card>
          <el-col :span="24" class="titlecre">
              <el-button type="primary" @click="doNew()">新增字典</el-button>
          </el-col>
          <el-table
      :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
       :span-method="objectSpanMethod"
       
      border
      stripe
      highlight-current-row="true"
      style="width: 100%"
    >
      <el-table-column align="center"  prop="code" label="字典编码" ></el-table-column>
      <el-table-column align="center"  prop="name" label="字典名称" ></el-table-column>
      <el-table-column align="center"  prop="" label="字典类别" >
          <template slot-scope="scope">
            <input type="hidden" :value="scope.$index">
            {{selectedOrgItemName}}
          </template>
      </el-table-column>
      
      <el-table-column align="center"  prop="parentCode" label="关联父级字典" ></el-table-column>
 <el-table-column align="center"  prop="surplus" label="启用状态" >
   <template  slot-scope="scope">
     <el-tag v-if="scope.row.status==1" type="success">启用</el-tag>
     <el-tag v-if="scope.row.status==0" type="danger">禁用</el-tag>
   </template>
 </el-table-column>
      <el-table-column align="center"  fixed="left" label="操作" width="80">
        <template slot-scope="scope">
          <el-button @click="doEdit(scope.row)" type="text" size="mini">编辑</el-button>
          
        </template>
      </el-table-column>
    </el-table>
        </el-card>
        <!-- <el-tabs v-model="tabActive" @tab-click="handleTabClick">
        <el-tab-pane label="岗位" name="role" >
          <role-list ref="rolelist" :organizationId="selectedOrgId" ></role-list>
        </el-tab-pane>
        </el-tabs>-->
      </el-col>
    </el-row>
  <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form><aprove-step v-if="AproveStepVisible" ref="aproveStep"></aprove-step>
  <add-form v-if="addFormVisible" ref="addForm" @pushItem="doOrgAppend" @change="doSearch"></add-form>
  </div>
</template>
<style>
.titlecre{
  text-align: right;
  line-height: 50px;
}
</style>

<script>
import EditForm from './dataDictionaryWin/edit'
import AddForm from './dataDictionaryWin/add'
import AproveStep from "../comWin/aproveStep";
export default {
  data() {
    return {
      editTree:false,
      editFormVisible: false,
      addFormVisible: false,
      selectedOrgItem: null,
      defaultProps:{
        label:'name',
        children:"children"
      },
      form: {
        name: ""
      },
      treeData: [
         
      ],
      tableData3: [
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        }
      ],
      orgTreeOptons: {
        dataSource: {
          serviceInstance: "",
          serviceInstanceInputParameters: {}
        },
        tree: {
          checkStrictly: true,
          showCheckbox: true,
          defaultCheckedKeys: [],
          renderContent: this.renderOrgContent
        }
      }
    };
  },
  components: {
    EditForm,
    AproveStep,
    AddForm
  },
  created(){
    this.findTree();
  },
  computed: {
    selectedOrgId() {
      if (this.selectedOrgItem == null) {
        return null;
      }
    
      return this.selectedOrgItem.dictionaryId;
    },
    selectedOrgItemName() {
      if (this.selectedOrgItem == null || this.selectedOrgItem.name == null) {
        return "未选择组织机构";
      }
      return this.selectedOrgItem.name;
    }
  },
  methods: {
    findTree(){
      let self = this;
      var obj ={
        url:this.$url.dictionary.findTree,
        data:this.form
      }
      this.common.httpPost(obj,success);
      function success(data){
     
          self.treeData = data.rows
     
           self.selectedOrgItem = data.rows[0];
          self.doSearch();
         
          
      }
    },
    doSearch() {
        let self = this;
        var obj ={
          url:this.$url.dictionary.getList,
          data:{
            parentId:this.selectedOrgId
          }
        }
        this.common.httpPost(obj,success);
        function success(data){
            
            self.tableData3 = data.rows
           
           
        }
    },
    doOrgAppend(data) {
      console.log(data);
      if (!this.selectedOrgItem.children) {
        this.$set(this.selectedOrgItem, 'children', []);
      }
      this.selectedOrgItem.children.push(data);
    },
    append(data) {
      this.selectedOrgItem = data;
        this.addFormVisible = true;
        this.$nextTick(() => {
          this.$refs.addForm.init(this.selectedOrgItem,0);
        });
         
      },
      doNew() {
        this.addFormVisible = true;
        this.$nextTick(() => {
          this.$refs.addForm.init(this.selectedOrgItem,0);
        });
      },
      doEdit(rows){
        this.addFormVisible = true;
        this.$nextTick(() => {
          this.$refs.addForm.init(this.selectedOrgItem,1,rows.dictionaryId);
        });
      },
      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },
    renderOrgContent(h, { node, data, store }) {
      return (
        <span class="custom-tree-node">
          <span>{node.label}</span>
          <span>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.doOrgEdit(node, data)}
            >
              编辑
            </el-button>
            <el-button
              size="mini"
              type="text"
              on-click={() => this.doOrgAppend(data)}
            >
              增加子项
            </el-button>
          </span>
        </span>
      );
    },
    
    handleNodeClick(dataItem, node, el) {
      this.selectedOrgItem = dataItem;
      this.doSearch()
    }
  }
};
</script>
<style >
</style>
