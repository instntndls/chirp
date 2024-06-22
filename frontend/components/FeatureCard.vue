<script setup lang="ts">

const props = defineProps({
  "title": String,
  "text": String
})

</script>

<template>
  <Card class="w-full h-full flex flex-col items-center justify-center p-4 hover:scale-105 transition-all">
        <span class="text-[128px]">
          <slot/>
        </span>
        <span class="text-xl font-bold text-center">
          {{ props.title }}
        </span>
        <span class="text-md text-center mt-2">
          {{ props.text }}
        </span>
  </Card>
</template>

<style scoped>

</style>