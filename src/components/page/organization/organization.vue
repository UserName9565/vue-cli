<template>
<div>
  <el-row :gutter="20">
    <el-col :span="7">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>组织机构</span>
          <!-- <div style="float: right; padding: 3px 0">
            <el-button icon="el-icon-delete" type="danger" @click="doOrgBatchDelete()">批量删除</el-button>
          </div> -->
        </div>
        <div class="text item">
           <el-tree :expand-on-click-node="false" show-checkbox :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
      </el-card>
    </el-col>
    <el-col :span="14">
      <el-card>
        <el-form label-width="130px">
         
        
          <el-form-item label="机构名称">
            <el-col :span="16">

                <el-input  v-model="form.searchKey" clearable></el-input>
            </el-col>
          </el-form-item>
       
         
          <el-form-item label="机构简称">
           <el-col :span="16">

                <el-input  v-model="form.searchKey" clearable></el-input>
            </el-col>
          </el-form-item>
        
       
          <el-form-item label="父级机构名称">
            <el-col :span="16">

                <el-input  v-model="form.searchKey" clearable></el-input>
            </el-col>
          </el-form-item>
         
         
          <el-form-item label="父级机构编码">
           <el-col :span="16">

                <el-input  v-model="form.searchKey" clearable></el-input>
            </el-col>
          </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="onSubmit">添加子机构</el-button>
            <el-button>修改</el-button>
        </el-form-item>
         
       
    </el-form>
      </el-card>
      <!-- <el-tabs v-model="tabActive" @tab-click="handleTabClick">
        <el-tab-pane label="岗位" name="role" >
          <role-list ref="rolelist" :organizationId="selectedOrgId" ></role-list>
        </el-tab-pane>
      </el-tabs> -->
    </el-col>
  </el-row>
  <org-edit-form v-if="orgEditFormVisible" ref="orgEditForm" @change="doOrgRefresh"></org-edit-form>

</div>
</template>

<script>
import RoleList from './roleList'
import OrgEditForm from './orgEdit'
export default {
  data() {
    return {
      tabActive:'role',
      orgEditFormVisible: false,
      selectedOrgItem: null,
      form:{
        searchKey:""
      },
       treeData:[{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
      orgTreeOptons: {
        dataSource: {
          serviceInstance: '',
          serviceInstanceInputParameters: {}
        },
        tree: {
          checkStrictly: true,
          showCheckbox: true,
          defaultCheckedKeys: [],
          renderContent: this.renderOrgContent,
        }
      },
    }
  },
  components: {
    RoleList,
    OrgEditForm
  },
  created() {

  },
  computed: {
    selectedOrgId(){
      if (this.selectedOrgItem == null ) {
        return null;
      }
      return this.selectedOrgItem.id;
    },
    selectedOrgItemName() {
      if (this.selectedOrgItem == null ||
        this.selectedOrgItem.name == null) {
        return '未选择组织机构'
      }
      return this.selectedOrgItem.name;
    },
  },
  methods: {
        renderOrgContent(h, { node, data, store }) {
            return (
              <span class="custom-tree-node">
                <span>{node.label}</span>
                <span>
                  <el-button size="mini" type="text" on-click={ () => this.doOrgEdit(node, data) }>编辑</el-button>
                  <el-button size="mini" type="text" on-click={ () => this.doOrgAppend(data) }>增加子项</el-button>
                </span>
              </span>);
        },
        handleTabClick(tab, event) {
          if (!tab) {
            return;
          }
          this.tabActive = tab.name;
        },
        doOrgEdit(node, data) {
          this.orgEditFormVisible = true
          this.$nextTick(() => {
          debugger;
            this.$refs.orgEditForm.edit(data.id, data.name)
          })
        },
        doOrgAppend(data) {
          this.orgEditFormVisible = true
          this.$nextTick(() => {
            this.$refs.orgEditForm.new(data.id, data.name)
          })
        },
        doOrgBatchDelete() {
          let self = this;
          let ids = self.$refs.orgTree.getCheckedKeys();
          if (!ids || ids.length == 0) {
            self.$notify.info({
              title: '系统提示',
              message: '您没选择任何行，无法操作！'
            });
            return;
          }
          self.$confirm('确认要删除共' + ids.length + '项组织机构吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
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
        },
    }
  }
</script>
<style >

</style>
