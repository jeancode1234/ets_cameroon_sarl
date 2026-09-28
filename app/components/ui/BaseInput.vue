<template>
  <label class="block text-sm font-medium text-slate-700 dark:text-slate-200">
    <span v-if="label" class="mb-2.5 block text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">{{ label }}</span>
    <input
      :value="modelValue"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      class="w-full rounded-2xl border border-slate-200 bg-white/90 px-4 py-3.5 text-sm text-slate-900 shadow-[0_8px_20px_rgba(15,23,42,0.03)] outline-none transition-all duration-200 placeholder:text-slate-400 focus:border-primary focus:ring-4 focus:ring-primary/10 disabled:cursor-not-allowed disabled:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-100 dark:placeholder:text-slate-500 dark:disabled:bg-slate-800"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: string | number
  label?: string
  type?: 'text' | 'email' | 'tel' | 'password' | 'number'
  placeholder?: string
  disabled?: boolean
}>()

defineEmits<{ 'update:modelValue': [value: string | number] }>()
</script>
