import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

import VueRouter from 'unplugin-vue-router/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'

import { VueRouterAutoImports } from 'unplugin-vue-router'

import Layouts from 'vite-plugin-vue-layouts'
import UnoCSS from 'unocss/vite'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import { cdn } from 'vite-plugin-cdn2'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production'
  return {
    plugins: [
      VueRouter({
        /* options */
      }),
      vue(),
      vueJsx(),
      Layouts(),
      UnoCSS(),
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
          /\.md$/ // .md
        ],

        // global imports to register
        imports: [
          // presets
          'vue',
          // 'vue-router'
          VueRouterAutoImports,
          '@vueuse/core'
        ],
        resolvers: isProd ? [] : [ElementPlusResolver()],
        vueTemplate: true
      }),
      Components({
        directoryAsNamespace: false,
        collapseSamePrefixes: true,
        resolvers: isProd ? [] : [ElementPlusResolver()]
      }),
      cdn({
        url: 'https://unpkg.com',
        modules: [
          { name: 'vue', relativeModule: './dist/vue.global.prod.js' },
          { name: 'vue-demi', relativeModule: './lib/index.iife.js' },
          // {
          //   name: 'vue-router',
          //   aliases: ['auto'],
          //   relativeModule: './dist/vue-router.global.prod.js'
          // },
          {
            name: 'element-plus',
            relativeModule: './dist/index.full.min.js',
            aliases: ['es', 'lib'],
            spare: [
              'https://cdn.jsdelivr.net/npm/element-plus@2.4.2/dist/index.min.css',
              'https://cdn.jsdelivr.net/npm/element-plus@2.4.2/theme-chalk/dark/css-vars.css'
            ]
          },
          { name: 'pinia', relativeModule: './dist/pinia.iife.prod.js' }
        ]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port: 5175
    }
  }
})
