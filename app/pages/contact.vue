<template>
  <section class="section-shell">
    <div class="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
        <h1 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">Discutons votre projet</h1>
        <div class="mt-8 space-y-4 text-slate-600 dark:text-slate-300">
          <p>Email : recrutement@cameroonservices.cm</p>
          <p>WhatsApp : +237 6XX XX XX XX</p>
          <p>Site : cameroonservices.com</p>
        </div>
      </div>

      <form class="site-card p-6 md:p-8" @submit.prevent="submitContact">
        <div class="grid gap-5 md:grid-cols-2">
          <BaseInput v-model="form.name" label="Nom" />
          <BaseInput v-model="form.email" label="Email" type="email" />
          <BaseInput v-model="form.phone" label="Téléphone" type="tel" class="md:col-span-2" />
          <div class="md:col-span-2">
            <BaseTextarea v-model="form.message" label="Message" :rows="6" />
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
