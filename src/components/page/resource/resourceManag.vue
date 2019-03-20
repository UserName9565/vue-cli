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
           <el-tree :expand-on-click-node="false"  :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </div>
      </el-card>
    </el-col>
    <el-col :span="17">
      <el-card>
        <el-col class="mt20" :span="24" style="text-align: right;">
          <el-button type="primary" icon="el-icon-plus" size="small" 
              @click="doNew()">添加</el-button>
        </el-col>       
        <el-table :data="tableData" border size="mini" :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}" header-cell-class-name="header-row"  highlight-current-row="true">
            <el-table-column prop="name" label="资源名称" header-align="center"></el-table-column>
            <el-table-column prop="code" label="资源代码" header-align="center"></el-table-column>         
            <el-table-column prop="url" label="url" header-align="center"></el-table-column>
            <el-table-column prop="permission" label="权限代码" header-align="center" align="center"></el-table-column>
            <el-table-column prop="locked" label="状态" header-align="center" align="center">
              <template slot-scope="scope">
                <el-tag type="success" v-show="!scope.locked">启用</el-tag>
                <el-tag type="danger" v-show="scope.locked">停用</el-tag>
              </template>
            </el-table-column>
            <el-table-column label="操作" header-align="center" align="center" width="200">
              <template slot-scope="scope">
                <el-button  type="primary" size="mini"
                  @click="doEdit( scope.row,1)">编辑</el-button>           
                <el-button  type="danger" size="mini"
                  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>              
          </el-table>
      </el-card>
      <!-- <el-tabs v-model="tabActive" @tab-click="handleTabClick">
        <el-tab-pane label="岗位" name="role" >
          <role-list ref="rolelist" :organizationId="selectedOrgId" ></role-list>
        </el-tab-pane>
      </el-tabs> -->
    </el-col>
  </el-row>
  <org-edit-form v-if="orgEditFormVisible" ref="orgEditForm" @change="resourceTable"></org-edit-form>

</div>
</template>

<script>
 
import OrgEditForm from './resourceManagWin/edit'
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
      tableData:null,
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
        doSearch(){
          let self = this;
          var obj ={
              url:this.$url.menuManag.findAll,
              data:{}
          }
          this.common.httpPost(obj,success);
          function success(data){
          
              self.treeData = self.common.treeList(data.rows);
          
          }
        },  
        doNew() {
          this.orgEditFormVisible =true;
          this.$nextTick(() => {
            this.$refs.orgEditForm.init(null,0,this.routerId,this.routerName);
          });
           
        },
        doEdit(row,type) {
          this.orgEditFormVisible = true
          this.$nextTick(() => {
            this.$refs.orgEditForm.init(row.id,type,this.routerId,this.routerName)
          })
        },
        handleDelete(index,row) {
          let self = this;
          //let ids = self.$refs.orgTree.getCheckedKeys();
          
          self.$confirm('确认删除？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
             let self = this;
              var obj ={
                  url:this.$url.resourceManag.del,
                  data:{
                    id:row.id
                  }
              }
              this.common.httpPost(obj,success);
              function success(data){
                   self.resourceTable();
              
              }
          });
        },
        
        handleNodeClick(data) {
          this.routerId = data.id;
          this.routerName = data.name
          this.resourceTable();
        },
        resourceTable(){
          let self = this;
            var obj ={
                url:this.$url.resourceManag.findByRouterId,
                data:{
                  routerId:this.routerId
                }
            }
            this.common.httpPost(obj,success);
            function success(data){
                 self.tableData = data.rows;
            
            }
        }
    }
  }
</script>
<style >
.mt20{
  margin:0 0 10px 0;
}
</style>
