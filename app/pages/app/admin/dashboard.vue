<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Administration</p>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Vue d’ensemble système</h1>
        </div>
        <BaseButton variant="primary">Gérer les paramètres</BaseButton>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div v-for="card in cards" :key="card.label" class="site-card p-5">
        <p class="text-sm text-slate-500 dark:text-slate-400">{{ card.label }}</p>
        <p class="mt-4 text-3xl font-bold text-slate-900 dark:text-white">{{ card.value }}</p>
        <p class="mt-2 text-sm text-emerald-600 dark:text-emerald-400">{{ card.delta }}</p>
      </div>
    </div>

    <div class="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <div class="site-card p-5">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">KPI par département</h2>
        <div class="mt-5 space-y-4">
          <div v-for="metric in metrics" :key="metric.label">
            <div class="mb-2 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
              <span>{{ metric.label }}</span>
              <span>{{ metric.value }}</span>
            </div>
            <div class="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
              <div class="h-2 rounded-full bg-primary" :style="`width: ${metric.percent}%`" />
            </div>
          </div>
        </div>
      </div>

      <div class="site-card p-5">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Actions critiques</h2>
        <ul class="mt-4 space-y-3">
          <li v-for="item in actions" :key="item" class="rounded-xl bg-slate-50 p-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth'], role: 'ADMIN' })

const cards = [
  { label: 'Utilisateurs', value: '312', delta: '+18.4%' },
  { label: 'Prospecteurs', value: '48', delta: '+5.3%' },
  { label: 'Clients', value: '96', delta: '+9.1%' },
  { label: 'Ventes', value: '128', delta: '+14.8%' }
]

const metrics = [
  { label: 'Qualité des leads', value: '87%', percent: 87 },
  { label: 'Taux de conversion', value: '63%', percent: 63 },
  { label: 'Satisfaction client', value: '91%', percent: 91 },
  { label: 'Performance équipe', value: '78%', percent: 78 }
]

const actions = [
  'Valider la nouvelle politique de commission',
  'Vérifier les demandes d’accès en attente',
  'Suivre les indicateurs des zones à fort potentiel',
  'Contrôler les synchronisations API et sécurité'
]
</script>
