<template>
  <div>
    <section class="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(8,47,90,0.08),_transparent_35%),linear-gradient(135deg,#081c36_0%,#091f42_38%,#0e2d4d_100%)] text-white">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_right,_rgba(14,165,233,0.18),_transparent_30%)]" />
      <div class="container-shell relative grid gap-10 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p class="mb-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.26em] text-sky-100">Partenaire de terrain</p>
          <h1 class="max-w-xl text-4xl font-extrabold leading-[1.02] tracking-[-0.05em] text-white md:text-6xl">
            Construisons vos projets.<br>
            <span class="text-sky-300">Nous fournissons les solutions.</span>
          </h1>
          <p class="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
            ETS Cameroon Services accompagne les besoins de construction, rénovation, décoration et équipement professionnel avec des solutions fiables, adaptées au terrain et pensées pour des projets durables.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <BaseButton variant="primary" @click="navigateTo('/demande-devis')">Demander un devis</BaseButton>
            <BaseButton variant="secondary" class="!border-white/15 !bg-white/5 !text-white hover:!bg-white/10" @click="navigateTo('/solutions')">Découvrir nos solutions</BaseButton>
          </div>

          <div class="mt-8 grid gap-3 sm:grid-cols-3">
            <div class="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_12px_25px_rgba(8,47,90,0.18)] backdrop-blur-sm">
              <p class="text-xl font-extrabold text-sky-300">+120</p>
              <p class="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">projets livrés</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_12px_25px_rgba(8,47,90,0.18)] backdrop-blur-sm">
              <p class="text-xl font-extrabold text-sky-300">24/7</p>
              <p class="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">suivi terrain</p>
            </div>
            <div class="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_12px_25px_rgba(8,47,90,0.18)] backdrop-blur-sm">
              <p class="text-xl font-extrabold text-sky-300">Douala</p>
              <p class="mt-1 text-[11px] uppercase tracking-[0.18em] text-slate-300">base opérationnelle</p>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_30px_80px_rgba(2,6,23,0.45)] backdrop-blur-sm">
            <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80" alt="Chantier professionnel" class="h-[520px] w-full rounded-[1.6rem] object-cover" />
          </div>
          <div class="absolute -left-4 top-8 rounded-2xl border border-white/20 bg-slate-950/70 p-4 shadow-[0_20px_35px_rgba(2,6,23,0.35)] backdrop-blur-sm">
            <p class="text-[10px] uppercase tracking-[0.2em] text-slate-300">Livraison chantier</p>
            <p class="mt-2 text-lg font-semibold text-white">Suivi terrain</p>
          </div>
          <div class="absolute -right-4 bottom-8 rounded-2xl border border-white/20 bg-slate-950/70 p-4 shadow-[0_20px_35px_rgba(2,6,23,0.35)] backdrop-blur-sm">
            <p class="text-[10px] uppercase tracking-[0.2em] text-slate-300">Solutions</p>
            <p class="mt-2 text-lg font-semibold text-white">Matériaux & équipements</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell">
      <div class="container-shell">
        <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div class="site-card overflow-hidden">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80" alt="Équipe ETS Cameroon Services" class="h-full w-full object-cover" />
          </div>
          <div>
            <p class="text-sm font-extrabold uppercase tracking-[0.24em] text-primary">Un partenaire proche du terrain</p>
            <h2 class="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-slate-900 dark:text-white md:text-4xl">Un accompagnement fiable, de la commande à la livraison.</h2>
            <p class="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">
              ETS CAMEROON SERVICES est un partenaire à Douala spécialisé dans la fourniture de matériaux de construction et l’équipement complet pour hôtels, restaurants et chantiers.
            </p>

            <div class="mt-8 grid gap-4 sm:grid-cols-2">
              <div class="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-[0_18px_30px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:border-primary/30 dark:border-slate-700 dark:from-slate-900 dark:to-slate-900">
                <p class="text-2xl font-extrabold text-primary">Matériaux</p>
                <p class="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Ciment, fer, agrégats, toiture, finitions et approvisionnement régulier.</p>
              </div>
              <div class="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 shadow-[0_18px_30px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-1 hover:border-primary/30 dark:border-slate-700 dark:from-slate-900 dark:to-slate-900">
                <p class="text-2xl font-extrabold text-primary">Professionnels</p>
                <p class="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">Hôtels, restaurants, artisans et chantiers avec des solutions sur mesure.</p>
              </div>
            </div>

            <div class="mt-8 flex flex-wrap items-center gap-4">
              <BaseButton variant="primary" @click="navigateTo('/contact')">Nous contacter</BaseButton>
              <div class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                <span class="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                Système de livraison fiable
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell bg-slate-100 dark:bg-slate-900/80">
      <div class="container-shell">
        <div class="mb-10 flex items-end justify-between gap-6">
          <div>
            <p class="text-sm font-extrabold uppercase tracking-[0.24em] text-primary">Services</p>
            <h2 class="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-900 dark:text-white md:text-4xl">Des solutions adaptées à chaque étape</h2>
          </div>
        </div>

        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article v-for="service in services" :key="service.title" class="group overflow-hidden rounded-[1.8rem] border border-slate-200 bg-white shadow-[0_24px_50px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_30px_60px_rgba(8,47,90,0.12)] dark:border-slate-700 dark:bg-slate-900">
            <div class="relative h-52 overflow-hidden">
              <img :src="service.image" :alt="service.title" class="h-full w-full object-cover transition duration-500 group-hover:scale-110" />
              <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent" />
              <div class="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/35 px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                {{ service.tag }}
              </div>
            </div>
            <div class="p-5">
              <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-sky-100 text-xl text-primary transition group-hover:scale-105 dark:from-sky-500/10 dark:to-sky-500/5">{{ service.icon }}</div>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ service.title }}</h3>
              <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{{ service.description }}</p>
              <div class="mt-5">
                <NuxtLink :to="`/services/${service.slug}`" class="inline-flex items-center gap-2 text-sm font-semibold text-primary">En savoir plus <span aria-hidden="true">→</span></NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section-shell">
      <div class="container-shell">
        <div class="mb-10 text-center">
          <p class="text-sm font-extrabold uppercase tracking-[0.24em] text-primary">Nos chiffres</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-900 dark:text-white md:text-4xl">Une performance visible sur le terrain</h2>
        </div>

        <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <div v-for="stat in stats" :key="stat.label" class="rounded-[1.6rem] border border-slate-200 bg-white p-6 shadow-[0_18px_35px_rgba(15,23,42,0.04)] dark:border-slate-700 dark:bg-slate-900">
            <p class="text-4xl font-extrabold tracking-[-0.05em] text-primary">{{ stat.value }}</p>
            <p class="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell bg-slate-50 dark:bg-slate-950/80">
      <div class="container-shell">
        <div class="mb-10 text-center">
          <p class="text-sm font-extrabold uppercase tracking-[0.24em] text-primary">Témoignages</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-900 dark:text-white md:text-4xl">Ce que disent nos clients</h2>
        </div>

        <div class="grid gap-6 lg:grid-cols-3">
          <article v-for="testimonial in testimonials" :key="testimonial.name" class="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_35px_rgba(15,23,42,0.04)] dark:border-slate-700 dark:bg-slate-900">
            <div class="mb-4 flex items-center gap-1 text-amber-400">
              <span v-for="n in 5" :key="n">★</span>
            </div>
            <p class="text-sm leading-7 text-slate-600 dark:text-slate-300">“{{ testimonial.quote }}”</p>
            <div class="mt-6 border-t border-slate-200 pt-4 dark:border-slate-700">
              <p class="font-bold text-slate-900 dark:text-white">{{ testimonial.name }}</p>
              <p class="text-xs uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">{{ testimonial.role }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="section-shell">
      <div class="container-shell">
        <div class="mb-10">
          <p class="text-sm font-extrabold uppercase tracking-[0.24em] text-primary">Solutions</p>
          <h2 class="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-slate-900 dark:text-white md:text-4xl">Des réponses concrètes à vos besoins</h2>
        </div>
        <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <article v-for="solution in solutions" :key="solution.title" class="rounded-[1.6rem] border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-[0_18px_35px_rgba(15,23,42,0.05)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:from-slate-900 dark:to-slate-900 dark:bg-slate-900">
            <div class="mb-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-primary to-sky-500" />
            <h3 class="text-xl font-bold text-slate-900 dark:text-white">{{ solution.title }}</h3>
            <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300"><strong class="font-semibold text-slate-900 dark:text-white">Problème :</strong> {{ solution.problem }}</p>
            <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300"><strong class="font-semibold text-slate-900 dark:text-white">Solution :</strong> {{ solution.solution }}</p>
            <p class="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300"><strong class="font-semibold text-slate-900 dark:text-white">Bénéfice :</strong> {{ solution.benefit }}</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section-shell bg-gradient-to-r from-primary via-[#0a2a50] to-[#0d2341] text-white">
      <div class="container-shell">
        <div class="grid gap-8 lg:grid-cols-5">
          <div class="lg:col-span-2">
            <p class="text-sm font-extrabold uppercase tracking-[0.24em] text-sky-200">Processus</p>
            <h2 class="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-white md:text-4xl">Comment nous avançons</h2>
            <p class="mt-4 max-w-md text-sm leading-7 text-slate-200">Une méthode claire, rapide et orientée résultats pour sécuriser les livraisons et les projets.</p>
          </div>
          <div class="grid gap-4 md:grid-cols-2 lg:col-span-3">
            <div v-for="(step, index) in processSteps" :key="step.title" class="rounded-2xl border border-white/10 bg-white/5 p-4 transition duration-200 hover:bg-white/10">
              <p class="text-3xl font-extrabold text-sky-300">0{{ index + 1 }}</p>
              <p class="mt-3 text-lg font-semibold text-white">{{ step.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-shell">
      <div class="container-shell">
        <div class="rounded-[2rem] bg-gradient-to-r from-slate-950 via-slate-900 to-primary p-8 text-white shadow-[0_30px_80px_rgba(8,47,90,0.25)] md:p-10">
          <div class="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p class="text-sm font-extrabold uppercase tracking-[0.24em] text-slate-200">Prêt à concrétiser votre projet ?</p>
              <h2 class="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-white md:text-4xl">Parlons de votre prochain chantier</h2>
              <p class="mt-3 max-w-xl text-sm leading-7 text-slate-200">Des équipes fiables, des livraisons prévisibles et un conseil de qualité pour des résultats durables.</p>
            </div>
            <div class="flex flex-col gap-3 sm:flex-row">
              <BaseButton variant="secondary" class="!bg-white !text-slate-900 hover:!bg-slate-100" @click="navigateTo('/demande-devis')">Demander un devis</BaseButton>
              <BaseButton variant="primary" class="!border !border-white/20 !bg-transparent !text-white hover:!bg-white/5" @click="navigateTo('/contact')">Nous contacter</BaseButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'ETS Cameroon Services | Construction, rénovation, matériaux et équipement professionnel',
  meta: [
    { name: 'description', content: 'ETS Cameroon Services accompagne les projets de construction, rénovation, hôtellerie et restauration au Cameroun.' }
  ]
})

const services = [
  { icon: '🏗️', tag: 'Bâtiment', title: 'Gros œuvre', slug: 'gros-oeuvre', description: 'Ciment, fer, agrégats, toiture et matériaux structuraux pour des chantiers solides.', image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80' },
  { icon: '⚙️', tag: 'Travaux', title: 'Second œuvre', slug: 'second-oeuvre', description: 'Électricité, plomberie, menuiserie et installations professionnelles.', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80' },
  { icon: '🧱', tag: 'Finition', title: 'Finitions', slug: 'finitions', description: 'Carrelage, peinture, sanitaire et habillages de qualité.', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=900&q=80' },
  { icon: '🍽️', tag: 'Hôtellerie', title: 'Hôtels & restaurants', slug: 'hotels-restaurants', description: 'Cuisine professionnelle, mobilier, literie et linge adaptés à l’hôtellerie.', image: 'https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80' },
  { icon: '🎨', tag: 'Décor', title: 'Décoration', slug: 'decoration', description: 'Mobilier, luminaires et agencements pour des espaces fonctionnels et élégants.', image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=900&q=80' },
  { icon: '🛠️', tag: 'Support', title: 'Services artisans', slug: 'services-artisans', description: 'Mise en relation pour pose, installation et accompagnement terrain.', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80' }
]

const stats = [
  { value: '120+', label: 'Projets livrés' },
  { value: '24/7', label: 'Suivi terrain' },
  { value: '98%', label: 'Satisfaction client' },
  { value: '15+', label: 'Années d’expérience' }
]

const testimonials = [
  { name: 'Jean M.', role: 'Chef de projet', quote: 'L’équipe a su livrer dans les délais avec une qualité de service vraiment professionnelle et rassurante.' },
  { name: 'Amina N.', role: 'Gérante hôtel', quote: 'Nous avons trouvé un partenaire fiable pour nos équipements, avec un accompagnement sérieux de la commande à la mise en service.' },
  { name: 'Paul K.', role: 'Directeur chantier', quote: 'Le niveau d’organisation, de réactivité et d’expertise de terrain a nettement renforcé notre efficacité.' }
]

const solutions = [
  { title: 'Construction', problem: 'Besoin d’un approvisionnement fiable et régulier.', solution: 'Sélection de matériaux et équipements adaptés au cahier des charges.', benefit: 'Des chantiers plus sûrs et mieux pilotés.' },
  { title: 'Rénovation', problem: 'Un espace ancien ou obsolète nécessite une mise à niveau.', solution: 'Diagnostic, fournitures et accompagnement de projet.', benefit: 'Des rénovations utiles, durables et professionnelles.' },
  { title: 'Hôtellerie', problem: 'Les établissements ont besoin de mobilier et d’équipements performants.', solution: 'Approvisionnement complet pour chambres, cuisines et espaces clients.', benefit: 'Des services plus qualitatifs et plus rentables.' },
  { title: 'Restauration', problem: 'Les besoins en cuisine, vaisselle et mobilier sont exigeants.', solution: 'Fournitures professionnelles et suggestions d’équipement.', benefit: 'Une meilleure fluidité opérationnelle.' },
  { title: 'Décoration', problem: 'Le cadre doit inspirer confiance et qualité.', solution: 'Mobilier, luminaires et agencement sur mesure.', benefit: 'Un environnement premium et fonctionnel.' },
  { title: 'Chantier', problem: 'Le terrain doit avancer selon le calendrier et les besoins.', solution: 'Livraison, coordination et matériel adapté au chantier.', benefit: 'Un pilotage plus efficace des travaux.' }
]

const processSteps = [
  { title: 'Parlez-nous de votre projet' },
  { title: 'Identifions vos besoins' },
  { title: 'Préparons votre solution' },
  { title: 'Organisons la livraison' },
  { title: 'Faisons avancer votre projet' }
]
</script>
