import { theme } from 'ant-design-vue/lib';
/**
 * 在 ant-design-vue 中，convertLegacyToken 是一个用于将旧版主题变量转换为新版主题变量的函数。
 * ant-design-vue 是 Ant Design 的 Vue 实现，它提供了一套基于 Ant Design 设计规范的 UI 组件库。
 * 随着 ant-design-vue 的版本更新，主题变量的定义方式可能会发生变化。为了保持向后兼容性，
 * convertLegacyToken 函数可以帮助开发者将旧版主题变量转换为新版变量，
 * 以便在不修改现有代码的情况下继续使用主题定制功能。
 */
import convertLegacyToken from 'ant-design-vue/lib/theme/convertLegacyToken';

//获取默认的主题算法和种子
const {defaultAlgorithm, defaultSeed} = theme;

//得到完整的主题变量集定义应用的视觉风格，包括颜色、字体大小、边距
const mapToken = defaultAlgorithm(defaultSeed);
//确保旧版兼容
const token = convertLegacyToken.default(mapToken);

export default {
    '@primary-color': token['primary-color'], // 全局主色
    '@base-bg-color': '#fff',
    '@hover-bg-color': 'rgba(0, 0, 0, 0.025)',
    '@hover-bg-color-night': 'rgba(255, 255, 255, 0.025)',
    '@header-light-bg-hover-color': '#f6f6f6',
    '@header-height': '80px',
    '@header-user-height': '40px',
    '@page-tag-height': '40px',
    '@theme-list': ['light', 'dark', 'night'],
  };