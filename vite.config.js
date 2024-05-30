/**
 * 
 */

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

/** 
 * Node.js 中，path 是一个内置模块，它提供了处理文件路径的工具函数。
 * path 模块中的一个方法，它用于将多个路径或路径段解析为一个绝对路径。
 * 这个函数非常有用，因为它可以处理不同操作系统（如 Windows 和 Unix-like 系统）的路径分隔符差异，
 * 并确保你得到的是一个有效的绝对路径。
 */
import { resolve } from 'path';


/**
 * 
 * @param {*} dir 将相对路径解析为绝对路径
 * @returns 
 */
const pathResolve = (dir) => {
  //__dirname 是 Node.js 中的一个全局变量，它表示当前执行脚本所在的目录的绝对路径。
  return resolve(__dirname, '.', dir); 
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  root: process.cwd(), //cwd()类似于pwd返回当前路径
  resolve: {
    alias: [
      // 国际化替换
      {
        find: 'vue-i18n',
        replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
      },
      // 绝对路径重命名：/@/xxxx => src/xxxx
      {
        find: /\/@\//,
        replacement: pathResolve('src') + '/',
      },
      {
        find: /^~/,
        replacement: '',
      },
    ],
  }
})
