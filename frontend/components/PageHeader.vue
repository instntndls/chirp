<script setup lang="ts">

import {Card} from "~/components/ui/card";

</script>

<template>
  <Card class="w-full h-16 bg-foreground/5 flex gap-4 items-center justify-center">
    <router-link to="/">
      <Button >
        home
      </Button>
    </router-link>
    <router-link to="/hello">
      <Button >
        hello
      </Button>
    </router-link>
  </Card>
</template>

<style scoped>

</style>