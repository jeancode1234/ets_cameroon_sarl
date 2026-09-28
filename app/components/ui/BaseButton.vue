<template>
  <button
    :type="type"
    :disabled="disabled || loading"
    :class="[
      'premium-button',
      variantClasses[variant],
      { 'opacity-60 cursor-not-allowed': disabled || loading },
      { 'gap-2': !!$slots.default }
    ]"
    v-bind="$attrs"
  >
    <span v-if="loading" class="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
    <slot />
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost'
    type?: 'button' | 'submit' | 'reset'
    disabled?: boolean
    loading?: boolean
  }>(),
  {
    variant: 'primary',
    type: 'button',
    disabled: false,
    loading: false
  }
)

const variantClasses = {
  primary: 'premium-button-primary',
  secondary: 'premium-button-secondary',
  ghost: 'border border-transparent bg-transparent text-primary hover:bg-primary/5 dark:text-slate-100'
} as const
</script>
