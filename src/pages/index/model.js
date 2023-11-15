import { defineStore } from 'pinia';

export const useIndexStore = defineStore({
  id: 'index',
  state: () => ({
    count: 1,
  }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++;
    },
  },
});
