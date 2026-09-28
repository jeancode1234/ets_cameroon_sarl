<template>
  <section class="section-shell">
    <div class="container-shell max-w-xl">
      <div class="site-card p-10 text-center">
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-primary">404</p>
        <h1 class="mt-4 text-4xl font-bold text-slate-900 dark:text-white">Page introuvable</h1>
        <p class="mt-4 text-slate-600 dark:text-slate-300">La page demandée n’existe pas ou a été déplacée.</p>
        <div class="mt-8">
          <BaseButton variant="primary" @click="navigateTo('/')">Retour à l'accueil</BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
