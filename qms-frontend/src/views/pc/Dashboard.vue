<script setup lang="ts">
import { ref, onMounted } from 'vue'
import * as echarts from 'echarts'

// 模拟数据
const stats = [
  { title: '今日产出', value: '1,280', unit: 'pcs', color: 'text-blue-600' },
  { title: '合格率', value: '98.5', unit: '%', color: 'text-green-600' },
  { title: '待处理异常', value: '3', unit: '单', color: 'text-red-600' },
  { title: '本月结案率', value: '92', unit: '%', color: 'text-purple-600' }
]

const chartRef = ref<HTMLElement | null>(null)

onMounted(() => {
  if (chartRef.value) {
    const myChart = echarts.init(chartRef.value)
    myChart.setOption({
      title: { text: '周质量波动趋势' },
      tooltip: { trigger: 'axis' },
      xAxis: { type: 'category', data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'] },
      yAxis: { type: 'value', min: 90 },
      series: [{
        data: [98, 97, 99, 98.5, 96, 98, 99.2],
        type: 'line',
        smooth: true,
        areaStyle: { opacity: 0.2 },
        itemStyle: { color: '#2563eb' }
      }]
    })
    
    // 适配窗口大小
    window.addEventListener('resize', () => myChart.resize())
  }
})
</script>

<template>
  <div class="p-6 bg-slate-50 min-h-screen">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <el-card v-for="item in stats" :key="item.title" shadow="hover" class="!border-none">
        <div class="text-sm text-slate-500">{{ item.title }}</div>
        <div class="mt-2 flex items-baseline">
          <span class="text-2xl font-bold" :class="item.color">{{ item.value }}</span>
          <span class="ml-1 text-xs text-slate-400">{{ item.unit }}</span>
        </div>
      </el-card>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <el-card class="lg:col-span-2 !border-none" shadow="never">
        <div ref="chartRef" class="h-80 w-full"></div>
      </el-card>

      <el-card class="!border-none" shadow="never">
        <template #header>
          <div class="font-bold flex justify-between items-center">
            <span>实时异常监控</span>
            <el-tag type="danger" effect="dark" round>紧急</el-tag>
          </div>
        </template>
        <div class="space-y-4">
          <div v-for="i in 3" :key="i" class="flex items-start space-x-3 pb-3 border-b border-slate-100 last:border-0">
            <div class="w-2 h-2 mt-2 rounded-full bg-red-500"></div>
            <div>
              <div class="text-sm font-medium">#{{ 1024 + i }} 线体外观缺陷</div>
              <div class="text-xs text-slate-400 mt-1">发现人：张工 | 10分钟前</div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>