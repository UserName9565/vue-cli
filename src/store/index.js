import Vue from 'vue';//引用vue
import Vuex from 'vuex';//引用vuex
Vue.use(Vuex);//使用vuex

const state=sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')) :{
    userId:null,//用户id
    username:null,//用户名称
    token:null,//识别编码
    menu:null
};
//生明一个常量mutations，将所有的mutation放入其中
const mutations={
    setLogin(state,obj){
        //sessionStorage.setItem("login", JSON.stringify(obj));  //添加到sessionStorage
        state.userId = obj.userId;
        state.username = obj.username;
        state.token = obj.token;
        
    },
    signOut (state) {   //退出，删除状态
        sessionStorage.removeItem("state");  //移除sessionStorage
        state.userId = '';
        state.username = '';
        state.token = '';              //同步的改变story中的状态
        state.menu = ''; 
        
    },
    setMenu(state,menu){
        state.menu = menu;
    }
 
     
}
const getters = {
    getLogin:(state) => (str) => {
       
        return state[str]
    },
    getMenu:(state)=>{
        return state.menu
    }
}
const store = new Vuex.Store({//暴露Store对象
    state,
    mutations,//将mutations进行暴露
    getters
})
export default store
 