import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

// 1. 设备检测函数（针对 PC, Pad, Mobile）
const getDeviceType = (): string => {
  const ua = navigator.userAgent.toLocaleLowerCase(); // 转小写更稳妥
  const isMobile = /android|webos|iphone|ipod|blackberry/i.test(ua);
  const isPad = /ipad|playbook/i.test(ua) || (ua.includes('android') && !isMobile);

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
      { path: '/pc', redirect: '/pc/dashboard' }, 
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