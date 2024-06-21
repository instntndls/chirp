<script setup lang="ts">

import { User2Icon, SearchIcon } from "lucide-vue-next";
import {provide} from "vue";

const settingsOpened = ref(false)

provide('settingsOpened', settingsOpened)
</script>

<template>
  <Card class="px-4 w-full h-16 bg-secondary/10 flex gap-4 items-center justify-between rounded-t-none">
    <router-link class="font-bold flex items-center" to="/">
      <span class="text-3xl -mt-2">🐥</span>
      <h1 class="leading-snug text-2xl hidden xl:block">Chirp</h1>
    </router-link>

    <div class="relative w-full sm:w-1/3 max-w-sm items-center">
      <Input id="search" type="text" placeholder="Search users to message..." class="pl-10" />
      <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
        <SearchIcon class="size-5 text-muted-foreground" />
      </span>
    </div>

    <div class="flex items-center gap-6">


      <LoginDialog>
        <Button>
          sign in
        </Button>
      </LoginDialog>

      <SettingsDialog/>

      <UserDropdown>
        <Button variant="secondary" class="rounded-full p-0 size-10">
          <user2-icon/>
        </Button>
      </UserDropdown>

    </div>

  </Card>
</template>

<style scoped>

</style>