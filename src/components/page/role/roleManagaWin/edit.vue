<template>
<div>
<el-dialog :title="title" :close-on-click-modal="false" :visible.sync="visible">
  <el-tabs v-model="tabActive" @tab-click="handleTabClick">
    <el-tab-pane label="基本信息" name="userInfo">
      <el-form :model="model" :disabled="disabled"  ref="form" label-width="100px" :rules="$util.rules" v-show="tabActive =='userInfo'">
        <el-row :gutter="20">
          <el-col :span="16">
            <el-form-item label="角色ID" prop="code"  class="is-required">
              <el-input v-model="model.code" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="角色名称" prop="name"   class="is-required">
              <el-input v-model="model.name"></el-input>
            </el-form-item>
          </el-col>
        
          <el-col :span="16">
            <el-form-item label="角色描述" prop="name"  class="is-required">
              <el-input v-model="model.description" ></el-input>
            </el-form-item>
          </el-col>
           
          <el-col :span="12">
            <el-form-item label="是否启用" prop="locked">
              <el-switch v-model="model.locked"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <el-row :gutter="20">
          <el-col>
            <el-form-item label="备注" prop="remark"  verify can-be-empty :maxLength="200">
              <el-input :autosize="{ minRows: 2, maxRows: 4}" v-model="model.remark"></el-input>
            </el-form-item>
          </el-col>
        </el-row> -->
      </el-form>
    </el-tab-pane>
    <!-- <el-tab-pane label="所属机构" name="orgin">
      <el-tree show-checkbox :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </el-tab-pane> -->
    <el-tab-pane label="访问权限" name="roleInfo">
            <el-tree show-checkbox  :data="treeData2"  ref="tree" :default-checked-keys="permissionKeys"  node-key="key" 
            @node-click="handleNodeClick"></el-tree>
      
    </el-tab-pane>
  </el-tabs>
  <span slot="footer" class="dialog-footer">
    <el-button  type="primary" @click="doAprove()">{{btn}}</el-button>
    <el-button @click="visible = false">取消</el-button>
  </span>
</el-dialog>
<aprove-win ref="aproveForm" v-if="aproveVisible"></aprove-win>

</div>
</template>


<script>
import AproveWin from "../../comWin/aproveWin";
export default {
  data() {


    return {
      formAction: 0, //0 add,//1,edit
      visible: false, title:"添加",
      disabled:false,
      btn:"提交",
      aproveVisible: false,
      tabActive: 'userInfo',
      model: {
           locked:false,
            
      },
      permissionKeys:[],
      userRoleTreeOptons: {
        dataSource: {
          serviceInstance: '',
          serviceInstanceInputParameters: {}
        },
        tree: {
          nodeKey:'id',
          defaultCheckedKeys: []
        }
      },
      treeData:[],
        options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        treeData2:[],
        value5: [],
    };
  },
  components: {
    AproveWin
  },
  created() {
    
  },
  activated() {},
  computed:{
     
  },
  methods: {
     init(id,type) {
      this.visible = true;
      this.tabActive = "userInfo";
      let self = this;
      if(this.$refs['form']){

        this.$refs['form'].resetFields();
      }
      this.rolePower()//直接调用角色树
      if (type==1||type==2) {
        this.model.id = id;
        if(type==2){//如果是审核进来   type就==3
          this.disabled = true;
          this.formAction = 2;
          this.btn = "审核";
          this.title = "审核"
        }else{
          self.formAction = 1;
          this.title = "编辑"
        }
        let model = self.model;
        var obj = {
          url: this.$url.roleManag.getById,
          data: {
            id:id
          }
        };
        this.common.httpPost(obj, success);
        function success(data) {
          self.model = data;
           
        }
        
      } else {
         
        self.formAction = 0;
        
      }
    },
    handleTabClick(tab, event) {
      if (!tab) {
        return;
      }
      this.tabActive = tab.name;
      // if(tab.name =="roleInfo"){
        
      // }
    },

    doAprove() {
      let self = this;
      self.$refs["form"].validate(valid => {
        if (valid) {
          this.aproveVisible = true;
          this.$nextTick(() => {
            this.$refs.aproveForm.init(null);
          });
        } else {
           self.$message({
             message:"请完善信息",
             type:"error"
           })
          return false;
        }
      });
    },
    dataFormSubmit() {
      let self = this;
      let model = self.model;
      if(this.formAction==0){
        var url = this.$url.roleManag.add
      }else{
        var url = this.$url.roleManag.edit
      }
      this.treeList();
      var obj = {
        url: url,
        data: model
      };
      
      this.common.httpPost(obj, success);
      function success(data) {
         if(self.formAction==0){
           var mestitle = '已添加'
        }else{
           var mestitle = '已修改'
        }
        self.visible = false;
        self.$message({
          message: mestitle,
          type: 'success'
        });
        self.$emit('change')
      }
    },
    treeList(){
       let routerIds = []
      let resourceIds = []
      this.$refs.tree.getCheckedNodes().forEach(element => {
        if(!element.type) {
          routerIds.push(element.id)
        }
        if(element.type === 'resource') {
          resourceIds.push(element.id)
        }
      })
      this.$refs.tree.getHalfCheckedNodes().forEach(element => {
        if(!element.type) {
          routerIds.push(element.id)
        }
        if(element.type === 'resource') {
          resourceIds.push(element.id)
        }
      })
      this.model.routerIds = routerIds;
      this.model.resourceIds = resourceIds;
    },
    rolePower(){
      var self = this;
      var obj ={
          url:this.$url.menuManag.findAll,
          data:{}
      }
      this.common.httpPost(obj,success);
       
      function success(data){
      
        //self.treeData2 = self.common.treeList(data.rows)
        self.rolePagePower(data);
      }
   
    },
    rolePagePower(data){
      var self = this;
      var obj ={
          url:this.$url.resourceManag.findAll,
          data:{}
      }
      this.common.httpPost(obj,success);
      function success(roleData){
         self.treeData2 = self.common.menuResource(data.rows,roleData.rows);
       
         if(self.formAction!=0){
           self.hook();
         }
      }
    },
    hook(){
      var self = this;
      var obj ={
          url:this.$url.roleManag.findResourcePermission,
          data:{
            roleId:self.model.id
          }
      }
      this.common.httpPost(obj,success);
      function success(data){
        self.$refs.tree.setCheckedKeys([])
       self.permissionKeys=[];
        data.resourcePermission.forEach(element => {
          self.permissionKeys.push('resource-' + element)
        })
         data.routerPermission.forEach(element => {
          self.permissionKeys.push('router-' + element)
        })
          
      }
    }
 
  }
}
</script>
