import { ThemeModel } from '@/types'
import { ThemeUtils } from '@/utils'
export const useThemeStore = defineStore('theme', () => {
  const theme = ref<ThemeModel>(ThemeUtils.getDefaultTheme())

  const lightThemeOverrides = {
    common: {
      primaryColor: '#096DD9',
      primaryColorHover: '#0050B3',
      primaryColorPressed: '#003A8C',
      primaryColorSuppl: '#002766'
    }
  }

  const darkThemeOverrides = {
    common: {
      primaryColor: '#096DD9',
      primaryColorHover: '#0050B3',
      primaryColorPressed: '#003A8C',
      primaryColorSuppl: '#002766'
    }
  }

  const changeTheme = (themeParam: ThemeModel) => {
    ThemeUtils.changTheme(themeParam)
    theme.value = themeParam
  }

  return { lightThemeOverrides, darkThemeOverrides, changeTheme, theme }
})
