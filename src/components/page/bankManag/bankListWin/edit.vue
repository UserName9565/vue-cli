<template>
<el-dialog :title="formAction == 0 ? '新增对手' : '修改对手'" :close-on-click-modal="false" :visible.sync="visible">
  <el-tabs v-model="tabActive" @tab-click="handleTabClick">
   
      <el-form :model="model" :rules="$util.rules"  ref="form" label-width="220px" v-show="tabActive =='userInfo'">
        <el-row :gutter="20">
          <el-col :span="18">
            <el-form-item label="交易对手简称" prop="loginId" verify  :maxLength="50" class="is-required">
              <el-input v-model="model.loginId" ></el-input>
            </el-form-item>
          </el-col>
          
        </el-row>
        <el-row :gutter="20">
          <el-col :span="18">
            <el-form-item label="交易对手全称" prop="loginPassword" v-if="formAction == 0 " :maxLength="128" :verify="validateLoginPassword" class="is-required">
              <el-input v-model="model.loginPassword" type="password" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="18">
            <el-form-item label="所属金融机构" prop="name" verify  :maxLength="50" class="is-required">
              <el-input v-model="model.name" ></el-input>
            </el-form-item>
          </el-col>
          
        </el-row>
        <el-row :gutter="20">
          <el-col :span="18">
            <el-form-item label="是否有股东关系公司同时做业务" prop="email" verify  can-be-empty :maxLength="45">
              <el-select v-model="form.region" placeholder="请选择">
              <el-option key="1" label="是" value="1"></el-option>
              <el-option key="2" label="否" value="2"></el-option>
            </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="18">
            <el-form-item prop="mobile" label="金融机构" verify  can-be-empty :maxLength="45">
             <el-select v-model="form.region" placeholder="请选择">
              <el-option key="1" label="是" value="1"></el-option>
              <el-option key="2" label="否" value="2"></el-option>
            </el-select>
            
            </el-form-item>
          </el-col>
        
        </el-row>
        <el-row :gutter="20">
          <el-col :span="18">
            <el-form-item prop="mobile" label="交易对手股东" verify  can-be-empty :maxLength="45">
             <el-select v-model="form.region" placeholder="请选择">
              <el-option key="1" label="是" value="1"></el-option>
              <el-option key="2" label="否" value="2"></el-option>
            </el-select>
            
            </el-form-item>
          </el-col>
        
        </el-row>
         <!-- <el-row :gutter="20">
          <el-col :span="18">
              <el-form-item prop="mobile" label="交易对手股东" verify  can-be-empty :maxLength="45">
              <el-select v-model="form.region" placeholder="请选择">
              <el-option key="1" label="是" value="1"></el-option>
              <el-option key="2" label="否" value="2"></el-option>
            </el-select>
             </el-col>
        
        </el-row> -->
        <!-- <el-row :gutter="20">
          <el-col>
            <el-form-item label="备注" prop="remark"  verify can-be-empty :maxLength="200">
              <el-input :autosize="{ minRows: 2, maxRows: 4}" v-model="model.remark"></el-input>
            </el-form-item>
          </el-col>
        </el-row> -->
      </el-form>
   
     
  </el-tabs>
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
      tabActive: 'userInfo',
      model: {
          activited : true
      },
      form:{
        region:"",
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
        //   self.$refs.form.resetFields();
        //   self.$refs.userRoleTree.setCheckedKeys(result.roleIds);
        //   self.formAction = 1;
        // });
      } else {
        self.model = {
            activited : true
        };

        self.$nextTick(() => {
          // self.$refs.form.resetFields();
          // self.$refs.userRoleTree.setCheckedKeys([]);
          // self.formAction = 0;
        })
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
           

        } else {
           
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
