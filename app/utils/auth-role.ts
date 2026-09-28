export const ROLE_NAMES = ['ADMIN', 'MANAGER', 'PROSPECTEUR', 'CLIENT', 'PARTENAIRE', 'USER'] as const

export type RoleName = (typeof ROLE_NAMES)[number]

export const ROLE_PERMISSIONS: Record<RoleName, string[]> = {
  ADMIN: [
    'dashboard:view',
    'users:read',
    'users:create',
    'users:update',
    'users:delete',
    'roles:read',
    'roles:update',
    'reports:read',
    'reports:create',
    'reports:approve',
    'sales:read',
    'sales:create',
    'sales:manage',
    'sales:approve',
    'prospects:manage',
    'prospects:read',
    'prospects:create',
    'prospects:update',
    'prospects:delete',
    'projects:read',
    'projects:create',
    'projects:update',
    'projects:delete',
    'clients:read',
    'clients:create',
    'clients:update',
    'settings:read',
    'settings:write',
    'profile:read',
    'profile:update'
  ],
  MANAGER: [
    'dashboard:view',
    'team:view',
    'prospects:read',
    'prospects:update',
    'prospects:create',
    'projects:read',
    'projects:update',
    'reports:read',
    'reports:create',
    'reports:approve',
    'sales:read',
    'sales:create',
    'sales:approve',
    'clients:read',
    'clients:update',
    'commissions:read',
    'profile:read',
    'profile:update'
  ],
  PROSPECTEUR: [
    'dashboard:view',
    'prospects:read',
    'prospects:create',
    'prospects:update',
    'projects:read',
    'reports:create',
    'reports:read',
    'sales:read',
    'sales:create',
    'commissions:read',
    'profile:read',
    'profile:update'
  ],
  CLIENT: [
    'dashboard:view',
    'requests:create',
    'requests:read',
    'requests:update',
    'projects:read',
    'notifications:read',
    'profile:read',
    'profile:update'
  ],
  PARTENAIRE: [
    'dashboard:view',
    'projects:read',
    'projects:track',
    'contacts:read',
    'contracts:read',
    'profile:read',
    'profile:update',
    'notifications:read'
  ],
  USER: [
    'dashboard:view',
    'profile:read',
    'profile:update'
  ]
}

export const ROLE_ROUTE_MAP: Record<RoleName, string> = {
  ADMIN: '/app/admin/dashboard',
  MANAGER: '/app/manager/dashboard',
  PROSPECTEUR: '/app/prospecteur/dashboard',
  CLIENT: '/app/client/dashboard',
  PARTENAIRE: '/app/partenaire/dashboard',
  USER: '/app'
}

export function isRoleName(value?: string | null): value is RoleName {
  return !!value && ROLE_NAMES.includes(value as RoleName)
}

export function getPermissionsForRole(role?: string | null): string[] {
  if (!role || !isRoleName(role)) {
    return ROLE_PERMISSIONS.USER
  }

  return ROLE_PERMISSIONS[role]
}

export function getHomeRouteForRole(role?: string | null): string {
  if (!role || !isRoleName(role)) {
    return ROLE_ROUTE_MAP.USER
  }

  return ROLE_ROUTE_MAP[role]
}

export function canAccessRoute(route: string, role?: string | null): boolean {
  if (!role || !isRoleName(role)) {
    return false
  }

  const accessibleRoutes: Record<RoleName, string[]> = {
    ADMIN: ['/app/admin', '/app/profile', '/app/notifications'],
    MANAGER: ['/app/manager', '/app/profile', '/app/notifications'],
    PROSPECTEUR: ['/app/prospecteur', '/app/profile', '/app/notifications'],
    CLIENT: ['/app/client', '/app/profile', '/app/notifications'],
    PARTENAIRE: ['/app/partenaire', '/app/profile', '/app/notifications'],
    USER: ['/app', '/app/profile']
  }

  return accessibleRoutes[role].some((prefix) => route === prefix || route.startsWith(prefix + '/'))
}
