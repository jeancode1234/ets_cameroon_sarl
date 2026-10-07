<template>
  <section class="section-shell bg-[radial-gradient(circle_at_top,_rgba(8,47,90,0.08),_transparent_30%)]">
    <div class="container-shell max-w-6xl">
      <div class="premium-shell grid overflow-hidden lg:grid-cols-[0.95fr_1.05fr] dark:border-slate-800">
        <div class="relative hidden bg-gradient-to-br from-slate-950 via-primary to-sky-700 p-8 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <p class="text-[10px] font-extrabold uppercase tracking-[0.28em] text-sky-200">Rejoignez-nous</p>
            <h1 class="mt-6 max-w-sm text-4xl font-extrabold leading-tight tracking-[-0.05em]">Créez votre compte partenaire</h1>
            <p class="mt-4 max-w-sm text-sm leading-7 text-slate-200">Développez vos opportunités avec un réseau de professionnels, fournisseurs et gestionnaires de projet.</p>
          </div>

          <div class="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
            <p class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-sky-200">Pourquoi nous rejoindre ?</p>
            <ul class="mt-4 space-y-3 text-sm text-slate-200">
              <li>• Suivi des demandes et projets en temps réel</li>
              <li>• Accès rapide à nos services et solutions</li>
              <li>• Support dédié à l’échelle de votre activité</li>
            </ul>
          </div>
        </div>

        <div class="p-6 md:p-8 lg:p-10">
          <div class="mb-6">
            <p class="text-[10px] font-extrabold uppercase tracking-[0.28em] text-primary">Inscription</p>
            <h2 class="mt-2 text-3xl font-extrabold tracking-[-0.04em] text-slate-900 dark:text-white">Créer un compte</h2>
          </div>

          <form class="mt-6 grid gap-5 md:grid-cols-2" @submit.prevent="submitRegister">
            <BaseInput v-model="form.firstName" label="Prénom" placeholder="Votre prénom" />
            <BaseInput v-model="form.lastName" label="Nom" placeholder="Votre nom" />
            <BaseInput v-model="form.email" label="Email" type="email" class="md:col-span-2" placeholder="vous@exemple.com" />
            <BaseInput v-model="form.phone" label="Téléphone" type="tel" placeholder="+237 ..." />
            <BaseInput v-model="form.city" label="Ville" placeholder="Douala" />
            <BaseInput v-model="form.password" label="Mot de passe" type="password" class="md:col-span-2" placeholder="••••••••" />
            <div class="md:col-span-2">
              <BaseButton type="submit" class="w-full">Créer mon compte</BaseButton>
            </div>
          </form>

          <div class="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
            Vous avez déjà un compte ?
            <NuxtLink to="/auth/login" class="ml-2 font-bold text-primary">Se connecter</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref,reactive } from 'vue';
import { useAuth } from '~/composables/auth/useAuth';
const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  city: '',
  password: ''
})

async function submitRegister() {
  const auth = useAuth()
  await auth.register(form)
}
</script>
