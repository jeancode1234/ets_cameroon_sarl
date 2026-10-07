<template>
  <header class="sticky top-0 z-50  bg-slate-950/80 shadow-[0_20px_60px_rgba(2,6,23,0.28)] backdrop-blur-2xl">
    <div class="container-shell py-3">
      <nav class="relative overflow-hidden  px-3 py-2 ">
        <div class="absolute" />

        <div class="relative flex items-center justify-between gap-4">
          <NuxtLink to="/" class="flex items-center gap-3 rounded-full px-2 py-1.5 transition">
            <div class="flex h-11 w-11 items-center justify-center  text-sm font-black text-white shadow-2xl shadow-black">E</div>
            <div class="leading-tight">
              <p class="text-[9px] font-bold uppercase tracking-[0.32em] text-sky-200/90">ETS</p>
              <p class="text-sm font-semibold tracking-[-0.03em] text-white">Cameroon Services</p>
            </div>
          </NuxtLink>

          <div class="hidden flex-1 items-center justify-center md:flex">
            <div class="flex items-center gap-1 p-1.5 ">
              <NuxtLink
                v-for="item in links"
                :key="item.to"
                :to="item.to"
                class="rounded-full px-4 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/6 hover:text-white"
                active-class="bg-white/8 text-white shadow-[0_10px_22px_rgba(59,130,246,0.18)]"
              >
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>

          <div class="hidden items-center gap-3 md:flex">
            <BaseButton variant="secondary" class="px-4 py-2.5" @click="navigateTo('/auth/login')">Connexion</BaseButton>
            <BaseButton variant="primary" class="px-4 py-2.5" @click="navigateTo('/auth/register')">Créer un compte</BaseButton>
          </div>

          <button class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-white md:hidden" @click="mobileOpen = !mobileOpen">
            <span class="sr-only">Ouvrir le menu</span>
            ☰
          </button>
        </div>
      </nav>
    </div>

    <div v-if="mobileOpen" class="border-t border-white/10 bg-slate-950/95 md:hidden">
      <div class="container-shell flex flex-col gap-4 py-4">
        <NuxtLink v-for="item in links" :key="item.to" :to="item.to" class="rounded-xl px-3 py-2 text-sm font-medium text-slate-200 transition hover:bg-white/5 hover:text-white" @click="mobileOpen = false">
          {{ item.label }}
        </NuxtLink>
        <div class="grid gap-2 sm:grid-cols-3">
          <BaseButton variant="secondary" class="w-full !px-3 !py-2.5" @click="navigateTo('/auth/login')">Connexion</BaseButton>
          <BaseButton variant="primary" class="w-full !px-3 !py-2.5" @click="navigateTo('/auth/register')">Créer un compte</BaseButton>
          <BaseButton variant="primary" class="w-full !px-3 !py-2.5" @click="navigateTo('/demande-devis')">Demander un devis</BaseButton>
        </div>
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
