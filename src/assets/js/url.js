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
    menuManag: {//菜单管理
        getList: ctx + "/api/router/find", //查询列表
        getById: ctx + "/api/router/findById", //id查询
        del: ctx + "/api/router/delete", //停用
        edit: ctx + "/api/router/update", //编辑
        add: ctx + "/api/router/create", //增加
        // findTree: ctx + "/api/router/findTree", 
        findAll:ctx+"/api/router/findAll",//查找路由所有
        findByParentId:ctx+"/api/router/findByParentId",//
        findAuthorized:ctx+"/api/router/findAuthorized"//
      },
      roleManag: {//角色管理
        getList: ctx + "/api/role/find", //查询列表
        getById: ctx + "/api/role/findById", //id查询
        del: ctx + "/api/role/delete", //停用
        edit: ctx + "/api/role/update", //编辑
        add: ctx + "/api/role/create", //增加
        findAll:ctx+"/api/role/findAll",
        updatePermission: ctx + "/api/role/updatePermission", //
        findResourcePermission: ctx + "/api/role/findResourcePermission" //
      },
    selectList:{//下拉框的数据
        menu:ctx+"/api/router/findTree",//上级路由
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
        findPermissionCodeByUserId: ctx + "/api/resource/findPermissionCodeByUserId"

    },
    userManag:{// 
        getList: ctx + "/api/user/find", //查询列表
        getById: ctx + "/api/user/findById", //id查询
        del: ctx + "/api/user/delete", //停用
        edit: ctx + "/api/user/update", //编辑
        add: ctx + "/api/user/create", //增加
        updateCurrentUser:ctx+"/api/user/updateCurrentUser", 
        findByLoginName:ctx+"/api/user/findByLoginName",//
        updatePassword:ctx+"/api/user/updatePassword",//重置密码接口
        updateCurrentPassword:ctx+"/api/user/updateCurrentPassword",//修改自己密码接口
        me:ctx+"/api/user/me"// 
    },
    organizationManag:{// 
        getList: ctx + "/api/organization/find", //查询列表
        getById: ctx + "/api/organization/findById", //id查询
        del: ctx + "/api/organization/delete", //停用
        edit: ctx + "/api/organization/update", //编辑
        add: ctx + "/api/organization/create", //增加
        findAll:ctx+"/api/organization/findTree", 
        findTree:ctx+"/api/organization/findTree"//
    } 
    
 
   
}
export default urls;