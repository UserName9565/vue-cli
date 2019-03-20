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
           <el-tree :expand-on-click-node="false"  :data="treeData" :props="defaultProps" @node-click="handleNodeClick"> 
        </el-tree>
        </div>
      </el-card>
    </el-col>
    <el-col :span="14">
      <el-card>
        <el-form label-width="130px">
          <el-form-item label="机构名称">
            <el-col :span="16">

                <el-input  v-model="form.name" clearable></el-input>
            </el-col>
          </el-form-item>
       
         
          <el-form-item label="机构简称">
           <el-col :span="16">

                <el-input  v-model="form.shortname" clearable></el-input>
            </el-col>
          </el-form-item>
        
       
          <el-form-item label="父级机构名称">
            <el-col :span="16">

                <el-input  v-model="form.parentname" clearable disabled="true"> </el-input>
            </el-col>
          </el-form-item>
         
         
          <el-form-item label="父级机构编码">
           <el-col :span="16">

                <el-input  v-model="form.parentId" clearable disabled="true"></el-input>
            </el-col>
          </el-form-item>
         <el-form-item>
            <el-button type="primary" @click="doOrgEdit(0)">添加子机构</el-button>
            <el-button @click="doOrgEdit(1)">修改</el-button>
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
  <org-edit-form v-if="orgEditFormVisible" ref="orgEditForm" @change="doOrgAppend" @changeEdit="searchNode()"></org-edit-form>

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
      defaultProps:{
        label:'name',
        children:"children"
      },
      form:{
      },
       treeData:[]
    }
  },
  components: {
    OrgEditForm
  },
  created() {
    this.doSearch();
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
        
        doOrgEdit(type) {
          this.orgEditFormVisible = true;
          if(!this.form.id){
            this.$message("请选择组织机构")
            return false;
          }
          if(type==0){
            this.$nextTick(()=>{
              this.$refs.orgEditForm.new(this.form.id,this.form.name);
            })
          }else{
            this.$nextTick(()=>{
              this.$refs.orgEditForm.edit(this.form.id,this.form.name,this.form.shortname,this.form.parentId,this.form.parentname);
            })
          }
          
          // this.orgEditFormVisible = true
          // this.$nextTick(() => {
         
          //   this.$refs.orgEditForm.edit(data.id, data.name)
          // })
        },
      
        doOrgAppend(data) {
           
          if (!this.nowData.children) {
            this.$set(this.nowData, 'children', []);
          }
          this.nowData.children.push(data);
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
        doSearch() {
          let self = this;
          var obj ={
              url:this.$url.organizationManag.findTree,
              data:{}
          }
          this.common.httpPost(obj,success);
          function success(data){
             
            self.treeData =data.rows// self.common.treeList(data.rows,obj)
             
          }
        },
        handleNodeClick(data) {
          this.nowData = data;
          
          this.form.id = data.id;
          this.searchNode();
        },
        searchNode(){
          let self = this;
          var obj ={
              url:this.$url.organizationManag.getById,
              data:{
                id:this.form.id
              }
          }
          this.common.httpPost(obj,success);
          function success(data){
              self.form = data;
          }
        }
    }
  }
</script>
<style >

</style>
