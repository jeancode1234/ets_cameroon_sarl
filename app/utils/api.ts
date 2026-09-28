export function resolveApiUrl(resource: string, endpoint: string): string {
  return `/api/v1/${resource}/${endpoint}`.replace(/\/+/g, '/')
}

export function getStatusTone(status: string): 'success' | 'warning' | 'info' | 'danger' | 'neutral' {
  const normalized = status.toUpperCase()

  if (['VALIDATED', 'ACTIVE', 'SUCCESS', 'PAID', 'DONE', 'APPROVED'].includes(normalized)) {
    return 'success'
  }

  if (['PENDING', 'IN_PROGRESS', 'WAITING', 'DRAFT'].includes(normalized)) {
    return 'warning'
  }

  if (['REJECTED', 'CANCELLED', 'BLOCKED', 'FAILED'].includes(normalized)) {
    return 'danger'
  }

  return 'info'
}
