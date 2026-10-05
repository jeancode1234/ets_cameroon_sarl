import { useAuth } from "~/composables/auth/useAuth"
export default defineNuxtRouteMiddleware((to) => {
  const auth = useAuth()

  if (!auth.isAuthenticated.value) {
    return navigateTo(`/auth/login?redirect=${encodeURIComponent(to.fullPath)}`)
  }
})
