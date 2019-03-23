
import axios from 'axios'
import common from "./common.js";
import vue from '../../components/common/bus';
axios.defaults.baseURL = common.ctx//'bus.common.ctx';//配置你的接口请求地址
axios.defaults.headers.post['Content-Type'] = 'application/json';//'multipart/form-data';//配置请求头信息。 
// http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     if (vue.$store.state.app.user.loginToken) {
//       config.headers.Authorization = `${vue.$store.state.app.user.loginToken}`;
//     }
//     vue.$store.commit('startLoading');
//     return config;
//   },
//   err => {
//     vue.$notify.error({
//       title: '错误',
//       message: '系统出现错误，请重试----！'
//     });

//     return Promise.reject(err);
//   });

// http response 拦截器
axios.interceptors.response.use(
  response => {
    //vue.$store.commit('endLoading');
    return response.data;
  },
  error => {
    //vue.$store.commit('endLoading');
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除token信息并跳转到登录页面
          vue.$store.commit('signOut');
          vue.$router.push('/login');
          
        //   vue.$router.replace({
        //     path: '/login',
        //     query: {
        //       redirect: vue.$router.currentRoute.fullPath
        //     }
        //   });
          break;
        case 8888:

        //   vue.$message.error(error.response.data.message);
        //   return Promise.reject(error.response.data.message)
          break;
        default:
          break;
      }
    } 
    let msg = "系统出现错误，请重试";
    vue.$message.error(msg);
    return Promise.reject(msg)

  });

export default axios;
