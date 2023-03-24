import { definestore } from 'pinia'

export const useAppStore = defineStore('app', {
    state: () => ({
        commandsActionMap: null,
    })
    getters: {}
    actions: {}
  })
  