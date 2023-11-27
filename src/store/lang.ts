import { Lang } from '@/types'
import { LangUtils } from '@/utils'
import { zhCN, dateZhCN, enUS, dateEnUS } from 'naive-ui'

export const useLangStore = defineStore('lang', () => {
  const lang = ref<Lang>(LangUtils.getDefultLang())

  const changeLang = (langParam: Lang) => {
    LangUtils.setLang(langParam)
    lang.value = langParam
  }

  //naive语言
  const naiveLang = computed(() => (lang.value === Lang['zh-CN'] ? zhCN : enUS))

  //naive日期语言
  const naiveDateLang = computed(() => (lang.value === Lang['zh-CN'] ? dateZhCN : dateEnUS))

  watch(
    () => lang.value,
    () => changeLang(lang.value),
    { immediate: true }
  )

  return { changeLang, lang, naiveLang, naiveDateLang }
})
