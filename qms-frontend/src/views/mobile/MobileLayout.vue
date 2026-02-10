<template>
  <div class="h-screen flex flex-col bg-gray-50">
    <van-nav-bar title="QMS 移动端" class="shadow-sm" />

    <main class="flex-1 overflow-y-auto">
      <router-view />
    </main>

    <van-tabbar route active-color="#1989fa">
      <van-tabbar-item icon="home-o" to="/mobile">首页</van-tabbar-item>
      <van-tabbar-item icon="qr" to="/mobile/scan">扫码报工</van-tabbar-item>
      <van-tabbar-item icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>