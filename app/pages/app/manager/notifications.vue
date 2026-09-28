<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Notifications</h1>
    </div>
    <div class="site-card p-5">
      <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300">
        <li v-for="item in notifications" :key="item.id" class="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
          {{ item.message }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'MANAGER' })

const notifications = [
  { id: 1, message: 'Deux nouveaux prospects doivent être validés.' },
  { id: 2, message: 'Un rapport de terrain a été soumis pour validation.' },
  { id: 3, message: 'Une campagne de vente a dépassé son objectif.' }
]
</script>
