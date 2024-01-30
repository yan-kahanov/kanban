<script setup>
import { useColumnsStore } from '@/stores/columns'
import { ButtonUi, InputUi, CardUi } from '@/ui/'
import { ref } from 'vue'

const columnsStore = useColumnsStore()
const { addColumn } = columnsStore
const column = ref('')

const createColumn = () => {
  addColumn({ id: new Date().getTime(), title: column.value })
  column.value = ''
}
</script>

<template>
  <card-ui class="flex gap-4 p-5">
    <input-ui v-model="column" type="text" placeholder="Название стадии" />
    <button-ui class="shrink-0" :disabled="!column.length" @click="createColumn">
      Создать
      <svg
        class="flex-shrink-0 w-4 h-4"
        stroke="currentColor"
        fill="currentColor"
        clip-rule="evenodd"
        fill-rule="evenodd"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m11 11h-7.25c-.414 0-.75.336-.75.75s.336.75.75.75h7.25v7.25c0 .414.336.75.75.75s.75-.336.75-.75v-7.25h7.25c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-7.25v-7.25c0-.414-.336-.75-.75-.75s-.75.336-.75.75z"
          fill-rule="nonzero"
        />
      </svg>
    </button-ui>
  </card-ui>
</template>
