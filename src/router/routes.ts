export const routes = [
  {
    path: '/',
    name: 'base-layout',
    component: () => import('@/layouts/BaseLayout/index.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home/index.vue'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/file',
        name: 'file',
        component: () => import('@/pages/file/index.vue')
      },

      {
        path: `/500`,
        name: '500',
        component: () => import('@/pages/ErrorPages/500/index.vue'),
        meta: {
          title: '500',
          icon: 'InternalServerErrorIcon'
        }
      },
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/ErrorPages/404/index.vue'),
        meta: {
          title: '404',
          icon: 'NotFoundIcon'
        }
      }
    ]
  },
  // 认证页面：不需要登录即可访问
  {
    path: '/',
    name: 'auth-layout',
    component: () => import('@/layouts/AuthLayout/index.vue'),
    children: [
      {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/Auth/Login/index.vue'),
        meta: {
          title: '登录',
          disableAuth: true,
          dismissTab: true
        }
      },
      {
        path: '/signup',
        name: 'signup',
        component: () => import('@/pages/Auth/Signup/index.vue'),
        meta: {
          title: '注册',
          disableAuth: true,
          dismissTab: true
        }
      }
    ]
  }
]
