<template>
  <div>
    <el-dialog
      width="80%"
      height="100%"
      top="4vh"
      title="查看"
      :close-on-click-modal="false"
      :visible.sync="visible"
    >
    <el-form :model="model" label-width="130px">
      <el-card>
          <el-row :gutter="10">
            <el-col :span="16">
              <el-form-item label="编号" prop="loginId" verify :maxLength="50" class="is-required">
                <el-input v-model="model.mobile"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="16">
              <el-form-item label="方案编号" prop="loginId" verify :maxLength="50" class="is-required">
                <el-input v-model="model.mobile"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="16">
              <el-form-item label="会议纪要" prop="loginId" verify :maxLength="50" class="is-required">
                <el-input v-model="model.mobile"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="16">
              <el-form-item label="缴款通知书" prop="loginId" verify :maxLength="50" class="is-required">
                <el-input v-model="model.mobile"></el-input>
              </el-form-item>
            </el-col>
             
          </el-row>
        <!-- </el-form> -->
      </el-card>
      <el-card>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="业务主体" prop="loginId" verify :maxLength="50" class="is-required">
                <el-select v-model="form" placeholder="请选择">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="交易对手"
                prop="loginPassword"
                :maxLength="128"
                verify
                class="is-required"
              >
                <el-select v-model="form" placeholder="请选择">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="缴款日"
                prop="loginPassword"
                
                :maxLength="128"
                verify
                class="is-required"
              >
                <el-date-picker type="date" placeholder="选择日期" v-model="form" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="实际缴款金额(元)" prop="loginId" verify :maxLength="50" class="is-required">
               <el-date-picker type="date" placeholder="选择日期" v-model="form" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="存单简称"
                prop="loginPassword"
                
                :maxLength="128"
                verify
                class="is-required"
              >
                 <el-input v-model="model.mobile"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="存单全称"
                prop="loginPassword"
                
                :maxLength="128"
                verify
                class="is-required"
              >
                <el-input v-model="model.mobile"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="面值总计(元)" prop="loginId" verify :maxLength="50" class="is-required">
                <el-input v-model="model.mobile"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="发行价格(元)"
                prop="loginPassword"
                :maxLength="128"
                verify
                class="is-required"
              >
               <el-input v-model="model.mobile"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="利率(%)" prop="loginId" verify :maxLength="50" class="is-required">
                <el-input v-model="model.mobile"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="Shibor" prop="loginId" verify :maxLength="50" class="is-required">
               <el-input v-model="model.mobile"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="加点(dp)"
                prop="loginPassword"
                
                :maxLength="128"
                verify
                class="is-required"
              >
                 <el-input v-model="model.mobile"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="起息日" prop="loginId" verify :maxLength="50" class="is-required">
                 <el-date-picker type="date" placeholder="选择日期" v-model="form" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="到期日" prop="loginId" verify :maxLength="50" class="is-required">
                <el-date-picker type="date" placeholder="选择日期" v-model="form" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="期限(天)"
                prop="loginPassword"
                
                :maxLength="128"
                verify
                class="is-required"
              >
              <el-input v-model="model.mobile"></el-input>
              </el-form-item>
            </el-col>
            
          </el-row>
          
        
          <el-row :gutter="10">
            <el-col :span="8">
              <el-form-item label="是否到期" prop="loginId" verify :maxLength="50" class="is-required">
                 <el-select v-model="form" placeholder="请选择">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="账面余额(元)"
                prop="loginPassword"
                :maxLength="128"
                verify
                class="is-required"
              >
                <el-input v-model="model.mobile"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item
                label="账面日期"
                prop="loginPassword"
                :maxLength="128"
                verify
                class="is-required"
              >
               <el-date-picker type="date" placeholder="选择日期" v-model="form" style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          
      </el-card>
    </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="doAprove()">确定</el-button>
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
      visible: false,
      title: "添加",
      disabled: false,
      btn: "提交",
      aproveVisible: false,
      tabActive: "userInfo",
      model: {
        activited: true
      },
      userRoleTreeOptons: {
        dataSource: {
          serviceInstance: "",
          serviceInstanceInputParameters: {}
        },
        tree: {
          nodeKey: "id",
          defaultCheckedKeys: []
        }
      },

      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value5: []
    };
  },
  created() {},
  components: {
    AproveWin
  },
  activated() {},
  methods: {
    init(id, type) {
      this.visible = true;
      this.tabActive = "userInfo";
      let self = this;

      if (type == 1 || type == 2) {
        if (type == 2) {
          //如果是审核进来   type就==3
          this.disabled = true;
          this.formAction = 2;
          this.btn = "审核";
        } else {
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
        self.$nextTick(() => {});
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
    },
    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>
