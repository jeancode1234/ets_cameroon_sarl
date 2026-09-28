<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Administration</p>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Devis</h1>
        </div>
        <BaseButton variant="primary">Créer un devis</BaseButton>
      </div>
    </div>

    <div class="site-card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full text-left text-sm">
          <thead class="bg-slate-50 dark:bg-slate-900">
            <tr>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Client</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Montant</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Statut</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Date</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="quote in quotes" :key="quote.id" class="border-t border-slate-200 dark:border-slate-700">
              <td class="px-4 py-3">{{ quote.client }}</td>
              <td class="px-4 py-3">{{ quote.amount.toLocaleString() }} FCFA</td>
              <td class="px-4 py-3">
                <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">{{ quote.status }}</span>
              </td>
              <td class="px-4 py-3">{{ quote.date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'ADMIN' })

const { quoteData } = useBusinessData()
const quotes = quoteData
</script>
