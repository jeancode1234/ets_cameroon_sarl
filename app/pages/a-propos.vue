<template>
  <main class="about-page">
    <section class="relative overflow-hidden bg-slate-950">
      <div class="absolute inset-0">
        <div class="hero-slider">
          <img
            v-for="(slide, index) in heroSlides"
            :key="slide.title"
            :src="slide.image"
            :alt="slide.title"
            class="hero-slide"
            :class="{ 'is-active': index === activeHeroSlide }"
          />
        </div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-900/75" />
      <div class="absolute -right-10 top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div class="absolute left-10 top-40 h-52 w-52 rounded-full bg-cyan-400/10 blur-3xl" />

      <div class="container-shell relative z-10 py-20 md:py-28 lg:py-32">
        <div class="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr]">
          <div class="max-w-2xl">
            <span class="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.28em] text-sky-100 backdrop-blur-sm">
              À propos de nous
            </span>
            <h1 class="mt-7 text-4xl font-extrabold tracking-[-0.08em] text-white md:text-5xl lg:text-6xl">
              Nous transformons vos besoins en solutions performantes.
            </h1>
            <p class="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
              Nous accompagnons nos clients avec des prestations fiables, personnalisées et pensées pour générer des résultats durables.
              L’exigence, la rigueur et le conseil sont au cœur de chaque mission.
            </p>

            <div class="mt-8 flex flex-wrap gap-3">
              <BaseButton type="button" variant="primary" class="!bg-white !text-slate-900 hover:!bg-slate-100">
                Découvrir notre expertise
              </BaseButton>
              <BaseButton type="button" variant="secondary" class="!border-white/15 !bg-white/5 !text-white hover:!bg-white/10">
                Nous contacter
              </BaseButton>
            </div>
          </div>

          <div class="relative">
            <div class="premium-shell overflow-hidden border border-white/10 bg-white/5 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.35)] backdrop-blur-sm">
              <img
                :src="heroSlides[activeHeroSlide].image"
                :alt="heroSlides[activeHeroSlide].title"
                class="h-[480px] w-full rounded-[1.8rem] object-cover transition-all duration-700"
              />
            </div>
            <div class="absolute -bottom-5 left-5 rounded-[1.2rem] border border-white/15 bg-slate-950/70 p-4 text-white shadow-[0_20px_50px_rgba(2,6,23,0.4)] backdrop-blur-md">
              <p class="text-[10px] uppercase tracking-[0.22em] text-sky-200">Depuis</p>
              <p class="mt-2 text-3xl font-extrabold tracking-[-0.06em]">2018</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell">
      <div class="container-shell">
        <div class="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div class="relative">
            <div class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Équipe de l'entreprise"
                class="h-[520px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>

          <div>
            <span class="section-kicker">Qui sommes-nous ?</span>
            <h2 class="mt-6 text-3xl font-extrabold tracking-[-0.07em] text-slate-900 md:text-4xl dark:text-white">
              Une entreprise engagée aux côtés de ses clients.
            </h2>

            <div class="mt-6 space-y-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              <p>
                ETS Cameroon Services est une structure orientée service, spécialisée dans l’accompagnement des entreprises et des particuliers
                dans des missions de qualité, de proximité et de performance.
              </p>
              <p>
                Nous concevons nos prestations autour d’une logique simple : comprendre précisément le besoin, proposer une solution adaptée,
                exécuter avec rigueur et garantir le suivi jusqu’à la satisfaction client.
              </p>
              <p>
                Notre approche repose sur la confiance, le professionnalisme et le sens du détail, afin d’aider chaque client à avancer avec
                sérénité dans ses projets et ses priorités.
              </p>
            </div>

            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div v-for="item in expertiseCards" :key="item.title" class="site-card-soft p-4">
                <p class="text-xl font-extrabold tracking-[-0.05em] text-primary">{{ item.title }}</p>
                <p class="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell pt-0">
      <div class="container-shell">
        <div class="grid gap-6 lg:grid-cols-2">
          <article class="premium-panel border-sky-200 bg-gradient-to-br from-sky-50 via-white to-slate-50 dark:border-sky-900/40 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950">
            <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-2xl text-sky-700 dark:bg-sky-900/40 dark:text-sky-200">
              🎯
            </div>
            <p class="text-[10px] font-extrabold uppercase tracking-[0.24em] text-sky-700 dark:text-sky-200">Mission</p>
            <h3 class="mt-4 text-2xl font-extrabold tracking-[-0.06em] text-slate-900 dark:text-white">Notre mission</h3>
            <p class="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
              Fournir des services de qualité, adaptés aux besoins spécifiques de chaque client, tout en garantissant professionnalisme,
              efficacité et satisfaction.
            </p>
          </article>

          <article class="premium-panel border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white dark:border-slate-700">
            <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-2xl">🚀</div>
            <p class="text-[10px] font-extrabold uppercase tracking-[0.24em] text-sky-200">Vision</p>
            <h3 class="mt-4 text-2xl font-extrabold tracking-[-0.06em] text-white">Notre vision</h3>
            <p class="mt-4 text-base leading-8 text-slate-200">
              Devenir une référence dans notre secteur en proposant des solutions fiables, innovantes et durables pour accompagner nos clients
              dans leur développement.
            </p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-shell pt-0">
      <div class="container-shell">
        <div class="mx-auto max-w-3xl text-center">
          <span class="section-kicker">Nos valeurs</span>
          <h2 class="mt-5 text-3xl font-extrabold tracking-[-0.07em] text-slate-900 md:text-4xl dark:text-white">
            Les valeurs qui nous définissent
          </h2>
          <p class="mt-4 text-base leading-8 text-slate-600 dark:text-slate-300">
            Notre engagement repose sur des principes qui guident chacune de nos actions.
          </p>
        </div>

        <div class="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <div v-for="(value, index) in values" :key="value.title" class="site-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(8,47,90,0.11)]">
            <div class="flex items-center justify-between">
              <span class="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-xl text-primary dark:bg-sky-900/40 dark:text-sky-200">{{ value.icon }}</span>
              <span class="text-sm font-bold tracking-[0.2em] text-slate-400">0{{ index + 1 }}</span>
            </div>
            <h3 class="mt-6 text-xl font-extrabold tracking-[-0.05em] text-slate-900 dark:text-white">{{ value.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ value.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell pt-0">
      <div class="container-shell">
        <div class="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <span class="section-kicker">Pourquoi nous choisir ?</span>
            <h2 class="mt-5 text-3xl font-extrabold tracking-[-0.07em] text-slate-900 md:text-4xl dark:text-white">
              Pourquoi choisir notre entreprise ?
            </h2>

            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div v-for="reason in reasons" :key="reason.title" class="premium-panel flex items-start gap-3 p-4">
                <span class="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-lg text-emerald-600">✓</span>
                <p class="text-sm font-medium text-slate-700 dark:text-slate-200">{{ reason.title }}</p>
              </div>
            </div>
          </div>

          <div class="relative">
            <div class="overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.08)]">
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80"
                alt="Équipe spécialisée en conseil et prestations"
                class="h-[500px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell pt-0">
      <div class="container-shell">
        <div class="mx-auto max-w-3xl text-center">
          <span class="section-kicker">Notre approche</span>
          <h2 class="mt-5 text-3xl font-extrabold tracking-[-0.07em] text-slate-900 md:text-4xl dark:text-white">
            Une méthode simple, efficace et transparente
          </h2>
        </div>

        <div class="mt-12">
          <div class="timeline">
            <div v-for="(step, index) in approachSteps" :key="step.title" class="timeline-step">
              <div class="timeline-number">0{{ index + 1 }}</div>
              <div class="timeline-content">
                <p class="text-[10px] font-extrabold uppercase tracking-[0.2em] text-sky-700 dark:text-sky-200">{{ step.label }}</p>
                <h3 class="mt-3 text-xl font-extrabold tracking-[-0.05em] text-slate-900 dark:text-white">{{ step.title }}</h3>
                <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ step.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell pt-0">
      <div class="container-shell">
        <div class="rounded-[2.2rem] bg-gradient-to-br from-slate-900 via-primary to-sky-800 p-8 text-white shadow-[0_30px_90px_rgba(8,47,90,0.25)] md:p-12">
          <div class="grid gap-8 md:grid-cols-4">
            <div v-for="stat in stats" :key="stat.label" class="text-center md:text-left">
              <p class="text-4xl font-extrabold tracking-[-0.08em] text-white md:text-5xl">{{ stat.value }}</p>
              <p class="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-sky-100">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell pt-0">
      <div class="container-shell">
        <div class="mx-auto max-w-3xl text-center">
          <span class="section-kicker">Notre équipe</span>
          <h2 class="mt-5 text-3xl font-extrabold tracking-[-0.07em] text-slate-900 md:text-4xl dark:text-white">
            Des professionnels engagés à vos côtés
          </h2>
        </div>

        <div class="mt-10 grid gap-6 md:grid-cols-3">
          <article v-for="member in team" :key="member.name" class="site-card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_60px_rgba(15,23,42,0.10)]">
            <img :src="member.image" :alt="member.name" class="h-72 w-full object-cover" />
            <div class="p-6">
              <h3 class="text-xl font-extrabold tracking-[-0.05em] text-slate-900 dark:text-white">{{ member.name }}</h3>
              <p class="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary">{{ member.role }}</p>
              <p class="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ member.bio }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section-shell pt-0">
      <div class="container-shell">
        <div class="mx-auto max-w-3xl text-center">
          <span class="section-kicker">Témoignages</span>
          <h2 class="mt-5 text-3xl font-extrabold tracking-[-0.07em] text-slate-900 md:text-4xl dark:text-white">
            Ils nous font confiance
          </h2>
        </div>

        <div class="mt-10 grid gap-6 lg:grid-cols-3">
          <article v-for="testimonial in testimonials" :key="testimonial.name" class="site-card p-6">
            <div class="flex items-center gap-1 text-amber-400">★ ★ ★ ★ ★</div>
            <p class="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">“{{ testimonial.quote }}”</p>
            <div class="mt-6 flex items-center gap-4 border-t border-slate-200 pt-4 dark:border-slate-700">
              <img :src="testimonial.avatar" :alt="testimonial.name" class="h-12 w-12 rounded-full object-cover" />
              <div>
                <p class="font-extrabold text-slate-900 dark:text-white">{{ testimonial.name }}</p>
                <p class="text-sm text-slate-500 dark:text-slate-400">{{ testimonial.role }}</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section-shell pt-0">
      <div class="container-shell">
        <div class="mx-auto max-w-3xl text-center">
          <span class="section-kicker">Zones d’intervention</span>
          <h2 class="mt-5 text-3xl font-extrabold tracking-[-0.07em] text-slate-900 md:text-4xl dark:text-white">
            Notre expertise à votre service, où que vous soyez
          </h2>
        </div>

        <div class="mt-10 flex flex-wrap justify-center gap-3">
          <span v-for="zone in zones" :key="zone" class="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200">
            {{ zone }}
          </span>
        </div>
      </div>
    </section>

    <section class="section-shell pt-0">
      <div class="container-shell">
        <div class="rounded-[2.3rem] border border-slate-200 bg-gradient-to-r from-slate-900 via-slate-950 to-sky-900 p-8 text-white shadow-[0_26px_80px_rgba(15,23,42,0.20)] md:p-12">
          <div class="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <p class="text-[10px] font-extrabold uppercase tracking-[0.28em] text-sky-200">Prêt à démarrer ?</p>
              <h2 class="mt-5 text-3xl font-extrabold tracking-[-0.07em] text-white md:text-5xl">
                Parlons de votre prochain projet
              </h2>
              <p class="mt-4 max-w-xl text-base leading-8 text-slate-200">
                Vous avez un besoin, un projet ou une problématique particulière ? Notre équipe est prête à vous accompagner avec une solution adaptée.
              </p>
            </div>

            <div class="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <BaseButton type="button" variant="primary" class="!bg-white !text-slate-900 hover:!bg-slate-100">
                Demander un devis
              </BaseButton>
              <BaseButton type="button" variant="secondary" class="!border-white/15 !bg-white/5 !text-white hover:!bg-white/10">
                Nous contacter
              </BaseButton>
            </div>
          </div>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup lang="ts">
useHead({
  title: 'À propos de nous | ETS Cameroon Services',
  meta: [
    {
      name: 'description',
      content: 'Découvrez ETS Cameroon Services, une entreprise engagée dans des prestations de services de qualité, de proximité et de performance.'
    }
  ]
})

const heroSlides = [
  {
    title: 'Équipe de professionnels',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80'
  },
  {
    title: 'Réunion de travail',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80'
  },
  {
    title: 'Consultation professionnelle',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80'
  }
]

const activeHeroSlide = ref(0)

onMounted(() => {
  const interval = setInterval(() => {
    activeHeroSlide.value = (activeHeroSlide.value + 1) % heroSlides.length
  }, 4000)

  onBeforeUnmount(() => clearInterval(interval))
})

const expertiseCards = [
  { title: 'Expertise', text: 'Des compétences adaptées à la réalité de chaque mission.' },
  { title: 'Professionnalisme', text: 'Des standards élevés dans chaque interaction et chaque intervention.' },
  { title: 'Qualité', text: 'Des prestations pensées pour la satisfaction durable de nos clients.' },
  { title: 'Satisfaction client', text: 'Un engagement concret pour la confiance et le résultat.' }
]

const values = [
  { icon: '★', title: 'Excellence', text: 'Nous recherchons constamment la qualité dans chacune de nos prestations.' },
  { icon: '✓', title: 'Intégrité', text: 'Nous construisons nos relations sur la transparence, l’honnêteté et le respect.' },
  { icon: '⏱', title: 'Fiabilité', text: 'Nos clients doivent pouvoir compter sur nous à chaque étape.' },
  { icon: '⚡', title: 'Innovation', text: 'Nous adoptons des approches modernes pour répondre efficacement aux nouveaux besoins.' },
  { icon: '↗', title: 'Réactivité', text: 'Nous accordons une grande importance à la disponibilité et au respect des délais.' },
  { icon: '❤', title: 'Satisfaction client', text: 'La réussite de nos clients constitue notre priorité.' }
]

const reasons = [
  { title: 'Expertise professionnelle' },
  { title: 'Solutions personnalisées' },
  { title: 'Qualité de service' },
  { title: 'Respect des délais' },
  { title: 'Équipe qualifiée' },
  { title: 'Accompagnement personnalisé' },
  { title: 'Tarification transparente' },
  { title: 'Réactivité' }
]

const approachSteps = [
  { label: '01 — Écouter', title: 'Écouter', text: 'Comprendre précisément les besoins du client et les enjeux de la mission.' },
  { label: '02 — Analyser', title: 'Analyser', text: 'Identifier les meilleures solutions, les ressources et les priorités à activer.' },
  { label: '03 — Planifier', title: 'Planifier', text: 'Définir les étapes, les délais et les moyens nécessaires à la réussite du projet.' },
  { label: '04 — Exécuter', title: 'Exécuter', text: 'Réaliser la prestation avec rigueur, professionnalisme et attention aux détails.' },
  { label: '05 — Accompagner', title: 'Accompagner', text: 'Assurer le suivi, l’ajustement et la satisfaction du client jusqu’au bout.' }
]

const stats = [
  { value: '250+', label: 'Clients accompagnés*' },
  { value: '500+', label: 'Projets réalisés*' },
  { value: '7+', label: 'Années d’expérience*' },
  { value: '96%', label: 'Satisfaction client*' }
]

const team = [
  {
    name: 'Nom du responsable',
    role: 'Direction générale',
    bio: 'Pilotage stratégique, vision d’entreprise et coordination des orientations de développement.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Nom du chef de projet',
    role: 'Chef de projet',
    bio: 'Organisation des missions, suivi opérationnel et coordination avec les équipes.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Nom du gestionnaire',
    role: 'Gestion client',
    bio: 'Suivi des besoins clients, qualité de service et relation de confiance au quotidien.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=900&q=80'
  }
]

const testimonials = [
  {
    name: 'Client placeholder',
    role: 'Entreprise – Service à confirmer',
    quote: 'Un accompagnement sérieux, professionnel et très orienté résultat. Nous avons trouvé un partenaire à l’écoute de nos besoins.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Client placeholder',
    role: 'Organisation – À confirmer',
    quote: 'La qualité du service, la réactivité et la clarté du suivi ont fortement contribué à la réussite de notre projet.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Client placeholder',
    role: 'Partenaire – À confirmer',
    quote: 'Une équipe professionnelle, rassurante et particulièrement à l’écoute. Une collaboration simple et efficace.',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=200&q=80'
  }
]

const zones = ['Douala', 'Yaoundé', 'Bafoussam', 'Kribi', 'Garoua', 'Bertoua', 'Régions du Cameroun', 'Interventions nationales']
</script>

<style scoped>
.hero-slider {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.hero-slide {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transform: scale(1.04);
  transition: opacity 1s ease, transform 1s ease;
}

.hero-slide.is-active {
  opacity: 0.35;
  transform: scale(1);
}

.about-page {
  background: linear-gradient(180deg, #f6f9fc 0%, #eef4fb 100%);
}

.timeline {
  position: relative;
  display: grid;
  gap: 1.5rem;
  margin-top: 2rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 1.2rem;
  top: 0;
  bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, rgba(8, 47, 90, 0.15), rgba(14, 165, 233, 0.30), rgba(8, 47, 90, 0.15));
}

@media (min-width: 768px) {
  .timeline {
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1.25rem;
    align-items: start;
  }

  .timeline::before {
    left: 50%;
    top: 1.4rem;
    right: auto;
    width: 100%;
    height: 2px;
    transform: translateX(-50%);
    background: linear-gradient(90deg, rgba(8, 47, 90, 0.15), rgba(14, 165, 233, 0.40), rgba(8, 47, 90, 0.15));
  }
}

.timeline-step {
  position: relative;
  z-index: 1;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

@media (min-width: 768px) {
  .timeline-step {
    display: block;
    text-align: center;
  }
}

.timeline-number {
  position: relative;
  z-index: 2;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.6rem;
  height: 2.6rem;
  border-radius: 9999px;
  border: 1px solid rgba(8, 47, 90, 0.12);
  background: linear-gradient(135deg, #ffffff, #edf6ff);
  color: #082f5a;
  font-size: 0.7rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  box-shadow: 0 16px 35px rgba(15, 23, 42, 0.06);
}

@media (min-width: 768px) {
  .timeline-number {
    margin: 0 auto 1rem;
    width: 3rem;
    height: 3rem;
    font-size: 0.72rem;
  }
}

.timeline-content {
  flex: 1;
  padding: 0.75rem 0.2rem 0 0;
}

@media (min-width: 768px) {
  .timeline-content {
    padding: 0;
  }
}
</style>

