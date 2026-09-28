<template>
  <div class="space-y-6">
    <div class="site-card p-6">
      <div class="flex items-center gap-4">
        <div class="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-white">PR</div>
        <div>
          <h1 class="text-2xl font-bold text-slate-900 dark:text-white">Profil</h1>
          <p class="text-sm text-slate-500 dark:text-slate-400">Informations personnelles</p>
        </div>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <div class="site-card p-5">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Informations personnelles</h2>
        <div class="mt-4 space-y-4 text-sm text-slate-600 dark:text-slate-300">
          <p><strong>Nom :</strong> Prospect</p>
          <p><strong>Email :</strong> prospect@cameroonservices.cm</p>
          <p><strong>Téléphone :</strong> +237 6XX XX XX XX</p>
          <p><strong>Zone :</strong> Douala</p>
          <p><strong>Rôle :</strong> PROSPECTEUR</p>
        </div>
      </div>

      <div class="site-card p-5">
        <h2 class="text-xl font-semibold text-slate-900 dark:text-white">Sécurité</h2>
        <div class="mt-4 flex flex-col gap-3">
          <BaseButton variant="secondary">Modifier profil</BaseButton>
          <BaseButton variant="secondary">Changer mot de passe</BaseButton>
          <BaseButton variant="primary">Déconnexion</BaseButton>
        </div>
      </div>
    </div>
  </div>
</template>
