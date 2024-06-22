<script setup lang="ts">
import { ArrowRightIcon } from "lucide-vue-next";
import FeatureCard from "~/components/FeatureCard.vue";
</script>

<template>
  <div class="xl:h-dvh h-full flex flex-col ">

    <div class="h-full w-full pt-12 px-24 flex flex-col items-center">
      <div class="h-full flex gap-12 flex-wrap xl:flex-nowrap justify-center xl:justify-between w-full items-center">
        <div>
          <h1 class="text-[96px] font-extrabold">
            Chirp
          </h1>

          <h2 class="ml-4 text-3xl">
            Send Anonymous Messages!
          </h2>
        </div>

        <p class="text-9xl xl:text-[256px] select-none hover:rotate-[-12deg] transition-all">
          🐤
        </p>

      </div>

      <LoginDialog>
        <Button class="z-10 w-min xl:mt-24 mb-16">
          start chirping!
          <ArrowRightIcon class="ml-2 size-4"/>
        </Button>
      </LoginDialog>
    </div>



    <div class="w-full h-full flex xl:flex-nowrap flex-wrap gap-4 justify-center items-center bg-primary/30 p-6">
      <FeatureCard :title="'Anonymity'" :text="'Your identity is always secure.'">
        👤
      </FeatureCard>
      <FeatureCard :title="'Easy to Use'" :text="'Simple and intuitive interface.'">
        🏖️
      </FeatureCard>
      <FeatureCard :title="'Instant Delivery'" :text="'Messages are sent and received in real-time.'">
        🚀
      </FeatureCard>
      <FeatureCard :title="'Free to Use'" :text="'Enjoy all features without any cost.'">
        🫰
      </FeatureCard>

    </div>


  </div>
</template>

<style scoped>
</style>