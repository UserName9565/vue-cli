import Vue from 'vue';//引用vue
import Vuex from 'vuex';//引用vuex
Vue.use(Vuex);//使用vuex
const state={
    nodeVoteCount:1,//node的初始票数
    vueVoteCount:2,//vue的初始票数
};
//生明一个常量mutations，将所有的mutation放入其中
const mutations={
    //为nodeVoteCount加1
    addNodeVote(state){//这里的state即是上面定义的state常量
        state.nodeVoteCount++;
       //根据具体情况，你还可以在这里写一些其它的逻辑来改变状态
    },
    //为vueVoteCount加1
    addVueVote(state){//这里的state即是上面定义的state常量
        state.vueVoteCount++;
        //根据具体情况，你还可以在这里写一些其它的逻辑来改变状态
    }
}
const store = new Vuex.Store({//暴露Store对象
    state,
    mutations//将mutations进行暴露
})
export default store
 