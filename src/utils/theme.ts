import { ThemeModel } from '@/types'
export class ThemeUtils {
  //本地存储主题的健明
  private static THEME = 'theme'

  //设置主题
  static setTheme = (theme: ThemeModel) => localStorage.setItem(ThemeUtils.THEME, theme)
  //清空主题
  static clearTheme = () => localStorage.removeItem(ThemeUtils.THEME)

  //获取主题
  static getTheme = () => localStorage.getItem(ThemeUtils.THEME)

  //得到默认主题
  static getDefaultTheme = (): ThemeModel => {
    if (
      localStorage.theme === 'light' ||
      (!(ThemeUtils.THEME in localStorage) &&
        window.matchMedia('(prefers-color-scheme: light)').matches)
    ) {
      return ThemeModel.LIGHT
    }
    return ThemeModel.DARK
  }
  //修改主题
  static changTheme = (theme: ThemeModel) => {
    ThemeUtils.setTheme(theme)
    console.log(theme)
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }
}
