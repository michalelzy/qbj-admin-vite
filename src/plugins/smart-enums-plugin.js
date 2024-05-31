/**
 * 枚举插件
 */

import _ from 'lodash';
import { FLAG_NUMBER_ENUM } from '../constants/common-const';

export default {
    install: (app, smartEnumWrapper) => {
        const smartEnumPlugin = {};

        /**
         * 
         * 根据枚举值来获取该枚举的描述 
         * @param {*} constantName 枚举名
         * @param {*} value 枚举值
         * */
        smartEnumPlugin.getDescByValue = function (constantName, value) {
            if (!smartEnumWrapper || !Object.prototype.hasOwnProperty.call(smartEnumWrapper, constantName)) {
                return '';
            }
            // boolean类型需要做特殊处理
            if (constantName === 'FLAG_NUMBER_ENUM' && !_.isUndefined(value) && typeof value === 'boolean') {
                value = value ? FLAG_NUMBER_ENUM.TRUE.value : FLAG_NUMBER_ENUM.FALSE.value;
            }

            let smartEnum = smartEnumWrapper[constantName];
            for (let item in smartEnum) {
                if (smartEnum[item].value === value) {
                    return smartEnum[item].desc;
                }
            }
            return '';
        };
        /**
             * 根据枚举名获取对应的描述键值对[{value:desc}]
             * @param {*} constantName 
             * @returns 
             * 
             */
        smartEnumPlugin.getValueDescList = function (constantName) {
            if (!Object.prototype.hasOwnProperty.call(smartEnumWrapper, constantName)) {
                return [];
            }
            const result = [];
            let targetSmartEnum = smartEnumWrapper[constantName];
            for (let item in targetSmartEnum) {
                result.push(targetSmartEnum[item]);
            }
            return result;
        };

        app.config.globalProperties.$smartEnumPlugin = smartEnumPlugin;
        app.provide('smartEnumPlugin', smartEnumPlugin);
    }

}