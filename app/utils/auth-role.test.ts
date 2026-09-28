import { describe, expect, it } from 'vitest'
import { getHomeRouteForRole, getPermissionsForRole, ROLE_NAMES, ROLE_PERMISSIONS } from './auth-role'

describe('auth role model', () => {
  it('exposes the complete role list', () => {
    expect(ROLE_NAMES).toEqual([
      'ADMIN',
      'MANAGER',
      'PROSPECTEUR',
      'CLIENT',
      'PARTENAIRE',
      'USER'
    ])
  })

  it('maps each role to its dashboard route', () => {
    expect(getHomeRouteForRole('ADMIN')).toBe('/app/admin/dashboard')
    expect(getHomeRouteForRole('MANAGER')).toBe('/app/manager/dashboard')
    expect(getHomeRouteForRole('PROSPECTEUR')).toBe('/app/prospecteur/dashboard')
    expect(getHomeRouteForRole('CLIENT')).toBe('/app/client/dashboard')
    expect(getHomeRouteForRole('PARTENAIRE')).toBe('/app/partenaire/dashboard')
    expect(getHomeRouteForRole('USER')).toBe('/app')
  })

  it('assigns the expected permission set per role', () => {
    expect(ROLE_PERMISSIONS.ADMIN).toContain('users:read')
    expect(ROLE_PERMISSIONS.MANAGER).toContain('reports:approve')
    expect(ROLE_PERMISSIONS.PROSPECTEUR).toContain('prospects:create')
    expect(ROLE_PERMISSIONS.CLIENT).toContain('profile:read')
    expect(ROLE_PERMISSIONS.PARTENAIRE).toContain('projects:read')
    expect(getPermissionsForRole('USER')).toContain('profile:read')
  })
})
