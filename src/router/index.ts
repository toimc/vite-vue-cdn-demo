import { createRouter, createWebHistory } from 'vue-router/auto'
// import HomeView from '../views/HomeView.vue'
// import { routes } from 'vue-router/auto/routes'
import { setupLayouts } from 'virtual:generated-layouts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  extendRoutes: (routes) => {
    // console.log('🚀 ~ file: index.ts:7 ~ routes:', routes)
    return setupLayouts(routes)
  }
})

export default router
