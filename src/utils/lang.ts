import { Lang } from '@/types'
export class LangUtils {
  /**
   * token 在本地存储的健名
   */
  private static LANG_KEY = 'lang'

  /**
   * 获取语言
   * @description 获取 `localStorage` 中存储的访语言
   * @returns `localStorage` 中存储的语言
   * @example
   * ```ts
   * LangUtils.getLang()
   * ```
   */
  static getLang(): string {
    return localStorage.getItem(this.LANG_KEY) ?? ''
  }

  /**
   * 设置本地存储中的语言
   * @description 设置 `localStorage` 本地存储中的语言
   * @param lang
   * @example
   * ```ts
   * LangUtils.setLang("xxx")
   * ```
   */
  static setLang(lang: Lang) {
    localStorage.setItem(this.LANG_KEY, lang)
  }

  /**
   * 清除 lang
   * @description 清除 `localStorage` 中存储的语言
   * @example
   * ```ts
   * LangUtils.clearLang()
   * ```
   */
  static clearLang() {
    localStorage.removeItem(this.LANG_KEY)
  }

  /**
   * 获取浏览器语言
   */
  static getBrowserLang(): string {
    const lang = window.navigator.language
    if (lang.includes('zh')) {
      return Lang['zh-CN']
    }
    if (lang.includes('en')) {
      return Lang['en-US']
    }
    return ''
  }

  /**
   * 得到默认语言
   * @description LangUtils
   * @returns lang
   * @example
   * ```ts
   * LangUtils.getDefultLang()
   * ```
   */
  static getDefultLang(): string {
    return this.getLang() ?? this.getBrowserLang() ?? Lang['zh-CN']
  }
}
