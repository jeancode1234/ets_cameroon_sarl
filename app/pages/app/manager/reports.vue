<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Rapports</h1>
    </div>
    <div class="site-card p-5">
      <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300">
        <li v-for="item in reports" :key="item.id" class="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
          <div class="flex items-center justify-between">
            <span>{{ item.title }}</span>
            <span>{{ item.status }}</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'MANAGER' })

const reports = [
  { id: 1, title: 'Rapport de zone Douala', status: 'À valider' },
  { id: 2, title: 'Suivi des ventes', status: 'Validé' },
  { id: 3, title: 'Analyse équipe', status: 'En cours' }
]
</script>
