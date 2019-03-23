<template>
    <div>
        
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="原密码" verify prop="oldPassword" class="is-required">
                        <el-input v-model="form.oldPassword" type="password"></el-input>
                    </el-form-item>
                     <el-form-item label="新密码" :verify="validateLoginNewPassword" prop="password" class="is-required">
                        <el-input v-model="form.password" type="password"></el-input>
                    </el-form-item>
                     <el-form-item label="确认密码" :verify="validateConfirmPassword" :watch="form.password" prop="confirmNewPassword" class="is-required">
                        <el-input v-model="form.confirmNewPassword" type="password"></el-input>
                    </el-form-item>
                     <el-form-item >
                        <div class="font">

                        <p>提示：</p>
                        <p >1、首次登录用户必须修改密码，密码要求8-32位，字母+数字组合，每三个月会提示更换！</p>
                        <p>2、如忘记密码，请联系管理员。</p>   
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit">确认</el-button>
                        <el-button>取消</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
     
        data: function(){
            return {
                
                form: {
                    oldPassword: '',
                    password:'',
                    confirmNewPassword:''
                   
                }
            }
        },
        methods: {
            validateLoginNewPassword(rule, value, callback) {
                if (!(/^(?![0-9]+$)(?![a-zA-Z]+$)(?!(.)\1{5}).{8,32}$/.test(value))) {
                    callback(new Error('新密码强度弱，长度必须在8位和32位数之间，包含字母数字'));
                }
                callback();
                },
                validateConfirmPassword(rule, value, callback) {
                if (this.form.password !== value) {
                    callback(new Error('确认新密码与新密码不一致'))
                } else {
                    callback()
                }
                },
            onSubmit() {
                this.$refs["form"].validate(valid => {
                    if (valid) {
                       
                        let self = this;
                        var obj ={
                            url: self.$url.userManag.updateCurrentPassword,
                            data: self.form,
                            message:true
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
            }
        }
    }
</script>