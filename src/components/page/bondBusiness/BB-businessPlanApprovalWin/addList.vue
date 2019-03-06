<template>
<el-dialog width="80%" title="查看" :close-on-click-modal="false" :visible.sync="visible">
  <el-tabs v-model="tabActive" @tab-click="handleTabClick">
    <el-tab-pane label="业务方案" name="userInfo">
       <el-card>
         <el-row :gutter="20">

            <el-col :span="12">

              <el-form :model="model" ref="ruleForm" @keyup.enter.native="dataFormSubmit()" label-width="120px">

                  <el-form-item label="业务编号">
                    <el-input  type="password"></el-input>
                  </el-form-item>
              </el-form>
            </el-col>

              
         </el-row>
         <el-row>
            <el-col :span="12">
                <el-button type="primary" @click="doSure()">导入报价数据</el-button>
                <el-button type="primary" @click="doNew()">新增数据</el-button>
              </el-col>
         </el-row>
      </el-card>
      <el-table
      :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
      border
      stripe
      highlight-current-row="true"
      style="width: 100%"
    >
      <el-table-column align="center"  prop="date" label="投资主体" width="180"></el-table-column>
      <el-table-column align="center"  prop="name" label="投资形式" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="编号" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="交易对手" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="产品类型" width="180"></el-table-column>

      <el-table-column align="center"  prop="date" label="规模(亿元)" width="180"></el-table-column>
      <el-table-column align="center"  prop="name" label="预期收益率(%)" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="风险类型" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="投资期限" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="投资开始日" width="180"></el-table-column>

      <el-table-column align="center"  prop="date" label="投资到期日" width="180"></el-table-column>
      <el-table-column align="center"  prop="name" label="募集起始日" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="募集到期日" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="兑付起始日" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="兑付到期日" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="产品投向说明" width="360"></el-table-column>

      <el-table-column align="center"  fixed="left" label="操作" width="130">
        <template slot-scope="scope">
          <el-button @click="doDel(scope.row)" type="text" size="mini">删除</el-button>
         <el-button @click="doEdit(scope.row)" type="text" size="mini">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
      
    </el-tab-pane>
    <el-tab-pane label="方案审批表" name="orgin">
       <h3 class="table-title">中国移动通信集团财务有限公司</h3>
       <h3 class="table-title">银行理财业务审批表（【】年第【】期）</h3>
    </el-tab-pane>
    
  </el-tabs>
   <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form>
</el-dialog>
</template>


<script>
import EditForm from "./edit";
export default {
  data() {


    return {
      formAction: 0, //0 add,//1,edit
      editFormVisible:false,
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
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙"
        }
      ],
      
        value5: [],
    };
  },
  created() {

  },
   components: {
    EditForm
  },
  activated() {},
  methods: {
   init() {
        this.visible = true;
     
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
