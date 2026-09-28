<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Client</p>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Paiements</h1>
        </div>
        <BaseButton variant="primary">Ajouter paiement</BaseButton>
      </div>
    </div>

    <div class="site-card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full text-left text-sm">
          <thead class="bg-slate-50 dark:bg-slate-900">
            <tr>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Libellé</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Type</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Montant</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Statut</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="payment in payments" :key="payment.id" class="border-t border-slate-200 dark:border-slate-700">
              <td class="px-4 py-3">{{ payment.label }}</td>
              <td class="px-4 py-3">{{ payment.type }}</td>
              <td class="px-4 py-3">{{ payment.amount.toLocaleString() }} FCFA</td>
              <td class="px-4 py-3">
                <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">{{ payment.status }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'CLIENT' })

const { paymentData } = useBusinessData()
const payments = paymentData
</script>
