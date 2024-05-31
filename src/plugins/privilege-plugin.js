/**
 * 针对权限设计一套插件
 */
import { useUserStore } from "../store/modules/system/user";

/**
 * 进行权限检查
 * @param {*} value 
 */
const privilege = (value) => {
    //检查是否是超级管理员
    if (useUserStore().administratorFlag) {
        return true;
    }
    //返回权限表验证用户被授权的功能点
    let userPointsList = useUserStore().getPointList;
    //如果返回的是null或者undefined则表示用户没有权限表
    if (!userPointsList) {
        return false;
    }
    //先检查是否具有权限表随后检查是否涵盖某项权限点
    return userPointsList && userPointsList.includes(value);
}

export default {
    install: (app) => {
        // 将 privilege 函数添加到 Vue 应用的全局属性中并可在任何组件中通过 this.$privilege 来调用这个函数
        app.config.globalProperties.$privilege = privilege;
    }
}