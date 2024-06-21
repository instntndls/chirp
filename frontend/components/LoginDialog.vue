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
</script>

<template>
  <Dialog>
    <DialogTrigger as-child>
      <slot/>
    </DialogTrigger>
    <DialogContent class="sm:max-w-[320px] h-1/3">
      <DialogHeader>
        <DialogTitle>Sign in 🐣</DialogTitle>
      </DialogHeader>

      <DialogDescription>
        Sign in to your account
      </DialogDescription>

      <Input type="email" placeholder="Email" class="w-full"/>
      <Input type="password" placeholder="Password" class="w-full"/>


      <DialogFooter class="pt-4">
        <Button type="submit" class="w-full">
          Sign in
          <ArrowRightIcon class="ml-1 size-4"/>
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>