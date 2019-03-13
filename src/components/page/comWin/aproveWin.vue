<template>
<el-dialog title="审核业务" :close-on-click-modal="true" :visible.sync="visible">
      <el-form  :model="model" :rules="$util.rules"  ref="form" label-width="100px" v-show="tabActive =='userInfo'">
        <el-row :gutter="20">
          <el-col :span="16" v-if="isLast">
            <el-form-item  label="下一步审核"  prop="required"   class="is-required">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-form-item>
          </el-col>
          <el-col :span="16" v-if="isLast">
            <el-form-item  label="审核人"  prop="required"   class="is-required">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-form-item>
          </el-col>
       
          <el-col :span="16">
            <el-form-item label="说明"  class="is-required">
              <el-input type="textarea" v-model="model.desc"></el-input>
            </el-form-item>
          </el-col>
          
        </el-row>
        
      </el-form>
     
  <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dataFormSubmit()">提交</el-button>
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
      tabActive: 'userInfo',
      isLast:false,
      model: {
          activited : true
      },
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
        value5: [],
        
    };
  },
  created() {

  },
  activated() {},
  methods: {
    init() {
      this.visible = true;
      let self = this;
      
      self.formAction = 1;
      let model = self.model;
      var obj ={
        url:this.$url.workflowdef.getList,
        data:model
      }
      this.common.httpPost(obj,success);
      function success(data){
          
        self.model = result;
        self.$refs.form.resetFields();
        
      }
         
    },
    handleTabClick(tab, event) {
      if (!tab) {
        return;
      }
      this.tabActive = tab.name;
    },

    dataFormSubmit() {
      let self = this;
      self.$refs['form'].validate((valid) => {
        if (valid) {
       
          self.$parent.dataFormSubmit()
          self.visible = false;
        } else {
          // self.$notify.error({
          //   title: '错误',
          //   message: '请输入'
          // });
          return false;
        }
      });
    }
 
  }
}
</script>
