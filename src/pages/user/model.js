import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'Evan You',
    age: 27,
  }),
  getters: {
    upperCaseName: (state) => state.name.toUpperCase(),
  },
  actions: {
    resetName() {
      this.name = 'Evan You';
    },
  },
});
