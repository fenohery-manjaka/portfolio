<script setup>
import SectionHead from './SectionHead.vue'
import { path } from '../content/profile.js'
</script>

<template>
  <section id="parcours" class="mx-auto max-w-6xl px-4 pt-24 sm:px-6 md:pt-32 lg:px-10">
    <SectionHead :label="path.label" :title="path.title" />

    <ol class="mt-12 md:mt-16">
      <li
        v-for="(entry, i) in path.entries"
        :key="entry.when"
        v-reveal="i * 80"
        class="grid gap-2 border-t border-rule py-7 last:border-b md:grid-cols-12 md:gap-8"
      >
        <p class="label md:col-span-3 md:pt-2">{{ entry.when }}</p>
        <div class="md:col-span-9">
          <h3 class="text-[clamp(1.6rem,3vw,2.2rem)] leading-tight">
            {{ entry.what }}
          </h3>
          <p class="mt-1 text-xl text-ink-soft italic">{{ entry.where }}</p>
          <p v-if="entry.detail" class="label mt-3">{{ entry.detail }}</p>
        </div>
      </li>
    </ol>
  </section>
</template>
