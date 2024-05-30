/**
 * 系统更新日志 枚举
 */

/**
 * 更新类型:[
 * 1:特大版本功能更新; 
 * 2:功能更新;
 * 3:bug修复]
 * 
 * @value 区分枚举
 * @desc 中文描述
 * 
 * 
 */
export const CHANGE_LOG_TYPE_ENUM = {
    MAJOR_UPDATE: {
      value: 1,
      desc: '重大更新',
    },
    FUNCTION_UPDATE: {
      value: 2,
      desc: '功能更新',
    },
    BUG_FIX: {
      value: 3,
      desc: 'Bug修复',
    },
  };
  
  export default {
    CHANGE_LOG_TYPE_ENUM,
  };
  