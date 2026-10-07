<template>
  <section class="section-shell">
    <div class="container-shell max-w-6xl">
      <div class="mb-10 text-center">
        <p class="section-kicker">Demande de devis</p>
        <h1 class="mt-4 text-4xl font-extrabold tracking-[-0.06em] text-slate-900 dark:text-white md:text-5xl">Partagez votre projet</h1>
      </div>

      <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <aside class="premium-shell p-6 md:p-8">
          <p class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">Processus</p>
          <h2 class="mt-3 text-2xl font-extrabold tracking-[-0.04em] text-slate-900 dark:text-white">Un accompagnement clair</h2>

          <div class="mt-6 space-y-4">
            <div v-for="(step, index) in steps" :key="step.title" class="rounded-[1.3rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
              <div class="flex items-center gap-3">
                <span class="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">0{{ index + 1 }}</span>
                <p class="font-semibold text-slate-900 dark:text-white">{{ step.title }}</p>
              </div>
              <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{{ step.description }}</p>
            </div>
          </div>
        </aside>

        <form class="premium-shell p-6 md:p-8" @submit.prevent="submitQuote">
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

          <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
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
    </div>
  </section>
</template>

<script setup lang="ts">
import type { QuoteRequest } from '~/types/quote'

const steps = [
  { title: 'Échange initial', description: 'Nous comprenons votre besoin et le contexte de votre projet.' },
  { title: 'Étude du cahier des charges', description: 'Nous identifions les matériaux, délais et exigences fonctionnelles.' },
  { title: 'Proposition sur mesure', description: 'Vous recevez une réponse claire et adaptée à vos contraintes.' }
]

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
