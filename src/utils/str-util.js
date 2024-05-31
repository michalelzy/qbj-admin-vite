/**
 * 字符串操作工具类
 */

/**
 * 
 * @param {*} str
 * 
 * 转化为小写中划线命名模式 
 */
export function convertLowerHyphen(str) {
    if (!str) {
        return '';
      }
    
      return str
        .replace(/([A-Z])/g, '-$1')
        .toLowerCase()
        .substring(1);
}

/**
 * 
 * @param {*} str 
 * 
 * 转为大写驼峰 
 */
export function convertUpperCamel(str) {
    if (!str) {
        return '';
      }
    
      str = str.replace(/_(\w)/g, (_, letter) => letter.toUpperCase());
      // 首字母大写
      return str[0].toUpperCase() + str.substring(1);

}

/**
 * 
 * @param {*} str
 * 
 * 转为小写驼峰 
 */
export function convertLowerCamel(str) {
    if (!str) {
        return '';
      }
    
      return str.replace(/_(\w)/g, (_, letter) => letter.toUpperCase());

}