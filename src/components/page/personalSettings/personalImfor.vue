<template>
    <div>
        
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="130px">
                    <el-form-item class="is-required" verify  prop="loginName" label="登录名" >
                        <el-input disabled="disabled" v-model="form.loginName"></el-input>
                    </el-form-item>
                     <el-form-item class="is-required" verify prop="name" label="姓名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                     <el-form-item class="is-required" prop="mobile" label="手机号" verify  :phone="true">
                        <el-input v-model="form.mobile"></el-input>
                    </el-form-item>
                     <el-form-item class="is-required" prop="email" label="邮箱地址" verify  :email="true">
                        <el-input v-model="form.email"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">提交</el-button>
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
                    loginName: '',
                    mobile:'',
                    email:""
                }
            }
        },
        created(){
            this.doInit();
        },
        methods: {
            onSubmit() {
                this.$refs["form"].validate(valid => {
                    if (valid) {
                       
                        let self = this;
                        var obj ={
                            url: self.$url.userManag.edit,
                            data: self.form
                        }
                        this.common.httpPost(obj,success);
                        function success(data){
                            self.$message.success('提交成功！');
                        }
                    } else {
                        this.$message({
                            message:"请完善信息",
                            type:"error"
                        })
                    return false;
                    }
                });
               
            },
            doInit(){
                let self = this;
                var obj ={
                    url: this.$url.userManag.getById,
                    data: {
                        id:this.$store.getters.getLogin("userId")
                    }
                }
                this.common.httpPost(obj,success);
                function success(data){
                    
                    self.form = {
                        id:data.id,
                        loginName:data.loginName,
                        name:data.name,
                        email:data.email,
                        mobile:data.mobile,
                        roleIds:data.roleIds
                    }
                   
                
                }
            }
        }
    }
</script>