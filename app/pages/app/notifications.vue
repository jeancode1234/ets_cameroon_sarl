<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Notifications</h1>
    </div>

    <div class="space-y-4">
      <article v-for="item in notifications" :key="item.id" class="site-card p-5">
        <div class="flex items-center justify-between gap-4">
          <div>
            <p class="text-base font-semibold text-slate-900 dark:text-white">{{ item.title }}</p>
            <p class="mt-1 text-sm text-slate-600 dark:text-slate-300">{{ item.body }}</p>
          </div>
          <span class="rounded-full bg-slate-100 px-2 py-1 text-xs uppercase text-slate-700 dark:bg-slate-800 dark:text-slate-200">{{ item.type }}</span>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
const notifications = [
  { id: '1', title: 'Nouvelle demande', body: 'Une demande de devis a été reçue.', type: 'info' },
  { id: '2', title: 'Validation rapport', body: 'Votre rapport a été validé par le manager.', type: 'success' },
  { id: '3', title: 'Changement de statut', body: 'Un prospect a évolué vers le statut QUALIFIED.', type: 'warning' }
]
</script>
