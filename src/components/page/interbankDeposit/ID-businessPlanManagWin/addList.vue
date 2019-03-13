<template>
<div class="container">
  <el-tabs v-model="tabActive" @tab-click="handleTabClick">
    <el-tab-pane label="业务方案" name="userInfo">
       <el-card>
         <el-row :gutter="20">

            <el-col :span="8">

              <el-form :model="model" ref="form" @keyup.enter.native="dataFormSubmit()" label-width="120px">

                  <el-form-item label="业务编号">
                    <el-input  type="password"></el-input>
                  </el-form-item>
              </el-form>
            </el-col>

              
         </el-row>
         <el-row>
            <el-col :span="12">
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
      <el-table-column align="center"  prop="date" label="业务主体" width="180"></el-table-column>
      <el-table-column align="center"  prop="name" label="投资形式" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="编号" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="账户简称" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="交易对手" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="存款类型" width="180"></el-table-column>
      <el-table-column align="center"  prop="date" label="计息天数(天)" width="180"></el-table-column>
      <el-table-column align="center"  prop="name" label="存入日期" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="起息日" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="到期日" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="金额(元)" width="180"></el-table-column>
      <el-table-column align="center"  prop="date" label="收益率(%)" width="180"></el-table-column>
      <el-table-column align="center"  prop="name" label="收益计算方式" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="收益匡算(元)" width="180"></el-table-column>

      <el-table-column align="center"  fixed="left" label="操作" width="130">
        <template slot-scope="scope">
          <el-button @click="doDel(scope.row)" type="text" size="mini">删除</el-button>
         <el-button @click="doEdit(scope.row)" type="text" size="mini">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    
    <div class="table-title"  style="margin-top:20px">
      <el-button type="primary">保存</el-button>
      <el-button type="primary">生成审批表</el-button>
    </div>
       
    </el-tab-pane>
    <el-tab-pane label="方案审批表" name="orgin">
       <h3 class="table-title">中国移动通信集团财务有限公司</h3>
       <h3 class="table-title">同业存款业务审批表(【】年第【】期)</h3>
       <el-table
      :data="tableData3"  :header-cell-style="{background:'#e0f3ff',color:'#5f95b7'}"
      border
      stripe
      highlight-current-row="true"
      style="width: 100%"
    >
     <el-table-column align="center"  prop="date" label="业务主体" width="180"></el-table-column>
      <el-table-column align="center"  prop="name" label="投资形式" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="编号" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="账户简称" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="交易对手" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="存款类型" width="180"></el-table-column>
      <el-table-column align="center"  prop="date" label="计息天数(天)" width="180"></el-table-column>
      <el-table-column align="center"  prop="name" label="存入日期" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="起息日" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="到期日" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="金额(元)" width="180"></el-table-column>
      <el-table-column align="center"  prop="date" label="收益率(%)" width="180"></el-table-column>
      <el-table-column align="center"  prop="name" label="收益计算方式" width="180"></el-table-column>
      <el-table-column align="center"  prop="address" label="收益匡算(元)" width="180"></el-table-column>

      <el-table-column align="center"  fixed="left" label="操作" width="130">
        <template slot-scope="scope">
          <el-button @click="doDel(scope.row)" type="text" size="mini">删除</el-button>
         <el-button @click="doEdit(scope.row)" type="text" size="mini">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-card>

      <el-form label-width="130px"  :model="model1" align="left">
              <el-row :gutter="10">
              <el-col :span="18" :offset="3">
                <el-form-item label="是否需要上会决议:" prop="loginId" >
                  <el-radio v-model="radio" label="1">备选项</el-radio>
                  <el-radio v-model="radio" label="2">备选项</el-radio>
                </el-form-item>
              </el-col>
              
            
            </el-row>
            <el-row :gutter="10">
              <el-col :span="18" :offset="3">
                <el-form-item label="会议纪要:" prop="loginPassword" >
                  <el-upload
                    class="upload-demo"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList2"
                    list-type="picture">
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                </el-form-item>
              </el-col>
            </el-row>
              
            </el-form>
    </el-card>
    <div class="table-title"  style="margin-top:20px">
      <el-button>取消</el-button>
      <el-button type="primary">提交</el-button>
      <el-button type="primary">导出审批表</el-button>
    </div>
    </el-tab-pane>
    
  </el-tabs>
   <edit-form v-if="editFormVisible" ref="editForm" @change="doSearch"></edit-form><aprove-step v-if="AproveStepVisible" ref="aproveStep"></aprove-step>
   <el-dialog title="导入报价数据" :visible.sync="priceVisible">
     <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>前10期报价数据</span>
      </div>
      <div v-for="o in 4" :key="o" :class="{active:o==heightNu}" class="text itemList" @click="heightLine(o)">
        {{'列表内容 ' + o }}
      </div>
    </el-card>
     <span slot="footer" class="dialog-footer">
    <el-button type="primary" @click="listShow()">确定</el-button>
    <el-button @click="priceVisible = false">取消</el-button>
  </span>
   </el-dialog>
</div>
</template>


<script>
import EditForm from "./edit";
export default {
  data() {


    return {
      formAction: 0, //0 add,//1,edit
      heightNu:0,
      editFormVisible:false,
      priceVisible:false,
      visible: false, title:"添加",
      disabled:false,
      btn:"提交",
      aproveVisible: false,
      listForMine:false,
      fileList2: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
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
    heightLine(id){
      this.heightNu= id;
      console.log(id,this.heightNu)
    }, 
    listShow(id){
      this.listForMine = true;
      this.priceVisible = false;
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
