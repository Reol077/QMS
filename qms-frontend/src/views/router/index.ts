import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// 1. 设备检测函数（针对 PC, Pad, Mobile）
const getDeviceType = (): 'pc' | 'pad' | 'mobile' => {
  const ua = navigator.userAgent;
  const isMobile = /Android|webOS|iPhone|iPod|BlackBerry/i.test(ua);
  // 识别 Pad：排除手机特征的大屏安卓或 iPad
  const isPad = /iPad|PlayBook/i.test(ua) || (/Android/i.test(ua) && !isMobile);

  if (isMobile) return 'mobile';
  if (isPad) return 'pad';
  return 'pc';
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Root',
    redirect: () => `/${getDeviceType()}`
  },
  {
    path: '/pc',
    component: () => import('@/views/pc/PCLayout.vue'),
    children: [
      // 当访问 /pc 时，自动重定向到 /pc/dashboard
      { path: '', redirect: 'dashboard' }, 
      {
        path: 'dashboard',
        component: () => import('@/views/pc/Dashboard.vue')
      }
    ]
  },
  {
    path: '/pad',
    component: () => import('@/views/pad/PadLayout.vue'),
    children: [
      { path: '', component: () => import('@/views/pad/PadHome.vue') }
    ]
  },
  {
    path: '/mobile',
    component: () => import('@/views/mobile/MobileLayout.vue'),
    children: [
      { path: '', component: () => import('@/views/mobile/MobileHome.vue') }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;