<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Prospecteur</p>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Suivi des tâches</h1>
        </div>
        <BaseButton variant="primary">Nouvelle tâche</BaseButton>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <div v-for="task in tasks" :key="task.name" class="site-card p-5">
        <p class="text-sm text-slate-500 dark:text-slate-400">{{ task.name }}</p>
        <p class="mt-3 text-xl font-bold text-slate-900 dark:text-white">{{ task.status }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'PROSPECTEUR' })

const tasks = [
  { name: 'Visite chantier', status: 'À faire' },
  { name: 'Relance client', status: 'En cours' },
  { name: 'Rapport terrain', status: 'Validé' }
]
</script>
