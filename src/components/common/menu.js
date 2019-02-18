//1-10为一级    10到100为二级   100+为三级
export default [
    // {icon: 'el-icon-lx-settings',index: 'systemManage',title: '系统管理',id:'A0000',pid:"0"},
    {icon: 'el-icon-lx-home',index: 'user',title: '用户管理',id:'A1000',pid:"A0000"},
    {icon: 'el-icon-lx-home',index: 'userManag',title: '用户管理',id:'A1001',pid:"A1000"},
    {icon: 'el-icon-lx-home',index: 'userAudit',title: '用户审核',id:'A1002',pid:"A1000"},

    {icon: 'el-icon-lx-home',index: 'organization',title: '组织结构',id:'A2000',pid:"A0000"},
    {icon: 'el-icon-lx-home',index: 'organization',title: '组织结构管理',id:'A2001',pid:"A2000"},

    {icon: 'el-icon-lx-home',index: 'role',title: '角色管理',id:'A3000',pid:"A0000"},
    {icon: 'el-icon-lx-home',index: 'roleManag',title: '角色管理',id:'A3001',pid:"A3000"},
    {icon: 'el-icon-lx-home',index: 'roleAudit',title: '角色审核',id:'A3002',pid:"A3000"},

    {icon: 'el-icon-lx-home',index: 'processManag',title: '审批流程管理',id:'A4000',pid:"A0000"},
    {icon: 'el-icon-lx-home',index: 'workflowdef',title: '流程模型',id:'A4001',pid:"A4000"},
    {icon: 'el-icon-lx-home',index: 'processinst',title: '流程列表',id:'A4002',pid:"A4000"},
    {icon: 'el-icon-lx-home',index: 'formManag',title: '表单管理',id:'A4006',pid:"A4000"},
    {icon: 'el-icon-lx-home',index: 'runningProcess',title: '正在运行中流程',id:'A4005',pid:"A4000"},
    {icon: 'el-icon-lx-home',index: 'completedList',title: '已办列表',id:'A4003',pid:"A4000"},
    {icon: 'el-icon-lx-home',index: 'To-doList',title: '待办列表',id:'A4004',pid:"A4000"},

    {icon: 'el-icon-lx-home',index: 'basicDataManag',title: '基础数据管理',id:'A5000',pid:"A0000"},
    {icon: 'el-icon-lx-home',index: 'dataDictionary',title: '数据字典',id:'A5001',pid:"A5000"},
    {icon: 'el-icon-lx-home',index: 'financialData',title: '金融数据',id:'A5002',pid:"A5000"},

    {icon: 'el-icon-lx-home',index: 'capitalAccoutManag',title: '资金账户管理',id:'A6000',pid:"A0000"},
    {icon: 'el-icon-lx-home',index: 'dataDictionary',title: '工行资金账户',id:'A6001',pid:"A6000"},
    {icon: 'el-icon-lx-home',index: 'principalManag',title: '委托方管理',id:'A6002',pid:"A6000"},

    {icon: 'el-icon-lx-home',index: 'bankManag',title: '交易对手管理',id:'A7000',pid:"A0000"},
    {icon: 'el-icon-lx-home',index: 'bankList',title: '交易对手列表',id:'A7001',pid:"A7000"},
    {icon: 'el-icon-lx-home',index: 'contactsManag',title: '联络人管理',id:'A7002',pid:"A7000"},

    {icon: 'el-icon-lx-home',index: 'log',title: '日志管理',id:'A8000',pid:"A0000"},
    {icon: 'el-icon-lx-home',index: 'logManag',title: '日志管理',id:'A8001',pid:"A8000"},

    {icon: 'el-icon-lx-home',index: 'personalSettings',title: '个人设置',id:'A9000',pid:"A0000"},
    {icon: 'el-icon-lx-home',index: 'personalImfor',title: '个人信息',id:'A9001',pid:"A9000"},

    {icon: 'el-icon-lx-home',index: 'systemErrorTip',title: '系统报错提醒',id:'AA000',pid:"A0000"},
    {icon: 'el-icon-lx-home',index: 'systemErrorLog',title: '系统报错日志',id:'AA001',pid:"AA000"},

    {icon: 'el-icon-lx-home',index: 'quotaManag',title: '额度管理',id:'B1000',pid:"B0000"},
    {icon: 'el-icon-lx-home',index: 'industryRegulation',title: '行业监管额度占用情况',id:'B1001',pid:"B1000"},
    {icon: 'el-icon-lx-home',index: 'bankQuota',title: '交易对手额度占用情况',id:'B1002',pid:"B1000"},

    {icon: 'el-icon-lx-home',index: 'interbankDeposit',title: '同业存款',id:'B2000',pid:"B0000"},
    {icon: 'el-icon-lx-home',index: 'regulatoryStandards',title: '行业监管标准评定',id:'B2001',pid:"B2000"},
    {icon: 'el-icon-lx-home',index: 'regulationApproval',title: '行业监管评定审批',id:'B2002',pid:"B2000"},
    {icon: 'el-icon-lx-home',index: 'creditFrantingStandards',title: '交易对手授信标准评定',id:'B2003',pid:"B2000"},
    {icon: 'el-icon-lx-home',index: 'credititemBank',title: '授信题库',id:'B2004',pid:"B2000"},
    {icon: 'el-icon-lx-home',index: 'creditRating',title: '交易对手授信评定',id:'B2005',pid:"B2000"},

    {icon: 'el-icon-lx-home',index: 'bankFinancing',title: '银行理财',id:'C1000',pid:"C0000"},
    {icon: 'el-icon-lx-home',index: 'BF-inquiry',title: '询价管理',id:'C1001',pid:"C1000"},
    {icon: 'el-icon-lx-home',index: 'BF-businessPlanManag',title: '业务方案管理',id:'C1002',pid:"C1000"},
    {icon: 'el-icon-lx-home',index: 'BF-businessPlanApproval',title: '业务方案审批',id:'C1003',pid:"C1000"},
    {icon: 'el-icon-lx-home',index: 'BF-businessOperation',title: '业务操作',id:'C1004',pid:"C1000"},
    {icon: 'el-icon-lx-home',index: 'BF-businessOperationApproval',title: '业务操作审批',id:'C1005',pid:"C1000"},
    {icon: 'el-icon-lx-home',index: 'BF-accountManag',title: '台账管理',id:'C1006',pid:"C1000"},
    {icon: 'el-icon-lx-home',index: 'BF-accountApproval',title: '台账审批',id:'C1007',pid:"C1000"},




    {icon: 'el-icon-lx-home',index: 'loanEnterList',title: '流程申请',id:'074',pid:"A0000"},

    {icon: 'el-icon-lx-home',index: 'loanAuditTaskList',title: '流程审核',id:'075',pid:"A0000"},

    {icon: 'el-icon-lx-share',index: 'workFlow',title: '综合流程',id:'008',pid:"0"},
    {icon: 'el-icon-lx-home',index: 'workFlowLeaf1',title: '任务列表',id:'080',pid:"008"},

  
    
    
    
]