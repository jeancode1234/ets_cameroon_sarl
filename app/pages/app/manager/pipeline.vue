<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Manager</p>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Pipeline commercial</h1>
        </div>
        <BaseButton variant="primary">Ajouter étape</BaseButton>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-3">
      <div v-for="stage in stages" :key="stage.name" class="site-card p-5">
        <p class="text-sm text-slate-500 dark:text-slate-400">{{ stage.name }}</p>
        <p class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">{{ stage.count }}</p>
      </div>
    </div>

    <div class="site-card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full text-left text-sm">
          <thead class="bg-slate-50 dark:bg-slate-900">
            <tr>
              <th class="px-4 py-3 font-semibold">Prospect</th>
              <th class="px-4 py-3 font-semibold">Projet</th>
              <th class="px-4 py-3 font-semibold">Étape</th>
              <th class="px-4 py-3 font-semibold">Score</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="lead in leads" :key="lead.name" class="border-t border-slate-200 dark:border-slate-700">
              <td class="px-4 py-3">{{ lead.name }}</td>
              <td class="px-4 py-3">{{ lead.project }}</td>
              <td class="px-4 py-3">{{ lead.stage }}</td>
              <td class="px-4 py-3">{{ lead.score }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'MANAGER' })

const stages = [
  { name: 'Nouveau', count: 18 },
  { name: 'Qualifié', count: 10 },
  { name: 'Devis envoyé', count: 6 }
]

const leads = [
  { name: 'Amina Y.', project: 'Hôtel de luxe', stage: 'Qualifié', score: '82%' },
  { name: 'Boris N.', project: 'Restaurant', stage: 'Devis envoyé', score: '74%' },
  { name: 'Claudine T.', project: 'Villa', stage: 'Nouveau', score: '58%' }
]
</script>
