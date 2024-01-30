<script setup>
import { CardUi } from '@/ui/'

defineProps({
  task: { type: Object }
})
</script>

<template>
  <card-ui
    class="hover:bg-slate-600 cursor-pointer pt-1 pb-3 px-3"
    bgColor="bg-slate-700"
  >
    <div class="text-xl truncate">{{ task.id }}{{ ')' }} {{ task.title }}</div>
    <div
      class="text-sm text-slate-300 overflow-hidden mt-1"
      :style="{
        '-webkit-line-clamp': 4,
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical'
      }"
    >
      {{ task.text }}
    </div>
  </card-ui>
</template>
