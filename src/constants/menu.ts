import type { MenuOption } from 'naive-ui'

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
import SystemFunctionsIcon from '~icons/mdi/function-variant'
import SystemToolsIcon from '~icons/mdi/tools'
import CodeTemplatesIcon from '~icons/solar/code-bold'
import BuiltinComponentsIcon from '~icons/mdi/puzzle'
import ErrorPagesIcon from '~icons/ic/baseline-error-outline'
import MultiMenusIcon from '~icons/ic/baseline-format-list-bulleted'

export const myMenuOptions: MenuOption[] = [
  {
    label: '首页',
    key: 'home',
    icon: renderIcon(HomeIcon)
  },
  {
    label: '首页',
    key: 'home',
    icon: renderIcon(HomeIcon),
    children: [
      {
        label: '用户管理',
        key: 'user-management',
        icon: renderIcon(UserManagementIcon)
      }
    ]
  },

  {
    label: '系统功能',
    key: 'system-functions',
    icon: renderIcon(SystemFunctionsIcon),
    children: [
      {
        label: '用户管理',
        key: 'user-management',
        icon: renderIcon(UserManagementIcon)
      },
      {
        label: '字典管理',
        key: 'dictionary-management',
        icon: renderIcon(DictionaryManagementIcon)
      },
      {
        label: '角色管理',
        key: 'role-management',
        icon: renderIcon(RoleManagementIcon)
      },
      {
        label: '权限管理',
        key: 'permission-management',
        icon: renderIcon(PermissionManagementIcon)
      }
    ]
  },

  {
    label: '代码模板',
    key: 'code-templates',
    icon: renderIcon(CodeTemplatesIcon),
    children: [
      {
        label: '列表模版',
        key: 'list-templates',
        icon: renderIcon(ListTemplatesIcon)
      },
      {
        label: '表单模版',
        key: 'form-templates',
        icon: renderIcon(FormTemplatesIcon)
      }
    ]
  },
  {
    label: '通用组件',
    key: 'universal-components',
    icon: renderIcon(BuiltinComponentsIcon),
    children: [
      {
        label: 'Markdown编辑器',
        key: 'markdown',
        icon: renderIcon(MarkdownIcon)
      },
      {
        label: '富文本编辑器',
        key: 'editor',
        icon: renderIcon(EditIcon)
      }
    ]
  },

  {
    label: '系统工具',
    key: 'system-tools',
    icon: renderIcon(SystemToolsIcon),
    children: [
      {
        label: 'websocket',
        key: 'websocket',
        icon: renderIcon(WebSocketIcon)
      },
      {
        label: 'excel',
        key: 'excel',
        icon: renderIcon(ExcelIcon)
      },
      {
        label: '看板',
        key: 'drag-kanban',
        icon: renderIcon(KanbanIcon)
      },
      {
        label: 'iframe',
        key: 'iframe',
        icon: renderIcon(IframeIcon)
      }
    ]
  },

  {
    label: '错误页面',
    key: 'error-pages',
    icon: renderIcon(ErrorPagesIcon),
    children: [
      {
        label: '500',
        key: '500',
        icon: renderIcon(InternalServerErrorIcon)
      },
      {
        label: '404',
        key: '404',
        icon: renderIcon(NotFoundIcon)
      }
    ]
  },
  {
    label: '多级菜单',
    key: 'multi-level-menus',
    icon: renderIcon(MultiMenusIcon),
    children: [
      {
        label: '2-1',
        key: '2-1',
        icon: renderIcon(MultiMenusIcon),
        children: [
          {
            label: '2-1-1',
            key: '2-1-1',
            icon: renderIcon(MultiMenusIcon)
          },
          {
            label: '2-1-2',
            key: '2-1-2',
            icon: renderIcon(MultiMenusIcon)
          }
        ]
      },
      {
        label: '2-2',
        key: '2-2',
        icon: renderIcon(MultiMenusIcon),
        children: [
          {
            label: '2-2-1',
            key: '2-2-1',
            icon: renderIcon(MultiMenusIcon)
          }
        ]
      }
    ]
  }
]

//菜单数据缓存

export const menuCacheMap = new Map<string, MenuOption | undefined>()

/**
 * 根据当前路由路径递归匹配菜单数据
 */

export function getMenuItem(key: string, menuTree: MenuOption[]): MenuOption | undefined {
  if (menuCacheMap.has(key)) {
    const cachedItem = menuCacheMap.get(key)
    if (cachedItem === null) {
      return undefined
    }
    return cachedItem
  }

  //匹配当前菜单数据
  const menu = menuTree.find((m) => m?.key === key)

  if (menu) {
    menuCacheMap.set(key, menu)

    return menu
  }

  //在孩子里面找

  for (const item of menuTree) {
    if (item.key === key) {
      menuCacheMap.set(key, item)
      return item
    }
    const { children } = item ?? {}
    if (children) {
      const menuItem = getMenuItem(key, children)
      if (menuItem) {
        menuCacheMap.set(key, menuItem)
        return menuItem
      }
    }
  }
  //说明没有找到
  //menuCacheMap.set(key, undefined)
  return undefined
}
