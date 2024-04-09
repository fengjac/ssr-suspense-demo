import { defineStore } from 'pinia';
import { sleep } from 'src/utils';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    counter: 0,
    user: { id: '' },
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
    async getUser() {
      await sleep(3000);
      const response = await fetch('https://random-data-api.com/api/v2/users');
      const data = await response.json();
      console.log('api get user done', data.id);
      this.user.id = data.id;
    },
  },
});
