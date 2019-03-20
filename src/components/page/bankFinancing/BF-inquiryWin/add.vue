<template>
 
  <el-dialog title="发起询价" width="80%" :close-on-click-modal="false" :visible.sync="visible">
     <el-card>

      <el-form :model="model"  ref="form" label-width="150px" >
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="询价期号" prop="loginId" verify  :maxLength="50" class="is-required">
              <el-input v-model="model.loginId" ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="投资形式" prop="name" verify  :maxLength="50" class="is-required">
              <el-input v-model="model.name" ></el-input>
            </el-form-item>
          </el-col>
          
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item prop="mobile" label="开展日期" verify  can-be-empty :maxLength="45">
               <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
           
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="开展规模" prop="name" verify  :maxLength="50" class="is-required">
              <el-input v-model="model.name" ></el-input> 
            </el-form-item>
          </el-col>
          
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="产品类型" prop="name" verify  :maxLength="50" class="is-required">
              <el-select  placeholder="请选择" size="medium">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
 
            </el-form-item>
          </el-col>
          
        </el-row>
         <el-row >
          <el-col :span="12">
            <el-form-item label="投资期限" prop="name" verify  :maxLength="50" class="is-required">
              <el-col :span="24" >
              <el-row :gutter="20">
                  <el-col :span="10"><el-input v-model="model.name" ></el-input></el-col>
                  <el-col :span="10">
                    <el-select  placeholder="请选择" size="medium">
                      <el-option label="月" value="shanghai"></el-option>
                      <el-option label="天" value="beijing"></el-option>
                      <el-option label="年" value="dd"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="4"><i class="el-icon-circle-plus icon"></i></el-col>
              </el-row>
              </el-col>
              <el-col :span="24" >
              <el-row :gutter="20">
                  <el-col :span="10"><el-input v-model="model.name" ></el-input></el-col>
                  <el-col :span="10">
                    <el-select  placeholder="请选择" size="medium">
                      <el-option label="月" value="shanghai"></el-option>
                      <el-option label="天" value="beijing"></el-option>
                      <el-option label="年" value="dd"></el-option>
                    </el-select>
                  </el-col>
                  <el-col :span="4"><i class="el-icon-circle-plus icon"></i></el-col>
              </el-row>
              </el-col>
            </el-form-item>
          </el-col>
          
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item prop="mobile" label="报价截止时间" verify  can-be-empty :maxLength="45">
               <el-date-picker
                v-model="value1"
                type="date"
                placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
           
        </el-row>
    <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label="指定询价对手" prop="name" verify  :maxLength="50" class="is-required">
              <el-tree :expand-on-click-node="false" show-checkbox :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </el-form-item>
          </el-col>
          
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12">
            <el-form-item label=" " prop="name"   :maxLength="50" >
             <el-checkbox-group v-model="checkList">
              <el-checkbox label="邮件同时通知"></el-checkbox>
              <el-checkbox label="短信同时通知"></el-checkbox>
              
            </el-checkbox-group>
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
    
   
  
  <!-- <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="dataFormSubmit()">确定</el-button>
    <el-button @click="visible = false">取消</el-button>
  </span> -->
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
  created() {

  },
  activated() {},
  methods: {
    init(id) {
      this.visible = true;
      let self = this;
      if (id) {
         
      } else {
        self.model = {
            activited : true
        };

         
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
