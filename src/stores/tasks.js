import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({ tasks: [] }),
  actions: {
    setTasks(tasks){
      this.tasks = tasks
    },
    addTask(task, columnId) {
      this.tasks = [...this.tasks, { ...task, columnId }]
    },
    removeTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId)
    },
    removeTasksByColumnId(columndId){
      this.tasks = this.tasks.filter(task => task.columnId !== columndId)
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