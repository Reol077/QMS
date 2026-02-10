<template>
  <div class="flex h-screen w-full bg-gray-100">
    <!-- 侧边栏 -->
    <aside class="w-72 bg-gradient-to-b from-slate-800 via-slate-800 to-slate-900 text-white flex flex-col shadow-2xl overflow-y-auto flex-shrink-0">
      <!-- Logo 区域 -->
      <div class="px-6 py-10 border-b border-slate-700/50">
        <div class="flex items-center justify-center gap-2 mb-3">
          <div class="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-lg flex items-center justify-center">
            <span class="text-white font-bold text-lg">Q</span>
          </div>
          <h1 class="text-2xl font-bold tracking-wide text-white">QMS</h1>
        </div>
        <p class="text-xs text-slate-400 text-center">质量管理系统</p>
        <p class="text-xs text-slate-500 text-center mt-1">Manufacturing Quality</p>
      </div>

      <!-- 功能区标题 -->
      <div class="px-6 py-3 mt-2">
        <p class="text-xs font-semibold text-slate-500 uppercase tracking-widest">导航菜单</p>
      </div>

      <!-- 菜单 -->
      <el-menu
        :default-active="activeMenu"
        background-color="transparent"
        text-color="#94a3b8"
        active-text-color="#60a5fa"
        class="border-none flex-1 px-3 py-2"
        router
      >
        <el-menu-item index="/pc/dashboard" class="!rounded-lg !my-1 !mx-0 !h-12 !bg-transparent hover:!bg-slate-700/50 transition-all duration-200 !text-slate-300">
          <Monitor :size="20" class="mr-3 text-blue-400" />
          <span class="font-medium">仪表盘</span>
        </el-menu-item>
        <el-menu-item index="/pc/user-manager" class="!rounded-lg !my-1 !mx-0 !h-12 !bg-transparent hover:!bg-slate-700/50 transition-all duration-200 !text-slate-300">
          <User :size="20" class="mr-3 text-blue-400" />
          <span class="font-medium">用户管理</span>
        </el-menu-item>
      </el-menu>

      <!-- 分割线 -->
      <div class="px-6 py-2">
        <div class="h-px bg-slate-700/30"></div>
      </div>

      <!-- 底部操作区 -->
      <div class="px-6 py-6 border-t border-slate-700/50">
        <div class="flex items-center gap-3 p-4 rounded-lg bg-slate-700/50 hover:bg-slate-700 cursor-pointer transition-colors group">
          <el-avatar :size="36" icon="User" class="!bg-gradient-to-br from-blue-400 to-cyan-500" />
          <div class="flex flex-col min-w-0 flex-1">
            <span class="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors truncate">张工</span>
            <span class="text-xs text-slate-400 truncate">系统管理员</span>
          </div>
          <ChevronRight :size="16" class="text-slate-500 group-hover:text-blue-400 transition-colors" />
        </div>

        <!-- 系统信息 -->
        <div class="mt-4 p-3 bg-slate-900/50 rounded-lg border border-slate-700/30">
          <p class="text-xs text-slate-400 text-center">系统版本 v1.0.0</p>
          <p class="text-xs text-slate-500 text-center mt-1">© 2026 QMS System</p>
        </div>
      </div>
    </aside>

    <!-- 主容器 -->
    <div class="flex-1 flex flex-col overflow-hidden bg-gray-50">
      <!-- 顶部栏 -->
      <header class="h-16 bg-white border-b border-gray-300 flex items-center justify-between px-8 shadow-sm flex-shrink-0">
        <!-- 左侧 - 用户信息 -->
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-3 px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
            <el-avatar :size="40" icon="User" class="!bg-gradient-to-br from-blue-400 to-cyan-500" />
            <div class="flex flex-col">
              <span class="text-sm font-semibold text-gray-900">张工</span>
              <span class="text-xs text-gray-500">系统管理员</span>
            </div>
          </div>
        </div>

        <!-- 右侧 - 工具栏 -->
        <div class="flex items-center gap-4">
          <!-- 通知 -->
          <el-popover placement="bottom" :width="300" trigger="click">
            <template #reference>
              <el-button text type="info" size="small" class="relative">
                <Bell :size="20" class="text-gray-600 hover:text-blue-500 transition-colors" />
                <span class="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </el-button>
            </template>
            <div class="text-sm text-gray-600">
              <p class="font-semibold mb-2">最近通知</p>
              <p class="text-xs text-gray-500">暂无新通知</p>
            </div>
          </el-popover>

          <!-- 主题切换 -->
          <el-button text type="info" size="small">
            <Sun :size="20" class="text-gray-600 hover:text-yellow-500 transition-colors" />
          </el-button>

          <!-- 分割线 -->
          <el-divider direction="vertical" class="!bg-gray-300 h-6" />

          <!-- 设置下拉 -->
          <el-dropdown>
            <div class="flex items-center gap-2 cursor-pointer hover:opacity-70 transition-opacity px-3 py-1 rounded-lg hover:bg-gray-100">
              <span class="text-sm text-gray-700 font-medium">设置</span>
              <ChevronDown :size="16" class="text-gray-500" />
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>个人设置</el-dropdown-item>
                <el-dropdown-item>系统设置</el-dropdown-item>
                <el-dropdown-item>数据导出</el-dropdown-item>
                <el-dropdown-divider />
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </header>

      <!-- 内容区域 -->
      <main class="flex-1 overflow-y-auto p-6 bg-gray-50">
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()

const activeMenu = computed(() => {
  return route.path
})
</script>

<style lang="scss" scoped>
// 制造业风格 - 深色专业主题
:deep(.el-menu) {
  --el-menu-border-color: transparent;
  --el-menu-bg-color: transparent;
}

:deep(.el-menu-item.is-active) {
  background-color: rgba(59, 130, 246, 0.15) !important;
  border-right: 3px solid #3b82f6 !important;

  // 激活时的图标和文字颜色
  svg {
    color: #60a5fa !important;
  }

  .el-icon {
    color: #60a5fa !important;
  }
}

// 悬停效果
:deep(.el-menu-item:hover) {
  color: #e2e8f0 !important;

  svg {
    color: #93c5fd !important;
  }
}

// 美化滚动条 - 适应深色侧边栏
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: rgba(148, 163, 184, 0.3);
  border-radius: 4px;

  &:hover {
    background: rgba(148, 163, 184, 0.5);
  }
}

// 侧边栏滚动条
aside::-webkit-scrollbar-thumb {
  background: rgba(100, 116, 139, 0.4);

  &:hover {
    background: rgba(100, 116, 139, 0.6);
  }
}

// 内容区滚动条
main::-webkit-scrollbar-thumb {
  background: rgba(160, 174, 192, 0.4);

  &:hover {
    background: rgba(160, 174, 192, 0.6);
  }
}
</style>