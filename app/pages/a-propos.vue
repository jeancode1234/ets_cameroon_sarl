<template>
  <section class="section-shell">
    <div class="container-shell">
      <div class="premium-page-hero">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(125,211,252,0.26),_transparent_28%)]" />
        <div class="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p class="section-kicker border-white/20 bg-white/10 text-white">À propos</p>
            <h1 class="mt-6 max-w-xl text-4xl font-extrabold tracking-[-0.06em] text-white md:text-5xl">Une présence solide à Douala et dans les projets de terrain.</h1>
            <p class="mt-5 max-w-2xl text-base leading-8 text-slate-200">ETS Cameroon Services accompagne les acteurs de la construction, de l’hôtellerie et de la restauration avec un accompagnement fiable, rapide et pensé pour la réalité du terrain.</p>
            <div class="mt-8 flex flex-wrap gap-3">
              <BaseButton variant="primary" class="!bg-white !text-slate-900 hover:!bg-slate-100">Découvrir nos services</BaseButton>
              <BaseButton variant="secondary" class="!border-white/20 !bg-white/5 !text-white hover:!bg-white/10">Nous contacter</BaseButton>
            </div>
          </div>

          <div class="relative">
            <div class="premium-shell overflow-hidden border-white/15 bg-white/5 p-3 backdrop-blur-md">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Équipe ETS Cameroon Services" class="h-[420px] w-full rounded-[1.6rem] object-cover" />
            </div>
            <div class="absolute -left-3 top-6 rounded-2xl border border-white/15 bg-slate-950/60 p-4 shadow-[0_20px_35px_rgba(2,6,23,0.3)] backdrop-blur-sm">
              <p class="text-[10px] uppercase tracking-[0.2em] text-slate-300">Partenaire local</p>
              <p class="mt-2 text-lg font-bold text-white">Douala</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <div v-for="metric in metrics" :key="metric.label" class="premium-panel">
          <p class="text-4xl font-extrabold tracking-[-0.06em] text-primary">{{ metric.value }}</p>
          <p class="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{{ metric.label }}</p>
        </div>
      </div>

      <div class="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div class="space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
          <p>ETS CAMEROON SERVICES est présenté comme un partenaire à Douala spécialisé dans la fourniture de matériaux de construction et l’équipement complet pour hôtels, restaurants et chantiers.</p>
          <p>Nous soutenons les acteurs du BTP, de l’hôtellerie et de la restauration avec des approvisionnements fiables, des conseils adaptés aux territoires et un accompagnement pensé pour le terrain.</p>
          <p>Notre modèle repose sur la proximité, la disponibilité et la qualité des livraisons pour faire avancer les projets avec confiance.</p>
        </div>

        <div class="premium-shell p-6">
          <div class="grid gap-4 sm:grid-cols-2">
            <div v-for="item in sectors" :key="item.title" class="rounded-[1.3rem] border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-900">
              <p class="text-2xl font-extrabold tracking-[-0.04em] text-primary">{{ item.title }}</p>
              <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const metrics = [
  { value: '120+', label: 'Projets livrés' },
  { value: '24/7', label: 'Suivi terrain' },
  { value: '98%', label: 'Satisfaction client' }
]

const sectors = [
  { title: 'Douala', description: 'Partenaire local' },
  { title: 'BTP', description: 'Matériaux et équipement' },
  { title: 'Hôtels', description: 'Cuisine, literie, mobilier' },
  { title: 'Restaurants', description: 'Équipements professionnels' }
]
</script>
