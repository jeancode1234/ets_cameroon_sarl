import type { ApiResponse, PageResponse } from '~/types/api'
import type { Prospect } from '~/types/prospect'

export const prospectsService = {
  list: (query?: Record<string, string | number | boolean | undefined>) =>
    useApi().get<ApiResponse<PageResponse<Prospect>> | Prospect[]>('/prospects', query),
  create: (payload: Partial<Prospect>) => useApi().post<ApiResponse<Prospect>>('/prospects', payload),
  getById: (id: string) => useApi().get<ApiResponse<Prospect>>(`/prospects/${id}`),
  update: (id: string, payload: Partial<Prospect>) => useApi().put<ApiResponse<Prospect>>(`/prospects/${id}`, payload)
}
