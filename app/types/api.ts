export interface ApiResponse<T> {
  success: boolean
  message?: string
  data: T
}

export interface PageResponse<T> {
  content: T[]
  page: number
  size: number
  totalElements: number
  totalPages: number
}

export interface ApiErrorPayload {
  statusCode?: number
  statusMessage?: string
  message?: string
  errors?: Record<string, string[]>
}
