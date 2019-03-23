import Vue from 'vue';
import Vuex from 'vuex';
import App from './App';
import elementUIVerify from 'element-ui-verify'
import router from './router';
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import '../static/css/theme-first/index.css';
import './assets/icon/iconfont.css';
import "babel-polyfill"; 
import Urls from './assets/js/url.js';//路劲共用
import util from './assets/js/util.js'
import common from './assets/js/common.js'//公共注册
Vue.prototype.common = common;
import http from './assets/js/http.js'

// import  verifyrules from '@/verifyRule'
Vue.prototype.$util = util
Vue.use(ElementUI, { size: 'small' });
Vue.use(elementUIVerify)
import  verifyrules from './assets/js/verifyRule'

verifyrules.forEach(item => {//
  elementUIVerify.addRule(item.rule, item.ruleMethod);
})
Vue.prototype.$axios = http;//axios 设置
Vue.prototype.$store = store;//vuex
Vue.prototype.$url = Urls;
Vue.config.silent = true
Vue.use(Vuex)
//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const role =store.getters.getLogin("userId")  //localStorage.getItem('ms_username');
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