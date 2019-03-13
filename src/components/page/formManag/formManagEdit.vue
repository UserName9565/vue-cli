
<template>
<el-dialog :title="formAction == 0 ? '新增' : '修改'" :close-on-click-modal="false" :visible.sync="visible">
  <el-form :model="model" ref="form" @keyup.enter.native="dataFormSubmit()" label-width="80px">
    <el-form-item label="表单编码" prop="agCode" verify :maxLength="255" class="is-required">
      <el-input v-model="model.agCode"></el-input>
    </el-form-item>

    <el-form-item label="名称" prop="agName" verify :maxLength="255" class="is-required">
      <el-input v-model="model.agName"></el-input>
    </el-form-item>
    <!-- <el-form-item label="分类" prop="category" verify :maxLength="255" class="is-required">
      <el-input v-model="model.category"></el-input>
    </el-form-item> -->
    <el-form-item label="描述" prop="agContent" verify can-be-empty :maxLength="200" class="is-required">
      <el-input type="textarea" v-model="model.agContent"></el-input>
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
    init(id) {
      this.visible = true;
    
      if (id) {
        let self = this;
        var obj ={
          url:this.$url.formManag.getById,
          data:{
            id:id
          }
        }
        this.common.httpPost(obj,success);
        function success(data){
           self.model = data.data
            self.model.description = self.model.desc
        }

      }else{
        this.model = {};
        self.formAction = 0;

        // self.$nextTick(() => {
        //   self.$refs.form.resetFields(); 
        //   self.formAction = 0;
        // })
      }
    },
    dataFormSubmit() {
      let self = this;
      self.$refs['form'].validate((valid) => {
        if (valid) {
          let model = self.model;
          var obj ={
            url:this.$url.formManag.add,
            data:self.model
          }
          this.common.httpPost(obj,success);
          function success(data){
              self.$notify.success({
                title: '',
                message: '操作成功!'
              });
              self.$parent.editFormVisible = false;
              self.$parent.doSearch(1)
          }

        } else {
          self.$notify.error({
            title: '错误',
            message: '系统输入验证失败！'
          });
          return false;
        }
      });
    },

  }
  }
  </script>
