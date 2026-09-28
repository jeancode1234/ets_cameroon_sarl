<template>
  <div class="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
    <AppNavbar />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>
