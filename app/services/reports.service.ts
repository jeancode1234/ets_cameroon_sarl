import type { ApiResponse, PageResponse } from '~/types/api'
import type { Report } from '~/types/report'

export const reportsService = {
  list: (query?: Record<string, string | number | boolean | undefined>) =>
    useApi().get<ApiResponse<PageResponse<Report>> | Report[]>('/reports', query),
  create: (payload: Partial<Report>) => useApi().post<ApiResponse<Report>>('/reports', payload),
  update: (id: string, payload: Partial<Report>) => useApi().put<ApiResponse<Report>>(`/reports/${id}`, payload)
}
