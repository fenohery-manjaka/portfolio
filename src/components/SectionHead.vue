<script setup>
import PluckString from './PluckString.vue'

defineProps({
  label: { type: String, required: true },
  title: { type: String, required: true },
  intro: { type: String, default: '' },
})
</script>

<template>
  <div>
    <PluckString class="text-ink" :height="40" />
    <div class="mt-6 grid gap-4 md:grid-cols-12 md:gap-8">
      <p class="label md:col-span-3 md:pt-3"><span class="text-carmine">§</span> {{ label }}</p>
      <div class="md:col-span-9">
        <h2 v-reveal class="text-[clamp(2.1rem,5vw,3.6rem)] leading-[1.02] font-[380] tracking-[-0.015em]">
          {{ title }}
        </h2>
        <p v-if="intro" v-reveal="80" class="mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{{ intro }}</p>
        <slot />
      </div>
    </div>
  </div>
</template>
