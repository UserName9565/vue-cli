<template>
    <div>
        
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="原密码">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                     <el-form-item label="新密码">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                     <el-form-item label="确认密码">
                        <el-input v-model="form.name"></el-input>
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
        name: 'baseform',
        data: function(){
            return {
                 
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    
                }
            }
        },
        methods: {
            onSubmit() {
                this.$message.success('提交成功！');
            }
        }
    }
</script>