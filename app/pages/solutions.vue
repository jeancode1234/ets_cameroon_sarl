<template>
  <section class="section-shell">
    <div class="container-shell">
      <div class="mb-10 max-w-4xl">
        <p class="section-kicker">Solutions</p>
        <h1 class="mt-4 text-4xl font-bold text-slate-900 dark:text-white">Des réponses adaptées à chaque contexte de projet.</h1>
        <p class="mt-4 text-lg text-slate-600 dark:text-slate-300">Nous associons expertise, rapidité et fiabilité pour aider les structures à avancer sans rupture d’approvisionnement ni perte de temps.</p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        <article v-for="item in solutions" :key="item.title" class="site-card p-5 transition duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_16px_32px_rgba(15,23,42,0.08)]">
          <div class="mb-4 h-1.5 w-14 rounded-full bg-primary/80" />
          <h2 class="text-xl font-semibold text-slate-900 dark:text-white">{{ item.title }}</h2>
          <p class="mt-3 text-sm text-slate-600 dark:text-slate-300"><strong>Problème :</strong> {{ item.problem }}</p>
          <p class="mt-3 text-sm text-slate-600 dark:text-slate-300"><strong>Solution :</strong> {{ item.solution }}</p>
          <p class="mt-3 text-sm text-slate-600 dark:text-slate-300"><strong>Bénéfice :</strong> {{ item.benefit }}</p>
          <div class="mt-5">
            <NuxtLink to="/demande-devis" class="text-sm font-semibold text-primary">Demander un devis</NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const solutions = [
  { title: 'Construction', problem: 'Besoin d’un approvisionnement fiable et régulier.', solution: 'Sélection de matériaux et équipements adaptés au cahier des charges.', benefit: 'Des chantiers mieux pilotés et plus durables.' },
  { title: 'Rénovation', problem: 'Un espace ancien ou obsolète nécessite une mise à niveau.', solution: 'Diagnostic et approvisionnement sur mesure.', benefit: 'Des rénovations utiles, esthétiques et fonctionnelles.' },
  { title: 'Hôtellerie', problem: 'Les établissements doivent offrir qualité et confort.', solution: 'Équipement complet pour chambres, cuisine et espaces clients.', benefit: 'Une meilleure expérience pour les clients.' },
  { title: 'Restauration', problem: 'Les besoins en cuisine et mobilier sont exigeants.', solution: 'Approvisionnement et conseils fonctionnels.', benefit: 'Une meilleure fluidité opérationnelle.' },
  { title: 'Décoration', problem: 'L’ambiance et la qualité visuelle sont essentielles.', solution: 'Mobilier et luminaires pour une décoration premium.', benefit: 'Un environnement plus attractif.' },
  { title: 'Chantier', problem: 'Le terrain doit avancer sans rupture de stock ni retards.', solution: 'Livraison et accompagnement terrain.', benefit: 'Une exécution plus efficace.' }
]
</script>
