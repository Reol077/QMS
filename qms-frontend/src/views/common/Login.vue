<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const loading = ref(false)

const loginForm = reactive({
  username: '',
  password: ''
})

const handleLogin = () => {
  loading.value = true
  console.log('正在登录...', loginForm)
  
  // 模拟登录逻辑
  setTimeout(() => {
    loading.value = false
    // 登录后跳转到主页（触发我们路由里的设备分流逻辑）
    router.push('/')
  }, 1000)
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-slate-50 p-4">
    <div class="w-full max-w-[400px] bg-white rounded-2xl shadow-xl overflow-hidden p-8">
      
      <div class="text-center mb-8">
        <div class="inline-block p-3 bg-blue-600 rounded-lg mb-4">
          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h1 class="text-2xl font-bold text-slate-800">QMS 质量管理系统</h1>
        <p class="text-slate-500 text-sm mt-2">Quality Management System</p>
      </div>

      <div class="space-y-6">
        <div class="hidden pad:block space-y-4">
          <el-input v-model="loginForm.username" placeholder="工号 / 账号" prefix-icon="User" size="large" />
          <el-input v-model="loginForm.password" type="password" placeholder="密码" prefix-icon="Lock" size="large" show-password />
          <el-button type="primary" class="w-full !h-12 !text-lg" :loading="loading" @click="handleLogin">
            立即登录
          </el-button>
        </div>

        <div class="block pad:hidden">
          <van-form @submit="handleLogin">
            <van-cell-group inset class="!mx-0">
              <van-field v-model="loginForm.username" label="工号" placeholder="请输入工号" />
              <van-field v-model="loginForm.password" type="password" label="密码" placeholder="请输入密码" />
            </van-cell-group>
            <div class="mt-6">
              <van-button round block type="primary" native-type="submit" :loading="loading">
                登录系统
              </van-button>
            </div>
          </van-form>
        </div>
      </div>

      <div class="mt-8 text-center text-xs text-slate-400">
        © 2026 QMS 数字化质量平台 v1.0.0
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 可以在这里针对 Login 页做微调 */
</style>