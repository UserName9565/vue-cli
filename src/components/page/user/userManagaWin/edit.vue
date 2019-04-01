<template>
  <div>
    <el-dialog
      :title="title"
      :close-on-click-modal="false"
      :visible.sync="visible"
      
    > <el-form
            :model="model"
            ref="form"
            label-width="100px"
            :disabled="disabled"
          >
      <el-tabs v-model="tabActive" @tab-click="handleTabClick">
        <el-tab-pane label="基本信息" name="userInfo">
         
            <el-row :gutter="20"  v-show="tabActive =='userInfo'">
              <el-col :span="12">
                <el-form-item label="登录名"   verify :maxLength="50"  prop="loginName" class="is-required">
                  <el-input  v-model="model.loginName"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12" v-if="formAction==0">
                <el-form-item
                  label="密码"
                  verify 
                  :maxLength="50"
                  prop="password"
                   
                  class="is-required"
                >
                  <el-input v-model="model.password" type="password"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item label="姓名" verify  inline-message="true" prop="name"  class="is-required">
                  <el-input v-model="model.name"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item class="is-required" label="邮箱" prop="email" verify :email='true'>
                  <el-input v-model="model.email"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item class="is-required" prop="mobile" label="手机" verify  :phone='true'>
                  <el-input v-model="model.mobile"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="是否启用">
                  <el-switch v-model="model.locked"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>
          
        </el-tab-pane>
        <el-tab-pane label="所属机构" name="orgin">
          <el-form-item label="选择机构">
                   
                  <el-tree :expand-on-click-node="false" ref="tree" show-checkbox :data="treeData" :props="defaultProps" 
                  :default-checked-keys="permissionKeys"  node-key="id" @node-click="handleNodeClick"></el-tree>
            </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="角色权限" name="roleInfo">
          <el-col :span="12">
            <el-form-item label="角色权限" prop="roleIds" verify >
                <el-select filterable  v-model="model.roleIds" multiple placeholder="请选择">
                  <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.name"
                    :value="item.id"
                  ></el-option>
                </el-select>
            </el-form-item>
          </el-col>
        </el-tab-pane>
      </el-tabs>
      </el-form>
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
      tabActive: "userInfo",
      model: {
         loginName:"",
         password :"",
         name:"",
         email:"",
         mobile:"",
      },
      defaultProps:{
        label:'name',
        children:"children"
      },
      permissionKeys:[],
      treeData: [
      ],
      options: [
         
      ],
      value5: []
    };
  },
  components: {
    AproveWin
  },
  created() {},
  activated() {},
  methods: {
    init(id,type) {
      this.visible = true;
      this.tabActive = "userInfo";
      let self = this;
       
      this.$nextTick(() => {
         this.$refs['form'].resetFields();
      });
       
      this.doTree();//加载组织机构树
      this.doselect();//加载下拉
      if (type==1||type==2) {
        
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
          url: this.$url.userManag.getById,
          data: {
            id:id
          }
        };
        this.common.httpPost(obj, success);
        function success(data) {
          self.$refs.tree.setCheckedKeys([])
          self.permissionKeys=data.organizationIds;
          // data.organizationIds.forEach(element => {
          //   self.permissionKeys.push('key-' + element)
          // })
          
          self.model = {
            id:data.id,
            loginName:data.loginName,
            name:data.name,
            password:"",
            email:data.email,
            mobile:data.mobile,
            roleIds:data.roleIds
          }
          //self.model = data;
           
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
    },
    doAprove() {
      let self = this;
      self.$refs["form"].validate(valid => {
        if (valid) {
          this.treeList();
          if(self.model.organizationIds){
            if(self.model.organizationIds.length==0){
              self.$message({
                message:"请选择组织机构",
                type:"error"
              })
              return false;
            }
          }else{
            self.$message({
                message:"请选择组织机构",
                type:"error"
              })
              return false;
          }
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
        var url = this.$url.userManag.add
      }else{
        var url = this.$url.userManag.edit
      }
       
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
    doTree(){
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
    doselect(){
      let self = this;
      this.common.selectInit(this.$url.roleManag.findAll,success,{});
      function success(data){
        self.options = data.rows;
      }
    },
    treeList(){
      
      let organizationIds = []
      this.$refs.tree.getCheckedNodes().forEach(element => {
        
          organizationIds.push(element.id)
         
      })
      // this.$refs.tree.getHalfCheckedNodes().forEach(element => {
      //     organizationIds.push(element.id)
      // })
      this.model.organizationIds = organizationIds;
     
    },
  }
};
</script>
