<template>
  <section class="section-shell">
    <div class="container-shell">
      <div class="premium-page-hero mb-10">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(125,211,252,0.3),_transparent_30%)]" />
        <div class="relative max-w-3xl">
          <p class="section-kicker border-white/20 bg-white/10 text-white">Services</p>
          <h1 class="mt-5 text-4xl font-extrabold tracking-[-0.06em] text-white md:text-5xl">Des solutions pensées pour des projets concrets, sans compromis.</h1>
          <p class="mt-5 text-base leading-8 text-slate-200">
            Nous accompagnons les chantiers, hôtels, restaurants, artisans et entreprises avec des réponses précises, rapides et durables.
          </p>
        </div>
      </div>

      <div class="mb-10 grid gap-4 md:grid-cols-3">
        <div v-for="stat in stats" :key="stat.label" class="glass-panel rounded-[1.5rem] p-5">
          <p class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-primary">{{ stat.label }}</p>
          <p class="mt-3 text-3xl font-extrabold tracking-[-0.05em] text-slate-900 dark:text-white">{{ stat.value }}</p>
        </div>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article v-for="item in services" :key="item.title" class="site-card group overflow-hidden p-5 transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_32px_rgba(8,47,90,0.08)]">
          <div class="relative mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-sky-100 text-2xl text-primary transition group-hover:scale-105 dark:from-sky-500/10 dark:to-sky-500/5">{{ item.icon }}</div>
          <div class="mb-3 flex items-center justify-between gap-3">
            <h2 class="text-xl font-bold text-slate-900 dark:text-white">{{ item.title }}</h2>
            <span class="rounded-full border border-primary/15 bg-primary/5 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.18em] text-primary">{{ item.tag }}</span>
          </div>
          <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ item.description }}</p>
          <ul class="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li v-for="bullet in item.bullets" :key="bullet" class="flex items-start gap-2"><span class="mt-1 inline-block h-2 w-2 rounded-full bg-primary" />{{ bullet }}</li>
          </ul>
          <div class="mt-5">
            <NuxtLink :to="`/services/${item.slug}`" class="inline-flex items-center gap-2 text-sm font-semibold text-primary">Découvrir <span aria-hidden="true">→</span></NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { label: 'Expertise terrain', value: '100%' },
  { label: 'Approvisionnement', value: 'Sur mesure' },
  { label: 'Suivi', value: '24/7' }
]

const services = [
  {
    icon: '🏗️',
    title: 'Gros œuvre',
    slug: 'gros-oeuvre',
    tag: 'BTP',
    description: 'Ciment, fer, agrégats, toiture et matériaux essentiels au bon déroulement d’un chantier.',
    bullets: ['Matériaux structuraux', 'Livraison régulière', 'Approvisionnement fiable']
  },
  {
    icon: '⚙️',
    title: 'Second œuvre',
    slug: 'second-oeuvre',
    tag: 'Technique',
    description: 'Électricité, plomberie, menuiserie et installations pour des projets performants et fiables.',
    bullets: ['Installations complètes', 'Conseil technique', 'Séquencement de chantier']
  },
  {
    icon: '🧱',
    title: 'Finitions',
    slug: 'finitions',
    tag: 'Rendu',
    description: 'Carrelage, peinture, sanitaire et finitions pour des ouvrages impeccables.',
    bullets: ['Finitions premium', 'Qualité de pose', 'Esthétique durable']
  },
  {
    icon: '🍽️',
    title: 'Hôtels & restaurants',
    slug: 'hotels-restaurants',
    tag: 'Hôtellerie',
    description: 'Cuisine professionnelle, mobilier, literie et linge adaptés à l’hôtellerie.',
    bullets: ['Mobilier professionnel', 'Équipements de cuisine', 'Service hôtelier']
  },
  {
    icon: '🎨',
    title: 'Décoration',
    slug: 'decoration',
    tag: 'Design',
    description: 'Mobilier, luminaires et agencement pour des espaces accueillants et élégants.',
    bullets: ['Ambiance premium', 'Éclairage sur mesure', 'Décor durable']
  },
  {
    icon: '🛠️',
    title: 'Services artisans',
    slug: 'services-artisans',
    tag: 'Support',
    description: 'Mise en relation pour pose et installation de produits sélectionnés.',
    bullets: ['Coordination terrain', 'Pose professionnelle', 'Accompagnement sur site']
  }
]
</script>
