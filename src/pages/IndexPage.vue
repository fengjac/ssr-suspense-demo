<template>
  <q-page class="row items-center justify-evenly">
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <Suspense :timeout="0">
          <component :is="Component"></component>
          <template #fallback><PageLoading></PageLoading></template>
        </Suspense>
      </template>
    </RouterView>
  </q-page>
</template>

<script setup lang="ts">
import PageLoading from './PageLoading.vue';

defineOptions({ name: 'IndexPage' });
</script>

<style scoped>
nav {
  width: 100%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>
