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

export const menuOptions: MenuOption[] = [
  {
    label: '首页',
    key: 'home',
    icon: renderIcon(HomeIcon)
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
    label: '系统工具222',
    key: 'system-tools222',
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
      }
    ]
  },

  {
    label: '错误页面',
    key: 'error-pages',
    icon: renderIcon(ErrorPagesIcon),
    children: [
      {
        label: '看板111',
        key: 'drag-kanban111',
        icon: renderIcon(KanbanIcon)
      },
      {
        label: 'iframe111',
        key: 'iframe111',
        icon: renderIcon(IframeIcon)
      },
      {
        label: '500',
        key: '500',
        icon: renderIcon(InternalServerErrorIcon)
      },
      {
        label: '40411111',
        key: '40411111',
        icon: renderIcon(NotFoundIcon)
      }
    ]
  }
]
