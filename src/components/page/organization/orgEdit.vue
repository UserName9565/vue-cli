
<template>
<el-dialog :title="(formAction == 0 ? '新增子项' : '修改') + '-' + parentOrgName" :close-on-click-modal="false" :visible.sync="visible" >
  <el-form :model="model" ref="form" @keyup.enter.native="dataFormSubmit()" label-width="80px">
    <el-row :gutter="20">
      <el-col :span="8">
        <el-form-item label="名称" prop="name" verify :maxLength="32" class="is-required">
          <el-input v-model="model.name"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="16">
        <el-form-item label="地址" prop="address" verify can-be-empty :maxLength="200">
          <el-input v-model="model.address"></el-input>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-form-item label="邮编" prop="postNO" verify can-be-empty :maxLength="45">
          <el-input v-model="model.postNO"></el-input>
        </el-form-item>
      </el-col>
      <el-col :span="8">
        <el-form-item label="类型" prop="organizationCategoryId" verify class="is-required">
          <t-dic-select dicType="base_organizationcategory" v-model="model.organizationCategoryId"></t-dic-select>
        </el-form-item>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-form-item label="备注" prop="remark" verify can-be-empty :maxLength="200">
          <el-input type="textarea" v-model="model.remark"></el-input>
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
      model: {},
    };
  },
  created() {


  },
  activated() {},
  methods: {
    new(id) {
      this.visible = true;
      this.formAction = 0;
      this.parentOrgName = name;
      this.model = {};
      this.model.parentId = id;
      this.$nextTick(() => {
        this.$refs.form.resetFields();
      });
    },
    edit(id) {
      this.visible = true;
      this.formAction = 1;
      this.parentOrgName = id;
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
          debugger;
          let model = self.model;
        

        } else {
          self.$notify.error({
            title: '错误',
            message: '系统输入验证失败！'
          });
          return false;
        }
      });
    },
    doDelete() {
      let self = this;
      self.$confirm('此操作将永久删除, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
         
      });
    },
  }
}
</script>
