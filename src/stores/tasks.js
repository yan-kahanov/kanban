import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({ tasks: [] }),
  actions: {
    addTask(task, columnId) {
      this.tasks.push({...task, columnId})
    },
    removeTask(taskId){
      this.tasks = this.tasks.filter(task => task.id !== taskId)
    }
  },
})