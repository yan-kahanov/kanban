<script setup>
import { ButtonUi, CardUi } from '@/ui/'
import { KanbanTaskList } from '.';

defineProps({
  column: { type: Object }
})
</script>

<template>
  <card-ui class="flex-shrink-0 h-max w-96 py-3">
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
        <button-ui color="gray" class="w-10 h-10">
          <svg
            width="24"
            height="24"
            class="flex-shrink-0"
            fill="currentColor"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            fill-rule="evenodd"
            clip-rule="evenodd"
          >
            <path
              d="M9 3h6v-1.75c0-.066-.026-.13-.073-.177-.047-.047-.111-.073-.177-.073h-5.5c-.066 0-.13.026-.177.073-.047.047-.073.111-.073.177v1.75zm11 1h-16v18c0 .552.448 1 1 1h14c.552 0 1-.448 1-1v-18zm-10 3.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm5 0c0-.276-.224-.5-.5-.5s-.5.224-.5.5v12c0 .276.224.5.5.5s.5-.224.5-.5v-12zm8-4.5v1h-2v18c0 1.105-.895 2-2 2h-14c-1.105 0-2-.895-2-2v-18h-2v-1h7v-2c0-.552.448-1 1-1h6c.552 0 1 .448 1 1v2h7z"
            />
          </svg>
        </button-ui>
        <button-ui class="w-10 h-10">
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
        ></button-ui>
      </div>
    </div>
    <kanban-task-list :tasks="column.tasks"/>
  </card-ui>
</template>
