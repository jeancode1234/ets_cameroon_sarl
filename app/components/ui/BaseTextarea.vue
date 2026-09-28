<template>
  <label class="block text-sm font-medium text-slate-700 dark:text-slate-200">
    <span v-if="label" class="mb-2 block">{{ label }}</span>
    <textarea
      :value="modelValue"
      :rows="rows"
      :placeholder="placeholder"
      class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      @input="$emit('update:modelValue', ($event.target as HTMLTextAreaElement).value)"
    />
  </label>
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: string
  label?: string
  placeholder?: string
  rows?: number
}>()

defineEmits<{ 'update:modelValue': [value: string] }>()
</script>
