<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Administration</p>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Utilisateurs</h1>
        </div>
        <BaseButton variant="primary">Ajouter</BaseButton>
      </div>
    </div>
    <div class="site-card p-5">
      <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300">
        <li v-for="user in users" :key="user.email" class="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-700">
          <span>{{ user.name }} — {{ user.role }}</span>
          <span>{{ user.status }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'ADMIN' })

const users = [
  { name: 'Alice Kengne', role: 'ADMIN', status: 'Actif' },
  { name: 'Paul Mvogo', role: 'MANAGER', status: 'Actif' },
  { name: 'Julie Nfou', role: 'PROSPECTEUR', status: 'Actif' }
]
</script>
