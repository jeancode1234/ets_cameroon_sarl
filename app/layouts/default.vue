<template>
  <div class="relative min-h-screen bg-neutral-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <AppNavbar />
    <main class="relative z-10">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
