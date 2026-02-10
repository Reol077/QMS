import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import tailwindcss from '@tailwindcss/vite' 

// 导入插件
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
// 导入对应的解析器
import { ElementPlusResolver, VantResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    tailwindcss(),
    // 1. 自动导入 Vue/Vue-Router 等 API (如 ref, reactive, useRouter)
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-import.d.ts', // 生成类型声明文件，让 TS 不报错
    }),
    // 2. 自动导入组件 (如 <el-button>, <van-button>)
    Components({
      resolvers: [
        ElementPlusResolver(), 
        VantResolver()
      ],
      dts: 'src/components.d.ts', // 生成类型声明文件
    }),
  ],
})