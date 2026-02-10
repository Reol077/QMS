<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { 
  HomeFilled, 
  Setting, 
  VideoCamera, 
  OfficeBuilding,
  Expand,
  Fold,
  ArrowRight
} from '@element-plus/icons-vue'

const isCollapse = ref(false)
const router = useRouter()

// 模拟菜单数据（对应你图中的 QMS 管理）
const menuItems = [
  { name: '首页', icon: HomeFilled, path: '/pc/dashboard' },
  { name: '系统管理', icon: Setting, path: '/pc/system' },
  { name: '系统监控', icon: VideoCamera, path: '/pc/monitor' },
  { 
    name: 'QMS管理', 
    icon: OfficeBuilding, 
    children: [
      { name: '基础信息', path: '/pc/qms/base' },
      { name: '来料检验', path: '/pc/qms/iqc' },
      { name: '首检', path: '/pc/qms/first-check' },
      { name: '巡检', path: '/pc/qms/patrol' },
      { name: '不合格处理', path: '/pc/qms/nc' },
    ] 
  }
]
</script>

<template>
  <el-container class="h-screen w-full overflow-hidden">
    <el-aside :width="isCollapse ? '64px' : '220px'" class="bg-[#2f4050] transition-all duration-300">
      <div class="h-14 bg-[#18a058] flex items-center justify-center text-white font-bold text-lg overflow-hidden whitespace-nowrap">
        {{ isCollapse ? 'QMS' : '后台管理系统' }}
      </div>
      
      <div v-if="!isCollapse" class="p-6 text-center border-b border-[#243342]">
        <el-avatar :size="50" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
        <div class="text-white mt-2 text-sm font-medium">吴双</div>
        <div class="text-[#8095a8] text-xs mt-1">● 在线 | <span class="cursor-pointer hover:text-white">注销</span></div>
      </div>

      <el-menu
        default-active="/pc/dashboard"
        class="border-none !bg-transparent"
        background-color="#2f4050"
        text-color="#a7b1c2"
        active-text-color="#ffffff"
        :collapse="isCollapse"
        router
      >
        <template v-for="item in menuItems" :key="item.name">
          <el-sub-menu v-if="item.children" :index="item.name">
            <template #title>
              <el-icon><component :is="item.icon" /></el-icon>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item v-for="sub in item.children" :key="sub.path" :index="sub.path">
              {{ sub.name }}
            </el-menu-item>
          </el-sub-menu>
          
          <el-menu-item v-else :index="item.path">
            <el-icon><component :is="item.icon" /></el-icon>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-aside>

    <el-container class="flex-col bg-[#f3f3f4]">
      <header class="h-12 bg-[#2f4050] flex items-center px-4 justify-between">
        <div class="flex items-center space-x-4">
          <el-icon class="text-white cursor-pointer" @click="isCollapse = !isCollapse">
            <Fold v-if="!isCollapse" /><Expand v-else />
          </el-icon>
          <el-breadcrumb :separator-icon="ArrowRight" class="hidden md:block">
            <el-breadcrumb-item><span class="text-white opacity-70">首页</span></el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        
        <div class="flex items-center space-x-4">
          <span class="text-white text-sm">欢迎，吴双</span>
          <el-icon class="text-white"><Setting /></el-icon>
        </div>
      </header>

      <div class="h-10 bg-white border-b flex items-center px-2">
        <div class="px-3 h-8 leading-8 bg-[#f3f3f4] text-xs border border-gray-200 border-b-white rounded-t-sm">
          首页
        </div>
        <div class="flex-1"></div>
        <div class="text-xs text-gray-400 mr-2 cursor-pointer hover:text-blue-500">刷新</div>
      </div>

      <el-main class="p-4 overflow-y-auto">
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<style>
/* 深度调整 Element Menu 样式以匹配原图深蓝色调 */
.el-menu-item.is-active {
  background-color: #293846 !important;
  border-left: 4px solid #18a058;
}
.el-menu-item:hover {
  background-color: #293846 !important;
  color: white !important;
}
</style>