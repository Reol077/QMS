import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // 公共页面
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/common/Login.vue')
  },
  // 移动端路由 (钉钉)
  {
    path: '/mobile',
    children: [
      {
        path: 'scan',
        name: 'MobileScan',
        component: () => import('../views/mobile/ScanRecord.vue')
      }
    ]
  },
  // PAD 端路由
  {
    path: '/pad',
    children: [
      {
        path: 'station',
        name: 'PadStation',
        component: () => import('../views/pad/WorkStation.vue')
      }
    ]
  },
  // PC 管理端路由
  {
    path: '/pc',
    component: () => import('../layout/MainLayout.vue'), 
    children: [
      {
        path: 'dashboard',
        name: '看板中心',
        component: () => import('../views/pc/Dashboard.vue') 
      }
    ]
  },
  // 默认重定向到登录页
  {
    path: '/',
    redirect: '/login'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


router.beforeEach((to, from, next) => {
    const userAgent = navigator.userAgent.toLowerCase()
    const isMobile = /mobile|android|iphone|ipad/.test(userAgent)
    const isPad = /ipad|tablet/.test(userAgent) || (isMobile && window.innerWidth > 700)
  
    // 简单的分流逻辑：如果访问根目录，根据设备跳转
    if (to.path === '/') {
      if (isPad) return next('/pad/station')
      if (isMobile) return next('/mobile/scan')
      return next('/pc/dashboard')
    }
    next()
  })

export default router