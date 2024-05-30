/**
 * 文件类型
 */


/**
 * 文件上传类型枚举
 * @value 区分类型
 * 
 * @desc 通用
 * @desc 公告
 * @desc 帮助中心
 * @desc 意见反馈
 */
export const FILE_FOLDER_TYPE_ENUM = {
    COMMON: {
        value: 1,
        desc: '通用',
      },
      NOTICE: {
        value: 2,
        desc: '公告',
      },
      HELP_DOC: {
        value: 3,
        desc: '帮助中心',
      },
      FEEDBACK: {
        value: 4,
        desc: '意见反馈',
      },
};

export default {
    FILE_FOLDER_TYPE_ENUM
}