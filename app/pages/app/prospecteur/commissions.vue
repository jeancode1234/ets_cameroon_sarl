<template>
  <div class="space-y-6">
    <div class="grid gap-4 md:grid-cols-3">
      <div v-for="card in cards" :key="card.label" class="site-card p-5">
        <p class="text-sm text-slate-500 dark:text-slate-400">{{ card.label }}</p>
        <p class="mt-3 text-3xl font-bold text-slate-900 dark:text-white">{{ card.value }}</p>
      </div>
    </div>
    <div class="site-card p-5">
      <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Historique</h2>
      <ul class="mt-4 space-y-3">
        <li v-for="item in commissions" :key="item.id" class="flex items-center justify-between border-b border-slate-200 pb-3 dark:border-slate-700">
          <span>{{ item.project }}</span>
          <span class="font-medium text-primary">{{ item.commission }} FCFA</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const cards = [
  { label: 'Total commissions', value: '—' },
  { label: 'Commissions validées', value: '—' },
  { label: 'Commissions en attente', value: '—' }
]

const commissions = [
  { id: '1', project: 'Projet A', commission: 125000 },
  { id: '2', project: 'Projet B', commission: 202000 }
]
</script>
