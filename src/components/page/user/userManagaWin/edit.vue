<template>
  <div>
    <el-dialog
      :title="title"
      :close-on-click-modal="false"
      :visible.sync="visible"
      
    >
      <el-tabs v-model="tabActive" @tab-click="handleTabClick">
        <el-tab-pane label="基本信息" name="userInfo">
          <el-form
            :model="model"
            ref="form"
            label-width="100px"
            v-show="tabActive =='userInfo'"
            :disabled="disabled"
          >
            <el-row :gutter="20">
              <el-col :span="12">
                <el-form-item label="登录名"  verify :length="50"  prop="loginName" class="is-required">
                  <el-input v-model="model.loginName"></el-input>
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
                <el-form-item label="邮箱" prop="email" verify :email='true'>
                  <el-input v-model="model.email"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="12">
                <el-form-item prop="mobile" label="手机" verify  :phone='true'>
                  <el-input v-model="model.mobile"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="是否启用">
                  <el-switch v-model="model.locked"></el-switch>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-tab-pane>
        <el-tab-pane label="所属机构" name="orgin">
         <el-tree :expand-on-click-node="false" ref="tree" show-checkbox :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
        </el-tab-pane>
        <el-tab-pane label="角色权限" name="roleInfo">
          <el-select v-model="value5" multiple placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
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
      tabActive: "userInfo",
      model: {
         
      },
      defaultProps:{
        label:'name',
        children:"children"
      },
      treeData: [
      ],
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
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
  }
};
</script>
