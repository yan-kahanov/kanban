<script setup>
import { computed } from 'vue';
import { KanbanTaskItem } from '.';
import { useTasksStore } from '@/stores/tasks'

const props = defineProps({
  columnId: { type: Number }
})

const tasksStore = useTasksStore()
const filteredList = computed(() => tasksStore.tasks.filter(task => task.columnId === props.columnId))
</script>

<template>
  <div class="mt-5 flex flex-col gap-3">
    <div v-if="filteredList.length" class="contents">
      <KanbanTaskItem v-for="task in filteredList" :key="task.id" :task="task"/>
    </div>
    <div v-else class="text-center">Нет задач</div>
  </div>
</template>
