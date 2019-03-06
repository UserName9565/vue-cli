<template>
  <!-- 授信题库 -->
  <div>
    <el-row :gutter="20">
      <el-col :span="7">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>组织机构</span>
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
      <el-col :span="14">
        <el-card>
          <el-col :span="24" class="titlecre">
              <el-button type="primary">添加问题</el-button>
          </el-col>
          <el-table
      :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
       :span-method="objectSpanMethod"
       
      border
      stripe
      highlight-current-row="true"
      style="width: 100%"
    >
     
      <el-table-column align="center"  prop="compan" label="题目编号" ></el-table-column>
      <el-table-column align="center"  prop="pro" label="评分项目" ></el-table-column>
      <el-table-column align="center"  prop="used" label="内容及计算公式" ></el-table-column>
      <el-table-column align="center"  prop="frozen" label="评分标准" ></el-table-column>
      <el-table-column align="center"  prop="total" label="满分值" ></el-table-column>
      <el-table-column align="center"  prop="surplus" label="排序" ></el-table-column>
 <el-table-column align="center"  prop="surplus" label="状态" ></el-table-column>
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
  </div>
</template>
<style>
.titlecre{
  text-align: right;
  line-height: 50px;
}
</style>

<script>
export default {
  data() {
    return {
      editTree:false,
      tabActive: "role",
      orgEditFormVisible: false,
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
  created() {},
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
        const newChild = {  label: 'testtest', children: [] };
        if (!data.children) {
          this.$set(data, 'children', []);
        }
        data.children.push(newChild);
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
