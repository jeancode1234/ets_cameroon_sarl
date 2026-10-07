<template>
  <header class="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 shadow-[0_8px_30px_rgba(15,23,42,0.04)] backdrop-blur-xl transition-colors duration-300 dark:border-slate-800 dark:bg-slate-950/75">
    <div class="container-shell">
      <nav class="mt-3 flex items-center justify-between gap-4 rounded-full border border-slate-200/80 bg-white/80 px-3 py-2 shadow-[0_12px_35px_rgba(15,23,42,0.06)] dark:border-slate-700 dark:bg-slate-900/80">
        <NuxtLink to="/" class="flex items-center gap-3 rounded-full px-2 py-1.5 transition hover:bg-slate-100 dark:hover:bg-slate-800">
          <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-sky-700 text-sm font-bold text-white shadow-[0_12px_22px_rgba(8,47,90,0.22)]">E</div>
          <div class="leading-tight">
            <p class="text-[10px] uppercase tracking-[0.28em] text-primary/75">ETS</p>
            <p class="text-sm font-semibold text-slate-900 dark:text-white">Cameroon Services</p>
          </div>
        </NuxtLink>

        <div class="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1 md:flex dark:border-slate-700 dark:bg-slate-800/80">
          <NuxtLink v-for="item in links" :key="item.to" :to="item.to" class="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-white hover:text-primary dark:text-slate-200 dark:hover:bg-slate-700 dark:hover:text-white" active-class="bg-white text-primary shadow-sm dark:bg-slate-700 dark:text-white">
            {{ item.label }}
          </NuxtLink>
        </div>

        <div class="hidden items-center gap-3 md:flex">
          <div class="hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-700 lg:block">Support terrain</div>
          <BaseButton variant="primary" @click="navigateTo('/demande-devis')">Demander un devis</BaseButton>
        </div>

        <button class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-lg text-slate-700 md:hidden dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200" @click="mobileOpen = !mobileOpen">
          <span class="sr-only">Ouvrir le menu</span>
          ☰
        </button>
      </nav>
    </div>

    <div v-if="mobileOpen" class="border-t border-slate-200 bg-white/95 md:hidden dark:border-slate-800 dark:bg-slate-950/95">
      <div class="container-shell flex flex-col gap-4 py-4">
        <NuxtLink v-for="item in links" :key="item.to" :to="item.to" class="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-primary dark:text-slate-200 dark:hover:bg-slate-900 dark:hover:text-white" @click="mobileOpen = false">
          {{ item.label }}
        </NuxtLink>
        <BaseButton variant="primary" class="w-full" @click="navigateTo('/demande-devis')">Demander un devis</BaseButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const links = [
  { label: 'Accueil', to: '/' },
  { label: 'À propos', to: '/a-propos' },
  { label: 'Services', to: '/services' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Prospecteurs', to: '/prospecteurs' },
  { label: 'Contact', to: '/contact' }
]

const mobileOpen = ref(false)
</script>
