<template>
  <aside class="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-slate-200 bg-white/85 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.06)] backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/85 lg:flex lg:flex-col">
    <div class="mb-8 flex items-center gap-3 rounded-[1.3rem] border border-slate-200 bg-gradient-to-r from-slate-50 to-primary/5 p-3 dark:border-slate-800 dark:from-slate-900 dark:to-primary/10">
      <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white shadow-[0_10px_18px_rgba(8,47,90,0.2)]">E</div>
      <div>
        <p class="text-[10px] uppercase tracking-[0.22em] text-primary/70">ETS</p>
        <p class="text-sm font-semibold text-slate-900 dark:text-white">Prospecteur</p>
      </div>
    </div>

    <div class="mb-5 rounded-2xl border border-primary/10 bg-primary/5 p-3">
      <p class="text-[10px] uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">État</p>
      <p class="mt-1 text-sm font-semibold text-slate-900 dark:text-white">Performance active</p>
    </div>

    <nav class="space-y-2">
      <NuxtLink v-for="item in menu" :key="item.to" :to="item.to" class="flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-primary dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-white" active-class="bg-primary/5 text-primary ring-1 ring-primary/10 shadow-sm dark:bg-primary/10 dark:text-white">
        <span>{{ item.label }}</span>
      </NuxtLink>
    </nav>
  </aside>
</template>

<script setup lang="ts">
const menu = [
  { label: 'Dashboard', to: '/app/prospecteur/dashboard' },
  { label: 'Prospects', to: '/app/prospecteur/prospects' },
  { label: 'Chantiers', to: '/app/prospecteur/chantiers' },
  { label: 'Rapports', to: '/app/prospecteur/rapports' },
  { label: 'Ventes', to: '/app/prospecteur/ventes' },
  { label: 'Commissions', to: '/app/prospecteur/commissions' },
  { label: 'Progression', to: '/app/prospecteur/progression' },
  { label: 'Profil', to: '/app/profile' }
]
</script>
