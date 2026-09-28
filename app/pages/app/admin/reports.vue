<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Rapports</h1>
    </div>
    <div class="site-card p-5">
      <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300">
        <li v-for="report in reports" :key="report.title" class="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
          <div class="flex items-center justify-between">
            <span>{{ report.title }}</span>
            <span class="rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">{{ report.status }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'ADMIN' })

const reports = [
  { title: 'Performance commerciale', status: 'Validé' },
  { title: 'Suivi chantier', status: 'À vérifier' },
  { title: 'Analyse de satisfaction', status: 'Valide' }
]
</script>
