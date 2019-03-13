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
                   
                        <el-form-item label="userName">
                        <el-input v-model="form.userName"></el-input>
                        </el-form-item>
                    
                     <el-form-item label="nextDealMan">
                        <el-input v-model="form.nextDealMan"></el-input>
                    </el-form-item>
                   <el-form-item label="businessKey">
                        <el-input v-model="form.businessKey"></el-input>
                    </el-form-item>
                    <el-form-item label="businessType">
                        <el-input v-model="form.businessType"></el-input>
                    </el-form-item>
                
                    
                        <el-form-item label="businessTypeName">
                        <el-input v-model="form.businessTypeName"></el-input>
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
                    processDefinitionKey:"leave-process3",
                    nextDealMan:"admin",
                    businessKey:"001",
                    businessType:'1',
                    businessTypeName:"",
                    userName:""
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