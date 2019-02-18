const ctx = "/api"//测试环境 http://192.168.1.250:8890
const ctxTest ="/ms"
const urls = {
    login:ctx +'/base_Account/login',
    workflowdef:{
        getList:ctx+"/getMadelByPage",
        getById:ctx+"/getModelById",
        copyById: ctx + "/copyModelById", 
        edit: ctx + "/user/update.do", //编辑
        add: ctx + "/create", //增加
        del: ctx + "/deleteModel",
        deploy:ctx+"/deploy",
        modeler:ctx+"/modeler.html?modelId="    
    },
    processinst:{//流程列表
        getList:ctx+"/getProcessIntanceByPage",
        view:"/process-definition"
    },
    formManag:{// 
        getList:ctxTest+"/form/getList",
        getById:ctxTest+"/form/getDataById",
        edit: ctxTest + "/form/edit", //编辑
        add: ctxTest + "/form/add", //增加
        del: ctxTest + "/deleteModel",
        getByCode:ctxTest+"/form/getDataByCode",
        idCode:ctxTest+"/form/getStartFormKey/"//要加id    
    }
   
    // urserManagement: {//用户管理
    //     getList: ctx + "/user/toSelect.do", //查询列表
    //     getById: ctx + "/user/selectWithUserId.do", //id查询
    //     del: ctx + "/user/updateState.do", //停用
        
    //     edit: ctx + "/user/update.do", //编辑
    //     add: ctx + "/user/add.do", //增加
    //     type: ctx + "/user/getUserIdType.do", //用户管理-证件类型下拉
    //     act: ctx + "/user/getRoles.do", //用户管理-用户角色下拉
    //     other: ctx + "/user/getUserState.do" //用户状态下拉
        
    //   },
}
export default urls;