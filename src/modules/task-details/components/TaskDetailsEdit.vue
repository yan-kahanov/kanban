<script setup>
import { useTasksStore } from '@/stores/tasks'
import { ButtonUi, CardUi, InputUi, TextAreaUi } from '@/ui'
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

defineProps({
  isEdit: { type: Boolean, default: false }
})
const emit = defineEmits(['update:isEdit'])

const route = useRoute()
const id = computed(() => route.params.id)
const tasksStore = useTasksStore()
const task = computed(() => tasksStore.tasks.find((task) => task.id === +id.value))
const form = ref({
  title: '',
  text: ''
})

watch(
  task,
  () => {
    form.value = {
      title: task.value.title,
      text: task.value.text
    }
  },
  { immediate: true }
)

const onSave = () => {
  tasksStore.editTask(task.value.id, form.value)
  emit('update:isEdit', false)
}
</script>

<template>
  <card-ui class="mt-3">
    <form @submit.prevent="onSave">
      <input-ui v-model="form.title"> </input-ui>
      <text-area-ui v-model="form.text" class="mt-3 min-h-64 resize-none"> </text-area-ui>
      <div class="flex gap-2 mt-5">
        <button-ui color="gray" @click="$emit('update:isEdit', false)"> Отменить </button-ui>
        <button-ui type="submit"> Сохранить </button-ui>
      </div>
    </form>
  </card-ui>
</template>
