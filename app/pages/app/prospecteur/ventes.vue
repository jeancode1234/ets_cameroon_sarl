<template>
  <div class="space-y-6">
    <div class="site-card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full text-left text-sm">
          <thead class="bg-slate-50 dark:bg-slate-900">
            <tr>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Client</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Projet</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Montant</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Statut</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Date</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Commission</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="sale in sales" :key="sale.id" class="border-t border-slate-200 dark:border-slate-700">
              <td class="px-4 py-3">{{ sale.client }}</td>
              <td class="px-4 py-3">{{ sale.project }}</td>
              <td class="px-4 py-3">{{ sale.amount }} FCFA</td>
              <td class="px-4 py-3">{{ sale.status }}</td>
              <td class="px-4 py-3">{{ sale.date }}</td>
              <td class="px-4 py-3">{{ sale.commission }} FCFA</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const sales = [
  { id: '1', client: 'Hotel A', project: 'Rénovation cuisine', amount: 2450000, status: 'VALIDÉ', date: '2026-09-20', commission: 450000 },
  { id: '2', client: 'Restaurant B', project: 'Finitions restauration', amount: 1800000, status: 'EN ATTENTE', date: '2026-09-17', commission: 320000 }
]
</script>
