export const routes = [
  {
    path: '/',
    name: 'base-layout',
    component: () => import('@/layouts/BaseLayout'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/pages/Home'),
        meta: {
          title: '首页'
        }
      }

      // {
      //   path: `/500`,
      //   name: '500',
      //   component: () => import('@/pages/ErrorPages/500'),
      //   meta: {
      //     title: '500',
      //     icon: 'InternalServerErrorIcon'
      //   }
      // },
      // {
      //   path: '/:pathMatch(.*)*',
      //   component: () => import('@/pages/ErrorPages/404'),
      //   meta: {
      //     title: '404',
      //     icon: 'NotFoundIcon'
      //   }
      // }
    ]
  }
  // 认证页面：不需要登录即可访问
  // {
  //   path: '/',
  //   name: 'auth-layout',
  //   component: () => import('@/layouts/AuthLayout'),
  //   children: [
  //     {
  //       path: '/login',
  //       name: 'login',
  //       component: () => import('@/pages/Auth/Login'),
  //       meta: {
  //         title: '登录',
  //         disableAuth: true,
  //         dismissTab: true
  //       }
  //     },
  //     {
  //       path: '/signup',
  //       name: 'signup',
  //       component: () => import('@/pages/Auth/Signup'),
  //       meta: {
  //         title: '注册',
  //         disableAuth: true,
  //         dismissTab: true
  //       }
  //     }
  //   ]
  // }
]
