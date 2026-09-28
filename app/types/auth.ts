export type RoleName = 'ADMIN' | 'MANAGER' | 'PROSPECTEUR' | 'CLIENT' | 'USER'

export interface LoginRequest {
  email: string
  password: string
}

export interface RegisterRequest {
  firstName: string
  lastName: string
  email: string
  phone?: string
  password: string
  city?: string
}

export interface AuthUser {
  id: string
  email: string
  firstName?: string
  lastName?: string
  phone?: string
  role: RoleName
  permissions: string[]
  avatar?: string
  city?: string
}

export interface AuthSession {
  accessToken?: string
  refreshToken?: string
  user?: AuthUser
}
