<template>
  <!-- 数据字典 -->
  <div>
    <el-row :gutter="20">
        <el-col :span="24">
          <el-card class="mb20">

          
      <el-form :inline="true" @keyup.enter.native="doSearch(1)">

          <el-col :span="8">
            <el-form-item label="类别">
               <el-input v-model="form.searchKey" clearable></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="24" class="btn-box">
            <el-form-item>
              <el-button @click="doSearch(1)" icon="el-icon-search" type="primary">查询</el-button>
             
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
              node-key="id"
              default-expand-all
     
            >
              <span  class="custom-tree-node" slot-scope="{ node, data }">
                <span>{{ node.label }}</span>
                <span v-if="editTree">
                  <el-button type="text" size="mini" @click="() => append(data)">添加</el-button>
                  <el-button type="text" size="mini" @click="() => remove(node, data)">删除</el-button>
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
      <el-table-column align="center"  prop="compan" label="字典编码" ></el-table-column>
      <el-table-column align="center"  prop="pro" label="字典名称" ></el-table-column>
      <el-table-column align="center"  prop="used" label="字典类别" ></el-table-column>
      <el-table-column align="center"  prop="frozen" label="关联父级类别" ></el-table-column>
      <el-table-column align="center"  prop="total" label="关联父级字典" ></el-table-column>
 <el-table-column align="center"  prop="surplus" label="启用状态" ></el-table-column>
      <el-table-column align="center"  fixed="left" label="操作" width="80">
        <template slot-scope="scope">
          <el-button @click="doEdit(scope.row)" type="text" size="mini">查看</el-button>
          
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
  <add-form v-if="addFormVisible" ref="addForm" @change="doSearch"></add-form>
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
      form: {
        searchKey: ""
      },
      treeData: [
        { 
          label: "一级 1",
          children: [
            {
              label: "二级 1-1",
              children: [
                {
                  label: "三级 1-1-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 2",
          children: [
            {
              label: "二级 2-1",
              children: [
                {
                  label: "三级 2-1-1"
                }
              ]
            },
            {
              label: "二级 2-2",
              children: [
                {
                  label: "三级 2-2-1"
                }
              ]
            }
          ]
        },
        {
          label: "一级 3",
          children: [
            {
              label: "二级 3-1",
              children: [
                {
                  label: "三级 3-1-1"
                }
              ]
            },
            {
              label: "二级 3-2",
              children: [
                {
                  label: "三级 3-2-1"
                }
              ]
            }
          ]
        }
      ],
      tableData3: [
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "财务公司",
          pro: "债券投资",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "财务公司",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "集团公司",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "集团公司",
          pro: "银行理财",
          used: "110",
          frozen:"111.02",
          total:"119",
          surplus:"11"
        },
        {
          compan: "有限公司",
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
  computed: {
    selectedOrgId() {
      if (this.selectedOrgItem == null) {
        return null;
      }
      return this.selectedOrgItem.id;
    },
    selectedOrgItemName() {
      if (this.selectedOrgItem == null || this.selectedOrgItem.name == null) {
        return "未选择组织机构";
      }
      return this.selectedOrgItem.name;
    }
  },
  methods: {
    append(data) {
        this.editFormVisible = true;
        this.$nextTick(()=>{

          this.$refs.editForm.init();
        })
        // const newChild = {  label: 'testtest', children: [] };
        // if (!data.children) {
        //   this.$set(data, 'children', []);
        // }
        // data.children.push(newChild);
      },
      doNew() {
        this.addFormVisible = true;
        this.$nextTick(() => {
          this.$refs.addForm.init(null);
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
    handleTabClick(tab, event) {
      if (!tab) {
        return;
      }
      this.tabActive = tab.name;
    },
    doOrgEdit(node, data) {
      this.orgEditFormVisible = true;
      this.$nextTick(() => {
        debugger;
        this.$refs.orgEditForm.edit(data.id, data.name);
      });
    },
    doOrgAppend(data) {
      this.orgEditFormVisible = true;
      this.$nextTick(() => {
        this.$refs.orgEditForm.new(data.id, data.name);
      });
    },
    doOrgBatchDelete() {
      let self = this;
      let ids = self.$refs.orgTree.getCheckedKeys();
      if (!ids || ids.length == 0) {
        self.$notify.info({
          title: "系统提示",
          message: "您没选择任何行，无法操作！"
        });
        return;
      }
      self
        .$confirm("确认要删除共" + ids.length + "项组织机构吗?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          // tapp.services.base_Organization.batchDelete(ids).then(function(result) {
          //   self.doOrgRefresh();
          //   self.$notify.success({
          //     title: '操作成功',
          //     message: '系统删除成功！'
          //   });
          // })
        });
    },
    doOrgRefresh() {
      this.$refs.orgTree.refresh();
    },
    handleOrgNodeClick(dataItem, node, el) {
      this.selectedOrgItem = dataItem;
    }
  }
};
</script>
<style >
</style>
