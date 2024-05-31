/**
 * Locale入口文件
 * 
 * 创建i18n实力后需要在Vue应用中使用它：
 * 
 * app.use(i18n)
 */

import en_US from './lang/en-US/index';
import zh_CN from './lang/zh-CN/index';
import { createI18n } from 'vue-i18n';
import { getInitializedLanguage } from '../store/modules/system/app-config';

/**语言选择数组 */
export const i18nList = [
    {
        text: '简体中文',
        value: 'zh_CN',
    },
    {
        text: 'English',
        value: 'en_US',
    },
];

export const messages = {
    zh_CN: zh_CN,
    en_US: en_US,
};

const i18n = createI18n({
    //当前语言环境 (locale) 没有找到对应的翻译时将使用CN语言环境。
    fallbackLocale: 'zh_CN', 
    /**
     * 这个选项设置为 true 时，vue-i18n 会将 $t（翻译方法）等国际化方法和属性全局注入到 Vue 实例中
     * 使得这些方法可以在组件中直接使用，无需手动引入。
     */
    globalInjection: true,
    legacy: false, //
    locale: getInitializedLanguage(), //默认初始化的语言
    messages, //
});

export default i18n;