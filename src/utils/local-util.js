
/**
 * 
 * @param {*} key 键
 * @param {*} value 值
 * 
 * localStorage为浏览器环境变量；本方法将键值对存储到本地localStorage
 * 
 */
export const localSave = (key, value) => {};

/**
 * 
 * @param {*} key
 * 
 * 读取localStorage 
 */
export const localRead = (key) => {};

/**
 * 清除localStorage
 */
export const localClear = () => {
    localStorage.clear();
}
