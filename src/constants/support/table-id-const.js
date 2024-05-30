/**
 * 表格ID
 * 
 * 设置把系统各版块所涉及到表的起始位置
 */

//system系统功能表格初始化id
let systemInitTableId = 10000;

//support支撑功能表格初始化id
let supportInitTableId = 20000;

//OA表id
let businessOAInitTableId = 30000;
//ERP表id
let businessERPInitTableId = 40000;

export const TABLE_ID_CONST = {
    /**
     * 各具体业务的表id
     */
    BUSINESS: {
        OA: {
            NOTICE: businessOAInitTableId + 1, //通知公告
            ENTERPRISE: businessOAInitTableId + 2, //企业信息
            ENTERPRISE_EMPLOYEE: businessOAInitTableId + 3, //企业员工
            ENTERPRISE_BANK: businessOAInitTableId + 4, //企业银行
            ENTERPRISE_INVOICE: businessOAInitTableId + 5, //企业发票
        },
        ERP: {
            GOODS: businessERPInitTableId + 1, //商品管理
        },
    },

    /**
     * 系统
     */
    SYSTEM: {
        EMPLOYEE: systemInitTableId + 1, //员工
        MENU: systemInitTableId + 2, //菜单
    },

    /**
     * 支撑
     */
    SUPPORT: {
        CONFIG: supportInitTableId + 1, //参数配置
        DICT: supportInitTableId + 2, //字典
        SERIAL_NUMBER: supportInitTableId + 3, //单号
        OPERATE_LOG: supportInitTableId + 4, //请求监控
        HEART_BEAT: supportInitTableId + 5, //心跳
        LOGIN_LOG: supportInitTableId + 6, //登录日志
        RELOAD: supportInitTableId + 7, //reload
        HELP_DOC: supportInitTableId + 8, //帮助文档
    },

}