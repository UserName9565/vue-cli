<template>
  <el-dialog width="80%" height="100%" top="4vh" title="查看" :close-on-click-modal="false" :visible.sync="visible">
    <el-card>
      <div slot="header" class="clearfix">
        <div class="table-title">中国移动通信集团财务有限公司委托投资业务协议</div>
      </div>
      <div class="mt10">协议编号：提交后自动生成</div>
      <el-form label-width="130px" :model="model1">
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item label="方案编号" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="委托方简称"
              prop="loginPassword"
              v-if="formAction == 0 "
              :maxLength="128"
              :verify="validateLoginPassword"
              class="is-required"
            >
              <el-input type="password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item label="委托方全称" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="委托方账户"
              prop="loginPassword"
              v-if="formAction == 0 "
              :maxLength="128"
              :verify="validateLoginPassword"
              class="is-required"
            >
              <el-input type="password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item label="委托方开户行" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="委托资金(元)"
              prop="loginPassword"
              v-if="formAction == 0 "
              :maxLength="128"
              :verify="validateLoginPassword"
              class="is-required"
            >
              <el-input type="password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
         <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item label="委托起始日" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="委托到期日"
              prop="loginPassword"
              v-if="formAction == 0 "
              :maxLength="128"
              :verify="validateLoginPassword"
              class="is-required"
            >
              <el-input type="password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item label="受托方全称" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="手续费率(%)"
              prop="loginPassword"
              v-if="formAction == 0 "
              :maxLength="128"
              :verify="validateLoginPassword"
              class="is-required"
            >
              <el-input type="password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item label="受托投资结算户" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item
              label="受托到期结算户"
              prop="loginPassword"
              v-if="formAction == 0 "
              :maxLength="128"
              :verify="validateLoginPassword"
              class="is-required"
            >
              <el-input type="password"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row :gutter="10">
          <el-col :span="12">
            <el-form-item label="受托方扣款日" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          
        </el-row>
      </el-form>
      <div class="mt10">
        <p>一、委托方应于产品认购截止日中午12:00前进行认购；</p>
        <p>二、委托方授权受托方于Y年M月D日从委托方结算账户进行委托资金的扣划，委托方应确保结算账户资金充足，账户状态正常：</p>
        <p>三、受托方将在委托到期日次日起三个工作日内，将委托资金本金及收益清算至委托方的结算账户；</p>
        <p>四、委托方应向受托方支付委托投资管理费，金额为投资收益的0.8%，并由受托方在清算委托资金的本金和收益时自动扣收；</p>
        <p>五、委托资金的具体运作情况详见受托方提供的委托投资成立报告；</p>
        <p>六、本协议是双方签署的《中国移动通讯集团财务有限公司委托投资基础框架协议》的补充，提交审核通过后即生效。</p>
      </div>
      <el-table :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}" border stripe highlight-current-row="true" style="width: 100%">
      <el-table-column align="center" prop="name" label="编号"></el-table-column>
      <el-table-column align="center"  prop="name" label="方案编号"></el-table-column>
      <el-table-column align="center"  prop="address" label="委托方"></el-table-column>
      <el-table-column align="center"  prop="address" label="交易对手"></el-table-column>
      <el-table-column align="center"  prop="address" label="产品类型"></el-table-column>
      <el-table-column align="center"  prop="address" label="规模(亿元)"></el-table-column>
      <el-table-column align="center"  prop="address" label="投资期限(天)"></el-table-column>
       <el-table-column align="center"  prop="address" label="投资开始日"></el-table-column>
      <el-table-column align="center"  prop="address" label="投资到期"></el-table-column>
    </el-table>
    </el-card>
    
    
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="dataFormSubmit()">提交</el-button>
      <el-button @click="visible = false">取消</el-button>
    </span>
  </el-dialog>
</template>

<style>
  .mt10{
    margin:20px 20px;
  }
</style>
<script>

export default {
  data() {
    return {
      formAction: 0, //0 add,//1,edit
      visible: false, title:"添加",
      disabled:false,
      btn:"提交",
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
  activated() {},
  methods: {
    init(id) {
      this.visible = true;
      this.tabActive = "userInfo";
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
          activited: true
        };

        self.$nextTick(() => {
          // self.$refs.form.resetFields();
          // self.$refs.userRoleTree.setCheckedKeys([]);
          // self.formAction = 0;
        });
      }
    },
    validateLoginPassword(rule, value, callback) {
      if (!/^(?![0-9]+$)(?![a-zA-Z]+$)(?!(.)\1{5}).{8,16}$/.test(value)) {
        callback(
          new Error("密码强度弱，长度必须在8位和16位数之间，包含字母数字")
        );
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
      self.$refs["form"].validate(valid => {
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
            title: "错误",
            message: "系统输入验证失败！"
          });
          return false;
        }
      });
    },
    doDelete() {
      let self = this;
      self
        .$confirm("此操作将永久删除用户, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
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
};
</script>

