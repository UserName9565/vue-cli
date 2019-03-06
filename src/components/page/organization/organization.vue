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

                <el-input  v-model="form.name1" clearable></el-input>
            </el-col>
          </el-form-item>
       
         
          <el-form-item label="机构简称">
           <el-col :span="16">

                <el-input  v-model="form.name2" clearable></el-input>
            </el-col>
          </el-form-item>
        
       
          <el-form-item label="父级机构名称">
            <el-col :span="16">

                <el-input  v-model="form.name3" clearable></el-input>
            </el-col>
          </el-form-item>
         
         
          <el-form-item label="父级机构编码">
           <el-col :span="16">

                <el-input  v-model="form.name4" clearable></el-input>
            </el-col>
          </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="doOrgEdit()">添加子机构</el-button>
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
 
import OrgEditForm from './orgEdit'
export default {
  data() {
    return {
      tabActive:'role',
      orgEditFormVisible: false,
      selectedOrgItem: null,
      form:{
        name1:"",
        name2:"",
        name3:"",
        name4:""
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
        }]
    }
  },
  components: {
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
        
        doOrgEdit() {
          this.orgEditFormVisible = true;
          this.$nextTick(()=>{
            this.$refs.orgEditForm.new(this.form.name1);
          })
          // this.orgEditFormVisible = true
          // this.$nextTick(() => {
         
          //   this.$refs.orgEditForm.edit(data.id, data.name)
          // })
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
             
          });
        },
        doOrgRefresh() {
          this.$refs.orgTree.refresh();
        },
        handleNodeClick(data) {
          console.log(data);
          this.form.name1 = data.label;
          this.form.name2 = data.label;
          this.form.name3 = data.label;
          this.form.name4 = data.label;
        }
    }
  }
</script>
<style >

</style>
