import { describe, expect, it } from 'vitest'
import { resolveApiUrl, getStatusTone } from '~/utils/api'

describe('resolveApiUrl', () => {
  it('builds a valid API path from a resource and endpoint', () => {
    expect(resolveApiUrl('auth', 'login')).toBe('/api/v1/auth/login')
  })
})

describe('getStatusTone', () => {
  it('returns the expected semantic tone for a status', () => {
    expect(getStatusTone('VALIDATED')).toBe('success')
    expect(getStatusTone('PENDING')).toBe('warning')
  })
})
