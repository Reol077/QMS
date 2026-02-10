import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { VantResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    // 自动导入 API (如 ref, reactive 等)
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // 自动按需导入组件
    Components({
      resolvers: [
        ElementPlusResolver(), // 自动识别 el- 开头的组件
        VantResolver()        // 自动识别 van- 开头的组件
      ],
    }),
  ],
})