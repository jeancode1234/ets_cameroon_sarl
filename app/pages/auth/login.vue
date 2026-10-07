<template>
  <section class="section-shell bg-[radial-gradient(circle_at_top,_rgba(8,47,90,0.08),_transparent_30%)]">
    <div class="container-shell max-w-5xl">
      <div class="premium-shell grid overflow-hidden lg:grid-cols-[1.1fr_0.9fr] dark:border-slate-800">
        <div class="relative hidden bg-gradient-to-br from-primary via-[#0d2d53] to-sky-700 p-8 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <p class="text-[10px] font-extrabold uppercase tracking-[0.28em] text-sky-200">ETS Cameroon Services</p>
            <h1 class="mt-6 max-w-sm text-4xl font-extrabold leading-tight tracking-[-0.05em]">Accédez à votre espace professionnel</h1>
            <p class="mt-4 max-w-sm text-sm leading-7 text-slate-200">Suivez vos projets, gérez vos demandes et pilotez vos opérations avec un accès sécurisé.</p>
          </div>

          <div class="grid gap-3 pt-8">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p class="text-sm font-semibold text-sky-200">Suivi de chantier</p>
              <p class="mt-1 text-2xl font-extrabold">24/7</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
              <p class="text-sm font-semibold text-sky-200">Vues temps réel</p>
              <p class="mt-1 text-2xl font-extrabold">98%</p>
            </div>
          </div>
        </div>

        <div class="p-6 md:p-8 lg:p-10">
          <div class="mb-6 flex items-center justify-between">
            <div>
              <p class="text-[10px] font-extrabold uppercase tracking-[0.28em] text-primary">Connexion</p>
              <h2 class="mt-2 text-3xl font-extrabold tracking-[-0.04em] text-slate-900 dark:text-white">Bienvenue</h2>
            </div>
            <div class="rounded-full border border-primary/10 bg-primary/5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.18em] text-primary">Secure</div>
          </div>

          <form class="mt-6 space-y-5" @submit.prevent="submitLogin">
            <BaseInput v-model="form.email" label="Email" type="email" placeholder="user@cameroonservices.cm" />
            <BaseInput v-model="form.password" label="Mot de passe" type="password" placeholder="••••••••" />

            <div class="flex items-center justify-between text-sm">
              <label class="inline-flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <input type="checkbox" class="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" />
                Se souvenir de moi
              </label>
              <NuxtLink to="/contact" class="font-semibold text-primary">Besoin d’aide ?</NuxtLink>
            </div>

            <BaseButton type="submit" class="w-full" :loading="loading">Se connecter</BaseButton>
          </form>

          <div class="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
            Pas encore membre ?
            <NuxtLink to="/auth/register" class="ml-2 font-bold text-primary">Créer un compte</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useAuth } from '~/composables/auth/useAuth';
import { ref,reactive } from 'vue';
const form = reactive({ email: '', password: '' })
const loading = ref(false)

async function submitLogin() {
  loading.value = true
  try {
    const auth = useAuth()
    const result = await auth.login(form)
    const destination = auth.getHomeRouteForRole(result.data.role)
    await navigateTo(destination, { replace: true })
  } finally {
    loading.value = false
  }
}
</script>
