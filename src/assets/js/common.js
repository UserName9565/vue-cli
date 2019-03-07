//import axios from 'axios';
var qs=require('qs');
import bus from '../../components/common/bus';
let common = {
     ctx:'http://192.168.1.79:8080',
     ctxForm:"http://192.168.1.79:8081",
    myFun : function (ev) { //给自定义方法起个名
        
    },
    httpPost : function(obj,success,error){
        //obj.url  请求地址
        //obj.data  请求数据
        //success   成功回调
        //error     失败回调
        // let defaultObj = {
        //     type:"post",
            
        // }
            if(obj.url.indexOf("/api/")!=-1){
                obj.url = obj.url.replace("/api","");
                bus.$axios.defaults.baseURL = common.ctx;

            }else if(obj.url.indexOf("/ms/")!=-1){
                obj.url = obj.url.replace("/ms","");
                console.log(obj.url)
                bus.$axios.defaults.baseURL = common.ctxForm;
            }else{
                bus.$axios.defaults.baseURL = common.ctx;
            }
            bus.$axios
                .post(
                    obj.url,
                    qs.stringify(obj.data))
                .then(function (response) {
                    success(response)
                })
                .catch(function (msgE) {
                    bus.$notify.error("请求失败");
                    error(msgE)
                });
    },
    webpage(obj,success){
         console.log(1112)
       // this.httpPost(obj,success);
         
    }

    
 
}
export default common;