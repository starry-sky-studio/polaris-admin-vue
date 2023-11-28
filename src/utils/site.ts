import { AppMetadata } from '@/constants'
export class SiteUtils {
  static setDocumentTitle(title?: string) {
    title
      ? (document.title = `${AppMetadata.APP_NAME} | ${title} `)
      : (document.title = `${AppMetadata.APP_NAME} `)
  }
}
