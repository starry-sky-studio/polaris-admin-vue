import { createI18n } from 'vue-i18n'
import { Lang } from '@/types'

import en_US from '@/locales/common/en-US.json'
import zh_CN from '@/locales/common/zh-CN.json'

const i18n = createI18n({
  legacy: false,
  locale: Lang['zh-CN'], // set locale
  fallbackLocale: Lang['zh-CN'], // set fallback locale
  messages: {
    [Lang['en-US']]: en_US,
    [Lang['zh-CN']]: zh_CN
  }
})

export default i18n
