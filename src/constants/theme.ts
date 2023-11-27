import type { GlobalThemeOverrides } from 'naive-ui'

/**
 * 全局亮色主题配置项
 */
export const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily:
      'Nunito, Noto Sans SC, Noto Color Emoji, system-ui, -apple-system, Roboto, Helvetica Neue, Arial, sans-serif',
    primaryColor: '#A5B4FC',
    primaryColorHover: '#6366F1',
    primaryColorPressed: '#818CF8',
    primaryColorSuppl: '#C7D2EF'
  },
  Dialog: {
    contentMargin: '20px 0 0 0',
    padding: '20px'
  },
  Card: {
    borderRadius: '8px'
  }
}

/**
 * 全局暗色主题配置项
 */
export const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    fontFamily:
      'Nunito, Noto Sans SC, Noto Color Emoji, system-ui, -apple-system, Roboto, Helvetica Neue, Arial, sans-serif',
    primaryColor: '#A5B4FC',
    primaryColorHover: '#6366F1',
    primaryColorPressed: '#818CF8',
    primaryColorSuppl: '#C7D2EF'
  },
  Dialog: {
    contentMargin: '20px 0 0 0',
    padding: '20px'
  },
  Card: {
    borderRadius: '8px'
  }
}
