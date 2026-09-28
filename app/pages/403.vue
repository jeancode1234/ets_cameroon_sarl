<template>
  <section class="section-shell">
    <div class="container-shell max-w-xl">
      <div class="site-card p-10 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">403</p>
        <h1 class="mt-4 text-4xl font-bold text-slate-900 dark:text-white">Accès refusé</h1>
        <p class="mt-4 text-slate-600 dark:text-slate-300">Vous n'avez pas les permissions nécessaires pour accéder à cette page.</p>
        <div class="mt-8">
          <BaseButton variant="primary" @click="navigateTo('/app/prospecteur/dashboard')">Retour au tableau de bord</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
