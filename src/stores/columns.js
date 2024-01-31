import { defineStore } from 'pinia'

export const useColumnsStore = defineStore('columns', {
  state: () => ({ columns: [] }),
  actions: {
    addColumn(column){
      this.columns = [...this.columns, column]
    },
    removeColumn(columnId){
      this.columns = this.columns.filter(column => column.id !== columnId)
    }
  },
})