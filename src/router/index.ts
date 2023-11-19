import NProgress from 'nprogress'

// import { routes } from './routes.ts'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('@/pages/Home') },
  { path: '/404', component: () => import('@/pages/ErrorPages/404') }
]

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

router.afterEach(() => {
  NProgress.done()
})
export default router
