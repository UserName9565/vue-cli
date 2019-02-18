import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            meta: { title: '自述文件' },
            children:[
                { 
                    path: '/systemSetupLeaf1',
                    component: resolve => require(['../components/page/systemSetup/systemSetupLeaf1.vue'], resolve),
                    meta: { title: '用户管理' }
                },
                {
                    path: '/workFlowLeaf1',
                    component: resolve => require(['../components/page/workFlow/workFlowLeaf1.vue'], resolve),
                    meta: { title: '任务列表' }
                }, 
                
                {
                    path: '/dashboard',
                    component: resolve => require(['../components/page/Dashboard.vue'], resolve),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/icon',
                    component: resolve => require(['../components/page/Icon.vue'], resolve),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: resolve => require(['../components/page/BaseTable.vue'], resolve),
                    meta: { title: '基础表格' }
                },
                {
                    path: '/tabs',
                    component: resolve => require(['../components/page/Tabs.vue'], resolve),
                    meta: { title: 'tab选项卡' }
                },
                {
                    path: '/form',
                    component: resolve => require(['../components/page/BaseForm.vue'], resolve),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: resolve => require(['../components/page/VueEditor.vue'], resolve),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: resolve => require(['../components/page/Markdown.vue'], resolve),
                    meta: { title: 'markdown编辑器' }    
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: resolve => require(['../components/page/Upload.vue'], resolve),
                    meta: { title: '文件上传' }   
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: resolve => require(['../components/page/BaseCharts.vue'], resolve),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: resolve => require(['../components/page/DragList.vue'], resolve),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: resolve => require(['../components/page/Permission.vue'], resolve),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: resolve => require(['../components/page/403.vue'], resolve),
                    meta: { title: '403' }
                },
                {
                    path: '/userManag',
                    component: resolve => require(['../components/page/user/userManag.vue'], resolve),
                    meta: { title: '用户管理' }
                },
                {
                    path: '/userAudit',
                    component: resolve => require(['../components/page/user/userAudit.vue'], resolve),
                    meta: { title: '用户审核' }
                },
                {
                    path: '/roleManag',
                    component: resolve => require(['../components/page/role/roleManag.vue'], resolve),
                    meta: { title: '角色管理' }
                },
                {
                    path: '/roleAudit',
                    component: resolve => require(['../components/page/role/roleAudit.vue'], resolve), 
                    meta: { title: '角色审核' }
                },
                {
                    path: '/organization',
                    component: resolve => require(['../components/page/organization/organization.vue'], resolve),
                    meta: { title: '岗位权限' }
                },
                {
                    path: '/workflowdef',
                    component: resolve => require(['../components/page/workflowdef/index.vue'], resolve),
                    meta: { title: '流程模型' }
                },
                {
                    path: '/processinst',
                    component: resolve => require(['../components/page/processinst/index.vue'], resolve),
                    meta: { title: '流程实例' }
                },{
                    path: '/formManag',
                    component: resolve => require(['../components/page/formManag/formManag.vue'], resolve),
                    meta: { title: '表单管理' }
                },
                ,{
                    path: '/dataDictionary',
                    component: resolve => require(['../components/page/capitalAccoutManag/dataDictionary.vue'], resolve),
                    meta: { title: '工行资金账户' }
                }
                ,{
                    path: '/principalManag',
                    component: resolve => require(['../components/page/capitalAccoutManag/principalManag.vue'], resolve),
                    meta: { title: '委托方管理' }
                },{
                    path: '/bankList',
                    component: resolve => require(['../components/page/bankManag/bankList.vue'], resolve),
                    meta: { title: '交易对手列表' }
                },
                {
                    path: '/contactsManag',
                    component: resolve => require(['../components/page/bankManag/contactsManag.vue'], resolve),
                    meta: { title: '联络人管理' }
                },
                {
                    path: '/logManag',
                    component: resolve => require(['../components/page/log/logManag.vue'], resolve),
                    meta: { title: '日志管理' }
                }
                // {logManag
                //     path: '/loanEnterList',
                //     component: resolve => require(['../components/page/loanAuditTaskList/loanEnterForm.vue'], resolve),
                //     meta: { title: '流程申请' }
                // },
                // {
                //     path: '/loanAuditTaskList',
                //     component: resolve => require(['../components/page/loanAuditTaskList/loanTaskList.vue'], resolve),
                //     meta: { title: '流程审核' }
                // }
               
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
