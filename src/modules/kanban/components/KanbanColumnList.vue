<script setup>
import { KanbanColumnItem } from '../components'
import { useColumnsStore } from '@/stores/columns'

const columnsStore = useColumnsStore()
</script>

<template>
  <div class="flex flex-nowrap gap-5 mt-5 pb-4 overflow-auto">
    <div v-if="columnsStore.columns.length" class="contents">
      <kanban-column-item
        v-for="column in columnsStore.columns"
        :column="column"
        :key="column.id"
      />
    </div>
    <div v-else class="w-full text-center">
      Нет стадий
    </div>
  </div>
</template>
