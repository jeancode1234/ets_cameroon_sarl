<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Partenaire</p>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Tableau de bord partenaire</h1>
        </div>
        <BaseButton variant="primary">Voir les projets</BaseButton>
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
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Projets actifs</h2>
        <ul class="mt-4 space-y-3">
          <li v-for="item in projects" :key="item.id" class="flex items-center justify-between border-b border-slate-200 pb-3 last:border-none dark:border-slate-700">
            <div>
              <p class="font-medium text-slate-900 dark:text-white">{{ item.title }}</p>
              <p class="text-sm text-slate-500 dark:text-slate-400">{{ item.meta }}</p>
            </div>
            <span class="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary dark:bg-primary/20">{{ item.status }}</span>
          </li>
        </ul>
      </div>

      <div class="site-card p-5">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Points clés</h2>
        <ul class="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
          <li v-for="item in notes" :key="item" class="rounded-xl bg-slate-50 p-3 dark:bg-slate-900">{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'PARTENAIRE' })

const cards = [
  { label: 'Projets', value: '08' },
  { label: 'Contrats', value: '05' },
  { label: 'Contacts', value: '18' },
  { label: 'Suivi', value: '98%' }
]

const projects = [
  { id: '1', title: 'Fourniture hôtel 3 étoiles', meta: 'Douala · 3 semaines', status: 'Actif' },
  { id: '2', title: 'Équipement restaurant', meta: 'Yaoundé · 5 semaines', status: 'En cours' },
  { id: '3', title: 'Matériaux de chantier', meta: 'Bafoussam · 2 semaines', status: 'Planifié' }
]

const notes = [
  'Les livraisons sont conformes aux délais annoncés.',
  'Les contrats en cours sont à jour sur le suivi commercial.',
  'Vous avez 2 nouveaux contacts à qualifier cette semaine.'
]
</script>
