<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <div class="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Manager</p>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Suivi de chantiers</h1>
        </div>
        <BaseButton variant="primary">Nouveau chantier</BaseButton>
      </div>
    </div>

    <div class="space-y-4">
      <article v-for="job in jobs" :key="job.id" class="site-card p-5">
        <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 class="text-lg font-semibold text-slate-900 dark:text-white">{{ job.name }}</h2>
            <p class="text-sm text-slate-500 dark:text-slate-400">Client : {{ job.client }}</p>
          </div>
          <span class="rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary dark:bg-primary/20">{{ job.status }}</span>
        </div>

        <div class="mt-4">
          <div class="mb-2 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Progression</span>
            <span>{{ job.progress }}%</span>
          </div>
          <div class="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
            <div class="h-2 rounded-full bg-primary" :style="`width: ${job.progress}%`" />
          </div>
        </div>

        <p class="mt-4 text-sm text-slate-600 dark:text-slate-300">Prochaine action : {{ job.nextAction }}</p>
      </article>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'MANAGER' })

const { jobSiteData } = useBusinessData()
const jobs = jobSiteData
</script>
