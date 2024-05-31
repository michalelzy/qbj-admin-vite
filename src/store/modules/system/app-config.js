/**
 * App的配置
 */

import { defineStore} from 'pinia';
import { appDefaultConfig } from '/@/config/app-config';
import localStorageKeyConst from '/@/constants/local-storage-key-const';
import { smartSentry } from '/@/lib/smart-sentry';
import { localRead } from '/@/utils/local-util';

//展开对象获得对象副本
let state = { ...appDefaultConfig};
//获得对应属性item
let appConfigStr = localRead(localStorageKeyConst.APP_CONFIG);

let language = appDefaultConfig.language;

if (appConfigStr) {
    try {
        //解析JSON字符串得到操作对象
        state = JSON.parse(appConfigStr);
        language = state.language;
    } catch (e) {
        smartSentry.captureError(e);
    }
}

/**
 * 获取初始化时的语言类型
 */
export const getInitializedLanguage = function () {
    return language;
  };

/**
 * 访问和修改应用程序配置状态的对象
 */
export const useAppConfigStore = defineStore({
    id: 'appConfig',
    state: () => ({
        //将config作为默认配置
        ...state,
    }),
    //定义pinia状态管理方法
    actions: {
        reset() {
            for (const k in appDefaultConfig) {
                this[k] = appDefaultConfig[k];
            }
        },
        //自定义添加存储库属性help并给其赋值
        showHelpDoc() {
            this.helpDocFlag = true; 
        },
        //自定义添加存储库属性help并给其赋值
        hideHelpDoc() {
            this.helpDocFlag = false;
        }
    }
})