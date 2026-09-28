import { getHomeRouteForRole as resolveHomeRoute, getPermissionsForRole, type RoleName } from '~/utils/auth-role'

export function useAuth() {
  const user = useState<AuthUser | null>('auth.user', () => null)
  const permissions = useState<string[]>('auth.permissions', () => [])
  const roles = useState<RoleName[]>('auth.roles', () => [])
  const accessToken = useCookie<string | null>('access_token', { default: () => null, sameSite: 'lax' })
  const refreshToken = useCookie<string | null>('refresh_token', { default: () => null, sameSite: 'lax' })
  const isAuthenticated = computed(() => !!user.value && !!accessToken.value)

  function setSessionValue(nextUser: AuthUser | null, nextPermissions: string[] = [], nextRoles: string[] = []) {
    const safeUser = nextUser ? { ...nextUser, role: nextUser.role ?? 'USER' } : null
    const safePermissions = nextPermissions.length > 0 ? nextPermissions : getPermissionsForRole(safeUser?.role)
    const safeRoles = nextRoles.length > 0 ? nextRoles.filter(Boolean) as RoleName[] : safeUser ? [safeUser.role] : []

    user.value = safeUser
    permissions.value = safePermissions
    roles.value = safeRoles

    if (safeUser) {
      if (!accessToken.value) {
        accessToken.value = 'demo-access-token'
      }
      if (!refreshToken.value) {
        refreshToken.value = 'demo-refresh-token'
      }
    }
  }

  function getHomeRouteForRole(role?: string) {
    return resolveHomeRoute(role)
  }

  async function login(payload: LoginRequest) {
    const api = useApi()
    const result = await api.post<ApiResponse<AuthUser>>('/auth/login', payload)
    const nextUser = result.data
    setSessionValue(nextUser, nextUser.permissions ?? [], [nextUser.role])
    return result
  }

  async function register(payload: RegisterRequest) {
    const api = useApi()
    return api.post<ApiResponse<AuthUser>>('/auth/register', payload)
  }

  async function logout() {
    const api = useApi()
    await api.post('/auth/logout', {})
    user.value = null
    permissions.value = []
    roles.value = []
    accessToken.value = null
    refreshToken.value = null
    await navigateTo('/auth/login')
  }

  async function refresh() {
    const api = useApi()
    const result = await api.post<ApiResponse<AuthUser>>('/auth/refresh', {}, { ignoreAuth: true })
    const nextUser = result.data
    setSessionValue(nextUser, nextUser.permissions ?? [], [nextUser.role])
    return result
  }

  async function fetchCurrentUser() {
    const api = useApi()
    const result = await api.get<ApiResponse<AuthUser>>('/auth/me')
    const nextUser = result.data
    setSessionValue(nextUser, nextUser.permissions ?? [], [nextUser.role])
    return result
  }

  function hasRole(role: string) {
    return roles.value.includes(role as RoleName) || user.value?.role === role
  }

  function hasPermission(permission: string) {
    return permissions.value.includes(permission) || getPermissionsForRole(user.value?.role).includes(permission)
  }

  function can(permission: string) {
    return hasPermission(permission)
  }

  return {
    user,
    permissions,
    roles,
    isAuthenticated,
    accessToken,
    refreshToken,
    login,
    register,
    logout,
    refresh,
    fetchCurrentUser,
    hasRole,
    hasPermission,
    can,
    getHomeRouteForRole
  }
}
