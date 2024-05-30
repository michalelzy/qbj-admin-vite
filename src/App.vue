<!-- <script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style> -->

<!-- 
  @Author tanxi
  @Date 2024-05-29
  @Copyright tanxi, Since 2013
 -->

 <template>
  <!-- Ant Design Vue 全局theme配置 -->
  <a-config-provider :locale="antdLocale" :theme="{}">


  </a-config-provider>
 </template>

 <script setup>
 import dayjs from 'dayjs';
 import { theme } from 'ant-design-vue';
 import { computed } from 'vue';
 import { themeColors } from '/@/theme/color.js';

 //主题本地化
 const antdLocale = computed();
 //时间本地化
 const dayjsLocale = computed();
 //配置dayjs.locale('zh-cn');
 dayjs.locale(dayjsLocale);

 const compactFlag = computed();

 //主题颜色
 const colorIndex = computed();

 //圆角
 const borderRadius = computed();

</script>

