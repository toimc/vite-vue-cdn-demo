import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'

if (import.meta.env.MODE !== 'production') {
  import('element-plus/dist/index.css')
  import('element-plus/theme-chalk/dark/css-vars.css')
}

import '@unocss/reset/tailwind-compat.css'
import 'virtual:uno.css'

const app = createApp(App)

app.use(ElementPlus)
app.use(createPinia())
app.use(router)

app.mount('#app')
