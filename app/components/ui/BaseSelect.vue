<template>
  <label class="block text-sm font-medium text-slate-700 dark:text-slate-200">
    <span v-if="label" class="mb-2 block">{{ label }}</span>
    <select
      :value="modelValue"
      class="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
      @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: string | number
  label?: string
  options: Array<{ value: string; label: string }>
}>()

defineEmits<{ 'update:modelValue': [value: string | number] }>()
</script>
