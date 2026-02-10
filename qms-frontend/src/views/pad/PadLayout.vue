<template>
  <div class="h-screen flex flex-col bg-slate-50">
    <header class="h-20 bg-blue-700 text-white flex items-center px-8 shadow-md">
      <div class="text-2xl font-bold">L-01 涂布线监控站</div>
      <div class="ml-auto flex gap-4">
        <div class="bg-blue-800 px-4 py-2 rounded text-sm">网络状态：正常</div>
        <div class="bg-green-500 px-4 py-2 rounded text-sm">运行中</div>
      </div>
    </header>

    <main class="flex-1 p-8">
      <div class="bg-white h-full rounded-2xl shadow-sm border border-gray-200 p-6">
        <router-view />
      </div>
    </main>
  </div>
</template>