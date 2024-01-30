<script setup>
defineProps({
  bgColor: { type: String, default: 'bg-slate-800' }
})
</script>

<template>
  <div
    ref="cardEl"
    class="border rounded-xl shadow-sm p-6 border-gray-700 transition-all"
    :class="`${bgColor}`"
  >
    <slot></slot>
  </div>
</template>
