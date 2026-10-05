<template>
  <section class="section-shell">
    <div class="container-shell max-w-4xl">
      <div class="mb-10 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Demande de devis</p>
        <h1 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Partagez votre projet</h1>
      </div>

      <form class="site-card p-6 md:p-8" @submit.prevent="submitQuote">
        <div class="grid gap-5 md:grid-cols-2">
          <BaseInput v-model="form.firstName" label="Prénom" placeholder="Votre prénom" />
          <BaseInput v-model="form.lastName" label="Nom" placeholder="Votre nom" />
          <BaseInput v-model="form.phone" label="Téléphone" type="tel" placeholder="+237" />
          <BaseInput v-model="form.email" label="Email" type="email" placeholder="vous@exemple.com" />
          <BaseInput v-model="form.city" label="Ville" placeholder="Douala" />
          <BaseSelect v-model="form.projectType" label="Type de projet" :options="projectOptions" />
          <div class="md:col-span-2">
            <BaseInput v-model="form.service" label="Service recherché" placeholder="Matériaux, rénovation, décor..." />
          </div>
          <div class="md:col-span-2">
            <BaseTextarea v-model="form.description" label="Description" :rows="6" placeholder="Décrivez votre besoin, le contexte du projet et vos exigences." />
          </div>
        </div>

        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-between sm:items-center">
          <div class="text-sm text-slate-500 dark:text-slate-400">
            <span v-if="state === 'idle'">Votre demande sera traitée par notre équipe.</span>
            <span v-else-if="state === 'loading'">Envoi en cours...</span>
            <span v-else-if="state === 'success'" class="text-green-600">Demande envoyée avec succès.</span>
            <span v-else class="text-red-600">Une erreur s’est produite lors de l’envoi.</span>
          </div>
          <BaseButton type="submit" :loading="state === 'loading'">Envoyer la demande</BaseButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { QuoteRequest } from '~/types/quote'

const form = reactive<QuoteRequest>({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  city: '',
  projectType: 'Construction',
  service: '',
  description: '',
  attachments: []
})

const state = ref<'idle' | 'loading' | 'success' | 'error'>('idle')
const projectOptions = [
  { value: 'Construction', label: 'Construction' },
  { value: 'Rénovation', label: 'Rénovation' },
  { value: 'Hôtel', label: 'Hôtel' },
  { value: 'Restaurant', label: 'Restaurant' },
  { value: 'Décoration', label: 'Décoration' },
  { value: 'Matériaux', label: 'Matériaux' },
  { value: 'Artisan', label: 'Artisan' },
  { value: 'Autre', label: 'Autre' }
]

async function submitQuote() {
  state.value = 'loading'

  try {
    const api = useApi()
    await api.post('/quotes', form)
    state.value = 'success'
    Object.assign(form, {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      city: '',
      projectType: 'Construction',
      service: '',
      description: '',
      attachments: []
    })
  } catch {
    state.value = 'error'
  }
}
</script>
