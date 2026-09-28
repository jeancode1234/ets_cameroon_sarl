<template>
  <div class="space-y-6">
    <div class="site-card overflow-hidden p-5 md:p-6">
      <div class="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="text-sm text-slate-500 dark:text-slate-400">Administration</p>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white md:text-3xl">Tableau de bord premium</h1>
        </div>
        <div class="flex flex-wrap gap-2">
          <BaseButton variant="secondary">Exporter</BaseButton>
          <BaseButton variant="primary">Gérer les paramètres</BaseButton>
        </div>
      </div>
    </div>

    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <div v-for="card in cards" :key="card.label" class="site-card p-5">
        <div class="flex items-center justify-between">
          <p class="text-sm text-slate-500 dark:text-slate-400">{{ card.label }}</p>
          <span class="rounded-full bg-primary/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-primary dark:bg-primary/20">{{ card.trend }}</span>
        </div>
        <p class="mt-4 text-3xl font-bold text-slate-900 dark:text-white">{{ card.value }}</p>
        <p class="mt-2 text-sm text-emerald-600 dark:text-emerald-400">{{ card.delta }}</p>
      </div>
    </div>

    <div class="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
      <div class="space-y-6">
        <div class="site-card p-5">
          <div class="mb-5 flex items-center justify-between">
            <h2 class="text-xl font-semibold text-slate-900 dark:text-white">KPI par département</h2>
            <span class="text-xs font-medium uppercase tracking-[0.18em] text-slate-400">Mois</span>
          </div>
          <div class="space-y-4">
            <div v-for="metric in metrics" :key="metric.label">
              <div class="mb-2 flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
                <span>{{ metric.label }}</span>
                <span>{{ metric.value }}</span>
              </div>
              <div class="h-2.5 rounded-full bg-slate-100 dark:bg-slate-800">
                <div class="h-2.5 rounded-full bg-gradient-to-r from-primary to-sky-500" :style="`width: ${metric.percent}%`" />
              </div>
            </div>
          </div>
        </div>

        <div class="site-card p-5">
          <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Devis récents</h2>
          <div class="mt-4 space-y-3">
            <div v-for="quote in quotes" :key="quote.id" class="flex items-center justify-between border-b border-slate-200 pb-3 last:border-none dark:border-slate-700">
              <div>
                <p class="font-medium text-slate-900 dark:text-white">{{ quote.client }}</p>
                <p class="text-sm text-slate-500 dark:text-slate-400">{{ quote.date }}</p>
              </div>
              <div class="text-right">
                <p class="font-semibold text-primary">{{ quote.amount.toLocaleString() }} FCFA</p>
                <p class="text-xs text-slate-500 dark:text-slate-400">{{ quote.status }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="space-y-6">
        <div class="site-card p-5">
          <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Actions critiques</h2>
          <ul class="mt-4 space-y-3">
            <li v-for="item in actions" :key="item" class="rounded-2xl bg-slate-50 p-3 text-sm text-slate-700 dark:bg-slate-900 dark:text-slate-200">{{ item }}</li>
          </ul>
        </div>

        <div class="site-card p-5">
          <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Chantiers actifs</h2>
          <div class="mt-4 space-y-3">
            <div v-for="job in jobs" :key="job.id" class="rounded-2xl border border-slate-200 p-3 dark:border-slate-700">
              <div class="flex items-center justify-between">
                <span class="font-medium text-slate-900 dark:text-white">{{ job.name }}</span>
                <span class="text-sm text-slate-500 dark:text-slate-400">{{ job.progress }}%</span>
              </div>
              <div class="mt-2 h-2.5 rounded-full bg-slate-100 dark:bg-slate-800">
                <div class="h-2.5 rounded-full bg-emerald-500" :style="`width: ${job.progress}%`" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'private', middleware: ['auth', 'role'], role: 'ADMIN' })

const { quoteData, jobSiteData, alertData } = useBusinessData()

const cards = [
  { label: 'Utilisateurs', value: '312', delta: '+18.4% vs mois dernier', trend: 'Croissance' },
  { label: 'Prospecteurs', value: '48', delta: '+5.3% vs mois dernier', trend: 'Actifs' },
  { label: 'Devis', value: '128', delta: '+14.8% vs mois dernier', trend: 'Ventes' },
  { label: 'Alertes', value: '14', delta: '-2.1% vs mois dernier', trend: 'Sécurité' }
]

const metrics = [
  { label: 'Qualité des leads', value: '87%', percent: 87 },
  { label: 'Taux de conversion', value: '63%', percent: 63 },
  { label: 'Satisfaction client', value: '91%', percent: 91 },
  { label: 'Performance équipe', value: '78%', percent: 78 }
]

const quotes = quoteData.slice(0, 3)
const jobs = jobSiteData.slice(0, 3)
const actions = [
  'Valider la nouvelle politique de commission',
  'Vérifier les demandes d’accès en attente',
  'Suivre les indicateurs des zones à fort potentiel',
  'Contrôler les synchronisations API et sécurité'
]
</script>
