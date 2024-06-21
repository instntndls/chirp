<script setup lang="ts">

import {Card} from "~/components/ui/card";

</script>

<template>
  <Card class="w-full h-16 bg-secondary/10 flex gap-4 items-center justify-center rounded-t-none">
    <router-link to="/">
      <Button :variant=" $router.currentRoute.value.path === '/' ? 'default' : 'secondary'">
        home
      </Button>
    </router-link>
    <router-link to="/hello">
      <Button :variant=" $router.currentRoute.value.path === '/hello' ? 'default' : 'secondary'">
        hello
      </Button>
    </router-link>
  </Card>
</template>

<style scoped>

</style>