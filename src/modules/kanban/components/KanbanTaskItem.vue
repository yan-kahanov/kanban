<script setup>
import { CardUi } from '@/ui/'
import { ref } from 'vue'
import { useTasksStore } from '@/stores/tasks'

defineProps({
  task: { type: Object }
})

const tasksStore = useTasksStore()
const isHover = ref(false)
</script>

<template>
  <card-ui
    class="hover:bg-slate-600 cursor-pointer pt-1 pb-3 px-3 relative"
    bgColor="bg-slate-700"
    @mouseover="isHover = true"
    @mouseleave="isHover = false"
  >
    <div class="text-xl truncate">{{ task.title }}</div>
    <div
      class="text-sm text-slate-300 overflow-hidden mt-1 whitespace-pre"
      :style="{
        '-webkit-line-clamp': 4,
        display: '-webkit-box',
        '-webkit-box-orient': 'vertical'
      }"
    >
      {{ task.text }}
    </div>
    <button
      class="absolute top-1 right-1 w-6 h-6 text-xs transition-all hover:bg-slate-400/25 rounded-full flex items-center justify-center"
      :class="{ 'opacity-0': !isHover }"
      @click.prevent="tasksStore.removeTask(task.id)"
      color="gray"
    >
      ✕
    </button>
  </card-ui>
</template>
