import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import router from './router';
import store from './store'
// import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import '../static/css/theme-first/index.css';
import './assets/icon/iconfont.css';
import "babel-polyfill"; 
import Urls from './assets/js/url.js';//路劲共用
//axios.defaults.baseURL = 'http://192.168.1.250:8890';//配置你的接口请求地址
import util from './assets/js/util.js'
import common from './assets/js/common.js'//公共注册
Vue.prototype.common = common;
import http from './assets/js/http.js'

 
Vue.prototype.$util = util
Vue.use(ElementUI, { size: 'small' });
Vue.use(Vuex)
Vue.prototype.$axios = http;
Vue.prototype.$url = Urls;
Vue.config.silent = true

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const role = localStorage.getItem('ms_username');
    if(!role && to.path !== '/login'){
        next('/login');
    }else if(to.meta.permission){
        // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        role === 'admin' ? next() : next('/403');
    }else{
        // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
        if(navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor'){
            Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
                confirmButtonText: '确定'
            });
        }else{
            next();
        }
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');