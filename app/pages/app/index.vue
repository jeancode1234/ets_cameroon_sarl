<script setup lang="ts">
definePageMeta({ middleware: ['auth'] })

const auth = useAuth()
const targetRoute = computed(() => auth.getHomeRouteForRole(auth.user.value?.role))

if (auth.isAuthenticated.value) {
  await navigateTo(targetRoute.value, { replace: true })
}
</script>

<template>
  <div class="flex min-h-[60vh] items-center justify-center">
    <div class="site-card max-w-xl p-8 text-center">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Espace privé</p>
      <h1 class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">Bienvenue dans votre espace</h1>
      <p class="mt-3 text-slate-600 dark:text-slate-300">Vous allez être redirigé vers votre tableau de bord selon votre rôle.</p>
      <div class="mt-6 flex justify-center gap-3">
        <NuxtLink :to="targetRoute" class="premium-button premium-button-primary">Accéder au tableau de bord</NuxtLink>
      </div>
    </div>
  </div>
</template>
