import { defineConfig, loadEnv, ProxyOptions } from 'vite'
import vue from '@vitejs/plugin-vue'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
// import { dirname, resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import Icons from 'unplugin-icons/vite'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())
  const { VITE_PORT, VITE_BASE_API_PREFIX, VITE_BASE_API_URL } = env
  const port = parseInt(VITE_PORT, 10) || 5173
  const proxy: Record<string, string | ProxyOptions> = {
    [VITE_BASE_API_PREFIX]: {
      target: VITE_BASE_API_URL,
      changeOrigin: true,
      rewrite: (path: string) => path.replace(VITE_BASE_API_PREFIX, '')
    }
  }
  return {
    plugins: [
      vue(),
      AutoImport({
        eslintrc: {
          enabled: true // <-- this
        },
        dts: 'src/types/auto-imports.d.ts', // or a custom path
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],
        imports: [
          'vue',
          'vue-router',
          'pinia',
          // custom
          {
            '@vueuse/core': [
              'useMouse', // import { useMouse } from '@vueuse/core',
              // alias
              ['useFetch', 'useMyFetch'] // import { useFetch as useMyFetch } from '@vueuse/core',
            ],
            axios: [
              ['default', 'axios'] // import { default as axios } from 'axios',
            ],
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar',
              'createDiscreteApi',
              'NButton',
              'NTag',
              'NIcon',
              'NPopconfirm',
              'NInput',
              'NAvatar',
              'NImage',
              'NEllipsis'
            ]
          },
          {
            from: 'naive-ui',
            imports: [
              'DataTableBaseColumn',
              'DataTableColumn',
              'DataTableColumns',
              'DataTableCreateSummary',
              'DropdownOption',
              'FormInst',
              'FormItemInst',
              'FormItemRule',
              'FormRules',
              'FormValidationError',
              'MenuInst',
              'MenuOption',
              'UploadCustomRequestOptions',
              'UploadFileInfo',
              'UploadInst'
            ],
            type: true
          },
          {
            from: '@/constants',
            imports: ['AppMetadata']
          },
          {
            from: '@/hooks',
            imports: ['useLoading']
          },
          // example type import
          {
            from: 'vue-router',
            imports: ['RouteLocationRaw'],
            type: true
          }
        ],
        dirs: ['src/api/**', 'src/hooks/**', 'src/store/**', 'src/utils/**'],
        vueTemplate: true, // 支持在 Vue 模版中使用
        // Enable auto import by filename for default module exports under directories
        defaultExportByFilename: false
      }),
      Components({
        dts: '@types/components.d.ts',
        resolvers: [NaiveUiResolver()],
        types: [
          {
            from: 'vue-router',
            names: ['RouterLink', 'RouterView']
          }
        ],
        directives: true, // 自动导入指令
        dirs: ['src/components', 'src/layouts', 'src/charts'],
        extensions: ['vue']
      }),
      Icons({
        // experimental
        autoInstall: true
      })
    ],
    server: {
      host: true,
      port,
      strictPort: true,
      open: false,
      proxy
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
    }
  }
})
