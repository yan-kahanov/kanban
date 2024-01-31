<script setup>
import { ButtonUi, CardUi } from '@/ui/'
import { KanbanTaskList, KanbanNewTask } from '.'
import { useColumnsStore } from '@/stores/columns'
import { ref } from 'vue'

const props = defineProps({
  column: { type: Object }
})

const columnsStore = useColumnsStore()
const columnEl = ref()
const { removeColumn } = columnsStore
const isModalOpened = ref(false)

const handleRemoveColumn = () => {
  columnEl.value.$el.className = 'transition-all overflow-hidden w-0 p-0 border-none opacity-0'
  setTimeout(() => removeColumn(props.column.id), 150)
}
</script>

<template>
  <card-ui class="flex-shrink-0 h-max w-96 p-3" ref="columnEl">
    <div class="flex justify-between items-center gap-2">
      <div
        class="text-2xl font-semibold overflow-hidden"
        :style="{
          '-webkit-line-clamp': 2,
          display: '-webkit-box',
          '-webkit-box-orient': 'vertical'
        }"
      >
        {{ column.title }}
      </div>
      <div class="flex gap-1 shrink-0">
        <button-ui class="w-10 h-10" @click="() => isModalOpened = true">
          <svg
            class="flex-shrink-0 w-6 h-6"
            fill="currentColor"
            stroke="currentColor"
            clip-rule="evenodd"
            fill-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m12.002 2c5.518 0 9.998 4.48 9.998 9.998 0 5.517-4.48 9.997-9.998 9.997-5.517 0-9.997-4.48-9.997-9.997 0-5.518 4.48-9.998 9.997-9.998zm0 1.5c-4.69 0-8.497 3.808-8.497 8.498s3.807 8.497 8.497 8.497 8.498-3.807 8.498-8.497-3.808-8.498-8.498-8.498zm-.747 7.75h-3.5c-.414 0-.75.336-.75.75s.336.75.75.75h3.5v3.5c0 .414.336.75.75.75s.75-.336.75-.75v-3.5h3.5c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-3.5v-3.5c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
              fill-rule="nonzero"
            /></svg
        >
        </button-ui>
        <button-ui @click="handleRemoveColumn" color="gray" class="w-10 h-10">
          ✕
        </button-ui>
        <kanban-new-task v-model:is-modal-opened="isModalOpened" :column-id="column.id"/>
      </div>
    </div>
    <kanban-task-list :column-id="column.id" />
  </card-ui>
</template>
