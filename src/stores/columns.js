import { defineStore } from 'pinia'

const example = [
  { id: 1, title: '123' }
]

export const useColumnsStore = defineStore('columns', {
  state: () => ({ columns: example }),
  actions: {
    addColumn(column) {
      this.columns = [...this.columns, column]
    },
    removeColumn(columnId) {
      this.columns = this.columns.filter(column => column.id !== columnId)
    }
  },
})