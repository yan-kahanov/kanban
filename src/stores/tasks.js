import { defineStore } from 'pinia'

const example = [
  { id: 1, title: '123', text: '123', columnId: 1 }
]

export const useTasksStore = defineStore('tasks', {
  state: () => ({ tasks: example }),
  actions: {
    addTask(task, columnId) {
      this.tasks.push({ ...task, columnId })
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId)
    },
    changeColumnId(taskId, columnId) {
      this.tasks = this.tasks.map(task => {
        const isIdEqual = task.id === taskId
        return { ...task, columnId: isIdEqual ? columnId : task.columnId }
      })
    },
    editTask(taskId, edits) {
      this.tasks = this.tasks.map(task => {
        const isIdEqual = task.id === taskId
        return isIdEqual ? { ...task, ...edits } : task
      })
    }
  },
})