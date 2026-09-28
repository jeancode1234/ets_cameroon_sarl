<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Validations</h1>
    </div>
    <div class="site-card p-5">
      <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300">
        <li v-for="item in items" :key="item.id" class="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-700">
          <span>{{ item.label }}</span>
          <span>{{ item.status }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'MANAGER' })

const items = [
  { id: 1, label: 'Rapport prospecteur', status: 'À revoir' },
  { id: 2, label: 'Demande de devis client', status: 'Validé' },
  { id: 3, label: 'Commission équipe', status: 'En attente' }
]
</script>
