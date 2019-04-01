<template>
  <el-dialog :title="title" :visible.sync="visible" width="660px" 
     @open="handleDialogOpen()" v-loading="loading">
    <div slot="title" class="dialog-header">{{title }}</div>
    <el-form :inline="true" :model="model" :rules="formRules" ref="routerForm" 
      label-width="80px" label-position="right" size="small">
      <el-row>
        <el-col :span="12">
          <el-form-item label="代码">
            <el-input ref="routerCode" :maxlength="50" v-model="model.code" autofocus></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="名称" prop="name">
            <el-input :maxlength="50" v-model="model.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="URL">
            <el-input :maxlength="50" v-model="model.url"></el-input>
          </el-form-item>          
        </el-col>
        <el-col :span="12">
          <el-form-item label="上级路由">
         
              <el-cascader v-model="parentId" :options="parentRouterList"  :props="propsList" change-on-select :show-all-levels="false">
                </el-cascader>
            
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="禁用">
            <el-switch v-model="model.locked"></el-switch>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="显示序号">
            <el-input-number v-model="model.displayOrder"></el-input-number>
          </el-form-item>          
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="路由层级">
            <el-input-number :min="1" v-model="model.level"></el-input-number>
          </el-form-item>          
        </el-col>        
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="扩展属性">
            <el-input class="properties-textarea" type="textarea" :rows="5" v-model="model.properties"></el-input>          
          </el-form-item>
        </el-col>
      </el-row>      
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button size="small" @click="handleDialogClose()">取 消</el-button>
      <el-button type="primary" size="small" @click="submitForm('routerForm')">确 定</el-button>
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
      parentRouterList:[],
      aproveVisible: false,
      parentId:[],
      model: {
        id: null,
        code: '',
        name: '',
        url: '',
        parentId: 1,
        locked: false,
        displayOrder: 0,
        properties: ''
      },
      propsList:{
        value:"id",
        label:"name"
      },
      formRules: {
        name: [
          { required: true, message: '请输入路由名称', trigger: 'blur' },
          { min: 3, max: 32, message: '长度在 3 到 32 个字符', trigger: 'blur' }
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
    init(id,type) {
      
      this.visible = true;
      //this.tabActive = "userInfo";
      let self = this;
      if(this.$refs['form']){
        this.$refs['form'].resetFields();
      }
      this.findParentList();
      if (type==1||type==2) {
        this.model.id = id;
        if(type==2){//如果是审核进来   type就==2
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
          url: this.$url.menuManag.getById,
          data: {
            id:id
          }
        };
        this.common.httpPost(obj, success);
        function success(data) {
          
          self.model = data;
          // self.$refs.form.resetFields();
        }
        
      } else {
        self.model = {
          activited: true
        };
        self.formAction = 0;
        self.$nextTick(() => {
          
        });
      }
    },
    handleDialogOpen() {
      this.$nextTick(() => {
        this.$refs['routerForm'].clearValidate()
        this.$refs['routerCode'].focus()
      })
    },
    findParentList(){
      var self = this;
      this.common.selectInit(this.$url.selectList.menu,success,{})
      function success(data){
      
          self.parentRouterList =data.rows;
          if(self.formAction!=0){

        
              self.parentRouterList.forEach((itme)=>{
                self.getPathById(self.model.id, itme, 'id').then(function(res) {
                    self.parentId = [];
                    let len = res.length;
                    res.forEach((o,i)=>{
                      if(i<len-1){
                        self.parentId.push(o.id);
                      }
                    })
                })
              })
          }
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
        let model = self.model;
        model.parentId = this.parentId[this.parentId.length-1]
         
        var obj = {
          url: this.$url.menuManag.edit,
          data: model
        };
        this.common.httpPost(obj, success);
        function success(data) {
           self.visible = false;
            self.$message({
              message: '已修改',
              type: 'success'
            });
            self.$emit('save-finished')
        }
    },
    doSaveRouter() {//添加
      // this.loading = true
      let self = this;
      let model = self.model;
      model.parentId = this.parentId[this.parentId.length-1]
      var obj = {
        url: this.$url.menuManag.add,
        data: model
      };
      this.common.httpPost(obj, success);
      function success(data) {
         self.$message({
          message: '已添加',
          type: 'success'
        });
        self.visible = false;
        self.$emit('save-finished')
      }  
    },
    getPathById (id, catalog, compareAttr = 'id', childAttrs = ['children']) {
         
        return new Promise(function (resolve, reject) {
            if (!catalog || Object.prototype.toString.call(catalog) !== "[object Object]") {
                console.error('目标对象不存在或格式错误，catalog为非数组对象，如:{}')
                return reject()
            }
            var path = [];
            try {
                function getNodePath(node) {
                    path.push(node);
                    if (node[compareAttr] == id) {
                        throw('GOT it')
                    }
                    var children;
                    childAttrs.forEach(V => {
                        if (children) return
                        children = node[V]
                    })
                    if (children && children.length > 0) {
                        for (var i = 0; i < children.length; i++) {
                            getNodePath(children[i]);
                        }
                        path.pop()
                    } else {
                        path.pop()
                    }
                }
          getNodePath(catalog);
        } catch (e){
          resolve(path);
        }
        })
    }  
  },
  created: function() {
    
     
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


