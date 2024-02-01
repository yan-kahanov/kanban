<script setup>
import { onMounted, watch } from 'vue'
import { RouterView } from 'vue-router'
import { useColumnsStore } from './stores/columns'
import { useTasksStore } from './stores/tasks'
import { storeToRefs } from 'pinia'

const columnsStore = useColumnsStore()
const tasksStore = useTasksStore()
const { columns } = storeToRefs(columnsStore)
const { tasks } = storeToRefs(tasksStore)

onMounted(() => {
  const savedColumns = localStorage.getItem('columns')
  const savedTasks = localStorage.getItem('tasks')

  if (savedColumns) columnsStore.setColumns(JSON.parse(savedColumns))
  if (savedTasks) tasksStore.setTasks(JSON.parse(savedTasks))
})

watch([columns, tasks], () => {
  localStorage.setItem('columns', JSON.stringify(columns.value))
  localStorage.setItem('tasks', JSON.stringify(tasks.value))
})
</script>

<template>
  <div class="h-full bg-slate-900 text-slate-200 overflow-auto">
    <RouterView />
  </div>
</template>
