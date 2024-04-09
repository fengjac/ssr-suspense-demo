<template>
  <div>This is an about page: user id is {{ store.user.id }}</div>
</template>

<script setup lang="ts">
import { useCounterStore } from 'src/stores/user';
// import { sleep } from 'src/utils';

defineOptions({
  name: 'AboutPage',
  async preFetch({ store }) {
    const _store = useCounterStore(store);
    await _store.getUser();
  },
});

const store = useCounterStore();
// await store.getUser();
</script>

<style scoped></style>
