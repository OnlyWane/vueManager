import Vue from 'vue';
// 引入路由
import VueRouter from 'vue-router';
Vue.use(VueRouter);

// 引入路由组件
import main from '../components/main.vue';
import login from '../components/login.vue';


// 写路由规则
let routes = [
    // 首页
    {
        path:'/',
        component:main
    },
    // 登录页
    {
        path:'/login',
        component: login
    },
]

// 实例化
let router = new VueRouter({
    routes
})

// 将其实例化的对象暴露出去
export default router;