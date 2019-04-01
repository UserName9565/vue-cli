<template>
  <el-dialog title="新增字典" :close-on-click-modal="false" :visible.sync="visible">
    <el-form :model="model" ref="form" label-width="130px" v-show="tabActive =='userInfo'">
      <el-row>
        <el-col :span="12">
          <el-form-item label="字典编码
" prop="code" verify :maxLength="50" class="is-required">
            <el-input v-model="model.code"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="字典名称"
            prop="name"
            :maxLength="128"
            verify
            class="is-required"
          >
            <el-input v-model="model.name"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <!-- <el-row >
        <el-col :span="12">
          <el-form-item label="字典类别" prop="name" verify :maxLength="50" class="is-required">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
        </el-col>
        
      </el-row>-->
      <el-row>
        <el-col :span="12">
          <el-form-item
            label="关联字典"
            prop="parentCode"
            verify
            :maxLength="45"
            class="is-required"
            
          >
            <el-input v-model="model.parentName" disabled></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="是否启用" prop="status">
            <el-switch v-model="model.status"></el-switch>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>

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
      title: "添加",
      disabled: false,
      btn: "提交",
      aproveVisible: false,
      tabActive: "userInfo",
      model: {
        name:'',
        code:'',
        parentId:'',
        parentCode:'',
        parentName:'',
        name:'',
        status: true
      },
 
      
    };
  },
  created() {},
  activated() {},
  methods: {
    init(parentItem, type,id) {
      this.visible = true;
      this.tabActive = "userInfo";
      let self = this;
      if (this.$refs["form"]) {
        this.$refs["form"].resetFields();
      }

      if (type == 1 || type == 2) {
        this.model.dictionaryId = id;
        if (type == 2) {
          //如果是审核进来   type就==3
          this.disabled = true;
          this.formAction = 2;
          this.btn = "审核";
          this.title = "审核";
        } else {
          self.formAction = 1;
          this.title = "编辑";
        }
       
        var obj = {
          url: this.$url.dictionary.getById,
          data: {
            dictionaryId: id
          }
        };
        this.common.httpPost(obj, success);
        function success(data) {
         // self.model = data;
         let status =  (data.status==1);
          self.model= {
            dictionaryId:data.dictionaryId,
            name:data.name,
            code:data.code,
            parentId:parentItem.dictionaryId,
            parentCode:parentItem.code,
            parentName:parentItem.name,
            status:status
          }
        }
      } else {
        self.formAction = 0;
       
        self.model.parentId = parentItem.dictionaryId
        self.model.parentCode = parentItem.code
        self.model.parentName= parentItem.name
      }
    },

    dataFormSubmit() {
      let self = this;
      self.$refs["form"].validate(valid => {
        if (valid) {
          
          let model = self.model;
          if(this.formAction==0){
            var url = this.$url.dictionary.add
          }else{
            var url = this.$url.dictionary.edit
          }
       
          var obj = {
            url: url,
            data: model
          };
          
          this.common.httpPost(obj, success);
          function success(data) {
            if(self.formAction==0){
              var mestitle = '已添加'
              self.$emit('pushItem',data)
            }else{
              var mestitle = '已修改'
            }
            self.visible = false;
            self.$message({
              message: mestitle,
              type: 'success'
            });
            self.$emit('change')
          }
        } else {
           
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
    handleNodeClick(data) {}
  }
};
</script>
