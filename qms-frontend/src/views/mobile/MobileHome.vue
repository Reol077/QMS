<template>
  <div class="p-4 space-y-4">
    <div class="flex items-center gap-4 py-4">
      <van-image round width="50" height="50" src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
      <div>
        <div class="text-lg font-bold">你好，张工</div>
        <div class="text-xs text-gray-500">今日已报工 12 次</div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center" @click="$router.push('/mobile/scan')">
        <div class="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 mb-2">
          <van-icon name="qr" size="24" />
        </div>
        <span class="text-sm font-medium">扫码录入</span>
      </div>
      <div class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center">
        <div class="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-2">
          <van-icon name="warning-o" size="24" />
        </div>
        <span class="text-sm font-medium">异常申报</span>
      </div>
    </div>

    <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
      <div class="flex justify-between items-center mb-4 text-sm font-bold border-l-4 border-blue-600 pl-2">
        我的待办任务
      </div>
      <van-cell-group inset>
        <van-cell title="L-01 线首检确认" label="截止时间: 11:30" is-link />
        <van-cell title="原材料批次核对" label="来自: 生产主管" is-link />
      </van-cell-group>
    </div>
  </div>
</template>