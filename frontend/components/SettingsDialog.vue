<script setup lang="ts">
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {Input} from "~/components/ui/input";
import { ArrowRightIcon } from "lucide-vue-next";
import {Switch} from "~/components/ui/switch";
import {useDark} from "@vueuse/core";

const isDark = useDark()
const themeChecked = ref()

const settingsOpened = inject( 'settingsOpened' )

onMounted( () => {
  themeChecked.value = isDark.value
})

watch( themeChecked , () => {
  isDark.value = themeChecked.value
})

</script>

<template>
  <Dialog v-model:open="settingsOpened" >
    <DialogTrigger as-child>

    </DialogTrigger>
    <DialogContent class="sm:max-w-[400px] ">
      <DialogHeader >
        <DialogTitle>Settings 🐤</DialogTitle>
      </DialogHeader>

      <div class="flex gap-2">
        <span> Dark mode: </span>
        <Switch class="hidden xl:block" :checked="themeChecked" @update:checked="themeChecked = $event"/>
      </div>

      <DialogClose class="ml-auto">
        <Button type="submit" class="">
          Save
        </Button>
      </DialogClose>
    </DialogContent>
  </Dialog>
</template>