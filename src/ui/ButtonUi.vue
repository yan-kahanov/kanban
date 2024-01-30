<script setup>
defineProps({
  color: { type: String, default: 'blue' }
})

const colors = {
  blue: 'bg-blue-600 hover:bg-blue-700',
  gray: 'bg-gray-500 hover:bg-gray-600',
}
</script>

<template>
  <button
    type="button"
    class="py-3 px-4 flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-white disabled:opacity-50 disabled:pointer-events-none transition-all"
    :class="[colors[color]]"
  >
    <slot></slot>
  </button>
</template>
