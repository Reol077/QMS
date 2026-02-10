<template>
  <div class="grid grid-cols-2 gap-8 h-full">
    <div class="flex flex-col gap-6">
      <h2 class="text-3xl font-black text-slate-800">工位操作面板</h2>
      <button class="flex-1 bg-blue-600 text-white rounded-3xl shadow-xl flex flex-col items-center justify-center active:scale-95 transition-transform">
        <el-icon size="60"><Monitor /></el-icon>
        <span class="text-2xl font-bold mt-4">开工扫描</span>
      </button>
      <button class="flex-1 bg-white border-2 border-slate-200 text-slate-700 rounded-3xl shadow-sm flex flex-col items-center justify-center active:scale-95 transition-transform">
        <el-icon size="60"><DocumentChecked /></el-icon>
        <span class="text-2xl font-bold mt-4">工艺调单</span>
      </button>
    </div>

    <div class="bg-slate-900 rounded-3xl p-8 text-white">
      <div class="flex justify-between items-center mb-8">
        <span class="text-xl text-slate-400">实时参数监控</span>
        <span class="px-3 py-1 bg-green-500 rounded-full text-xs">已联网</span>
      </div>
      <div class="space-y-10">
        <div>
          <div class="text-slate-500 mb-2">一区烘箱温度</div>
          <div class="text-5xl font-mono text-orange-400">85.4 <span class="text-2xl text-slate-600">°C</span></div>
        </div>
        <div>
          <div class="text-slate-500 mb-2">当前车速</div>
          <div class="text-5xl font-mono text-blue-400">45.0 <span class="text-2xl text-slate-600">m/min</span></div>
        </div>
        <div>
          <div class="text-slate-500 mb-2">张力设定值</div>
          <div class="text-5xl font-mono text-green-400">120 <span class="text-2xl text-slate-600">N</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Monitor, DocumentChecked } from '@element-plus/icons-vue'
</script>