export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth()
  const requiredRole = (to.meta.role as string | undefined) ?? 'USER'

  if (!auth.isAuthenticated.value) {
    return navigateTo('/auth/login')
  }

  if (!auth.hasRole(requiredRole)) {
    return navigateTo('/403')
  }
})
