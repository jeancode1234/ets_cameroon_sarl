<template>
  <div class="space-y-6">
    <div class="site-card p-5">
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Rapports</h1>
    </div>

    <form class="site-card p-6" @submit.prevent="submitReport">
      <div class="grid gap-5 md:grid-cols-2">
        <BaseInput v-model="form.date" label="Date" type="date" />
        <BaseInput v-model="form.activity" label="Activité réalisée" />
        <BaseInput v-model="form.prospectsCount" label="Nombre de prospects" type="number" />
        <BaseInput v-model="form.visitedSites" label="Chantiers visités" type="number" />
        <div class="md:col-span-2">
          <BaseTextarea v-model="form.results" label="Résultats" :rows="4" />
        </div>
        <div class="md:col-span-2">
          <BaseTextarea v-model="form.observations" label="Observations" :rows="4" />
        </div>
      </div>
      <div class="mt-6">
        <BaseButton type="submit">Soumettre le rapport</BaseButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const form = reactive({
  date: '',
  activity: '',
  prospectsCount: 0,
  visitedSites: 0,
  results: '',
  observations: ''
})

async function submitReport() {
  const api = useApi()
  await api.post('/reports', form)
}
</script>
