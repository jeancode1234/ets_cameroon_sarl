<template>
  <section class="section-shell">
    <div class="container-shell max-w-4xl">
      <div class="site-card p-8">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Service</p>
        <h1 class="mt-3 text-4xl font-bold text-slate-900 dark:text-white">{{ pageTitle }}</h1>
        <p class="mt-5 text-slate-600 dark:text-slate-300">{{ pageDescription }}</p>
        <div class="mt-8">
          <BaseButton variant="primary" @click="navigateTo('/demande-devis')">Demander un devis</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))

const serviceMap: Record<string, { title: string; description: string }> = {
  'gros-oeuvre': {
    title: 'Gros œuvre',
    description: 'Ciment, fer, agrégats, toiture et matériaux structuraux pour des chantiers solides et fiables.'
  },
  'second-oeuvre': {
    title: 'Second œuvre',
    description: 'Électricité, plomberie, menuiserie et solutions techniques pour des installations fiables.'
  },
  'finitions': {
    title: 'Finitions',
    description: 'Carrelage, peinture et sanitaire pour des références de qualité et un rendu professionnel.'
  },
  'hotels-restaurants': {
    title: 'Hôtels & restaurants',
    description: 'Cuisine professionnelle, mobilier, literie et linge conçus pour les établissements de service.'
  },
  decoration: {
    title: 'Décoration',
    description: 'Mobilier, luminaires et agencement pour créer des espaces modernes et fonctionnels.'
  },
  'services-artisans': {
    title: 'Services artisans',
    description: 'Mise en relation pour pose et installation des produits sélectionnés sur votre site.'
  }
}

const pageTitle = computed(() => serviceMap[slug.value]?.title || 'Service')
const pageDescription = computed(() => serviceMap[slug.value]?.description || 'Description du service.')

useHead({ title: `${pageTitle.value} | ETS Cameroon Services` })
</script>
