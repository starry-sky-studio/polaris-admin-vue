import { ThemeModel } from '@/types'
import { ThemeUtils } from '@/utils'
import { darkTheme, lightTheme } from 'naive-ui'
import { lightThemeOverrides, darkThemeOverrides } from '@/constants'

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<ThemeModel>(ThemeUtils.getDefaultTheme())

  /**
   * Naive UI 组件主题
   * @description 根据当前主题模式，返回对应的 Naive UI 主题
   */
  const naiveTheme = computed(() => (theme.value === ThemeModel.LIGHT ? lightTheme : darkTheme))

  /**
   * Naive UI 组件主题覆盖
   * @description 根据当前主题模式，返回对应的 Naive UI 主题覆盖
   */
  const naiveThemeOverrides = computed(() =>
    theme.value === ThemeModel.LIGHT ? lightThemeOverrides : darkThemeOverrides
  )

  const changeTheme = (themeParam: ThemeModel) => {
    ThemeUtils.changTheme(themeParam)
    theme.value = themeParam
  }

  watch(
    () => theme.value,
    () => changeTheme(theme.value),
    // NOTE: 初始化时，根据系统主题设置主题模式
    { immediate: true }
  )

  return {
    naiveThemeOverrides,
    naiveTheme,
    lightThemeOverrides,
    darkThemeOverrides,
    changeTheme,
    theme
  }
})
