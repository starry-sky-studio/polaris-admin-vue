import type { MenuOption } from 'naive-ui'
import HomeIcon from '~icons/material-symbols/home'
export const menuOptions: MenuOption[] = [
  {
    label: '且听风吟',
    key: 'hear-the-wind-sing',
    icon: renderIcon(HomeIcon)
  },
  {
    label: '1973年的弹珠玩具',
    key: 'pinball-1973',
    icon: renderIcon(HomeIcon),
    disabled: true,
    children: [
      {
        label: '鼠',
        key: 'rat',
        icon: renderIcon(HomeIcon)
      }
    ]
  }
]
