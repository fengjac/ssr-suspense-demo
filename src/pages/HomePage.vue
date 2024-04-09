<template>
  <div>This is a home page</div>
</template>

<script setup lang="ts">
import { sleep } from 'src/utils';

defineOptions({
  name: 'HomePage',
  async preFetch() {
    await sleep(3000); // sleep 3 seconds
  },
});

// await sleep(3000);
</script>

<style scoped></style>
