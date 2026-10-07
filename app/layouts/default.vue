<template>
  <div class="relative min-h-screen bg-[var(--background)] text-[var(--foreground)]">
    <AppNavbar />
    <main class="relative z-10">
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
