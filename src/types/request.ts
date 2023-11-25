export interface Response {
  code?: number | string
  message?: string
}

export interface BaseResponse<T = unknown> extends Response {
  data: T
}

export interface PageResponse<T = unknown> extends Response {
  data: T
  pageCount: number
  pageSize: number
  total: number
}

export enum OrderType {
  descend = 'desc',
  ascend = 'asc'
}

export interface PageBaseModel {
  page: number
  pageSize: number
  searchText?: string
  startDate?: string
  endDate?: string
}
