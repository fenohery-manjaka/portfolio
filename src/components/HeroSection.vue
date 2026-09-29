<script setup>
import PluckString from './PluckString.vue'
import { hero, person } from '../content/profile.js'

const asset = (path) => `${import.meta.env.BASE_URL}${path}`
const [firstLine, ...rest] = person.firstNames.split(' ')
const secondLine = rest.join(' ')
</script>

<template>
  <section id="top" class="mx-auto max-w-6xl px-4 pt-24 sm:px-6 md:pt-32 lg:px-10">
    <div class="grid gap-10 md:grid-cols-12 md:gap-8">
      <div class="md:col-span-7 lg:col-span-7">
        <p class="label">{{ hero.kicker }}</p>

        <h1 class="mt-6 text-[clamp(3.4rem,11vw,8.25rem)] leading-[0.88] font-[350] tracking-[-0.025em]">
          <span class="block">{{ firstLine }}</span>
          <span class="block italic">{{ secondLine }}<span class="text-carmine not-italic">.</span></span>
        </h1>
        <p class="label mt-4">{{ person.fullName }}</p>
      </div>

      <figure class="max-w-sm md:max-w-none md:col-span-5 md:row-span-2 md:mt-10 lg:col-span-4 lg:col-start-9">
        <div class="bg-print p-2.5 shadow-[0_1px_0_var(--rule),0_18px_40px_-24px_rgb(40_30_20/0.45)] sm:p-3">
          <img
            :src="asset(person.photo)"
            :alt="person.photoAlt"
            width="800"
            height="960"
            class="photo block aspect-[5/6] w-full object-cover"
            fetchpriority="high"
          />
        </div>
        <figcaption class="label mt-3 flex justify-between gap-4">
          <span>Fig. 1</span>
          <span class="text-right">{{ person.photoCaption }}</span>
        </figcaption>
      </figure>

      <div class="md:col-span-7">
        <p class="max-w-xl text-[clamp(1.6rem,3.4vw,2.4rem)] leading-[1.12] italic">
          {{ hero.statement }}
        </p>
        <div class="mt-6 max-w-xl space-y-4 text-lg leading-relaxed text-ink-soft">
          <p v-for="(p, i) in hero.intro" :key="i">{{ p }}</p>
        </div>
      </div>
    </div>

    <PluckString class="mt-14 text-ink md:mt-20" :height="44" :strength="1.2" />

    <dl class="grid gap-y-5 pb-4 sm:grid-cols-3 sm:gap-x-8">
      <div v-for="fact in hero.facts" :key="fact.label">
        <dt class="label">{{ fact.label }}</dt>
        <dd class="mt-1.5 text-lg leading-snug">{{ fact.value }}</dd>
      </div>
    </dl>
  </section>
</template>
