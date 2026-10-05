import { useAuth } from "~/composables/auth/useAuth"
export default defineNuxtRouteMiddleware(() => {
  const auth = useAuth()

  if (auth.isAuthenticated.value) {
    return navigateTo('/app')
  }
})
