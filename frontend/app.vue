<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Chirp',
  ogTitle: 'Chirp',
  description: 'Chirp: Send Anonymous Messages',
  ogDescription: 'Chirp: Send Anonymous Messages'
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity .1s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>