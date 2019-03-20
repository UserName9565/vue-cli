//import common from './common'
const ctx =''// common.ctx;// "/api"//测试环境 http://192.168.1.250:8890
const ctxForm =''//common.ctxForm;//"/ms"
const urls = {
    login:ctx +"/auth/token",
    getMenu:ctx+"/auth/routers",
    cleantoken:ctx+"/auth/cleantoken",
    menu:{
        getList:ctx+"/routers"
    },
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
    leave:{
        start:'/startProcess',//发起
        todoTask:"/todoTask",
        complateTask:"/complateTask"
    },
    processinst:{//流程列表
        getList:ctx+"/getProcessIntanceByPage",
        view:"/process-definition",
        webPage:"/form/getFormKey"
    },
    formManag:{// 
        getList:ctxForm+"/form/getList",
        getById:ctxForm+"/form/getDataById",
        edit: ctxForm + "/form/edit", //编辑
        add: ctxForm + "/form/add", //增加
        del: ctxForm + "/deleteModel",
        getByCode:ctxForm+"/form/getDataByCode",
        idCode:ctxForm+"/form/getStartFormKey/"//要加id    
    },
    menuManag: {//菜单管理
        getList: ctx + "/api/router/find", //查询列表
        getById: ctx + "/api/router/findById", //id查询
        del: ctx + "/api/router/delete", //停用
        edit: ctx + "/api/router/update", //编辑
        add: ctx + "/api/router/create", //增加
        findAll:ctx+"/api/router/findAll",//查找路由所有
        dd:ctx+"/api/router/findByParentId",//
        cc:ctx+"/api/router/findAuthorized",//
      },
      roleManag: {//橘色管理
        getList: ctx + "/api/role/find", //查询列表
        getById: ctx + "/api/role/findById", //id查询
        del: ctx + "/api/role/delete", //停用
        edit: ctx + "/api/role/update", //编辑
        add: ctx + "/api/role/create", //增加
        updatePermission: ctx + "/api/role/updatePermission", //
        findResourcePermission: ctx + "/api/role/findResourcePermission", //
      },
    selectList:{//下拉框的数据
        menu:ctx+"/api/router/findByParentId",//
    },
    resourceManag:{
        getList: ctx + "/api/resource/find", //查询列表
        getById: ctx + "/api/resource/findById", //id查询
        del: ctx + "/api/resource/delete", //停用
        edit: ctx + "/api/resource/update", //编辑
        add: ctx + "/api/resource/create", //增加
        findAll: ctx + "/api/resource/findAllAvailable", //
        findAuthor: ctx + "/api/resource/findAuthorizedByUserId", //
        findByRouterId: ctx + "/api/resource/findByRouterId", 
        findPermissionByUserId: ctx + "/api/resource/findPermissionByUserId", 
        findPermission: ctx + "/api/resource/findPermission", 
        findPermissionCodeByUserId: ctx + "/api/resource/findPermissionCodeByUserId", 
    },
    userManag:{// 
        getList: ctx + "/api/user/find", //查询列表
        getById: ctx + "/api/user/findById", //id查询
        del: ctx + "/api/user/delete", //停用
        edit: ctx + "/api/user/update", //编辑
        add: ctx + "/api/user/create", //增加
        updateCurrentUser:ctx+"/api/user/updateCurrentUser", 
        findByLoginName:ctx+"/api/user/findByLoginName",//
        updatePassword:ctx+"/api/user/updatePassword",//  
        me:ctx+"/api/user/me",// 
    },
    organizationManag:{// 
        getList: ctx + "/api/organization/find", //查询列表
        getById: ctx + "/api/organization/findById", //id查询
        del: ctx + "/api/organization/delete", //停用
        edit: ctx + "/api/organization/update", //编辑
        add: ctx + "/api/organization/create", //增加
        findAll:ctx+"/api/organization/findTree", 
        findTree:ctx+"/api/organization/findTree",//
    },
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