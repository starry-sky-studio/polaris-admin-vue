import VueI18n from 'vue-i18n'

// 准备翻译的语言环境信息
const messages = {
  en: {
    message: {
      hello: 'hello world'
    }
  },
  ja: {
    message: {
      hello: 'こんにちは、世界'
    }
  }
}
const i18n = VueI18n.createI18n({
  locale: 'ja', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})
export default i18n
