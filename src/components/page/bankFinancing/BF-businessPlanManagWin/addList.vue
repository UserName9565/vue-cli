<template>
  <div>
    <el-dialog :title="title" width="90%" :close-on-click-modal="false" :visible.sync="visible">
      <el-tabs v-model="tabActive" @tab-click="handleTabClick">
        <el-tab-pane label="业务方案" name="userInfo">
          <el-card>
            <el-row :gutter="20">
              <el-col :span="8">
                <el-form
                  :model="model"
                  ref="form"
                  @keyup.enter.native="dataFormSubmit()"
                  label-width="120px"
                >
                  <el-form-item label="业务编号">
                    <el-input type="password"></el-input>
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
            :data="tableData3"
            :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
            border
            stripe
            highlight-current-row="true"
            style="width: 100%"
          >
            <el-table-column align="center" prop="date" label="投资主体" width="180"></el-table-column>
            <el-table-column align="center" prop="name" label="投资形式" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="编号" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="交易对手" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="产品类型" width="180"></el-table-column>

            <el-table-column align="center" prop="date" label="规模(亿元)" width="180"></el-table-column>
            <el-table-column align="center" prop="name" label="预期收益率(%)" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="风险类型" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="投资期限" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="投资开始日" width="180"></el-table-column>

            <el-table-column align="center" prop="date" label="投资到期日" width="180"></el-table-column>
            <el-table-column align="center" prop="name" label="募集起始日" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="募集到期日" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="兑付起始日" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="兑付到期日" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="产品投向说明" width="360"></el-table-column>

            <el-table-column align="center" fixed="left" label="操作" width="130">
              <template slot-scope="scope">
                <el-button @click="doDel(scope.row)" type="text" size="mini">删除</el-button>
                <el-button @click="doEdit(scope.row)" type="text" size="mini">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div class="table-title" style="margin-top:20px">
            <el-button type="primary">3、生成审批表</el-button>
            <el-button type="primary">2、保存</el-button>
            <el-button type="primary">1、额度校验</el-button>
          </div>
          <el-card v-if="listForMine">
            <div slot="header" class="clearfix">
              <span>附录：自营2019年200号(银行理财)报价汇总表</span>
            </div>
            <el-table
              :data="tableData3"
              :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
              border
              stripe
              highlight-current-row="true"
              style="width: 100%;margin-top:20px"
            >
              <el-table-column align="center" prop="date" label="投资主体" width="180"></el-table-column>
              <el-table-column align="center" prop="name" label="投资形式" width="180"></el-table-column>
              <el-table-column align="center" prop="address" label="编号" width="180"></el-table-column>
              <el-table-column align="center" prop="address" label="交易对手" width="180"></el-table-column>
              <el-table-column align="center" prop="address" label="产品类型" width="180"></el-table-column>

              <el-table-column align="center" prop="date" label="规模(亿元)" width="180"></el-table-column>
              <el-table-column align="center" prop="name" label="预期收益率(%)" width="180"></el-table-column>
              <el-table-column align="center" prop="address" label="风险类型" width="180"></el-table-column>
              <el-table-column align="center" prop="address" label="投资期限" width="180"></el-table-column>
              <el-table-column align="center" prop="address" label="投资开始日" width="180"></el-table-column>

              <el-table-column align="center" prop="date" label="投资到期日" width="180"></el-table-column>
              <el-table-column align="center" prop="name" label="募集起始日" width="180"></el-table-column>
              <el-table-column align="center" prop="address" label="募集到期日" width="180"></el-table-column>
              <el-table-column align="center" prop="address" label="兑付起始日" width="180"></el-table-column>
              <el-table-column align="center" prop="address" label="兑付到期日" width="180"></el-table-column>
              <el-table-column align="center" prop="address" label="产品投向说明" width="360"></el-table-column>

              <el-table-column align="center" fixed="left" label="操作" width="130">
                <template slot-scope="scope">
                  <el-button @click="doDel(scope.row)" type="text" size="mini">删除</el-button>
                  <el-button @click="doEdit(scope.row)" type="text" size="mini">编辑</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="方案审批表" name="orgin">
          <h3 class="table-title">中国移动通信集团财务有限公司</h3>
          <h3 class="table-title">银行理财业务审批表（【】年第【】期）</h3>
          <el-table
            :data="tableData3"
            :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
            border
            stripe
            highlight-current-row="true"
            style="width: 100%"
          >
            <el-table-column align="center" prop="date" label="投资主体" width="180"></el-table-column>
            <el-table-column align="center" prop="name" label="投资形式" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="编号" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="交易对手" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="产品类型" width="180"></el-table-column>

            <el-table-column align="center" prop="date" label="规模(亿元)" width="180"></el-table-column>
            <el-table-column align="center" prop="name" label="预期收益率(%)" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="风险类型" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="投资期限" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="投资开始日" width="180"></el-table-column>

            <el-table-column align="center" prop="date" label="投资到期日" width="180"></el-table-column>
            <el-table-column align="center" prop="name" label="募集起始日" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="募集到期日" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="兑付起始日" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="兑付到期日" width="180"></el-table-column>
            <el-table-column align="center" prop="address" label="产品投向说明" width="360"></el-table-column>

            <el-table-column align="center" fixed="left" label="操作" width="130">
              <template slot-scope="scope">
                <el-button @click="doDel(scope.row)" type="text" size="mini">删除</el-button>
                <el-button @click="doEdit(scope.row)" type="text" size="mini">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </el-dialog>
    <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form>
    <aprove-step v-if="AproveStepVisible" ref="aproveStep"></aprove-step>

    <el-dialog title="导入报价数据" :visible.sync="priceVisible">
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>前10期报价数据</span>
        </div>
        <div
          v-for="o in 4"
          :key="o"
          :class="{active:o==heightNu}"
          class="text itemList"
          @click="heightLine(o)"
        >{{'列表内容 ' + o }}</div>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="listShow()">确定</el-button>
        <el-button @click="priceVisible = false">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import EditForm from "../BF-businessOperationWin/edit";
export default {
  data() {
    return {
      formAction: 0, //0 add,//1,edit
      heightNu: 0,
      editFormVisible: false,
      priceVisible: false,
      visible: false,
      title: "添加",
      disabled: false,
      btn: "提交",
      aproveVisible: false,
      listForMine: false,
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

      value5: []
    };
  },
  created() {},
  components: {
    EditForm
  },
  activated() {},
  methods: {
    init(id, type) {
      this.visible = true;
      // this.tabActive = "userInfo";
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
    doNew() {
      this.editFormVisible = true;
      this.$nextTick(() => {
        this.$refs.editForm.init(null);
      });
    },
    doEdit(row) {
      this.editFormVisible = true;
      this.$nextTick(() => {
        this.$refs.editForm.init("11");
      });
    },
    doSure() {
      this.priceVisible = true;
    },
    heightLine(id) {
      this.heightNu = id;
    },
    listShow(id) {
      this.listForMine = true;
      this.priceVisible = false;
    },

    handleNodeClick(data) {
      console.log(data);
    }
  }
};
</script>
