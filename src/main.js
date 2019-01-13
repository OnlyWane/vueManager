import Vue from 'vue';
import App from './App.vue';
//导入公共样式
import './assets/base.css';

// 导入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 导入自写axios插件
import VueAXios from './lib/vue-axios';
Vue.use(VueAXios);

// 导入路由
import router from './lib/router';

// 阻止vue在启动时生成生产提示( 浏览器开发者模式中 )
Vue.config.productionTip = false; 

// 初始化vue实例
new Vue({
  render: h => h(App),
  //路由挂载
  router
}).$mount('#app');
