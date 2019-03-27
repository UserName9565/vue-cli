<template>
  <div>
    <el-dialog width="80%" height="100%" top="4vh" title="查看" :close-on-click-modal="false" :visible.sync="visible">
    <el-card>
      <el-form :model="model" label-width="130px">
        <el-row :gutter="10">
          <el-col :span="16">
            <el-form-item label="编号" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="方案编号" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="会议纪要" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="合同编号" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="合同名称" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="产品编码" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="16">
            <el-form-item label="签订日期" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </el-card>
   
    <el-card>
      <div slot="header" class="clearfix">
        <span>投资信息</span>
      </div>
      <el-form label-width="130px" :model="model1">
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item label="投资主体" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="交易形式"
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
          <el-col :span="8">
            <el-form-item label="规模(亿元)" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="交易类型"
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
          <el-col :span="8">
            <el-form-item label="交易日期" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="上传凭证" prop="loginId" verify :maxLength="50" class="is-required">
              <el-button type="primary">上传</el-button>
            </el-form-item>
          </el-col>
        </el-row>
        
      </el-form>
    </el-card>
    <el-card>
        <div slot="header" class="clearfix">
        <span>产品信息(赎回)</span>
      </div>
    </el-card>
     <el-card>
      <div slot="header" class="clearfix">
        <span>产品信息(申购)</span>
      </div>
      <el-form :model="model" ref="form" label-width="130px">
        <el-row :gutter="10">
          <el-col :span="8">
            <el-form-item label="交易对手" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="规模(元)"
              prop="loginPassword"
              v-if="formAction == 0 "
              :maxLength="128"
              :verify="validateLoginPassword"
              class="is-required"
            >
              <el-input type="password"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="预期收益率"
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
          <el-col :span="8">
            <el-form-item label="投资开始日" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="投资到期日"
              prop="loginPassword"
              v-if="formAction == 0 "
              :maxLength="128"
              :verify="validateLoginPassword"
              class="is-required"
            >
              <el-input type="password"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="投资期限(天)"
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
          <el-col :span="8">
            <el-form-item label="产品类型" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="风险类别"
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
          <el-col :span="8">
            <el-form-item label="募集开始日" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="募集到期日"
              prop="loginPassword"
              v-if="formAction == 0 "
              :maxLength="128"
              :verify="validateLoginPassword"
              class="is-required"
            >
              <el-input type="password"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="募集期利息"
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
          <el-col :span="8">
            <el-form-item label="兑付开始日" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="兑付到期日"
              prop="loginPassword"
              v-if="formAction == 0 "
              :maxLength="128"
              :verify="validateLoginPassword"
              class="is-required"
            >
              <el-input type="password"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item
              label="兑付期利息"
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
          <el-col :span="16">
            <el-form-item label="兑付开始日" prop="loginId" verify :maxLength="50" class="is-required">
              <el-input type="textarea"></el-input>
            </el-form-item>
          </el-col>
          
          
        </el-row>
      </el-form>
    </el-card>
    
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
  components:{
    AproveWin
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
