<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Client</p>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Factures</h1>
        </div>
        <BaseButton variant="primary">Télécharger</BaseButton>
      </div>
    </div>

    <div class="site-card p-5">
      <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300">
        <li v-for="item in invoices" :key="item.id" class="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-700">
          <span>{{ item.label }}</span>
          <span>{{ item.amount }} FCFA</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'CLIENT' })

const invoices = [
  { id: 1, label: 'Facture nº 2026-01', amount: 2200000 },
  { id: 2, label: 'Facture nº 2026-02', amount: 980000 },
  { id: 3, label: 'Facture nº 2026-03', amount: 1450000 }
]
</script>
