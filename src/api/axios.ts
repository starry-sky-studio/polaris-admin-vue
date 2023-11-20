import type {
  AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import axios from 'axios'
import { AuthUtils } from '@/utils'

import { errorMessageMap, StatusCode } from '@/constants'
import router from '@/router'

class Request {
  instance: AxiosInstance

  //Axios 配置
  private readonly config: AxiosRequestConfig = {
    baseURL: '/',
    timeout: 30000,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  }

  public constructor() {
    this.instance = axios.create(this.config)

    this.instance.interceptors.request.use(
      (req: InternalAxiosRequestConfig) => {
        if (AuthUtils.isAuthenticated()) {
          req.headers.Authorization = AuthUtils.getAuthorization()
        }
        return req
      },
      (err: AxiosError) => Promise.reject(err)
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => res.data,
      (err: AxiosError) => {
        const { response } = err
        const { data, status } = response ?? {}
        if (response && status) {
          Request.handleCode(status)
        }
        //网络错误
        if (!window.navigator.onLine) {
          router.replace('/404')
        }
        return Promise.reject(data)
      }
    )
  }

  static handleCode(code: number): void {
    const errorMessage = errorMessageMap.get(code) || 'Unknown Error!'
    switch (code) {
      case StatusCode.UNAUTHORIZED:
        AuthUtils.clearToken()

        break

      default:
        break
    }
  }

  request(config: AxiosRequestConfig) {
    return this.instance.request(config)
  }

  get<T>(url: string, params?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.get(url, { params, ...config })
  }

  post<T>(url: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.post(url, data, config)
  }

  put<T>(url: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.put(url, data, config)
  }

  delete<T>(
    url: string,
    params?: Record<string, unknown>,
    config?: AxiosRequestConfig
  ): Promise<T> {
    return this.instance.delete(url, { params, ...config })
  }

  patch<T>(url: string, data?: Record<string, unknown>, config?: AxiosRequestConfig): Promise<T> {
    return this.instance.patch(url, data, config)
  }
}

export const httpRequest = new Request()
