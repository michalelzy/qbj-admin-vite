/** 
 *  前端组件类型
 * 
 * @value 组件类型
 * @desc 中文描述
 * 
 * 
*/
export const CODE_FRONT_COMPONENT_ENUM = {
    INPUT: {
      value: 'Input',
      desc: '输入框',
    },
    INPUT_NUMBER: {
      value: 'InputNumber',
      desc: '数字输入框',
    },
    TEXTAREA: {
      value: 'Textarea',
      desc: '文本',
    },
    BOOLEAN_SELECT: {
      value: 'BooleanSelect',
      desc: '布尔下拉框',
    },
    ENUM_SELECT: {
      value: 'SmartEnumSelect',
      desc: '枚举下拉框',
    },
    DICT_SELECT: {
      value: 'DictSelect',
      desc: '字典下拉',
    },
    DATE: {
      value: 'Date',
      desc: '日期选择',
    },
    DATE_TIME: {
      value: 'DateTime',
      desc: '时间选择',
    },
    FILE_UPLOAD: {
      value: 'FileUpload',
      desc: '文件上传',
    },
  };
  
  /**
   * modal、drawer、Page组件枚举
   * @value 组件名
   * @desc 中文描述
   */
  export const CODE_INSERT_AND_UPDATE_PAGE_ENUM = {
    MODAL: {
      value: 'modal',
      desc: '弹窗',
    },
    DRAWER: {
      value: 'drawer',
      desc: '抽屉',
    },
    PAGE: {
      value: 'Page',
      desc: '新页面',
    },
  };
  
  /**
   * DELETE删除方式枚举
   * @desc 单个删除
   * @desc 批量删除
   * @desc 单个删除和批量删除
   */
  export const CODE_DELETE_ENUM = {
    SINGLE: {
      value: 'Single',
      desc: '单个删除',
    },
    BATCH: {
      value: 'Batch',
      desc: '批量删除',
    },
    SINGLE_AND_BATCH: {
      value: 'SingleAndBatch',
      desc: '单个删除和批量删除',
    },
  };
  
  /**
   * 查询类型
   * @desc 模糊查询
   * @desc 等于查询
   * @desc 日期范围
   * @desc 指定日期
   * @desc 枚举
   * @desc 字典
   */
  export const CODE_QUERY_FIELD_QUERY_TYPE_ENUM = {
    LIKE: {
      value: 'Like',
      desc: '模糊查询',
    },
    EQUAL: {
      value: 'Equal',
      desc: '等于查询',
    },
    DATE_RANGE: {
      value: 'DateRange',
      desc: '日期范围',
    },
    DATE: {
      value: 'Date',
      desc: '指定日期',
    },
    ENUM: {
      value: 'Enum',
      desc: '枚举',
    },
    DICT: {
      value: 'Dict',
      desc: '字典',
    },
  };
  
  export default {
    CODE_FRONT_COMPONENT_ENUM,
    CODE_INSERT_AND_UPDATE_PAGE_ENUM,
    CODE_DELETE_ENUM,
    CODE_QUERY_FIELD_QUERY_TYPE_ENUM
  };
  