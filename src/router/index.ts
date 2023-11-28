import NProgress from 'nprogress'

import { routes } from './routes.ts'
import { createRouter, createWebHistory } from 'vue-router'

import { SiteUtils } from '@/utils'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})
router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    NProgress.start()
  }
  next()
})

router.afterEach((to) => {
  // 拼接站点标题
  SiteUtils.setDocumentTitle(to.meta.title as string)
  NProgress.done()
})
export default router
