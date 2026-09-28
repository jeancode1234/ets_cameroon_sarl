import type { ApiResponse } from '~/types/api'
import type { AuthUser, LoginRequest, RegisterRequest } from '~/types/auth'

export const authService = {
  login: (payload: LoginRequest) => useApi().post<ApiResponse<AuthUser>>('/auth/login', payload),
  register: (payload: RegisterRequest) => useApi().post<ApiResponse<AuthUser>>('/auth/register', payload),
  refresh: () => useApi().post<ApiResponse<AuthUser>>('/auth/refresh', {}),
  logout: () => useApi().post('/auth/logout', {}),
  me: () => useApi().get<ApiResponse<AuthUser>>('/auth/me')
}
