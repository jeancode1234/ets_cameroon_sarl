<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Administration</p>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Alertes & notifications</h1>
        </div>
        <BaseButton variant="primary">Nouvelle alerte</BaseButton>
      </div>
    </div>

    <div class="space-y-4">
      <article v-for="alert in alerts" :key="alert.id" class="site-card p-5">
        <div class="flex items-start justify-between gap-4">
          <div>
            <p class="text-base font-semibold text-slate-900 dark:text-white">{{ alert.title }}</p>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ alert.message }}</p>
          </div>
          <span class="rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-[0.14em]" :class="getSeverityClass(alert.severity)">{{ alert.severity }}</span>
        </div>
        <p class="mt-4 text-xs text-slate-500 dark:text-slate-400">{{ alert.createdAt }}</p>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'ADMIN' })

const { alertData } = useBusinessData()
const alerts = alertData

function getSeverityClass(severity: string) {
  const map: Record<string, string> = {
    info: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-300',
    success: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
    warning: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300',
    danger: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300'
  }

  return map[severity] ?? map.info
}
</script>
