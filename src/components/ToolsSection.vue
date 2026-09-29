<script setup>
import SectionHead from './SectionHead.vue'
import { tools } from '../content/profile.js'
</script>

<template>
  <section id="outils" class="mx-auto max-w-6xl px-4 pt-24 sm:px-6 md:pt-32 lg:px-10">
    <SectionHead :label="tools.label" :title="tools.title" />

    <p
      v-reveal
      class="mt-12 flex flex-wrap items-baseline gap-x-[0.3em] text-[clamp(1.7rem,4.6vw,3.4rem)] leading-[1.15] tracking-[-0.01em] md:mt-16"
    >
      <span v-for="(item, i) in tools.formula" :key="item" class="whitespace-nowrap">
        <span class="italic">{{ item }}</span>
        <span v-if="i < tools.formula.length - 1" class="pl-[0.3em] text-carmine" aria-hidden="true">+</span>
      </span>
    </p>

    <div class="mt-14 grid gap-10 md:mt-20 md:grid-cols-12 md:gap-8">
      <div
        v-for="(group, i) in tools.groups"
        :key="group.title"
        v-reveal="i * 80"
        class="border-t border-ink pt-4"
        :class="i === 1 ? 'md:col-span-5' : i === 0 ? 'md:col-span-4' : 'md:col-span-3'"
      >
        <h3 class="label">{{ group.title }}</h3>
        <ul class="mt-4 space-y-1.5 text-[1.1rem]">
          <li v-for="item in group.items" :key="item">{{ item }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>
