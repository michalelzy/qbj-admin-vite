/**
 * 菜单类型枚举
 */
export const MENU_TYPE_ENUM = {
    CATALOG: {
        value: 1,
        desc: '目录',
    },
    MENU: {
        value: 2,
        desc: '菜单',
    },
    POINTS: {
        value: 3,
        desc: '按钮',
    },
};

/**
* 权限类型
*/
export const MENU_PERMS_TYPE_ENUM = {
    SA_TOKEN: {
        value: 1,
        desc: 'Sa-Token模式',
    }
};

/**
 * 设置顶级菜单的id为0
 */
export const MENU_DEFAULT_PARENT_ID = 0;

export default {
    MENU_TYPE_ENUM,
    MENU_PERMS_TYPE_ENUM
  };

