<template>
  <div class="login-container">
    <div class="form-container">
      <el-form label-position="top" :rules="rules" ref="loginFormData" label-width="80px" :model="loginFormData">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="loginFormData.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="loginFormData.password"></el-input>
        </el-form-item>
        <el-button class="btn-login" type="primary" @click="submitForm('loginFormData')">主要按钮</el-button>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "app",
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
            alert('submit!');
          } else {
            // console.log('error submit!!');
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
