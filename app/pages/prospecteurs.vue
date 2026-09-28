<template>
  <div>
    <section class="section-shell bg-slate-50 dark:bg-slate-950">
      <div class="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Rejoindre le réseau</p>
          <h1 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Devenez prospecteur ETS Cameroon Services.</h1>
          <p class="mt-5 max-w-xl text-slate-600 dark:text-slate-300">Rejoignez un réseau professionnel orienté terrain, performance commerciale et accompagnement managérial.</p>
          <div class="mt-8 flex gap-3">
            <BaseButton variant="primary" @click="navigateTo('#candidature')">Candidater</BaseButton>
            <BaseButton variant="secondary" @click="navigateTo('/auth/register')">Créer un compte</BaseButton>
          </div>
        </div>
        <div class="site-card p-6">
          <div class="space-y-4">
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Pourquoi</p>
              <p class="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Un modèle de progression clair</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
              <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Rôle</p>
              <p class="mt-2 text-lg font-semibold text-slate-900 dark:text-white">Prospecter, accompagner et vendre</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell">
      <div class="container-shell">
        <div class="mb-10">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Progression</p>
          <h2 class="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Les étapes clés</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div v-for="step in progressionSteps" :key="step.title" class="site-card p-5">
            <p class="text-xs uppercase tracking-[0.2em] text-primary">{{ step.period }}</p>
            <h3 class="mt-3 text-lg font-semibold text-slate-900 dark:text-white">{{ step.title }}</h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-300">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <section id="candidature" class="section-shell bg-slate-100 dark:bg-slate-900/70">
      <div class="container-shell max-w-4xl">
        <div class="mb-8">
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Candidature</p>
          <h2 class="mt-2 text-3xl font-bold text-slate-900 dark:text-white">Candidatez au réseau prospecteur</h2>
        </div>

        <form class="site-card p-6 md:p-8" @submit.prevent="submitApplication">
          <div class="grid gap-5 md:grid-cols-2">
            <BaseInput v-model="form.firstName" label="Prénom" />
            <BaseInput v-model="form.lastName" label="Nom" />
            <BaseInput v-model="form.phone" label="Téléphone" type="tel" />
            <BaseInput v-model="form.email" label="Email" type="email" />
            <BaseInput v-model="form.city" label="Ville" />
            <BaseInput v-model="form.zone" label="Zone" />
            <BaseInput v-model="form.experience" label="Expérience" />
            <div class="md:col-span-2">
              <BaseTextarea v-model="form.message" label="Message" :rows="6" />
            </div>
          </div>
          <div class="mt-6 flex justify-end">
            <BaseButton type="submit">Soumettre ma candidature</BaseButton>
          </div>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const progressionSteps = [
  { period: 'Semaine 1', title: 'Formation + découverte + première sortie accompagnée', description: 'Découverte du réseau et du terrain.' },
  { period: 'Semaines 2–4', title: 'Premières ventes en autonomie encadrée', description: 'Des premières missions avec supervision.' },
  { period: 'Mois 2–3', title: 'Autonomie complète', description: 'La mission s’exécute de manière autonome.' },
  { period: 'Mois 6+', title: 'Référent de zone / évolution', description: 'Évolution vers un rôle de référent.' }
]

const form = reactive({
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  city: '',
  zone: '',
  experience: '',
  message: ''
})

async function submitApplication() {
  const api = useApi()
  await api.post('/applications', form)
}
</script>
