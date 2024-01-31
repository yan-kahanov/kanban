<script setup>
import { useTasksStore } from '@/stores/tasks'
import { ModalUi, InputUi, ButtonUi, TextAreaUi } from '@/ui/'
import { ref } from 'vue'

const props = defineProps({
  isModalOpened: { type: Boolean, default: false },
  columnId: { type: Number }
})
const emits = defineEmits(['update:isModalOpened'])

const tasksStore = useTasksStore()
const { addTask } = tasksStore
const defaultForm = {
  title: '',
  text: ''
}
const form = ref({...defaultForm})

const closeModal = () => emits('update:isModalOpened', false)
const handleSubmit = () => {
  addTask({ id: new Date().getTime(), ...form.value }, props.columnId)
  closeModal()
  form.value = {...defaultForm}
}
</script>

<template>
  <modal-ui :isOpened="isModalOpened" @closeModal="closeModal">
    <form class="flex flex-col gap-2 mt-2 overflow-auto" @submit.prevent="handleSubmit">
      <div class="text-center text-2xl mb-3 text-white">Создание задачи</div>
      <input-ui v-model="form.title" placeholder="Название задачи" />
      <text-area-ui v-model="form.text" class="h-24 resize-none" placeholder="Описание задачи" />
      <button-ui :disabled="!form.title.length || !form.text.length" type="submit"
        >Создать</button-ui
      >
    </form>
  </modal-ui>
</template>
