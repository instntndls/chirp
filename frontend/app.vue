<template>
  <NuxtLayout name="default">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
function capitalize( str: string ) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function updateHead() {
  useHead( {
    title: 'Chirp' + (useRoute().path === '/' ? '' : ' - ' + capitalize(useRoute().path.slice(1))),
  })
}

useSeoMeta({
  description: 'Chirp: Send Anonymous Messages',
  ogDescription: 'Chirp: Send Anonymous Messages'
})

onMounted(() => {
  updateHead()
})

watch(() => useRoute().path, () => {
  updateHead()
})
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>