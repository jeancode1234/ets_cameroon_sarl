import { useAuth } from "~/composables/auth/useAuth"
export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth()

  if (!auth.isAuthenticated.value) {
    return navigateTo(`/auth/login?redirect=${encodeURIComponent(to.fullPath)}`)
  }

  const requiredRoles = to.meta.role
  const allowedRoles = Array.isArray(requiredRoles)
    ? requiredRoles
    : requiredRoles
      ? [requiredRoles]
      : []

  if (allowedRoles.length === 0) {
    return
  }

  const hasAccess = allowedRoles.some((role) => auth.hasRole(String(role)))

  if (!hasAccess) {
    return navigateTo('/403')
  }
})
