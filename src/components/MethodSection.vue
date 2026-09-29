<script setup>
import SectionHead from './SectionHead.vue'
import { method } from '../content/profile.js'

const last = method.stages.length - 1
</script>

<template>
  <section id="methode" class="mx-auto max-w-6xl px-4 pt-24 sm:px-6 md:pt-32 lg:px-10">
    <SectionHead :label="method.label" :title="method.title" :intro="method.intro" />

    <ol class="relative mt-14 grid gap-10 md:mt-20 md:grid-cols-5 md:gap-6">
      <!-- La chaîne : verticale sur mobile, horizontale ensuite -->
      <span class="absolute top-2 bottom-2 left-[7px] w-px bg-ink md:hidden" aria-hidden="true"></span>
      <span class="absolute top-[7px] right-0 left-0 hidden h-px bg-ink md:block" aria-hidden="true"></span>

      <li
        v-for="(stage, i) in method.stages"
        :key="stage.name"
        v-reveal="i * 90"
        class="group relative pl-9 md:pt-11 md:pl-0"
      >
        <span
          class="absolute top-1.5 left-0 h-[15px] w-[15px] rounded-full border border-ink transition-colors duration-300 md:top-0"
          :class="i === last ? 'border-carmine bg-carmine' : 'bg-paper group-hover:border-carmine group-hover:bg-carmine'"
          aria-hidden="true"
        ></span>
        <p class="label">{{ String(i + 1).padStart(2, '0') }}</p>
        <h3
          class="mt-1 text-[1.75rem] leading-tight italic transition-colors duration-300"
          :class="i === last ? 'text-carmine' : 'group-hover:text-carmine'"
        >
          {{ stage.name }}
        </h3>
        <p class="mt-3 text-[1.05rem] leading-relaxed">{{ stage.text }}</p>
        <ul class="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 md:block md:space-y-1.5">
          <li v-for="tag in stage.tags" :key="tag" class="label">{{ tag }}</li>
        </ul>
      </li>
    </ol>

    <p
      v-reveal
      class="mt-14 border-l-2 border-carmine pl-5 text-[clamp(1.3rem,2.4vw,1.7rem)] leading-snug italic md:mt-20 md:ml-[calc(25%+0.5rem)] md:max-w-2xl"
    >
      {{ method.note }}
    </p>
  </section>
</template>
