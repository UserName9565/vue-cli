<template>
<div>
<el-dialog :title="title" :close-on-click-modal="false" :visible.sync="visible">
  <el-tabs v-model="tabActive" @tab-click="handleTabClick">
    <el-tab-pane label="基本信息" name="userInfo">
      <el-form :model="model" :disabled="disabled"  ref="form" label-width="100px" :rules="$util.rules" v-show="tabActive =='userInfo'">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="登录名" prop="loginId" verify  :maxLength="50" class="is-required">
              <el-input v-model="model.loginId" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="密码" prop="loginPassword" v-if="formAction == 0 " :maxLength="128" :verify="validateLoginPassword" class="is-required">
              <el-input v-model="model.loginPassword" type="password" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="姓名" prop="name" verify  :maxLength="50" class="is-required">
              <el-input v-model="model.name" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="邮箱" prop="email" verify  can-be-empty :maxLength="45">
              <el-input v-model="model.email" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item prop="mobile" label="手机" verify  can-be-empty :maxLength="45">
              <el-input v-model="model.mobile" ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="是否启用" prop="activited" verify  >
              <el-switch v-model="model.activited"></el-switch>
            </el-form-item>
          </el-col>
        </el-row>
        <!-- <el-row :gutter="20">
          <el-col>
            <el-form-item label="备注" prop="remark"  verify can-be-empty :maxLength="200">
              <el-input :autosize="{ minRows: 2, maxRows: 4}" v-model="model.remark"></el-input>
            </el-form-item>
          </el-col>
        </el-row> -->
      </el-form>
    </el-tab-pane>
    <el-tab-pane label="所属机构" name="orgin">
      <!-- <t-tree ref="userRoleTree" :options="userRoleTreeOptons" v-show="tabActive =='orgin'">
      </t-tree> -->
      <el-tree show-checkbox :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    </el-tab-pane>
    <el-tab-pane label="访问权限" name="roleInfo">
            <el-tree show-checkbox  :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
      
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
      treeData:[{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
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
  components: {
    AproveWin
  },
  created() {
    
  },
  activated() {},
  methods: {
     init(id,type) {
      this.visible = true;
      this.tabActive = "userInfo";
      let self = this;
       
      
      if (type==1||type==2) {
        
        if(type==2){//如果是审核进来   type就==3
          this.disabled = true;
          this.formAction = 2;
          this.btn = "审核"
        }else{
          self.formAction = 1;
        }
        let model = self.model;
        var obj = {
          url: this.$url.workflowdef.getList,
          data: model
        };
        this.common.httpPost(obj, success);
        function success(data) {
          self.model = result;
          self.$refs.form.resetFields();
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
          // self.$notify.error({
          //   title: '错误',
          //   message: '请输入'
          // });
          return false;
        }
      });
    },
    dataFormSubmit() {
      let self = this;
      let model = self.model;
      var obj = {
        url: this.$url.workflowdef.getList,
        data: model
      };
      this.common.httpPost(obj, success);
      function success(data) {
        self.list = data.data.rows;
        self.total = data.data.total;
      }
    }
 
  }
}
</script>
