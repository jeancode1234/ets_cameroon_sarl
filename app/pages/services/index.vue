<template>
  <section class="section-shell">
    <div class="container-shell">
      <div class="mb-10 max-w-4xl">
        <p class="section-kicker">Services</p>
        <h1 class="mt-4 text-4xl font-bold text-slate-900 dark:text-white">Des services pensés pour les projets concrets.</h1>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">Nous accompagnons les entreprises, artisans, hôtels et chantiers avec des solutions fiables, rapides et adaptées à des besoins réels sur le terrain.</p>
      </div>

      <div class="mb-10 grid gap-4 md:grid-cols-3">
        <div class="site-card-soft p-4">
          <p class="text-sm text-slate-500 dark:text-slate-400">Expertise terrain</p>
          <p class="mt-2 text-2xl font-bold text-primary">100%</p>
        </div>
        <div class="site-card-soft p-4">
          <p class="text-sm text-slate-500 dark:text-slate-400">Approvisionnement</p>
          <p class="mt-2 text-2xl font-bold text-primary">Sur mesure</p>
        </div>
        <div class="site-card-soft p-4">
          <p class="text-sm text-slate-500 dark:text-slate-400">Suivi</p>
          <p class="mt-2 text-2xl font-bold text-primary">24/7</p>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article v-for="item in services" :key="item.title" class="site-card group p-5 transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_32px_rgba(8,47,90,0.08)]">
          <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary transition group-hover:scale-105">{{ item.icon }}</div>
          <h2 class="text-xl font-semibold text-slate-900 dark:text-white">{{ item.title }}</h2>
          <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">{{ item.description }}</p>
          <div class="mt-5">
            <NuxtLink :to="`/services/${item.slug}`" class="text-sm font-semibold text-primary">Découvrir</NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  { icon: '🏗️', title: 'Gros œuvre', slug: 'gros-oeuvre', description: 'Ciment, fer, agrégats, toiture et matériaux essentiels au bon déroulement d’un chantier.' },
  { icon: '⚙️', title: 'Second œuvre', slug: 'second-oeuvre', description: 'Électricité, plomberie, menuiserie et installations pour des projets performants et fiables.' },
  { icon: '🧱', title: 'Finitions', slug: 'finitions', description: 'Carrelage, peinture, sanitaire et finitions pour des ouvrages impeccables.' },
  { icon: '🍽️', title: 'Hôtels & restaurants', slug: 'hotels-restaurants', description: 'Cuisine professionnelle, mobilier, literie et linge adaptés à l’hôtellerie.' },
  { icon: '🎨', title: 'Décoration', slug: 'decoration', description: 'Mobilier, luminaires et agencement pour des espaces accueillants et élégants.' },
  { icon: '🛠️', title: 'Services artisans', slug: 'services-artisans', description: 'Mise en relation pour pose et installation de produits sélectionnés.' }
]
</script>
