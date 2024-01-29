<script setup>
import { KanbanTaskItem } from '.';

defineProps({
  tasks: { type: Object }
})
</script>

<template>
  <div class="mt-5 flex flex-col gap-3">
    <KanbanTaskItem v-for="task in tasks" :key="task.id" :task="task"/>
  </div>
</template>
