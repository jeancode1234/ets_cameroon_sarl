<template>
  <section class="section-shell">
    <div class="container-shell grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
      <div class="premium-shell p-6 md:p-8">
        <p class="section-kicker">Contact</p>
        <h1 class="mt-5 text-4xl font-extrabold tracking-[-0.06em] text-slate-900 dark:text-white md:text-5xl">Discutons votre projet.</h1>
        <p class="mt-4 max-w-md text-base leading-8 text-slate-600 dark:text-slate-300">Parlons de vos besoins, de votre calendrier et des solutions les plus adaptées à votre environnement.</p>

        <div class="mt-8 space-y-4">
          <div v-for="item in contactInfo" :key="item.label" class="rounded-[1.3rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
            <p class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">{{ item.label }}</p>
            <p class="mt-2 text-base font-semibold text-slate-900 dark:text-white">{{ item.value }}</p>
          </div>
        </div>
      </div>

      <form class="premium-shell p-6 md:p-8" @submit.prevent="submitContact">
        <div class="mb-8">
          <p class="section-kicker">Formulaire</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-slate-900 dark:text-white">Envoyez votre demande</h2>
        </div>

        <div class="grid gap-5 md:grid-cols-2">
          <BaseInput v-model="form.name" label="Nom" placeholder="Votre nom" />
          <BaseInput v-model="form.email" label="Email" type="email" placeholder="vous@exemple.com" />
          <BaseInput v-model="form.phone" label="Téléphone" type="tel" placeholder="+237 ..." class="md:col-span-2" />
          <div class="md:col-span-2">
            <BaseTextarea v-model="form.message" label="Message" :rows="6" placeholder="Décrivez votre projet, vos besoins et votre délai..." />
          </div>
        </div>
        <div class="mt-6 flex justify-end">
          <BaseButton type="submit">Envoyer</BaseButton>
        </div>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
const contactInfo = [
  { label: 'Email', value: 'recrutement@cameroonservices.cm' },
  { label: 'WhatsApp', value: '+237 6XX XX XX XX' },
  { label: 'Site web', value: 'cameroonservices.com' },
  { label: 'Localisation', value: 'Douala, Cameroun' }
]

const form = reactive({
  name: '',
  email: '',
  phone: '',
  message: ''
})

async function submitContact() {
  const api = useApi()
  await api.post('/contact', form)
}
</script>
