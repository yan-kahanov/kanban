<script setup>
import { useTasksStore } from '@/stores/tasks';
import { ButtonUi, CardUi } from '@/ui'
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const id = computed(() => route.params.id)
const tasksStore = useTasksStore()
const task = computed(() => tasksStore.tasks.find(task => task.id === +id.value))
</script>

<template>
  <div class="pt-2">
    <div class="container mx-auto px-4">
        <button-ui color="gray" @click="$router.push('/')">На главную</button-ui>
        <card-ui class="mt-3">
            <div class="text-3xl">{{ task.title }}</div>
            <div class="text-xl mt-3 whitespace-pre">{{ task.text }}</div>
        </card-ui>
    </div>
  </div>
</template>
