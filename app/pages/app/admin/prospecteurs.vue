<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Prospecteurs</h1>
    </div>
    <div class="site-card p-5">
      <ul class="space-y-3 text-sm text-slate-600 dark:text-slate-300">
        <li v-for="item in prospecteurs" :key="item.name" class="flex items-center justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-700">
          <span>{{ item.name }}</span>
          <span>{{ item.zone }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'ADMIN' })

const prospecteurs = [
  { name: 'Alice Mvondo', zone: 'Douala' },
  { name: 'Marc Tchou', zone: 'Yaoundé' },
  { name: 'Jules Ango', zone: 'Bafoussam' }
]
</script>
