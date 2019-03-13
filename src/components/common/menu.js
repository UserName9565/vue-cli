//1-10为一级    10到100为二级   100+为三级
export default [
    {icon: '&#xe645;',index: 'leave',title: '请假',id:'AB000',pid:"A0000"},
    {icon: '',index: 'initiateLeave',title: '请假发起',id:'AB001',pid:"AB000"},
    {icon: '',index: 'approvalLeave1',title: '请假审批111',id:'AB002',pid:"AB000"},
    // {icon: '',index: 'approvalLeave2',title: '请假审批222',id:'AB003',pid:"AB000"},
    // {icon: 'el-icon-lx-settings',index: 'systemManage',title: '系统管理',id:'A0000',pid:"0"},
    {icon: '&#xe619;',index: 'user',title: '用户管理',id:'A1000',pid:"A0000"},
    {icon: '',index: 'userManag',title: '用户管理',id:'A1001',pid:"A1000"},
    {icon: '',index: 'userAudit',title: '用户审核',id:'A1002',pid:"A1000"},

    {icon: '&#xe637;',index: 'organization',title: '组织结构',id:'A2000',pid:"A0000"},
    {icon: '',index: 'organization',title: '组织结构管理',id:'A2001',pid:"A2000"},

    {icon: '&#xe602;',index: 'role',title: '角色管理',id:'A3000',pid:"A0000"},
    {icon: '',index: 'roleManag',title: '角色管理',id:'A3001',pid:"A3000"},
    {icon: '',index: 'roleAudit',title: '角色审核',id:'A3002',pid:"A3000"},

    {icon: '&#xe601;',index: 'processManag',title: '审批流程管理',id:'A4000',pid:"A0000"},
    {icon: '',index: 'workflowdef',title: '流程模型',id:'A4001',pid:"A4000"},
    {icon: '',index: 'processinst',title: '流程列表',id:'A4002',pid:"A4000"},
    {icon: '',index: 'formManag',title: '表单管理',id:'A4006',pid:"A4000"},
    {icon: '',index: 'runningProcess',title: '正在运行中流程',id:'A4005',pid:"A4000"},
    {icon: '',index: 'completedList',title: '已办列表',id:'A4003',pid:"A4000"},
    {icon: '',index: 'To-doList',title: '待办列表',id:'A4004',pid:"A4000"},

    {icon: '&#xe60f;',index: 'basicDataManag',title: '基础数据管理',id:'A5000',pid:"A0000"},
    {icon: '',index: 'dataDictionary',title: '数据字典',id:'A5001',pid:"A5000"},
    {icon: '',index: 'financialData',title: '金融数据',id:'A5002',pid:"A5000"},

    {icon: '&#xe625;',index: 'capitalAccoutManag',title: '资金账户管理',id:'A6000',pid:"A0000"},
    {icon: '',index: 'capitalAccount',title: '活期类账户',id:'A6001',pid:"A6000"},
    {icon: '',index: 'principalManag',title: '委托方框架协议',id:'A6002',pid:"A6000"},
    {icon: '',index: 'fundAccount',title: '委托方资金账户',id:'A6003',pid:"A6000"},
    {icon: '',index: 'frameworkAgreement',title: '框架协议编号审批',id:'A6004',pid:"A6000"},
    
    {icon: '&#xe618;',index: 'bankManag',title: '交易对手管理',id:'A7000',pid:"A0000"},
    {icon: '',index: 'bankList',title: '交易对手列表',id:'A7001',pid:"A7000"},
    {icon: '',index: 'contactsManag',title: '联络人管理',id:'A7002',pid:"A7000"},

    {icon: '&#xe610;',index: 'log',title: '日志管理',id:'A8000',pid:"A0000"},
    {icon: '',index: 'logManag',title: '日志管理',id:'A8001',pid:"A8000"},

    {icon: '&#xe6a1;',index: 'personalSettings',title: '个人设置',id:'A9000',pid:"A0000"},
    {icon: '',index: 'personalImfor',title: '个人信息',id:'A9001',pid:"A9000"},
    {icon: '',index: 'setPassword',title: '修改密码',id:'A9002',pid:"A9000"},

    {icon: '&#xe645;',index: 'systemErrorTip',title: '系统报错提醒',id:'AA000',pid:"A0000"},
    {icon: '',index: 'systemErrorLog',title: '系统报错日志',id:'AA001',pid:"AA000"},

    


    {icon: '&#xe61f;',index: 'quotaManag',title: '额度占用管理',id:'B1000',pid:"B0000"},
    {icon: '',index: 'industryRegulation',title: '行业监管额度占用情况',id:'B1001',pid:"B1000"},
    {icon: '',index: 'bankQuota',title: '交易对手额度占用情况',id:'B1002',pid:"B1000"},
    // 规则列表
    
    {icon: '&#xe608;',index: 'interbankDeposit',title: '授信规则标准',id:'B2000',pid:"B0000"},
    {icon: '',index: 'ruleList',title: '规则列表',id:'B2005',pid:"B2000"},
    {icon: '',index: 'regulatoryStandards',title: '授信标准设定',id:'B2001',pid:"B2000"},
    {icon: '',index: 'creditFrantingStandards',title: '对手授信设定',id:'B2003',pid:"B2000"},
    {icon: '',index: 'credititemBank',title: '授信题库',id:'B2004',pid:"B2000"},
    {icon: '',index: 'regulationApproval',title: '规则标准审批',id:'B2002',pid:"B2000"},


    
    {icon: '&#xe654;',index: 'creditRating',title: '交易对手授信评定',id:'B3000',pid:"B0000"},
    {icon: '',index: 'evaluateList',title: '对手评定列表',id:'B2004',pid:"B3000"},
    {icon: '',index: 'evaluateLevel',title: '对手授信评级',id:'B2004',pid:"B3000"},
    {icon: '',index: 'evaluateLevelAppro',title: '对手授信评级审批',id:'B2004',pid:"B3000"},
     
    {icon: '&#xe623;',index: 'bankFinancing',title: '银行理财',id:'C1000',pid:"C0000"},
    //{icon: '',index: 'BF-inquiry',title: '询价管理',id:'C1001',pid:"C1000"},
    {icon: '',index: 'BF-businessPlanManag',title: '业务方案管理',id:'C1002',pid:"C1000"},
    {icon: '',index: 'BF-businessPlanApproval',title: '业务方案审批',id:'C1003',pid:"C1000"},
    {icon: '',index: 'BF-businessOperation',title: '业务操作',id:'C1004',pid:"C1000"},
    {icon: '',index: 'BF-businessOperationApproval',title: '业务操作审批',id:'C1005',pid:"C1000"},
    {icon: '',index: 'BF-businessOperationAccount',title: '台账存量业务统计',id:'C1008',pid:"C1000"},
    {icon: '',index: 'BF-accountManag',title: '台账详单',id:'C1006',pid:"C1000"},
    {icon: '',index: 'BF-accountApproval',title: '台账操作审批',id:'C1007',pid:"C1000"},

    {icon: '&#xe60c;',index: 'interbankDeposit',title: '同业存款',id:'C2000',pid:"C0000"},
    {icon: '',index: 'ID-businessPlanManag',title: '业务方案管理',id:'C2002',pid:"C2000"},
    {icon: '',index: 'ID-businessPlanApproval',title: '业务方案审批',id:'C2003',pid:"C2000"},
    {icon: '',index: 'ID-businessOperation',title: '业务操作',id:'C2004',pid:"C2000"},
    {icon: '',index: 'ID-businessOperationApproval',title: '业务操作审批',id:'C2005',pid:"C2000"},
    {icon: '',index: 'ID-timeDeposit',title: '定期存款台账详单',id:'C2008',pid:"C2000"},
    {icon: '',index: 'ID-accountApproval',title: '台账操作审批',id:'C2007',pid:"C2000"},
    {icon: '',index: 'ID-interbankRegular',title: '同业定期收入贡献',id:'C2006',pid:"C2000"},

    {icon: '&#xe661;',index: 'fundInvestment',title: '基金投资',id:'C3000',pid:"C0000"},
   // {icon: '',index: 'FI-inquiry',title: '询价管理',id:'C3001',pid:"C3000"},
    {icon: '',index: 'FI-businessPlanManag',title: '业务方案管理',id:'C3002',pid:"C3000"},
    {icon: '',index: 'FI-businessPlanApproval',title: '业务方案审批',id:'C3003',pid:"C3000"},
    {icon: '',index: 'FI-businessOperation',title: '业务操作',id:'C3004',pid:"C3000"},
    {icon: '',index: 'FI-businessOperationApproval',title: '业务操作审批',id:'C3005',pid:"C3000"},
    {icon: '',index: 'FI-businessOperationAccount',title: '台账存量业务统计',id:'C3008',pid:"C3000"},
    {icon: '',index: 'FI-accountManag',title: '台账详单',id:'C3006',pid:"C3000"},
    {icon: '',index: 'FI-accountApproval',title: '台账操作审批',id:'C3007',pid:"C3000"},

    {icon: '&#xe6e4;',index: 'interbankLending ',title: '同业拆借(拆出)',id:'C4000',pid:"C0000"},
    //{icon: '',index: 'IL-inquiry',title: '询价管理',id:'C4001',pid:"C4000"},
    {icon: '',index: 'IL-businessPlanManag',title: '业务方案管理',id:'C4002',pid:"C4000"},
    {icon: '',index: 'IL-businessPlanApproval',title: '业务方案审批',id:'C4003',pid:"C4000"},
    {icon: '',index: 'IL-businessOperation',title: '业务操作',id:'C4004',pid:"C4000"},
    {icon: '',index: 'IL-businessOperationApproval',title: '业务操作审批',id:'C4005',pid:"C4000"},
    {icon: '',index: 'IL-accountManag',title: '台账详单',id:'C4006',pid:"C4000"},
    {icon: '',index: 'IL-accountApproval',title: '台账操作审批',id:'C4007',pid:"C4000"},

    {icon: '&#xe6ae;',index: 'pledgeReverseRepurchase',title: '质押式逆回购',id:'C5000',pid:"C0000"},
    //{icon: '',index: 'PRR-inquiry',title: '询价管理',id:'C5001',pid:"C5000"},
    {icon: '',index: 'PRR-businessPlanManag',title: '业务方案管理',id:'C5002',pid:"C5000"},
    {icon: '',index: 'PRR-businessPlanApproval',title: '业务方案审批',id:'C5003',pid:"C5000"},
    {icon: '',index: 'PRR-businessOperation',title: '业务操作',id:'C5004',pid:"C5000"},
    {icon: '',index: 'PRR-businessOperationApproval',title: '业务操作审批',id:'C5005',pid:"C5000"},
    {icon: '',index: 'PRR-accountManag',title: '台账详单',id:'C5006',pid:"C5000"},
    {icon: '',index: 'PRR-accountApproval',title: '台账操作审批',id:'C5007',pid:"C5000"},

    {icon: '&#xe655;',index: 'bondBusiness',title: '债券业务',id:'C6000',pid:"C0000"},
    //{icon: '',index: 'BB-inquiry',title: '询价管理',id:'C6001',pid:"C6000"},
    {icon: '',index: 'BB-businessPlanManag',title: '业务方案管理',id:'C6002',pid:"C6000"},
    {icon: '',index: 'BB-businessPlanApproval',title: '业务方案审批',id:'C6003',pid:"C6000"},
    {icon: '',index: 'BB-businessOperation',title: '业务操作',id:'C6004',pid:"C6000"},
    {icon: '',index: 'BB-businessOperationApproval',title: '业务操作审批',id:'C6005',pid:"C6000"},
    {icon: '',index: 'BB-accountManag',title: '台账详单',id:'C6006',pid:"C6000"},
    {icon: '',index: 'BB-accountApproval',title: '台账操作审批',id:'C6007',pid:"C6000"},

    {icon: '&#xe616;',index: 'certificatesOfDeposit',title: '同业存单',id:'C7000',pid:"C0000"},
   // {icon: '',index: 'COD-inquiry',title: '询价管理',id:'C7001',pid:"C7000"},
    {icon: '',index: 'COD-businessPlanManag',title: '业务方案管理',id:'C7002',pid:"C7000"},
    {icon: '',index: 'COD-businessPlanApproval',title: '业务方案审批',id:'C7003',pid:"C7000"},
    {icon: '',index: 'COD-businessOperation',title: '业务操作',id:'C7004',pid:"C7000"},
    {icon: '',index: 'COD-businessOperationApproval',title: '业务操作审批',id:'C7005',pid:"C7000"},
    {icon: '',index: 'COD-businessOperationAccount',title: '台账存量业务统计',id:'C7006',pid:"C7000"},
    {icon: '',index: 'COD-accountManag',title: '台账详单',id:'C7007',pid:"C7000"},
    {icon: '',index: 'COD-accountApproval',title: '台账操作审批',id:'C7008',pid:"C7000"},

    {icon: '&#xe612;',index: 'entrustedInvestment',title: '委托投资业务',id:'D1000',pid:"D0000"},
    
    {icon: '',index: 'EI-frameworkAgreement',title: '委托方框架协议',id:'D1011',pid:"D1000"},
    {icon: '',index: 'EI-frameworkAgreementApproval',title: '框架协议审批',id:'D1012',pid:"D1000"},

    {icon: '',index: 'EI-businessPlanManag',title: '业务方案管理',id:'D1002',pid:"D1000"},
    {icon: '',index: 'EI-businessPlanApproval',title: '业务方案审批',id:'D1003',
    pid:"D1000"},
    {icon: '',index: 'EI-protocolNumber',title: '委投协议编号',id:'D1001',pid:"D1000"},
    {icon: '',index: 'EI-protocolNumberApproval',title: '协议编号审批',id:'D1013',pid:"D1000"},

    {icon: '',index: 'EI-businessOperation',title: '业务操作',id:'D1004',pid:"D1000"},
    {icon: '',index: 'EI-businessOperationApproval',title: '业务操作审批',id:'D1005',pid:"D1000"},
    {icon: '',index: 'EI-fundSplitAccount',title: '到期资金分账',id:'D1009',pid:"D1000"},
    {icon: '',index: 'EI-splittingOperation',title: '分账操作审批',id:'D1010',pid:"D1000"},

    {icon: '',index: 'EI-interestSupplement',title: '投资补息业务',id:'D1014',pid:"D1000"},
    {icon: '',index: 'EI-interestAtMaturity',title: '到期补息业务',id:'D1015',pid:"D1000"},
    {icon: '',index: 'EI-interestSupplementApproval',title: '补息操作审批',id:'D1016',pid:"D1000"},

    {icon: '',index: 'EI-accountManag',title: '台账详单',id:'D1006',pid:"D1000"},
    {icon: '',index: 'EI-accountApproval',title: '台账操作审批',id:'D1007',pid:"D1000"},
   
    
    
    {icon: '',index: 'EI-principalReport',title: '委托方报告',id:'D1008',pid:"D1000"},

    {icon: '&#xe612;',index: 'financeCompany',title: '财务公司',id:'F1000',pid:"F0000"},
    // {icon: '',index: 'FC-bankFinancing',title: '银行理财',id:'F1001',pid:"F1000"},
     
    {icon: '',index: 'BF-inquiry',title: '银行理财',id:'F1001',pid:"F1000"},

    // {icon: '',index: 'FC-interbankDeposit',title: '同业存款',id:'F1002',pid:"F1000"},
    {icon: '',index: 'ID-inquiry',title: '同业存款',id:'F1002',pid:"F1000"},

    

    {icon: '&#xe612;',index: 'I-entrustedInvestment',title: '委托投资',id:'F2000',pid:"F0000"},
    // {icon: '',index: 'EI-interbankDeposit',title: '银行理财',id:'F2001',pid:"F2000"},
    {icon: '',index: 'EI-inquiry',title: '银行理财',id:'F2001',pid:"F2000"},


    {icon: '',index: 'loanEnterList',title: '流程申请',id:'074',pid:"A0000"},
    {icon: '',index: 'loanAuditTaskList',title: '流程审核',id:'075',pid:"A0000"},
    {icon: 'el-icon-lx-share',index: 'workFlow',title: '综合流程',id:'008',pid:"0"},
    {icon: '',index: 'workFlowLeaf1',title: '任务列表',id:'080',pid:"008"},

  
    
    
    
]