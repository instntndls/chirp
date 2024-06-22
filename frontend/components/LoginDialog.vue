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
    <DialogContent class="sm:max-w-[320px]">
      <DialogHeader>
        <DialogTitle>Sign in 🐣</DialogTitle>
      </DialogHeader>

      <DialogDescription>
        Sign in to your account
      </DialogDescription>

      <Input type="email" placeholder="Email" class="w-full"/>
      <Input type="password" placeholder="Password" class="w-full"/>



      <DialogFooter>
        <div class="w-full flex flex-col gap-4">
          <div class="flex  text-sm">
          <span class="">
            Don't have an account?
          </span>
            <DialogTrigger >
              <span class="ml-2 hover:underline cursor-pointer text-foreground bg-primary px-1 py-[1px] rounded">
                Sign up
              </span>
            </DialogTrigger>
          </div>

          <Button type="submit" class="w-full">
            Sign in
            <ArrowRightIcon class="ml-1 size-4"/>
          </Button>
        </div>

      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>