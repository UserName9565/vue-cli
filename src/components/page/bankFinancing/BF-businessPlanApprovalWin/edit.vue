<template>
<el-dialog width="80%" :title="formAction == 0 ? '新增数据' : '修改数据'" :close-on-click-modal="false" :visible.sync="visible">
  
      <el-card>
        <div slot="header" class="clearfix">
        <span>产品信息</span>
         
      </div>
        <el-form :model="model"  ref="ruleForm" label-width="130px" v-show="tabActive =='userInfo'">
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="交易对手" prop="loginId" verify  :maxLength="50" class="is-required">
                <el-input  ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="规模(元)" prop="loginPassword" v-if="formAction == 0 " :maxLength="128" :verify="validateLoginPassword" class="is-required">
                <el-input  type="password" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="预期收益率" prop="loginPassword" v-if="formAction == 0 " :maxLength="128" :verify="validateLoginPassword" class="is-required">
                <el-input  type="password" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="投资开始日" prop="loginId" verify  :maxLength="50" class="is-required">
                <el-input  ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="投资到期日" prop="loginPassword" v-if="formAction == 0 " :maxLength="128" :verify="validateLoginPassword" class="is-required">
                <el-input  type="password" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="投资期限(天)" prop="loginPassword" v-if="formAction == 0 " :maxLength="128" :verify="validateLoginPassword" class="is-required">
                <el-input  type="password" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="产品类型" prop="loginId" verify  :maxLength="50" class="is-required">
                <el-input  ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="风险类别" prop="loginPassword" v-if="formAction == 0 " :maxLength="128" :verify="validateLoginPassword" class="is-required">
                <el-input  type="password" ></el-input>
              </el-form-item>
            </el-col>
             
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="募集开始日" prop="loginId" verify  :maxLength="50" class="is-required">
                <el-input  ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="募集到期日" prop="loginPassword" v-if="formAction == 0 " :maxLength="128" :verify="validateLoginPassword" class="is-required">
                <el-input  type="password" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="募集期利息" prop="loginPassword" v-if="formAction == 0 " :maxLength="128" :verify="validateLoginPassword" class="is-required">
                <el-input  type="password" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="兑付开始日" prop="loginId" verify  :maxLength="50" class="is-required">
                <el-input  ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="兑付到期日" prop="loginPassword" v-if="formAction == 0 " :maxLength="128" :verify="validateLoginPassword" class="is-required">
                <el-input  type="password" ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="兑付期利息" prop="loginPassword" v-if="formAction == 0 " :maxLength="128" :verify="validateLoginPassword" class="is-required">
                <el-input  type="password" ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10" >
              <el-form-item label="产品投向说明">
                  <el-input type="textarea" ></el-input>
              </el-form-item>
          </el-row>
        </el-form>
      </el-card>
      <el-card>
        <div slot="header" class="clearfix">
        <span>投资信息</span>
         
      </div>
          <el-form label-width="130px"  :model="model1">
            <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="投资主体" prop="loginId" verify  :maxLength="50" class="is-required">
                <el-input  ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="投资形式" prop="loginPassword" v-if="formAction == 0 " :maxLength="128" :verify="validateLoginPassword" class="is-required">
                <el-input  type="password" ></el-input>
              </el-form-item>
            </el-col>
           
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="是否到期" prop="loginId" verify  :maxLength="50" class="is-required">
                <el-input  ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="收益匡算(元)" prop="loginPassword" v-if="formAction == 0 " :maxLength="128" :verify="validateLoginPassword" class="is-required">
                <el-input  type="password" ></el-input>
              </el-form-item>
            </el-col>
           
          </el-row>
           <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="上传凭证" prop="loginId" verify  :maxLength="50" class="is-required">
                <el-button type="primary">上传</el-button>
              </el-form-item>
            </el-col>
          </el-row>
          </el-form>
      </el-card>
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
      visible: false,
      tabActive: 'userInfo',
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
    init(id) {
      this.visible = true;
      this.tabActive = 'userInfo';
      let self = this;
      if (id) {
        // tapp.services.base_User.getUser(id).then(function(result) {
        //   self.model = result;
        //   self.$refs.ruleForm.resetFields();
        //   self.$refs.userRoleTree.setCheckedKeys(result.roleIds);
        //   self.formAction = 1;
        // });
      } else {
        self.model = {
            activited : true
        };

        self.$nextTick(() => {
          // self.$refs.ruleForm.resetFields();
          // self.$refs.userRoleTree.setCheckedKeys([]);
          // self.formAction = 0;
        })
      }
    },
    validateLoginPassword(rule, value, callback){
      if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)(?!(.)\1{5}).{8,16}$/.test(value))) {
        callback(new Error('密码强度弱，长度必须在8位和16位数之间，包含字母数字'));
      }
      callback();
    },
    handleTabClick(tab, event) {
      if (!tab) {
        return;
      }
      this.tabActive = tab.name;
    },

    dataFormSubmit() {
      let self = this;
      self.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          let model = self.model;
          model.roleIds = self.$refs.userRoleTree.getCheckedKeys();
          // tapp.services.base_User.saveUser(model).then(function(result) {
          //   self.model.id = result.id;
          //   self.formAction = 1;
          //   self.$notify.success({
          //     title: '操作成功',
          //     message: '用户信息已保存成功！',
          //     duration: 1500,
          //     onClose: () => {
          //       self.visible = false;
          //       self.$emit('change');
          //     }
          //   });
          // });

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
      self.$confirm('此操作将永久删除用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        // tapp.services.base_User.delete(self.model.id).then(function(result) {
        //   self.formAction = 0;
        //   self.$notify.success({
        //     title: '系统删除成功',
        //     duration: 1500,
        //     message: '用户信息已删除成功！',
        //     onClose: () => {
        //       self.visible = false;
        //       self.$emit('change');
        //     }
        //   });
        // })
      });
    },
    handleNodeClick(data) {
        console.log(data);
      }
 
  }
}
</script>
