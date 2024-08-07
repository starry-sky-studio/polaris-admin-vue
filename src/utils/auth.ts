export class AuthUtils {
  /**
   * token 在本地存储的健名
   */
  private static ACCESS_TOKEN_KEY = 'access_token'

  /**
   * token 在本地存储的健名
   */
  private static LOGIN_INFO_KEY = 'login_info'

  /**
   * 获取访问令牌
   * @description 获取 `localStorage` 中存储的访问令牌
   * @returns `localStorage` 中存储的访问令牌
   * @example
   * ```ts
   * AuthUtils.getToken()
   * ```
   */
  static getToken(): string {
    return localStorage.getItem(this.ACCESS_TOKEN_KEY) ?? ''
  }

  /**
   * 获取 authorization
   * @description 拼接访问令牌，格式如：`Bearer` + `accessToken`
   * @param prefix - 前缀，默认为 `Bearer`
   * @returns 访问令牌
   * @example
   * ```ts
   * AuthUtils.getAuthorization() // 默认是 Bearer 开头
   * AuthUtils.getAuthorization("Basic") // 自定义前缀
   * ```
   */
  static getAuthorization(prefix: string = 'Bearer') {
    return `${prefix} ${this.getToken()}`
  }

  /**
   * 设置访问令牌
   * @description 设置 `localStorage` 中存储的访问令牌
   * @param token - 访问令牌
   * @example
   * ```ts
   * AuthUtils.setToken("xxx")
   * ```
   */
  static setToken(token: string) {
    localStorage.setItem(this.ACCESS_TOKEN_KEY, token)
  }

  /**
   * 清除 token
   * @description 清除 `localStorage` 中存储的访问令牌
   * @example
   * ```ts
   * AuthUtils.clearToken()
   * ```
   */
  static clearToken() {
    localStorage.removeItem(this.ACCESS_TOKEN_KEY)
  }

  /**
   * 判断当前是否已经登录
   * @description 根据是否存在访问令牌，判断当前是否处于登录状态
   * @returns 是否已经登录
   * @example
   * ```ts
   * AuthUtils.isAuthenticated()
   * ```
   */
  static isAuthenticated(): boolean {
    return !!localStorage.getItem(this.ACCESS_TOKEN_KEY)
  }

  /**
   * 存储记住密码登录信息
   * @description  存储记住密码登录信息
   * @returns
   */
  static setLoginInfo(data: LoginModel) {
    localStorage.setItem(this.LOGIN_INFO_KEY, JSON.stringify(data))
  }

  /**
   * 清空存储记住密码登录信息
   * @description  存储记住密码登录信息
   * @returns
   */
  static clearloginInfo() {
    localStorage.removeItem(this.LOGIN_INFO_KEY)
  }
  /**
   * 得到存储记住密码登录信息
   * @description  存储记住密码登录信息
   * @returns
   */
  static getLoginInfo(): LoginModel | null {
    const loginInfoString = localStorage.getItem(this.LOGIN_INFO_KEY)
    if (!loginInfoString) return null
    const { username, password } = JSON.parse(loginInfoString)
    if (!username || !password) return null
    return { username, password }
  }
}
