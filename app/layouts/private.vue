<template>
  <div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <PrivateSidebar />
    <div class="lg:pl-72">
      <PrivateTopbar />
      <main class="min-h-[calc(100vh-80px)] p-4 md:p-6">
        <slot />
      </main>
    </div>
    <PrivateMobileNavigation />
  </div>
</template>
