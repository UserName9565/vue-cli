//1-10为一级    10到100为二级   100+为三级
export default [
    {icon: '&#xe645;',url: 'leave',name: '请假',id:'AB000',parentId:"A0000"},
    {icon: '',url: 'initiateLeave',name: '请假发起',id:'AB001',parentId:"AB000"},
    {icon: '',url: 'approvalLeave1',name: '请假审批111',id:'AB002',parentId:"AB000"},

    {icon: '&#xe645;',url: 'menus',name: '菜单管理',id:'AC000',parentId:"A0000"},
    {icon: '',url: 'menusmanag',name: '菜单管理',id:'AC001',parentId:"AC000"},

    {icon: '&#xe645;',url: 'resource',name: '资源管理',id:'AD000',parentId:"A0000"},
    {icon: '',url: 'resourceManag',name: '资源管理',id:'AD001',parentId:"AD000"},
    // {icon: '',url: 'approvalLeave2',name: '请假审批222',id:'AB003',parentId:"AB000"},
    // {icon: 'el-icon-lx-settings',url: 'systemManage',name: '系统管理',id:'A0000',parentId:"0"},
    {icon: '&#xe619;',url: 'user',name: '用户管理',id:'A1000',parentId:"A0000"},
    {icon: '',url: 'userManag',name: '用户管理',id:'A1001',parentId:"A1000"},
    {icon: '',url: 'userAudit',name: '用户审核',id:'A1002',parentId:"A1000"},

    {icon: '&#xe637;',url: 'organization',name: '组织结构',id:'A2000',parentId:"A0000"},
    {icon: '',url: 'organization',name: '组织结构管理',id:'A2001',parentId:"A2000"},

    {icon: '&#xe602;',url: 'role',name: '角色管理',id:'A3000',parentId:"A0000"},
    {icon: '',url: 'roleManag',name: '角色管理',id:'A3001',parentId:"A3000"},
    {icon: '',url: 'roleAudit',name: '角色审核',id:'A3002',parentId:"A3000"},

    {icon: '&#xe601;',url: 'processManag',name: '审批流程管理',id:'A4000',parentId:"A0000"},
    {icon: '',url: 'workflowdef',name: '流程模型',id:'A4001',parentId:"A4000"},
    {icon: '',url: 'processinst',name: '流程列表',id:'A4002',parentId:"A4000"},
    {icon: '',url: 'formManag',name: '表单管理',id:'A4006',parentId:"A4000"},
    {icon: '',url: 'runningProcess',name: '正在运行中流程',id:'A4005',parentId:"A4000"},
    {icon: '',url: 'completedList',name: '已办列表',id:'A4003',parentId:"A4000"},
    {icon: '',url: 'To-doList',name: '待办列表',id:'A4004',parentId:"A4000"},

    {icon: '&#xe60f;',url: 'basicDataManag',name: '基础数据管理',id:'A5000',parentId:"A0000"},
    {icon: '',url: 'dataDictionary',name: '数据字典',id:'A5001',parentId:"A5000"},
    {icon: '',url: 'financialData',name: '金融数据',id:'A5002',parentId:"A5000"},

    {icon: '&#xe625;',url: 'capitalAccoutManag',name: '资金账户管理',id:'A6000',parentId:"A0000"},
    {icon: '',url: 'capitalAccount',name: '活期类账户',id:'A6001',parentId:"A6000"},
    // {icon: '',url: 'principalManag',name: '委托方框架协议',id:'A6002',parentId:"A6000"},
    {icon: '',url: 'fundAccount',name: '委托方资金账户',id:'A6003',parentId:"A6000"},
    // {icon: '',url: 'frameworkAgreement',name: '框架协议编号审批',id:'A6004',parentId:"A6000"},
    
    {icon: '&#xe618;',url: 'bankManag',name: '交易对手管理',id:'A7000',parentId:"A0000"},
    {icon: '',url: 'bankList',name: '交易对手列表',id:'A7001',parentId:"A7000"},
    {icon: '',url: 'contactsManag',name: '联络人管理',id:'A7002',parentId:"A7000"},

    {icon: '&#xe610;',url: 'log',name: '日志管理',id:'A8000',parentId:"A0000"},
    {icon: '',url: 'logManag',name: '日志管理',id:'A8001',parentId:"A8000"},

    {icon: '&#xe6a1;',url: 'personalSettings',name: '个人设置',id:'A9000',parentId:"A0000"},
    {icon: '',url: 'personalImfor',name: '个人信息',id:'A9001',parentId:"A9000"},
    {icon: '',url: 'setPassword',name: '修改密码',id:'A9002',parentId:"A9000"},

    {icon: '&#xe645;',url: 'systemErrorTip',name: '系统报错提醒',id:'AA000',parentId:"A0000"},
    {icon: '',url: 'systemErrorLog',name: '系统报错日志',id:'AA001',parentId:"AA000"},

    


    {icon: '&#xe61f;',url: 'quotaManag',name: '额度占用管理',id:'B1000',parentId:"B0000"},
    {icon: '',url: 'industryRegulation',name: '行业监管额度占用情况',id:'B1001',parentId:"B1000"},
    {icon: '',url: 'bankQuota',name: '交易对手额度占用情况',id:'B1002',parentId:"B1000"},
    // 规则列表
    
    {icon: '&#xe608;',url: 'interbankDeposit',name: '授信规则标准',id:'B2000',parentId:"B0000"},
    {icon: '',url: 'ruleList',name: '规则列表',id:'B2005',parentId:"B2000"},
    {icon: '',url: 'regulatoryStandards',name: '授信标准设定',id:'B2001',parentId:"B2000"},
    {icon: '',url: 'creditFrantingStandards',name: '对手授信设定',id:'B2003',parentId:"B2000"},
    {icon: '',url: 'credititemBank',name: '授信题库',id:'B2004',parentId:"B2000"},
    {icon: '',url: 'regulationApproval',name: '规则标准审批',id:'B2002',parentId:"B2000"},


    
    {icon: '&#xe654;',url: 'creditRating',name: '交易对手授信评定',id:'B3000',parentId:"B0000"},
    {icon: '',url: 'evaluateList',name: '对手评定列表',id:'B2004',parentId:"B3000"},
    {icon: '',url: 'evaluateLevel',name: '对手授信评级',id:'B2004',parentId:"B3000"},
    {icon: '',url: 'evaluateLevelAppro',name: '对手授信评级审批',id:'B2004',parentId:"B3000"},
     
    {icon: '&#xe623;',url: 'bankFinancing',name: '银行理财',id:'C1000',parentId:"C0000"},
    //{icon: '',url: 'BF-inquiry',name: '询价管理',id:'C1001',parentId:"C1000"},
    {icon: '',url: 'BF-businessPlanManag',name: '业务方案管理',id:'C1002',parentId:"C1000"},
    {icon: '',url: 'BF-businessPlanApproval',name: '业务方案审批',id:'C1003',parentId:"C1000"},
    {icon: '',url: 'BF-businessOperation',name: '业务操作',id:'C1004',parentId:"C1000"},
    {icon: '',url: 'BF-businessOperationApproval',name: '业务操作审批',id:'C1005',parentId:"C1000"},
    {icon: '',url: 'BF-businessOperationAccount',name: '台账存量业务统计',id:'C1008',parentId:"C1000"},
    {icon: '',url: 'BF-accountManag',name: '台账详单',id:'C1006',parentId:"C1000"},
    {icon: '',url: 'BF-accountApproval',name: '台账操作审批',id:'C1007',parentId:"C1000"},

    {icon: '&#xe60c;',url: 'interbankDeposit',name: '同业存款',id:'C2000',parentId:"C0000"},
    {icon: '',url: 'ID-businessPlanManag',name: '业务方案管理',id:'C2002',parentId:"C2000"},
    {icon: '',url: 'ID-businessPlanApproval',name: '业务方案审批',id:'C2003',parentId:"C2000"},
    {icon: '',url: 'ID-businessOperation',name: '业务操作',id:'C2004',parentId:"C2000"},
    {icon: '',url: 'ID-businessOperationApproval',name: '业务操作审批',id:'C2005',parentId:"C2000"},
    {icon: '',url: 'ID-timeDeposit',name: '定期存款台账详单',id:'C2008',parentId:"C2000"},
    {icon: '',url: 'ID-accountApproval',name: '台账操作审批',id:'C2007',parentId:"C2000"},
    {icon: '',url: 'ID-interbankRegular',name: '同业定期收入贡献',id:'C2006',parentId:"C2000"},

    {icon: '&#xe661;',url: 'fundInvestment',name: '基金投资',id:'C3000',parentId:"C0000"},
   // {icon: '',url: 'FI-inquiry',name: '询价管理',id:'C3001',parentId:"C3000"},
    {icon: '',url: 'FI-businessPlanManag',name: '业务方案管理',id:'C3002',parentId:"C3000"},
    {icon: '',url: 'FI-businessPlanApproval',name: '业务方案审批',id:'C3003',parentId:"C3000"},
    {icon: '',url: 'FI-businessOperation',name: '业务操作',id:'C3004',parentId:"C3000"},
    {icon: '',url: 'FI-businessOperationApproval',name: '业务操作审批',id:'C3005',parentId:"C3000"},
    {icon: '',url: 'FI-businessOperationAccount',name: '台账存量业务统计',id:'C3008',parentId:"C3000"},
    {icon: '',url: 'FI-accountManag',name: '台账详单',id:'C3006',parentId:"C3000"},
    {icon: '',url: 'FI-accountApproval',name: '台账操作审批',id:'C3007',parentId:"C3000"},

    {icon: '&#xe6e4;',url: 'interbankLending ',name: '同业拆借',id:'C4000',parentId:"C0000"},
    //{icon: '',url: 'IL-inquiry',name: '询价管理',id:'C4001',parentId:"C4000"},
    {icon: '',url: 'IL-businessPlanManag',name: '业务方案管理',id:'C4002',parentId:"C4000"},
    {icon: '',url: 'IL-businessPlanApproval',name: '业务方案审批',id:'C4003',parentId:"C4000"},
    {icon: '',url: 'IL-businessOperation',name: '业务操作',id:'C4004',parentId:"C4000"},
    {icon: '',url: 'IL-businessOperationApproval',name: '业务操作审批',id:'C4005',parentId:"C4000"},
    {icon: '',url: 'IL-accountManag',name: '台账详单',id:'C4006',parentId:"C4000"},
    {icon: '',url: 'IL-accountApproval',name: '台账操作审批',id:'C4007',parentId:"C4000"},

    {icon: '&#xe6ae;',url: 'pledgeReverseRepurchase',name: '质押式回购',id:'C5000',parentId:"C0000"},
    //{icon: '',url: 'PRR-inquiry',name: '询价管理',id:'C5001',parentId:"C5000"},
    {icon: '',url: 'PRR-businessPlanManag',name: '业务方案管理',id:'C5002',parentId:"C5000"},
    {icon: '',url: 'PRR-businessPlanApproval',name: '业务方案审批',id:'C5003',parentId:"C5000"},
    {icon: '',url: 'PRR-businessOperation',name: '业务操作',id:'C5004',parentId:"C5000"},
    {icon: '',url: 'PRR-businessOperationApproval',name: '业务操作审批',id:'C5005',parentId:"C5000"},
    {icon: '',url: 'PRR-accountManag',name: '台账详单',id:'C5006',parentId:"C5000"},
    {icon: '',url: 'PRR-accountApproval',name: '台账操作审批',id:'C5007',parentId:"C5000"},

    {icon: '&#xe655;',url: 'bondBusiness',name: '债券业务',id:'C6000',parentId:"C0000"},
    //{icon: '',url: 'BB-inquiry',name: '询价管理',id:'C6001',parentId:"C6000"},
    {icon: '',url: 'BB-businessPlanManag',name: '业务方案管理',id:'C6002',parentId:"C6000"},
    {icon: '',url: 'BB-businessPlanApproval',name: '业务方案审批',id:'C6003',parentId:"C6000"},
    {icon: '',url: 'BB-businessOperation',name: '业务操作',id:'C6004',parentId:"C6000"},
    {icon: '',url: 'BB-businessOperationApproval',name: '业务操作审批',id:'C6005',parentId:"C6000"},
    {icon: '',url: 'BB-accountManag',name: '台账详单',id:'C6006',parentId:"C6000"},
    {icon: '',url: 'BB-accountApproval',name: '台账操作审批',id:'C6007',parentId:"C6000"},

    {icon: '&#xe616;',url: 'certificatesOfDeposit',name: '同业存单',id:'C7000',parentId:"C0000"},
   // {icon: '',url: 'COD-inquiry',name: '询价管理',id:'C7001',parentId:"C7000"},
    {icon: '',url: 'COD-businessPlanManag',name: '业务方案管理',id:'C7002',parentId:"C7000"},
    {icon: '',url: 'COD-businessPlanApproval',name: '业务方案审批',id:'C7003',parentId:"C7000"},
    {icon: '',url: 'COD-businessOperation',name: '业务操作',id:'C7004',parentId:"C7000"},
    {icon: '',url: 'COD-businessOperationApproval',name: '业务操作审批',id:'C7005',parentId:"C7000"},
    {icon: '',url: 'COD-businessOperationAccount',name: '台账存量业务统计',id:'C7006',parentId:"C7000"},
    {icon: '',url: 'COD-accountManag',name: '台账详单',id:'C7007',parentId:"C7000"},
    {icon: '',url: 'COD-accountApproval',name: '台账操作审批',id:'C7008',parentId:"C7000"},

    {icon: '&#xe612;',url: 'entrustedInvestment',name: '委托投资业务',id:'D1000',parentId:"D0000"},
    
    {icon: '',url: 'EI-frameworkAgreement',name: '委托方框架协议',id:'D1011',parentId:"D1000"},
    {icon: '',url: 'EI-frameworkAgreementApproval',name: '框架协议审批',id:'D1012',parentId:"D1000"},

    {icon: '',url: 'EI-businessPlanManag',name: '业务方案管理',id:'D1002',parentId:"D1000"},
    {icon: '',url: 'EI-businessPlanApproval',name: '业务方案审批',id:'D1003',
    parentId:"D1000"},
    {icon: '',url: 'EI-protocolNumber',name: '委投协议编号',id:'D1001',parentId:"D1000"},
    {icon: '',url: 'EI-protocolNumberApproval',name: '协议编号审批',id:'D1013',parentId:"D1000"},

    {icon: '',url: 'EI-businessOperation',name: '业务操作',id:'D1004',parentId:"D1000"},
    {icon: '',url: 'EI-businessOperationApproval',name: '业务操作审批',id:'D1005',parentId:"D1000"},
    {icon: '',url: 'EI-fundSplitAccount',name: '到期资金分账',id:'D1009',parentId:"D1000"},
    {icon: '',url: 'EI-splittingOperation',name: '分账操作审批',id:'D1010',parentId:"D1000"},

    {icon: '',url: 'EI-interestSupplement',name: '投资补息业务',id:'D1014',parentId:"D1000"},
    {icon: '',url: 'EI-interestAtMaturity',name: '到期补息业务',id:'D1015',parentId:"D1000"},
    {icon: '',url: 'EI-interestSupplementApproval',name: '补息操作审批',id:'D1016',parentId:"D1000"},

    {icon: '',url: 'EI-accountManag',name: '台账详单',id:'D1006',parentId:"D1000"},
    {icon: '',url: 'EI-accountApproval',name: '台账操作审批',id:'D1007',parentId:"D1000"},
   
    
    
    {icon: '',url: 'EI-principalReport',name: '委托方报告',id:'D1008',parentId:"D1000"},

    {icon: '&#xe612;',url: 'financeCompany',name: '财务公司',id:'F1000',parentId:"F0000"},
    // {icon: '',url: 'FC-bankFinancing',name: '银行理财',id:'F1001',parentId:"F1000"},
     
    {icon: '',url: 'BF-inquiry',name: '银行理财',id:'F1001',parentId:"F1000"},

    // {icon: '',url: 'FC-interbankDeposit',name: '同业存款',id:'F1002',parentId:"F1000"},
    {icon: '',url: 'ID-inquiry',name: '同业存款',id:'F1002',parentId:"F1000"},

    

    {icon: '&#xe612;',url: 'I-entrustedInvestment',name: '委托投资',id:'F2000',parentId:"F0000"},
    // {icon: '',url: 'EI-interbankDeposit',name: '银行理财',id:'F2001',parentId:"F2000"},
    {icon: '',url: 'EI-inquiry',name: '银行理财',id:'F2001',parentId:"F2000"},


    {icon: '',url: 'loanEnterList',name: '流程申请',id:'074',parentId:"A0000"},
    {icon: '',url: 'loanAuditTaskList',name: '流程审核',id:'075',parentId:"A0000"},
    {icon: 'el-icon-lx-share',url: 'workFlow',name: '综合流程',id:'008',parentId:"0"},
    {icon: '',url: 'workFlowLeaf1',name: '任务列表',id:'080',parentId:"008"},

  
    
    
    
]