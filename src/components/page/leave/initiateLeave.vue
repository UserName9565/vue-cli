<template>
    <div>
        
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="180px">
                    <el-form-item label="processDefinitionKey">
                        <el-input v-model="form.processDefinitionKey"></el-input>
                    </el-form-item>
                     <el-form-item label="userId">
                        <el-input v-model="form.userId"></el-input>
                    </el-form-item>
                     <el-form-item label="nextDealMan">
                        <el-input v-model="form.nextDealMan"></el-input>
                    </el-form-item>
                   
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">确定</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

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
                    name: '',
                    region: '',
                    userId:'1',
                    businessKey:"001",
                    processDefinitionKey:"leave-process3",
                    nextDealMan:"admin",
                    businessType:'1'
                }
            }
        },
        methods: {
            
            onSubmit() {
                let self = this;
               // {userId:"",businessKey:"",processDefinitionKey}
                var obj ={
                    url:this.$url.leave.start,
                    data:this.form
                }
                
                this.common.httpPost(obj,success);
                function success(data){

                    self.$message.success('提交成功！');
                }
               // this.$message.success('提交成功！');
            }
        }
    }
</script>