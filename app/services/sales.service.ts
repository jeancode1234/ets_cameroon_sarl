import type { ApiResponse, PageResponse } from '~/types/api'
import type { Sale } from '~/types/sale'

export const salesService = {
  list: (query?: Record<string, string | number | boolean | undefined>) =>
    useApi().get<ApiResponse<PageResponse<Sale>> | Sale[]>('/sales', query),
  create: (payload: Partial<Sale>) => useApi().post<ApiResponse<Sale>>('/sales', payload)
}
