// src/main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 1. 引入路由

const app = createApp(App)

app.use(router) 
app.mount('#app')