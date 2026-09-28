<template>
  <header class="sticky top-0 z-30 border-b border-slate-200 bg-white/80 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/80">
    <div class="flex items-center justify-between px-4 py-4 md:px-6">
      <div>
        <p class="text-[10px] uppercase tracking-[0.24em] text-slate-400">Espace {{ currentRoleLabel }}</p>
        <h1 class="text-lg font-semibold text-slate-900 dark:text-white">Tableau de bord</h1>
      </div>

      <div class="flex items-center gap-3">
        <NuxtLink to="/app/notifications" class="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700 transition hover:border-primary/30 hover:text-primary dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
          Notifications
        </NuxtLink>
        <div class="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-2 py-1.5 dark:border-slate-700 dark:bg-slate-900">
          <div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-white shadow-[0_8px_18px_rgba(8,47,90,0.2)]">{{ initials }}</div>
          <div class="hidden text-left sm:block">
            <p class="text-xs text-slate-500 dark:text-slate-400">Compte</p>
            <p class="text-sm font-medium text-slate-900 dark:text-white">{{ displayedName }}</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const auth = useAuth()
const role = computed(() => auth.user.value?.role ?? 'USER')
const roleLabels: Record<string, string> = {
  ADMIN: 'administration',
  MANAGER: 'manager',
  PROSPECTEUR: 'prospecteur',
  CLIENT: 'client',
  PARTENAIRE: 'partenaire',
  USER: 'utilisateur'
}

const currentRoleLabel = computed(() => roleLabels[role.value] ?? 'utilisateur')
const displayedName = computed(() => {
  const user = auth.user.value
  if (!user) return 'Compte'
  return `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim() || user.email
})
const initials = computed(() => {
  const user = auth.user.value
  if (!user) return 'U'
  const first = user.firstName?.[0] ?? user.email?.[0] ?? 'U'
  const last = user.lastName?.[0] ?? ''
  return `${first}${last}`.toUpperCase()
})
</script>
