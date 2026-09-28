<template>
  <nav class="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200 bg-white/95 p-2 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 lg:hidden">
    <div class="grid grid-cols-4 gap-2 text-center text-[11px]">
      <NuxtLink v-for="item in menu" :key="item.to" :to="item.to" class="rounded-xl px-2 py-2 text-slate-600 dark:text-slate-300" active-class="bg-primary/5 text-primary dark:bg-primary/10 dark:text-white">
        {{ item.label }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
const menu = [
  { label: 'Dashboard', to: '/app/prospecteur/dashboard' },
  { label: 'Prospects', to: '/app/prospecteur/prospects' },
  { label: 'Rapports', to: '/app/prospecteur/rapports' },
  { label: 'Ventes', to: '/app/prospecteur/ventes' }
]
</script>
