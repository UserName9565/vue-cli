//import axios from 'axios';
var qs = require('qs');
import bus from '../../components/common/bus';
let common = {
    ctx: 'http://192.168.1.147:8080/finance-backend',
    ctxForm: "http://192.168.1.147:8080/finance-backend",
    myFun: function (ev) { //给自定义方法起个名

    },
    httpPost: function (obj, success, error) {
        //obj.url  请求地址
        //obj.data  请求数据
        //success   成功回调
        //error     失败回调
        // let defaultObj = {
        //     type:"post",

        // }
        if (!obj.type) {
            obj.type = "post"
        }
        if (obj.url.indexOf("/api/") != -1) {
            // obj.url = obj.url.replace("/api","");
            bus.$axios.defaults.baseURL = common.ctx;
        } else if (obj.url.indexOf("/ms/") != -1) {
            // obj.url = obj.url.replace("/ms","");
            bus.$axios.defaults.baseURL = common.ctxForm;
        } else {
            bus.$axios.defaults.baseURL = common.ctx;
        }

        if (bus.$store.getters.getLogin("token")) {
            var token = bus.$store.getters.getLogin("token");
        } else {
            var token = null;
        }

        let header = {
            headers: {
                'X-Token': token
            }
        }
        const loading = bus.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
        });
        if (obj.type == "post") {

            bus.$axios["post"](
                    obj.url,
                    obj.data, header)
                .then(function (response) {
                    loading.close();

                    if (response.code == 1) {

                        success(response.data)
                    } else {
                        if(obj.message){
                            bus.$message({
                                message:response.message,
                                type:"error"
                            })
                        }else{

                            bus.$notify.error("接口请求失败");
                        }
                    }
                })
                .catch(function (msgE) {
                    bus.$notify.error("网络请求失败");
                    loading.close();
                    // error(msgE)
                });
        } else {
            bus.$axios["get"](
                    obj.url, {
                        params: obj.data,
                        headers: header.headers
                    })
                .then(function (response) {
                    loading.close();

                    if (response.code == 1) {

                        success(response.data)
                    } else {
                        if(obj.message){
                            bus.$message({
                                message:response.message,
                                type:"error"
                            })
                        }else{

                            bus.$notify.error("接口请求失败");
                        }
                    }
                })
                .catch(function (msgE) {
                    loading.close();
                    //console.log(msgE)
                    //bus.$notify.error(msgE);
                    // error(msgE)
                });
        }
    },
    selectInit(url, back, params) {
        let obj = {
            url: url,
            data: params
        }
      
        this.httpPost(obj, success);
        function success(data) {
            back(data);
        }
    },
    treeList(data,obj) { //路由树结构
        if(!obj){
            obj = {
                id:'id',//当前id
                pid:'parentId',//parent.id  的parent
                firstPid:0,//第一层id应为
                label:"name"//label
            }
        }

        var arr = [];
        // data = data.rows;

        var menuNew = data.filter((item) => {
            return item[obj.pid]== obj.firstPid;//找到第一层
        })
        
        menuNew.forEach((item) => {//循环第一层
            var pA = son(item);
            item.label = item[obj.label]
            item.key = 'key-' + item[obj.id];
            if (pA.length > 0) {

                item.children = pA;
                arr.push(item)
            }
        })

        function son(item) {


            var newSon = data.filter((o) => {
                o.label = o[obj.label]+'key-' + o[obj.id];
                o.key = 'key-' + o[obj.id];
                return o[obj.pid]== item[obj.id];
            })
            if (newSon.length > 0) {

                newSon.forEach((b) => {
                    var pA = son(b);
                    if (pA.length > 0) {
                        b.children = pA;
                    }
                })
            }
            return newSon;
        }

        return arr;
    },
    menuResource(data, roleData) { //路由树+资源组合树；
        var arr = [];
       
        var menuNew = data.filter((item) => {
            return item.parentId == 0;
        })
     
        
        menuNew.forEach((item) => {
            var pA = son(item);
            item.label = item.name+'router-' + item.id;
            item.key = 'router-' + item.id;
            if (pA.length > 0) {

                item.children = pA;
                arr.push(item)
            }
        })
        function son(item) {
            var newSon = data.filter((o) => {
                o.label = o.name+'router-' + o.id;
                o.key = 'router-' + o.id;
                return o.parentId == item.id;
            })
            if (newSon.length > 0) {//非叶子节点

                newSon.forEach((b) => {
                    var pA = son(b);
                    if (pA.length > 0) {
                        b.children = pA;
                    }
                })
            } else {//叶子节点  将有资源附着
                
                item.children = [];
                roleData.forEach((element) => {

                    if (element.routerId == item.id) {
                        let resourceNode = {
                            type: 'resource',
                            id: element.id,
                            label: element.name + 'resource-' + element.id,
                            key: 'resource-' + element.id
                        }
                        item.children.push(resourceNode)
                    }
                })
            }
            return newSon;
        }

        return arr;
    },


}
export default common;
