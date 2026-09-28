<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Administration</p>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Gestion des fonctionnalités</h1>
        </div>
        <BaseButton variant="primary">Nouvelle feature</BaseButton>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      <article v-for="feature in features" :key="feature.id" class="site-card p-5">
        <div class="flex items-center justify-between gap-3">
          <h2 class="text-lg font-semibold text-slate-900 dark:text-white">{{ feature.name }}</h2>
          <span class="rounded-full px-2 py-1 text-[10px] font-bold uppercase tracking-[0.18em]" :class="getFeatureStatusTone(feature.status)">{{ feature.status }}</span>
        </div>
        <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">{{ feature.description }}</p>
        <div class="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
          <span>{{ feature.category }}</span>
          <span>{{ feature.owner }}</span>
        </div>
        <div class="mt-5">
          <NuxtLink :to="feature.route" class="text-sm font-semibold text-primary hover:underline">Ouvrir</NuxtLink>
        </div>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'ADMIN' })

const { featureCatalog, getFeatureStatusTone } = useFeatureCatalog()
const features = featureCatalog
</script>
