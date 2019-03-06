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
                    path: '/approvalLeave1Dtail',
                    component: resolve => require(['../components/page/leave/approvalLeave1Dtail.vue'], resolve),
                    meta: { title: '审批详情' }
                },
                { 
                    path: '/initiateLeave',
                    component: resolve => require(['../components/page/leave/initiateLeave.vue'], resolve),
                    meta: { title: '请假' }
                },
                { 
                    path: '/approvalLeave1',
                    component: resolve => require(['../components/page/leave/approvalLeave1.vue'], resolve),
                    meta: { title: '审批1' }
                },
                { 
                    path: '/approvalLeave2',
                    component: resolve => require(['../components/page/leave/approvalLeave2.vue'], resolve),
                    meta: { title: '审批2' }
                },
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
                {
                    path: '/completedList',
                    component: resolve => require(['../components/page/processManag/completedList.vue'], resolve),
                    meta: { title: '已办流程' }
                },
                {
                    path: '/To-doList',
                    component: resolve => require(['../components/page/processManag/To-doList.vue'], resolve),
                    meta: { title: '待办流程' }
                },{
                    path: '/dataDictionary',
                    component: resolve => require(['../components/page/basicDataManag/dataDictionary.vue'], resolve),
                    meta: { title: '数据字典' }
                },{
                    path: '/financialData',
                    component: resolve => require(['../components/page/basicDataManag/financialData.vue'], resolve),
                    meta: { title: '金融数据' }
                },
                ,{
                    path: '/capitalAccount',
                    component: resolve => require(['../components/page/capitalAccoutManag/capitalAccount.vue'], resolve),
                    meta: { title: '活期类账户' }
                }
                ,{
                    path: '/principalManag',
                    component: resolve => require(['../components/page/capitalAccoutManag/principalManag.vue'], resolve),
                    meta: { title: '委托方框架协议' }
                },
                {
                    path: '/fundAccount',
                    component: resolve => require(['../components/page/capitalAccoutManag/fundAccount.vue'], resolve),
                    meta: { title: '委托方资金账户' }
                },{
                    path: '/frameworkAgreement',
                    component: resolve => require(['../components/page/capitalAccoutManag/frameworkAgreement.vue'], resolve),
                    meta: { title: '框架协议编号审批' }
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
                },
                {
                    path: '/personalImfor',
                    component: resolve => require(['../components/page/personalSettings/personalImfor.vue'], resolve),
                    meta: { title: '个人设置' }
                },
                {
                    path: '/setPassword',
                    component: resolve => require(['../components/page/personalSettings/setPassword.vue'], resolve),
                    meta: { title: '修改密码' }
                },
                {
                    path: '/industryRegulation',
                    component: resolve => require(['../components/page/quotaManag/industryRegulation.vue'], resolve),
                    meta: { title: '行业监管额度占用情况' }
                },
                {
                    path: '/bankQuota',
                    component: resolve => require(['../components/page/quotaManag/bankQuota.vue'], resolve),
                    meta: { title: '交易对手额度占用情况' }
                },
                {
                    path: '/ruleList',
                    component: resolve => require(['../components/page/bankQuota/ruleList.vue'], resolve),
                    meta: { title: '规则列表' }
                },
                {
                    path: '/regulatoryStandards',
                    component: resolve => require(['../components/page/bankQuota/regulatoryStandards.vue'], resolve),
                    meta: { title: '授信标准设定' }
                },
                {
                    path: '/regulationApproval',
                    component: resolve => require(['../components/page/bankQuota/regulationApproval.vue'], resolve),
                    meta: { title: '规则标准审批' }
                },
                {
                    path: '/creditFrantingStandards',
                    component: resolve => require(['../components/page/bankQuota/creditFrantingStandards.vue'], resolve),
                    meta: { title: '对手授信设定' }
                },
                {
                    path: '/credititemBank',
                    component: resolve => require(['../components/page/bankQuota/credititemBank.vue'], resolve),
                    meta: { title: '授信题库' }
                },
                {
                    path: '/evaluateList',
                    component: resolve => require(['../components/page/creditRating/evaluateList.vue'], resolve),
                    meta: { title: '对手评定列表' }
                },
                {
                    path: '/evaluateLevel',
                    component: resolve => require(['../components/page/creditRating/evaluateLevel.vue'], resolve),
                    meta: { title: '对手授信评级' }
                },
                {
                    path: '/evaluateLevelAppro',
                    component: resolve => require(['../components/page/creditRating/evaluateLevelAppro.vue'], resolve),
                    meta: { title: '对手授信评级审批' }
                },
                {
                    path: '/BF-inquiry',
                    component: resolve => require(['../components/page/bankFinancing/BF-inquiry.vue'], resolve),
                    meta: { title: '询价管理' }
                },
                {
                    path: '/BF-addInquiry',
                    component: resolve => require(['../components/page/bankFinancing/BF-inquiryWin/add.vue'], resolve),
                    meta: { title: '发起询价' }
                },
                {
                    path: '/BF-editInquiry',
                    component: resolve => require(['../components/page/bankFinancing/BF-inquiryWin/edit.vue'], resolve),
                    meta: { title: '发起询价' }
                },
                {
                    path: '/BF-businessPlanManag',
                    component: resolve => require(['../components/page/bankFinancing/BF-businessPlanManag.vue'], resolve),
                    meta: { title: '业务方案管理' }
                },{
                    path: '/BF-addBusinessPlanManag',
                    component: resolve => require(['../components/page/bankFinancing/BF-businessPlanManagWin/addList.vue'], resolve),
                    meta: { title: '业务方案制定' }
                },{
                    path: '/BF-businessPlanApproval',
                    component: resolve => require(['../components/page/bankFinancing/BF-businessPlanApproval.vue'], resolve),
                    meta: { title: '业务方案审批' }
                },{
                    path: '/BF-businessOperation',
                    component: resolve => require(['../components/page/bankFinancing/BF-businessOperation.vue'], resolve),
                    meta: { title: '业务操作' }
                },{
                    path: '/BF-businessOperationApproval',
                    component: resolve => require(['../components/page/bankFinancing/BF-businessOperationApproval'], resolve),
                    meta: { title: '业务操作审批' }
                },{
                    path: '/BF-businessOperationAccount',
                    component: resolve => require(['../components/page/bankFinancing/BF-businessOperationAccount'], resolve),
                    meta: { title: '台账存量业务统计' }
                },{
                    path: '/BF-accountManag',
                    component: resolve => require(['../components/page/bankFinancing/BF-accountManag'], resolve),
                    meta: { title: '台账详单' }
                },{
                    path: '/BF-accountApproval',
                    component: resolve => require(['../components/page/bankFinancing/BF-accountApproval'], resolve),
                    meta: { title: '台账审批' }
                },
                {
                    path: '/ID-businessPlanManag',
                    component: resolve => require(['../components/page/interbankDeposit/ID-businessPlanManag.vue'], resolve),
                    meta: { title: '业务方案管理' }
                },{
                    path: '/ID-addBusinessPlanManag',
                    component: resolve => require(['../components/page/interbankDeposit/ID-businessPlanManagWin/addList.vue'], resolve),
                    meta: { title: '业务方案制定' }
                },{
                    path: '/ID-businessPlanApproval',
                    component: resolve => require(['../components/page/interbankDeposit/ID-businessPlanApproval.vue'], resolve),
                    meta: { title: '业务方案审批' }
                },{
                    path: '/ID-businessOperation',
                    component: resolve => require(['../components/page/interbankDeposit/ID-businessOperation.vue'], resolve),
                    meta: { title: '业务操作' }
                },{
                    path: '/ID-businessOperationApproval',
                    component: resolve => require(['../components/page/interbankDeposit/ID-businessOperationApproval'], resolve),
                    meta: { title: '业务操作审批' }
                },{
                    path: '/ID-timeDeposit',
                    component: resolve => require(['../components/page/interbankDeposit/ID-timeDeposit'], resolve),
                    meta: { title: '定期存款台账详单' }
                },{
                    path: '/ID-interbankRegular',
                    component: resolve => require(['../components/page/interbankDeposit/ID-interbankRegular'], resolve),
                    meta: { title: '同业定期收入贡献' }
                },{
                    path: '/ID-accountApproval',
                    component: resolve => require(['../components/page/interbankDeposit/ID-accountApproval'], resolve),
                    meta: { title: '台账审批' }
                },{
                    path: '/FI-inquiry',
                    component: resolve => require(['../components/page/fundInvestment/FI-inquiry.vue'], resolve),
                    meta: { title: '询价管理' }
                },
                {
                    path: '/FI-addInquiry',
                    component: resolve => require(['../components/page/fundInvestment/FI-inquiryWin/add.vue'], resolve),
                    meta: { title: '发起询价' }
                },
                {
                    path: '/FI-editInquiry',
                    component: resolve => require(['../components/page/fundInvestment/FI-inquiryWin/edit.vue'], resolve),
                    meta: { title: '发起询价' }
                },
                {
                    path: '/FI-businessPlanManag',
                    component: resolve => require(['../components/page/fundInvestment/FI-businessPlanManag.vue'], resolve),
                    meta: { title: '业务方案管理' }
                },{
                    path: '/FI-addBusinessPlanManag',
                    component: resolve => require(['../components/page/fundInvestment/FI-businessPlanManagWin/addList.vue'], resolve),
                    meta: { title: '业务方案制定' }
                },{
                    path: '/FI-businessPlanApproval',
                    component: resolve => require(['../components/page/fundInvestment/FI-businessPlanApproval.vue'], resolve),
                    meta: { title: '业务方案审批' }
                },{
                    path: '/FI-businessOperation',
                    component: resolve => require(['../components/page/fundInvestment/FI-businessOperation.vue'], resolve),
                    meta: { title: '业务操作' }
                },{
                    path: '/FI-businessOperationApproval',
                    component: resolve => require(['../components/page/fundInvestment/FI-businessOperationApproval'], resolve),
                    meta: { title: '业务操作审批' }
                },{
                    path: '/FI-businessOperationAccount',
                    component: resolve => require(['../components/page/fundInvestment/FI-businessOperationAccount'], resolve),
                    meta: { title: '台账存量业务统计' }
                },{
                    path: '/FI-accountManag',
                    component: resolve => require(['../components/page/fundInvestment/FI-accountManag'], resolve),
                    meta: { title: '台账详单' }
                },{
                    path: '/FI-accountApproval',
                    component: resolve => require(['../components/page/fundInvestment/FI-accountApproval'], resolve),
                    meta: { title: '台账审批' }
                },{
                    path: '/IL-inquiry',
                    component: resolve => require(['../components/page/interbankLending/IL-inquiry.vue'], resolve),
                    meta: { title: '询价管理' }
                },
                {
                    path: '/IL-addInquiry',
                    component: resolve => require(['../components/page/interbankLending/IL-inquiryWin/add.vue'], resolve),
                    meta: { title: '发起询价' }
                },
                {
                    path: '/IL-editInquiry',
                    component: resolve => require(['../components/page/interbankLending/IL-inquiryWin/edit.vue'], resolve),
                    meta: { title: '发起询价' }
                },
                {
                    path: '/IL-businessPlanManag',
                    component: resolve => require(['../components/page/interbankLending/IL-businessPlanManag.vue'], resolve),
                    meta: { title: '业务方案管理' }
                },{
                    path: '/IL-addBusinessPlanManag',
                    component: resolve => require(['../components/page/interbankLending/IL-businessPlanManagWin/addList.vue'], resolve),
                    meta: { title: '业务方案制定' }
                },{
                    path: '/IL-businessPlanApproval',
                    component: resolve => require(['../components/page/interbankLending/IL-businessPlanApproval.vue'], resolve),
                    meta: { title: '业务方案审批' }
                },{
                    path: '/IL-businessOperation',
                    component: resolve => require(['../components/page/interbankLending/IL-businessOperation.vue'], resolve),
                    meta: { title: '业务操作' }
                },{
                    path: '/IL-businessOperationApproval',
                    component: resolve => require(['../components/page/interbankLending/IL-businessOperationApproval'], resolve),
                    meta: { title: '业务操作审批' }
                },{
                    path: '/IL-accountManag',
                    component: resolve => require(['../components/page/interbankLending/IL-accountManag'], resolve),
                    meta: { title: '台账详单' }
                },{
                    path: '/IL-accountApproval',
                    component: resolve => require(['../components/page/interbankLending/IL-accountApproval'], resolve),
                    meta: { title: '台账审批' }
                },{
                    path: '/PRR-inquiry',
                    component: resolve => require(['../components/page/pledgeReverseRepurchase/PRR-inquiry.vue'], resolve),
                    meta: { title: '询价管理' }
                },
                {
                    path: '/PRR-addInquiry',
                    component: resolve => require(['../components/page/pledgeReverseRepurchase/PRR-inquiryWin/add.vue'], resolve),
                    meta: { title: '发起询价' }
                },
                {
                    path: '/PRR-editInquiry',
                    component: resolve => require(['../components/page/pledgeReverseRepurchase/PRR-inquiryWin/edit.vue'], resolve),
                    meta: { title: '发起询价' }
                },
                {
                    path: '/PRR-businessPlanManag',
                    component: resolve => require(['../components/page/pledgeReverseRepurchase/PRR-businessPlanManag.vue'], resolve),
                    meta: { title: '业务方案管理' }
                },{
                    path: '/PRR-addBusinessPlanManag',
                    component: resolve => require(['../components/page/pledgeReverseRepurchase/PRR-businessPlanManagWin/addList.vue'], resolve),
                    meta: { title: '业务方案制定' }
                },{
                    path: '/PRR-businessPlanApproval',
                    component: resolve => require(['../components/page/pledgeReverseRepurchase/PRR-businessPlanApproval.vue'], resolve),
                    meta: { title: '业务方案审批' }
                },{
                    path: '/PRR-businessOperation',
                    component: resolve => require(['../components/page/pledgeReverseRepurchase/PRR-businessOperation.vue'], resolve),
                    meta: { title: '业务操作' }
                },{
                    path: '/PRR-businessOperationApproval',
                    component: resolve => require(['../components/page/pledgeReverseRepurchase/PRR-businessOperationApproval'], resolve),
                    meta: { title: '业务操作审批' }
                },{
                    path: '/PRR-accountManag',
                    component: resolve => require(['../components/page/pledgeReverseRepurchase/PRR-accountManag'], resolve),
                    meta: { title: '台账详单' }
                },{
                    path: '/PRR-accountApproval',
                    component: resolve => require(['../components/page/pledgeReverseRepurchase/PRR-accountApproval'], resolve),
                    meta: { title: '台账审批' }
                },{
                    path: '/BB-inquiry',
                    component: resolve => require(['../components/page/bondBusiness/BB-inquiry.vue'], resolve),
                    meta: { title: '询价管理' }
                },
                {
                    path: '/BB-addInquiry',
                    component: resolve => require(['../components/page/bondBusiness/BB-inquiryWin/add.vue'], resolve),
                    meta: { title: '发起询价' }
                },
                {
                    path: '/BB-editInquiry',
                    component: resolve => require(['../components/page/bondBusiness/BB-inquiryWin/edit.vue'], resolve),
                    meta: { title: '发起询价' }
                },
                {
                    path: '/BB-businessPlanManag',
                    component: resolve => require(['../components/page/bondBusiness/BB-businessPlanManag.vue'], resolve),
                    meta: { title: '业务方案管理' }
                },{
                    path: '/BB-addBusinessPlanManag',
                    component: resolve => require(['../components/page/bondBusiness/BB-businessPlanManagWin/addList.vue'], resolve),
                    meta: { title: '业务方案制定' }
                },{
                    path: '/BB-businessPlanApproval',
                    component: resolve => require(['../components/page/bondBusiness/BB-businessPlanApproval.vue'], resolve),
                    meta: { title: '业务方案审批' }
                },{
                    path: '/BB-businessOperation',
                    component: resolve => require(['../components/page/bondBusiness/BB-businessOperation.vue'], resolve),
                    meta: { title: '业务操作' }
                },{
                    path: '/BB-businessOperationApproval',
                    component: resolve => require(['../components/page/bondBusiness/BB-businessOperationApproval'], resolve),
                    meta: { title: '业务操作审批' }
                },{
                    path: '/BB-accountManag',
                    component: resolve => require(['../components/page/bondBusiness/BB-accountManag'], resolve),
                    meta: { title: '台账详单' }
                },{
                    path: '/BB-accountApproval',
                    component: resolve => require(['../components/page/bondBusiness/BB-accountApproval'], resolve),
                    meta: { title: '台账审批' }
                },{
                    path: '/COD-inquiry',
                    component: resolve => require(['../components/page/certificatesOfDeposit/COD-inquiry.vue'], resolve),
                    meta: { title: '询价管理' }
                },
                {
                    path: '/COD-addInquiry',
                    component: resolve => require(['../components/page/certificatesOfDeposit/COD-inquiryWin/add.vue'], resolve),
                    meta: { title: '发起询价' }
                },
                {
                    path: '/COD-editInquiry',
                    component: resolve => require(['../components/page/certificatesOfDeposit/COD-inquiryWin/edit.vue'], resolve),
                    meta: { title: '发起询价' }
                },
                {
                    path: '/COD-businessPlanManag',
                    component: resolve => require(['../components/page/certificatesOfDeposit/COD-businessPlanManag.vue'], resolve),
                    meta: { title: '业务方案管理' }
                },{
                    path: '/COD-addBusinessPlanManag',
                    component: resolve => require(['../components/page/certificatesOfDeposit/COD-businessPlanManagWin/addList.vue'], resolve),
                    meta: { title: '业务方案制定' }
                },{
                    path: '/COD-businessPlanApproval',
                    component: resolve => require(['../components/page/certificatesOfDeposit/COD-businessPlanApproval.vue'], resolve),
                    meta: { title: '业务方案审批' }
                },{
                    path: '/COD-businessOperation',
                    component: resolve => require(['../components/page/certificatesOfDeposit/COD-businessOperation.vue'], resolve),
                    meta: { title: '业务操作' }
                },{
                    path: '/COD-businessOperationApproval',
                    component: resolve => require(['../components/page/certificatesOfDeposit/COD-businessOperationApproval'], resolve),
                    meta: { title: '业务操作审批' }
                },{
                    path: '/COD-accountManag',
                    component: resolve => require(['../components/page/certificatesOfDeposit/COD-accountManag'], resolve),
                    meta: { title: '台账详单' }
                },{
                    path: '/COD-accountApproval',
                    component: resolve => require(['../components/page/certificatesOfDeposit/COD-accountApproval'], resolve),
                    meta: { title: '台账审批' }
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
