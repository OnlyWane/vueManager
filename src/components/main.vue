<template>
    <div>
        main
    </div>
</template>
<script>
export default {
    name:'main',
    beforeCreate() {
        let token = window.sessionStorage.getItem('token');
        if (token){
            // token有值 访问成功
            this.$message.success('欢迎来到后台首页!');
        }else {
            // token无值 访问失败,打回登录页面
            this.$router.push('login');
            this.$message.error('您还没有登录,请登录!');
        }
    },
}
</script>
<style>
    
</style>