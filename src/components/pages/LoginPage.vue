<template>
    <div class="login-container h-full">
        <div class="login-container--form">
            <div class="top-container">
                <div class="img-container">
                    <img class="img" src="../../assets/logo.jpeg" alt="logo.jpeg" />
                </div>
                <div class="title">EMS后台系统登录框</div>
            </div>
            <el-form ref="loginFormRef" :model="formData" :rules="formRules" label-width="0px" class="new-el-form">
                <el-form-item prop="username">
                    <el-input
                        v-model="formData.username"
                        placeholder="请输入用户名"
                        prefix-icon="el-icon-user"
                        size="large"
                        autofocus
                        tabindex="1"
                    />
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        v-model="formData.password"
                        placeholder="请输入密码"
                        size="large"
                        type="password"
                        prefix-icon="el-icon-lock"
                        tabindex="2"
                        show-password
                    />
                </el-form-item>
                <el-form-item>
                    <el-button class="w-full" type="primary" @click="onSubmitForm()" prefix-icon="el-icon-lx-lock" size="large"
                        >登录</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            formData: {
                username: 'admin',
                password: '123456'
            },
            formRules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' },
                    { min: 6, max: 12, message: '长度在 6 到 12 个字符', trigger: 'blur' }
                ]
            }
        };
    },
    methods: {
        onResetForm() {
            this.formData = {
                username: '',
                password: ''
            };
        },
        onSubmitForm() {
            this.$refs.loginFormRef.validate((valid) => {
                if (valid) {
                    console.log(valid);
                    let obj = {
                        username: this.formData.username,
                        password: this.formData.password
                    };
                    axios.post('/api/login/verify', obj).then((res) => {
                        if (res.data.code === '200' && res.data.data.token) {
                            // sessionStorage.setItem('token', res.data.data.token);
                            this.$router.replace('/');
                            this.onResetForm();
                            this.$message.success('登录成功');
                        } else {
                            this.onResetForm();
                            this.$message.error('用户名或密码错误, 请重新输入');
                        }
                    });
                }
            });
        }
    }
};
</script>

<style lang="scss" scoped>
.login-container {
    background: url('../../assets/desk-backimg.jpeg') no-repeat fixed center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    .top-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        .title {
            font-size: 30px;
            font-weight: bold;
            color: #ffffff;
            z-index: 2;
            opacity: 0.8;
        }
        .img-container {
            width: 90px;
            height: 90px;
            border-radius: 50%;
            overflow: hidden;
            background-color: rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: calc(50% - 60px);
            left: calc(50% - 40px);
            z-index: 1;
            .img {
                width: 80px;
                height: 80px;
                border-radius: 50%;
            }
        }
    }
    &--form {
        width: 350px;
    }
}
</style>
