<template>
  <div class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
        <div class="text-gray-400 text-xs font-bold uppercase">今日涂布总长度</div>
        <div class="text-2xl font-black text-slate-700 mt-1">24,532 m</div>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-green-500">
        <div class="text-gray-400 text-xs font-bold uppercase">实时合格率</div>
        <div class="text-2xl font-black text-slate-700 mt-1">99.8%</div>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-orange-500">
        <div class="text-gray-400 text-xs font-bold uppercase">待检母卷</div>
        <div class="text-2xl font-black text-slate-700 mt-1">12 卷</div>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-purple-500">
        <div class="text-gray-400 text-xs font-bold uppercase">运行机台</div>
        <div class="text-2xl font-black text-slate-700 mt-1">6 / 8</div>
      </div>
    </div>

    <div class="bg-white rounded-xl shadow-sm p-6">
      <h3 class="text-lg font-bold mb-4 text-slate-800">实时生产动态</h3>
      <el-table :data="recentData" style="width: 100%">
        <el-table-column prop="time" label="时间" width="100" />
        <el-table-column prop="event" label="事件" />
        <el-table-column prop="status" label="状态">
          <template #default="scope">
            <el-tag :type="scope.row.type">{{ scope.row.status }}</el-tag>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script setup lang="ts">
const recentData = [
  { time: '10:25', event: 'L-01 线母卷 #A20240210 入库', status: '完成', type: 'success' },
  { time: '10:10', event: 'L-03 线烘箱温度偏高告警', status: '已处理', type: 'warning' },
  { time: '09:45', event: '质检员 [王工] 开启首检', status: '进行中', type: '' },
]
</script>