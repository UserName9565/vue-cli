

<template>
<el-dialog title="修改密码" :visible.sync="visible" :append-to-body="true">
  <el-form :model="model"  ref="form" @keyup.enter.native="dataFormSubmit()" label-width="120px">
    <el-form-item label="姓名">
      <span>{{ model.name }}</span>
    </el-form-item>
    <el-form-item label="登录名">
      <span>{{ model.loginName }}</span>
    </el-form-item>
    <el-form-item label="新密码" prop="newPassword"  :maxLength="128" class="is-required" :verify="validateLoginNewPassword">
      <el-input v-model="model.newPassword" type="password"></el-input>
    </el-form-item>
    <el-form-item label="确认新密码" prop="confirmNewPassword"  :maxLength="128" class="is-required" :verify="validateConfirmPassword" :watch="model.newPassword">
      <el-input v-model="model.confirmNewPassword" type="password"></el-input>
    </el-form-item>
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
      visible: false, title:"添加",
      disabled:false,
      btn:"提交",
      aproveVisible: false,
      model: {
        newPassword:"",
        confirmNewPassword:""
      },
    }
  },
  created() {

  },
  activated() {

  },
  methods: {
    // 初始化
    init(id,name,loginName) {
      this.visible = true
      let self = this;
      this.model.name = name;
      this.model.loginName = loginName;
        this.model.userId = id;
         if(this.$refs['form']){

          this.$refs['form'].resetFields();
        }
    },
    validateLoginNewPassword(rule, value, callback) {
      if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)(?!(.)\1{5}).{8,32}$/.test(value))) {
        callback(new Error('新密码强度弱，长度必须在8位和32位数之间，包含字母数字'));
      }
      callback();
    },
    validateConfirmPassword(rule, value, callback) {
      if (this.model.newPassword !== value) {
        callback(new Error('确认新密码与新密码不一致'))
      } else {
        callback()
      }
    },
    dataFormSubmit() {
      let self = this;
      self.$refs['form'].validate((valid) => {
        if (valid) {
          let self = this;
          this.model.password = this.model.newPassword
          var obj ={
            url:this.$url.userManag.updatePassword,
            data:this.model
          }
          this.common.httpPost(obj,success);
          function success(data){
              
            self.$message.success({
              message: '修改密码成功！',
              type:"sucess"
            });
            self.visible = false;
            //self.$emit('change');
            
          }
          
        } else {
          
          return false;
        }
      });
    },
  }
}
</script>
