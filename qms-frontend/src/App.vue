<template>
  <router-view />
</template>

<script setup lang="ts">
/**
 * 这里不需要写复杂的逻辑
 * 所有的分流跳转逻辑已经由 router/index.ts 处理完毕
 */
</script>

<style>
/* 基础重置样式，确保三端铺满全屏 */
html, body, #app {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

/* 隐藏横向滚动条 */
body {
  overflow-x: hidden;
}
</style>