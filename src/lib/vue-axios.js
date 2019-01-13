//引入axios
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/';

// 暴露出去 (将axios弄成一个插件)
export default {
    install(Vue) {
        Vue.prototype.$axios = axios;
    }
}