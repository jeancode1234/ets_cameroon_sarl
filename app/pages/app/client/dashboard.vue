<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Client</p>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Tableau de bord client</h1>
        </div>
        <BaseButton variant="primary">Nouvelle demande</BaseButton>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div v-for="card in cards" :key="card.label" class="site-card p-5">
        <p class="text-sm text-slate-500 dark:text-slate-400">{{ card.label }}</p>
        <p class="mt-4 text-3xl font-bold text-slate-900 dark:text-white">{{ card.value }}</p>
      </div>
    </div>

    <div class="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
      <div class="site-card p-5">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Demandes récentes</h2>
        <ul class="mt-4 space-y-3">
          <li v-for="item in requests" :key="item.id" class="flex items-center justify-between border-b border-slate-200 pb-3 last:border-none dark:border-slate-700">
            <div>
              <p class="font-medium text-slate-900 dark:text-white">{{ item.title }}</p>
              <p class="text-sm text-slate-500 dark:text-slate-400">{{ item.meta }}</p>
            </div>
            <span class="rounded-full bg-slate-100 px-2 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">{{ item.status }}</span>
          </li>
        </ul>
      </div>

      <div class="site-card p-5">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Suivi rapide</h2>
        <ul class="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
          <li v-for="item in quickNotes" :key="item" class="rounded-xl bg-slate-50 p-3 dark:bg-slate-900">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'CLIENT' })

const cards = [
  { label: 'Demandes', value: '12' },
  { label: 'Projets', value: '04' },
  { label: 'Devis', value: '03' },
  { label: 'Factures', value: '02' }
]

const requests = [
  { id: '1', title: 'Rénovation cuisine hotel', meta: 'Soumise le 16 sept', status: 'En cours' },
  { id: '2', title: 'Installation mobilier salle', meta: 'Soumise le 11 sept', status: 'Validée' },
  { id: '3', title: 'Consultation chantier', meta: 'Soumise le 07 sept', status: 'À planifier' }
]

const quickNotes = [
  'Votre devis pour la salle de restauration est prêt.',
  'Un technicien a vérifié le chantier de Douala.',
  'Le statut de votre dernière demande a été mis à jour.'
]
</script>
