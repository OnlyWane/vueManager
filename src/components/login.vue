<template>
  <div class="login-container">
    <div class="form-container">
      <el-form label-position="top" :rules="rules" ref="loginFormData" label-width="80px" :model="loginFormData">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginFormData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginFormData.password"></el-input>
        </el-form-item>
        <el-button class="btn-login" type="primary" @click="submitForm('loginFormData')">主要按钮</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginFormData: {
        username: "",
        password: ""
      },
      rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'change' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, message: '密码长度不能小于6', trigger: 'change' }
          ],
      }
    };
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.$axios.post('login',this.loginFormData).then(res=>{
              // console.log(res);
              if(res.data.meta.status == 200){
                // 登录成功
                this.$message.success(res.data.meta.msg);
                let token = res.data.data.token;
                // 将token保存到本地的会话中,关闭页面,就自动删除
                window.sessionStorage.setItem('token',token);
                // 跳转后台首页
                this.$router.push('/');
              }else if (res.data.meta.status == 400){
                // 登录失败
                this.$message.error(res.data.meta.msg);
              }
            })
          } else {
            this.$message.error('请输入正确的用户名和密码');
            return false;
          }
        });
      }
  },
};
</script>

<style lang="scss">
.login-container {
  height: 100%;
  background-color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  .form-container {
    background-color: #fff;
    width: 580px;
    padding: 40px;
    box-sizing: border-box;
    border-radius: 10px;
    .btn-login {
      width: 100%;
    }
  }
}
</style>
