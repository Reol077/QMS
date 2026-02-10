<template>
  <div class="flex h-screen bg-gray-100">
    <aside class="w-64 bg-slate-800 text-white flex flex-col shadow-lg">
      <div class="p-6 text-xl font-bold tracking-wider border-b border-slate-700">
        QMS 质量管理
      </div>
      <el-menu
        active-text-color="#ffd04b"
        background-color="#1e293b"
        class="border-none flex-1"
        default-active="/pc/dashboard"
        text-color="#fff"
        router
      >
        <el-menu-item index="/pc/dashboard">
          <el-icon><Monitor /></el-icon>
          <span>控制台看板</span>
        </el-menu-item>
        <el-menu-item index="/pc/user-manager">
          <el-icon><User /></el-icon>
          <span>人员权限</span>
        </el-menu-item>
      </el-menu>
    </aside>

    <main class="flex-1 flex flex-col overflow-hidden">
      <header class="h-16 bg-white shadow-sm flex items-center justify-between px-8">
        <div class="text-gray-500 text-sm">当前：精密涂布车间 / 管理后台</div>
        <div class="flex items-center gap-4">
          <span class="text-sm font-medium">管理员 张工</span>
          <el-avatar :size="32" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        </div>
      </header>

      <section class="flex-1 overflow-y-auto p-6">
        <router-view />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Monitor, User } from '@element-plus/icons-vue'
</script>