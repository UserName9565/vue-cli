
<template>
<el-dialog :title="(formAction == 0 ? '新增子项' : '修改')" :close-on-click-modal="false" :visible.sync="visible" >
  <el-form :model="model" ref="form" @keyup.enter.native="dataFormSubmit()" label-width="180px">
    <el-row :gutter="20">
      <el-col :span="16">
        <el-form-item label="机构名称" prop="name" verify canBeEmpty  class="is-required">
          <el-input v-model="model.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="16">
        <el-form-item label="机构简称" prop="shortname" verify canBeEmpty class="is-required">
          <el-input v-model="model.shortname"></el-input>
        </el-form-item>
      </el-col>
    
      <el-col :span="16">
        <el-form-item label="父级机构名称" prop="parentname"  class="is-required">
          <el-input v-model="model.parentname" disabled="true"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="16">
        <el-form-item label="父级机构编码" prop="parentId"  class="is-required">
          <el-input v-model="model.parentId" disabled="true"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
     
  </el-form>
  <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
      <el-button @click="visible = false">取消</el-button>
    </span>
</el-dialog>
</template>

<script>
export default {
  data() {
    return {
      parentOrgName: '',
      formAction: 0, //0 add,//1,edit
      visible: false, title:"添加",
      disabled:false,
      btn:"提交",
      aproveVisible: false,
      model: {

      },
    };
  },
  created() {


  },
  activated() {},
  methods: {
    new(id,name) {
      this.visible = true;
      this.formAction = 0;
      this.model.parentname = name;
      this.model.parentId = id;
      this.$nextTick(() => {
        this.$refs.form.resetFields();
      });
    },
    edit(id,name,shortname,pid,pname) {
      this.visible = true;
      this.formAction = 1;
      this.model.name = name;
      this.model.shortname = shortname;
      this.model.id = id;
      this.model.parentname = pname;
      this.model.parentId = pid;
      let self = this;
      // tapp.services.base_Organization.get(id).then(function(result) {
      //   self.$refs.form.resetFields();
      //   self.model = result;

      // });
    },
    dataFormSubmit() {
      let self = this;
      self.$refs['form'].validate((valid) => {
        if (valid) {
           
          this.doUpdata();
        

        } else {
           
          return false;
        }
      });
    },
    doUpdata() {
      let self = this;
      if(this.formAction==0){
        var url = this.$url.organizationManag.add
      }else{
        var url = this.$url.organizationManag.edit
      }
      var obj ={
          url:url,
          data: this.model
      }
      this.common.httpPost(obj,success);
      function success(data){
        if(self.formAction==0){
           var title = "已添加";
           console.log(data)
           self.$emit('change',data)
        }else{
           var title = "已修改";
           self.$emit('changeEdit',data) 
        }
        self.$message({
          message:title,
          type:"success"
        })
        self.visible = false;
        
      }
      
    },
  }
}
</script>
