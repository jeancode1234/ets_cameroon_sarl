<template>
  <NuxtLayout name="private">
    <div class="space-y-6">
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <div v-for="card in cards" :key="card.label" class="site-card p-5">
          <p class="text-sm text-slate-500 dark:text-slate-400">{{ card.label }}</p>
          <p class="mt-4 text-3xl font-bold text-slate-900 dark:text-white">{{ card.value }}</p>
        </div>
      </div>

      <div class="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <div class="site-card p-5">
          <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Activité récente</h2>
          <ul class="mt-4 space-y-3">
            <li v-for="item in activity" :key="item.title" class="flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-700">
              <span>{{ item.title }}</span>
              <span class="text-sm text-slate-500">{{ item.date }}</span>
            </li>
          </ul>
        </div>

        <div class="site-card p-5">
          <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Prochaines actions</h2>
          <ul class="mt-4 space-y-3">
            <li v-for="item in actions" :key="item" class="rounded-xl bg-slate-100 p-3 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private' })

const cards = [
  { label: 'Prospects', value: '12' },
  { label: 'Chantiers', value: '8' },
  { label: 'Rapports', value: '5' },
  { label: 'Ventes', value: '3' },
  { label: 'Commissions', value: '—' },
  { label: 'Progression', value: '72%' }
]

const activity = [
  { title: 'Nouveau prospect enregistré', date: 'Aujourd’hui' },
  { title: 'Rapport de terrain validé', date: 'Hier' },
  { title: 'Visite chantier confirmée', date: 'Lun' }
]

const actions = [
  'Suivre les nouveaux prospects',
  'Valider le rapport du jour',
  'Préparer la prochaine visite terrain'
]
</script>
