<script setup>
import { useTasksStore } from '@/stores/tasks'
import { ButtonUi, CardUi } from '@/ui'
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import TaskDetailsEdit from './components/TaskDetailsEdit.vue'

const route = useRoute()
const router = useRouter()
const id = computed(() => route.params.id)
const tasksStore = useTasksStore()
const task = computed(() => tasksStore.tasks.find((task) => task.id === +id.value))
const isEdit = ref(false)

const deleteTask = () => {
  tasksStore.removeTask(task.value.id)
  router.replace('/')
}
</script>

<template>
  <div class="pt-2">
    <div class="container mx-auto px-4">
      <button-ui color="gray" @click="$router.push('/')">На главную</button-ui>
      <task-details-edit v-if="isEdit" v-model:is-edit="isEdit"/>
      <card-ui v-else class="mt-3">
        <div class="text-4xl font-semibold">{{ task.title }}</div>
        <div class="text-xl mt-5 whitespace-pre">{{ task.text }}</div>
        <div class="flex gap-2 mt-5">
          <button-ui color="gray" @click="isEdit = true"> Редеактировать </button-ui>
          <button-ui color="red" @click="deleteTask"> Удалить </button-ui>
        </div>
      </card-ui>
    </div>
  </div>
</template>
