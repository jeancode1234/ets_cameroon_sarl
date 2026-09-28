<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Prospects</p>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Gestion des prospects</h1>
        </div>
        <BaseButton variant="primary">Ajouter un prospect</BaseButton>
      </div>
    </div>

    <div class="site-card overflow-hidden">
      <div class="overflow-x-auto">
        <table class="min-w-full text-left text-sm">
          <thead class="bg-slate-50 dark:bg-slate-900">
            <tr>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Nom</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Téléphone</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Projet</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Localisation</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Statut</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Date</th>
              <th class="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="prospect in prospects" :key="prospect.id" class="border-t border-slate-200 dark:border-slate-700">
              <td class="px-4 py-3">{{ prospect.fullName }}</td>
              <td class="px-4 py-3">{{ prospect.phone }}</td>
              <td class="px-4 py-3">{{ prospect.project }}</td>
              <td class="px-4 py-3">{{ prospect.location }}</td>
              <td class="px-4 py-3">
                <span class="rounded-full bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300">
                  {{ prospect.status }}
                </span>
              </td>
              <td class="px-4 py-3">{{ prospect.createdAt }}</td>
              <td class="px-4 py-3">
                <button class="text-primary hover:underline">Voir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const prospects = [
  { id: '1', fullName: 'Jean Mvogo', phone: '+237 6XX XX XX XX', project: 'Construction villa', location: 'Douala', status: 'QUALIFIED', createdAt: '2026-09-20' },
  { id: '2', fullName: 'Françoise Tchou', phone: '+237 6XX XX XX XX', project: 'Rénovation hôtel', location: 'Yaoundé', status: 'CONTACTED', createdAt: '2026-09-18' }
]
</script>
