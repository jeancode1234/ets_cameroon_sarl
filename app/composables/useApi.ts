import type { ApiErrorPayload, ApiResponse, PageResponse } from '~/types/api'

export class BusinessError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'BusinessError'
  }
}

export class TechnicalError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'TechnicalError'
  }
}

export class ValidationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ValidationError'
  }
}

export class AuthenticationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AuthenticationError'
  }
}

export class AuthorizationError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'AuthorizationError'
  }
}

export function useApi() {
  const runtimeConfig = useRuntimeConfig()
  const baseUrl = runtimeConfig.public.apiBaseUrl as string

  async function request<T>(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    endpoint: string,
    options?: {
      body?: unknown
      query?: Record<string, string | number | boolean | undefined>
      headers?: Record<string, string>
      ignoreAuth?: boolean
    }
  ): Promise<T> {
    const url = new URL(`${baseUrl.replace(/\/$/, '')}${endpoint}`)

    if (options?.query) {
      Object.entries(options.query).forEach(([key, value]) => {
        if (value !== undefined) {
          url.searchParams.set(key, String(value))
        }
      })
    }

    const token = useCookie<string | null>('access_token').value
    const headers = {
      'Content-Type': 'application/json',
      ...options?.headers,
      ...(token && !options?.ignoreAuth ? { Authorization: `Bearer ${token}` } : {})
    }

    try {
      const response = await $fetch<T>(url.toString(), {
        method,
        body: options?.body ? JSON.stringify(options.body) : undefined,
        headers,
        onResponseError: async ({ response }) => {
          if (response.status === 401 && !options?.ignoreAuth) {
            const refreshToken = useCookie<string | null>('refresh_token').value
            if (refreshToken) {
              const refreshed = await $fetch<ApiResponse<{ accessToken?: string; refreshToken?: string }>>(
                `${baseUrl.replace(/\/$/, '')}/auth/refresh`,
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${refreshToken}`
                  }
                }
              )

              const nextAccessToken = refreshed.data?.accessToken ?? refreshed.data?.refreshToken ?? token
              if (nextAccessToken) {
                useCookie('access_token').value = nextAccessToken
              }
              return
            }

            throw new AuthenticationError('Session expirée.')
          }

          if (response.status === 403) {
            throw new AuthorizationError('Accès refusé.')
          }

          if (response.status === 400) {
            throw new ValidationError('Les données envoyées sont invalides.')
          }

          if (response.status === 422) {
            throw new BusinessError('Vérifiez les informations saisies.')
          }

          if (response.status === 500) {
            throw new TechnicalError('Une erreur serveur est survenue.')
          }
        }
      })

      return response
    } catch (error) {
      if (error instanceof AuthenticationError) {
        useCookie('access_token').value = null
        useCookie('refresh_token').value = null
        await navigateTo('/auth/login', { replace: true })
      }

      throw error
    }
  }

  return {
    get: <T>(endpoint: string, query?: Record<string, string | number | boolean | undefined>) => request<T>('GET', endpoint, { query }),
    post: <T>(endpoint: string, body?: unknown, additional?: { ignoreAuth?: boolean }) => request<T>('POST', endpoint, { body, ignoreAuth: additional?.ignoreAuth }),
    put: <T>(endpoint: string, body?: unknown) => request<T>('PUT', endpoint, { body }),
    patch: <T>(endpoint: string, body?: unknown) => request<T>('PATCH', endpoint, { body }),
    delete: <T>(endpoint: string) => request<T>('DELETE', endpoint),
    request
  }
}

export function useToast() {
  const toasts = useState<Array<{ id: number; message: string; type: 'success' | 'error' | 'info' }>>('toasts', () => [])

  function show(message: string, type: 'success' | 'error' | 'info' = 'info') {
    const id = Date.now() + Math.random()
    toasts.value.push({ id, message, type })
    setTimeout(() => {
      toasts.value = toasts.value.filter((toast) => toast.id !== id)
    }, 4000)
  }

  return {
    show,
    success: (message: string) => show(message, 'success'),
    error: (message: string) => show(message, 'error'),
    info: (message: string) => show(message, 'info')
  }
}

export function useWhatsApp() {
  const runtimeConfig = useRuntimeConfig()
  const number = runtimeConfig.public.whatsappNumber as string

  const href = computed(() => {
    if (!number) return 'https://wa.me/'
    return `https://wa.me/${number.replace(/\D/g, '')}`
  })

  return { href }
}
