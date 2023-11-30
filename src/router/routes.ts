import {
  UNIVERSAL_COMPONENTS_PREFIX,
  SYSTEM_FUNCTIONS_PREFIX,
  ERROR_PAGES_PREFIX,
  CODE_TEMPLATES_PREFIX,
  SYSTEM_TOOLS_PREFIX,
  MULTI_LEVEL_MENUS
} from './prefix'

import MarkdownIcon from '~icons/ri/markdown-line'
import InternalServerErrorIcon from '~icons/lucide/server-off'
import EditIcon from '~icons/material-symbols/edit-document-outline-rounded'
import NotFoundIcon from '~icons/tabler/error-404'
import WebSocketIcon from '~icons/tabler/brand-socket-io'
import ExcelIcon from '~icons/mdi/microsoft-excel'
import KanbanIcon from '~icons/material-symbols/view-kanban-outline'
import IframeIcon from '~icons/material-symbols/iframe-outline'
import UserManagementIcon from '~icons/mdi/account-cog-outline'
import RoleManagementIcon from '~icons/mdi/account-group'
import DictionaryManagementIcon from '~icons/ri/booklet-line'
import PermissionManagementIcon from '~icons/mdi/key-chain'
import ListTemplatesIcon from '~icons/ic/outline-list-alt'
import FormTemplatesIcon from '~icons/material-symbols/format-list-bulleted-rounded'
import HomeIcon from '~icons/material-symbols/home'
import MultiMenusIcon from '~icons/ic/baseline-format-list-bulleted'

export const routes = [
  {
    path: '/',
    name: 'base-layout',
    component: () => import('@/layouts/BaseLayout/index.vue'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/pages/Home/index.vue'),
        meta: {
          title: '首页',
          icon: HomeIcon
        }
      },

      //错误页面
      {
        path: `${ERROR_PAGES_PREFIX}/500`,
        name: '500',
        component: () => import('@/pages/ErrorPages/500/index.vue'),
        meta: {
          title: '500',
          icon: InternalServerErrorIcon
        }
      },
      {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/pages/ErrorPages/404/index.vue'),
        meta: {
          title: '404',
          icon: NotFoundIcon
        }
      },

      //代码模板
      {
        path: `${CODE_TEMPLATES_PREFIX}/list-templates`,
        name: 'list-templates',
        component: () => import('@/pages/CodeTemplates/listTemplates/index.vue'),
        meta: {
          title: '列表模版',
          icon: ListTemplatesIcon
        }
      },
      {
        path: `${CODE_TEMPLATES_PREFIX}/form-templates`,
        name: 'form-templates',
        component: () => import('@/pages/CodeTemplates/formTemplates/index.vue'),
        meta: {
          title: '表单模版',
          icon: FormTemplatesIcon
        }
      },

      //系统功能

      {
        path: `${SYSTEM_FUNCTIONS_PREFIX}/user-management`,
        name: 'user-management',
        component: () => import('@/pages/SystemFunctions/UserManagement/index.vue'),
        meta: {
          title: '用户管理',
          icon: UserManagementIcon
        }
      },
      {
        path: `${SYSTEM_FUNCTIONS_PREFIX}/dictionary-management`,
        name: 'dictionary-management',
        component: () => import('@/pages/SystemFunctions/DictionaryManagement/index.vue'),
        meta: {
          title: '字典管理',
          icon: DictionaryManagementIcon
        }
      },
      {
        path: `${SYSTEM_FUNCTIONS_PREFIX}/role-management`,
        name: 'role-management',
        component: () => import('@/pages/SystemFunctions/RoleManagement/index.vue'),
        meta: {
          title: '角色管理',
          icon: RoleManagementIcon
        }
      },
      {
        path: `${SYSTEM_FUNCTIONS_PREFIX}/permission-management`,
        name: 'permission-management',
        component: () => import('@/pages/SystemFunctions/PermissionManagement/index.vue'),
        meta: {
          title: '权限管理',
          icon: PermissionManagementIcon
        }
      },

      //通用组件
      {
        path: `${UNIVERSAL_COMPONENTS_PREFIX}/markdown`,
        name: 'markdown',
        component: () => import('@/pages/UniversalComponents/markdown/index.vue'),
        meta: {
          title: 'Markdown编辑器',
          icon: MarkdownIcon
        }
      },
      {
        path: `${UNIVERSAL_COMPONENTS_PREFIX}/editor`,
        name: 'editor',
        component: () => import('@/pages/UniversalComponents/editor/index.vue'),
        meta: {
          title: '富文本编辑器',
          icon: EditIcon
        }
      },

      //系统工具
      {
        path: `${SYSTEM_TOOLS_PREFIX}/websocket`,
        name: 'websocket',
        component: () => import('@/pages/SystemTools/socket/index.vue'),
        meta: {
          title: 'WebSocket',
          icon: WebSocketIcon
        }
      },
      {
        path: `${SYSTEM_TOOLS_PREFIX}/excel`,
        name: 'excel',
        component: () => import('@/pages/SystemTools/excel/index.vue'),
        meta: {
          title: 'excel',
          icon: ExcelIcon
        }
      },
      {
        path: `${SYSTEM_TOOLS_PREFIX}/drag-kanban`,
        name: 'drag-kanban',
        component: () => import('@/pages/SystemTools/dragKanban/index.vue'),
        meta: {
          title: '看板',
          icon: KanbanIcon
        }
      },
      {
        path: `${SYSTEM_TOOLS_PREFIX}/iframe`,
        name: 'iframe',
        component: () => import('@/pages/SystemTools/iframe/index.vue'),
        meta: {
          title: 'iframe',
          icon: IframeIcon
        }
      },

      //多级菜单
      {
        path: `${MULTI_LEVEL_MENUS}/2-1/2-1-1`,
        name: '2-1-1',
        component: () => import('@/pages/MultiLevelMenus/2-1/2-1-1/index.vue'),
        meta: {
          title: '2-1-1',
          icon: MultiMenusIcon
        }
      },
      {
        path: `${MULTI_LEVEL_MENUS}/2-1/2-1-2`,
        name: '2-1-2',
        component: () => import('@/pages/MultiLevelMenus/2-1/2-1-2/index.vue'),
        meta: {
          title: '2-1-2',
          icon: MultiMenusIcon
        }
      },
      {
        path: `${MULTI_LEVEL_MENUS}/2-2/2-2-1`,
        name: '2-2-1',
        component: () => import('@/pages/MultiLevelMenus/2-2/2-2-1/index.vue'),
        meta: {
          title: '2-2-1',
          icon: MultiMenusIcon
        }
      },

      //用户信息
      {
        path: `user-info`,
        name: 'user-info',
        component: () => import('@/pages/User/UserInfo/index.vue'),
        meta: {
          title: '个人信息'
        }
      },

      {
        path: `change-password`,
        name: 'change-password',
        component: () => import('@/pages/User/ChangePassword/index.vue'),
        meta: {
          title: '修改密码',
          icon: MultiMenusIcon
        }
      },
      {
        path: `${MULTI_LEVEL_MENUS}/2-2/2-2-1`,
        name: '2-2-1',
        component: () => import('@/pages/MultiLevelMenus/2-2/2-2-1/index.vue'),
        meta: {
          title: '2-2-1',
          icon: MultiMenusIcon
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
