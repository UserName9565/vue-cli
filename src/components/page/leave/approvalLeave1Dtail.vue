<template>
    <div>
        <el-card  class="mb20"> 

            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="nextDealMan">
                        <el-input v-model="form.nextDealMan"></el-input>
                    </el-form-item>
                     <el-form-item label="content">
                        <el-input v-model="form.content"></el-input>
                    </el-form-item>
                    
                    <el-form-item label="userId">
                        <el-input v-model="form.userId"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="doApprove(true)">通过</el-button>
                        <el-button @click="doApprove(false)">驳回</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
        <el-card>
            <div style="height: 300px;">
                <el-steps direction="vertical" :active="1">
                    <el-step title="步骤 1"></el-step>
                    <el-step title="步骤 2"></el-step>
                    <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
                </el-steps>
            </div>
        </el-card>
      
        

    </div>
</template>
<style>
    .font{
        font-size:12px;
        color:rgb(153,153,153);
        line-height: 15px;
    }
</style>

<script>
    export default {
        name: 'baseform',
        data: function(){
            return {
                
                form: {
                    userId:"",
                    taskId:'',
                    approve:"yes",
                    content:"予以通过",
                    nextDealMan:""
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
            }
        },
        created(){

           
          //  this.formDate();
        },
        methods: {
            
            formDate() {
                var obj ={
                    url:this.$url.workflowdef.deploy,
                    data:form
                }
                
                this.common.httpPost(obj,success);
                function success(data){

                }
               // this.$message.success('提交成功！');
            },
            doApprove(tag){
                this.form.taskId =  this.$route.query.taskId
                let self = this;
                if(tag){
                    this.form.approve = "yes"
                }else{
                    this.form.approve = "no"
                }
                var obj ={
                    url:this.$url.leave.complateTask,
                    data:this.form
                }
                
                this.common.httpPost(obj,success);
                function success(data){
                    self.$message.success("提交成功！")
                }
            }
        }
    }
</script>