<script setup lang="ts">
import {
  LogOut,
  Mail,
  Settings,
  HelpCircle
} from 'lucide-vue-next'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const settingsOpened = inject( 'settingsOpened' )
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <slot/>
    </DropdownMenuTrigger>
    <DropdownMenuContent class="w-56 mr-6">
      <DropdownMenuLabel>Username</DropdownMenuLabel>

      <DropdownMenuSeparator />

      <router-link to="/inbox" class="flex items-center w-full">
        <DropdownMenuItem class="w-full">
            <Mail class="mr-2 h-4 w-4" />
            <span>Inbox</span>
        </DropdownMenuItem>
      </router-link>

      <DropdownMenuItem @click="settingsOpened = true">
        <Settings class="mr-2 h-4 w-4" />
        <span>Settings</span>
      </DropdownMenuItem>

      <DropdownMenuSeparator />

      <router-link to="/about" class="flex items-center w-full">
        <DropdownMenuItem class="w-full">
          <HelpCircle class="mr-2 h-4 w-4" />
          <span>About</span>
        </DropdownMenuItem>
      </router-link>

      <DropdownMenuItem>
        <LogOut class="mr-2 h-4 w-4" />
        <span>Log out</span>
      </DropdownMenuItem>

    </DropdownMenuContent>

  </DropdownMenu>
</template>