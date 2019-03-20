<template>
<div>
<el-card class="mb20">
 
 <el-form :inline="true" >

  <el-row >
    <el-col :span="24">
      
      <el-row class="search-row">
        <el-col :span="12">
          <el-input placeholder="路由名称" size="small" v-model="form.name">
            <el-button slot="append" icon="el-icon-search" @click="getRouterList(1)"></el-button>
          </el-input>
        </el-col>
        <el-col :span="12" style="text-align: right;">
          <el-button type="primary" icon="el-icon-plus" size="small" 
              @click="handleCreateRouter(0)">添加</el-button>
        </el-col>        
      </el-row>
     
            
    </el-col>
  </el-row>
 </el-form>
</el-card>
<el-card>
     <el-row>
    <el-col :span="24">
          <el-table :data="routerList" border size="mini" :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}" header-cell-class-name="header-row"  highlight-current-row="true">
            <el-table-column prop="name" label="名称" header-align="center"></el-table-column>
            <el-table-column prop="code" label="代码" header-align="center"></el-table-column>         
            <el-table-column prop="url" label="url" header-align="center"></el-table-column>
            <el-table-column prop="level" label="层级" header-align="center" align="center"></el-table-column>
            <el-table-column prop="displayOrder" label="显示序号" header-align="center" align="center"></el-table-column>
            <el-table-column label="操作" header-align="center" align="center" width="200">
              <template slot-scope="scope">
                <el-button  type="primary" size="mini"
                  @click="handleEditRouter( scope.row,1)">编辑</el-button>           
                <el-button  type="danger" size="mini"
                  @click="handleDeleteRouter(scope.$index, scope.row)">删除</el-button>
              </template>
            </el-table-column>              
          </el-table>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-pagination
            background     
            @size-change="handleSizeChange"
            @current-change="getRouterList"
            :current-page.sync="form.pageNum"
            :page-size="form.pageSize"
            layout="total,prev, pager, next,jumper"
            :total="routerTotal">
          </el-pagination>     
        </el-col>
      </el-row>   
</el-card>
 <router-edit ref="routerEdit" v-if="editVisible" @save-finished="getRouterList(1)" @change="getRouterList(1)"></router-edit>
</div>
</template>

<script>
// import { listRouter, getRouterById, listByParentId, removeRouter } from '@/api/router'
// import { listResourcePermission } from "@/api/resource"
 import RouterEdit from "./menusmanagWin/routerEdit"

export default {
  data() {
    return {
      loading: false,
      editVisible:false,
      permission: {
        add: false,
        edit: false,
        remove: false
      },      
      form: {
        name: '',
        pageNum:"1",
        pageSize:"10"
      },
      routerTotal: 0,
      routerList: [],
      parentRouterList: []
    }
  },
  methods: {
    getRouterList(value) {
      // alert(222)
      this.form.pageNum = value;
       
      let self = this;
      var obj ={
          url:this.$url.menuManag.getList,
          data:this.form,
          type:"get"
      }
      this.common.httpPost(obj,success);
      function success(data){
      
          self.routerTotal = data.total
          self.routerList = data.rows
          self.loading = false
      
      }
    //   listRouter(this.search)
    //   .then(response => {
    //     this.routerTotal = response.data.total
    //     this.routerList = response.data.rows
    //     this.loading = false
    //   })
    //   .catch(error => {
    //     this.outputError(error)
    //   })
    },
    // handleSizeChange(val) {
    //   this.search.limit = val;
    //   this.search.pageNum = (this.search.currentPage - 1) * val
    //   this.getRouterList()
    // },
    // handleCurrentChange(val) {
    //   this.search.pageNum = (val - 1) * this.search.limit
    //   this.search.currentPage = val
    //   this.getRouterList()
    // },    
    // async pageInit() {
    //   this.loading = true
    //   try {
    //     let [listRouterResp, listPermissionResp] = await Promise.all([
    //       listRouter(this.search),
    //       listResourcePermission(this.$route.meta.routerId)
    //     ])
    //     this.routerTotal = listRouterResp.data.total
    //     this.routerList = listRouterResp.data.rows
    //     this.permission.add = listPermissionResp.data.find(item => {
    //       return item.resourcePermission === "routers:create"
    //     })
    //     this.permission.edit = listPermissionResp.data.find(item => {
    //       return item.resourcePermission === "routers:update"
    //     })
    //     this.permission.remove = listPermissionResp.data.find(item => {
    //       return item.resourcePermission === "routers:delete"
    //     })
    //     this.loading = false      
    //   } catch(error) {
    //     this.outputError(error)        
    //   }
    // },
    handleCreateRouter(type) {
      this.editVisible =true;
       this.$nextTick(() => {
        this.$refs.routerEdit.init(null,type);
      });

    },    
    async handleEditRouter(row,type) {
      this.editVisible =true;
      this.$nextTick(() => {
        this.$refs.routerEdit.init(row.id,type);
      });
      // this.loading = true
      // try {
      //   let [getRouterResp, listRootRouterResp] = await Promise.all([
      //     getRouterById(row.id),
      //     listByParentId(0)
      //   ])
      //   this.parentRouterList = this.getParentRouterList(listRootRouterResp.data)
      //   this.$refs.routerEdit.$emit('openEditRouterDialog', getRouterResp.data)
      //   this.loading = false   
      // } catch(error) {
      //   this.outputError(error)        
      // }
    },
    handleDeleteRouter(index, row) {
      this.$confirm('确定删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      .then(() => {
        this.loading = true
        let self = this;
        let model = self.model;
        var obj = {
          url: this.$url.menuManag.del,
          data: {
            id:row.id
          }
        };
        this.common.httpPost(obj, success);
        function success(data) {
            self.getRouterList(1); 
        }
      })
      .catch(() => {})
    },
    getParentRouterList(routers) {
      let result = []
      result.push(
        {
          id: 0,
          name: '无'
        }
      )
      for(let router of routers) {
        result.push({
          id: router.id,
          name: router.name
        })
      }
      return result
    },
    outputError(error) {
      console.log(error.response ? error.response : error.message)
      this.loading = false
      this.$message({
        showClose: true,
        message: '出错了，请按F12查看浏览器日志。',
        type: 'error'
      })      
    }    
  },
  components: { RouterEdit },
  created() {
    this.getRouterList(1) 
  }
}
</script>

<style  scoped>
.search-row {
  padding-bottom: 8px;
  
}
.search-row .el-input {
    width: 260px;
  }
.router-locked {
  color: red;
}
.router-not-locked {
  color: green;
}
</style>
        