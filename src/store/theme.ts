import { ThemeModel } from '@/types'
import { ThemeUtils } from '@/utils'
export const useThemeStore = defineStore('theme', () => {
  const theme = ref<ThemeModel>(ThemeUtils.getDefaultTheme())

  const lightThemeOverrides = {
    common: {
      primaryColor: '#A5B4FC',
      primaryColorHover: '#6366F1',
      primaryColorPressed: '#003A8C',
      primaryColorSuppl: '#002766'
    }
  }

  const darkThemeOverrides = {
    common: {
      primaryColor: '#A5B4FC',
      primaryColorHover: '#6366F1',
      primaryColorPressed: '#003A8C',
      primaryColorSuppl: '#002766'
    }
  }

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

  return { lightThemeOverrides, darkThemeOverrides, changeTheme, theme }
})
