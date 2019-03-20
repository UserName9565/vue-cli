<template>
  <el-dialog :title="title" :visible.sync="visible" width="560px">
    <div slot="title" class="dialog-header">{{ title }}</div>
    <el-form :model="resourceModel" :rules="formRules" 
      ref="resourceForm" label-width="80px" label-position="right" size="small">
      <el-form-item label="路由">
        <el-col :span="16"><el-input :readonly="true" v-model="resourceModel.routerName"></el-input></el-col>
      </el-form-item>
      <el-form-item label="资源名称" prop="name">
        <el-col :span="16"><el-input ref="name" :maxlength="32" v-model="resourceModel.name"></el-input></el-col>
      </el-form-item>      
      <el-form-item label="资源代码" prop="code">
        <el-col :span="16"><el-input :maxlength="32" v-model="resourceModel.code" autofocus></el-input></el-col>
      </el-form-item>
      <el-form-item label="Url" prop="url">
        <el-col :span="16"><el-input :maxlength="64" v-model="resourceModel.url"></el-input></el-col>
      </el-form-item>
      <el-form-item label="权限代码" prop="permission">
        <el-col :span="16"><el-input :maxlength="32" v-model="resourceModel.permission"></el-input></el-col>
      </el-form-item>      
      <el-form-item label="禁用">
        <el-switch v-model="resourceModel.locked"></el-switch>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="handleDialogClose()">取 消</el-button>
      <el-button type="primary" size="small" @click="submitForm('resourceForm')">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
// import { listByParentId, saveRouter, updateRouter } from '@/api/router'

export default {
  // name: 'router-edit',
  // props: ['parentRouterList'],
  data() {
    return {
      loading: false,
      formAction: 0, //0 add,//1,edit
      visible: false, title:"添加",
      disabled:false,
      btn:"提交",
      parentRouterList:null,
      aproveVisible: false,
      resourceModel: {
        id: 0,
        code: '',
        name: '',
        url: '',
        permssion: '',
        locked: false,
        routerId: 0,
        routerName: ''
      },
      formRules: {
        code: [
          { required: true, message: '请输入资源代码', trigger: 'blur' },
          { min: 3, max: 32, message: '长度在 3 到 32 个字符', trigger: 'blur' }
        ],   
        name: [
          { required: true, message: '请输入资源名称', trigger: 'blur' },
          { min: 3, max: 32, message: '长度在 3 到 32 个字符', trigger: 'blur' }
        ],
        url: [
          { required: true, message: '请输入url', trigger: 'blur' },
          { min: 6, max: 64, message: '长度在 6 到 64 个字符', trigger: 'blur' }
        ],
        permission: [
          { required: true, message: '请输入权限代码', trigger: 'blur' },
          { min: 6, max: 50, message: '长度在 6 到 50 个字符', trigger: 'blur' }
        ]        
      },
       
      parentRouters: [
        {
          value: 0,
          label: '请选择'
        }        
      ]   
    }
  },
  methods: {
    init(id,type,routerId,routerName) {
      // this.$refs['form'].resetFields();
      this.visible = true;
      //this.tabActive = "userInfo";
      let self = this;
      if(this.$refs['resourceForm']){
        this.$refs['resourceForm'].resetFields();
      }
      
      if (type==1||type==2) {
        this.resourceModel.id = id;
        if(type==2){//如果是审核进来   type就==2
          this.disabled = true;
          this.formAction = 2;
          this.btn = "审核";
          this.title = "审核"
        }else{
          self.formAction = 1;
          this.title = "编辑"
        }
        let model = self.resourceModel;
        var obj = {
          url: this.$url.resourceManag.getById,
          data: {
            id:id
          }
        };
        this.common.httpPost(obj, success);
        function success(data) {
           
          self.resourceModel = data;
          // self.resourceModel.router = '';
          self.resourceModel.routerId = routerId;
          self.resourceModel.routerName = routerName;
          // self.$refs.form.resetFields();
        }
        
      } else {
        self.formAction = 0;
        this.resourceModel.routerId = routerId;
        this.resourceModel.routerName = routerName;
      }
    },
    
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {          
          
          if(this.formAction == '0') {
            this.doSaveRouter()
          } else {
            this.doUpdateRouter()
          }
        } else {
          return false;
        }
      });
    },    
    handleDialogClose() {
      this.visible = false
    },
    doUpdateRouter() {//编辑
       let self = this;
        let model = self.resourceModel;
        var obj = {
          url: this.$url.resourceManag.edit,
          data: model
        };
        this.common.httpPost(obj, success);
        function success(data) {
           self.visible = false;
            self.$message({
              message: '已修改',
              type: 'success'
            });
            self.$emit('change')
        }
    },
    doSaveRouter() {//添加
      // this.loading = true
      let self = this;
      let model = self.resourceModel;
      var obj = {
        url: this.$url.resourceManag.add,
        data: model
      };
      this.common.httpPost(obj, success);
      function success(data) {
         self.$message({
          message: '已添加',
          type: 'success'
        });
        self.visible = false;
        self.$emit('change')
      }  
    }  
  },
  mounted: function() {
    //this.common.selectInit(this.$url.selectList.menu,this.parentRouterList)
 
  }    
}
</script>

<style lang="scss" scoped>
  .parent-router-select {
    width: 188px;
  }
  .properties-textarea {
    width: 496px;
  }
</style>


