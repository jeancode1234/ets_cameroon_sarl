<template>
  <footer class="border-t border-slate-200 bg-slate-950 text-slate-200 dark:border-slate-800">
    <div class="container-shell py-10 md:py-12">
      <div class="site-card overflow-hidden bg-linear-to-r from-slate-900 via-slate-900 to-primary p-6 text-white md:p-8">
        <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p class="text-[10px] uppercase tracking-[0.26em] text-slate-300">Cabinet de référence</p>
            <h3 class="mt-2 text-2xl font-bold tracking-[-0.04em] text-white md:text-3xl">Un partenaire fiable pour chaque projet.</h3>
          </div>
          <div class="flex flex-col gap-3 sm:flex-row">
            <BaseButton variant="secondary" class="bg-white text-slate-900 hover:bg-slate-100" @click="navigateTo('/demande-devis')">Demander un devis</BaseButton>
            <BaseButton variant="primary" class="border border-white/20 bg-transparent text-white hover:bg-white/5" @click="navigateTo('/contact')">Nous contacter</BaseButton>
          </div>
        </div>
      </div>

      <div class="mt-10 grid gap-10 md:grid-cols-[1.3fr_0.8fr_0.9fr]">
        <div>
          <div class="flex items-center gap-3">
            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-linear-to-br from-primary to-sky-700 text-base font-bold text-white shadow-[0_12px_22px_rgba(8,47,90,0.22)]">E</div>
            <div>
              <p class="text-[10px] uppercase tracking-[0.26em] text-slate-400">ETS</p>
              <p class="text-base font-semibold text-white">Cameroon Services</p>
            </div>
          </div>
          <p class="mt-5 max-w-md text-sm leading-7 text-slate-300">
            Nous accompagnons les acteurs de la construction, de l’hôtellerie et de la restauration avec des solutions fiables, rapides et pensées pour les exigences du terrain.
          </p>
        </div>

        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Navigation</p>
          <ul class="mt-4 space-y-3 text-sm text-slate-300">
            <li><NuxtLink to="/a-propos" class="transition hover:text-white">À propos</NuxtLink></li>
            <li><NuxtLink to="/services" class="transition hover:text-white">Services</NuxtLink></li>
            <li><NuxtLink to="/solutions" class="transition hover:text-white">Solutions</NuxtLink></li>
            <li><NuxtLink to="/prospecteurs" class="transition hover:text-white">Prospecteurs</NuxtLink></li>
            <li><NuxtLink to="/contact" class="transition hover:text-white">Contact</NuxtLink></li>
          </ul>
        </div>

        <div>
          <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Contact</p>
          <ul class="mt-4 space-y-3 text-sm text-slate-300">
            <li>WhatsApp : +237 6XX XX XX XX</li>
            <li>Email : recrutement@cameroonservices.cm</li>
            <li>Site : cameroonservices.com</li>
            <li>Douala, Cameroun</li>
          </ul>
        </div>
      </div>

      <div class="mt-10 border-t border-slate-800 pt-5 text-sm text-slate-400">
        © 2026 ETS Cameroon Services — Tous droits réservés.
      </div>
    </div>
  </footer>
</template>
