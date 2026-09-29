<script setup>
import HandArrow from './HandArrow.vue'
import LadyBug from './LadyBug.vue'
import { contact, hero, person } from '../content/profile.js'

const asset = (p) => `${import.meta.env.BASE_URL}${p}`
const tagColors = ['bg-white', 'bg-sun', 'bg-cherry text-white', 'bg-mint', 'bg-ink text-white']
const tagTilt = [-3, 2, -1, 3, -2]
</script>

<template>
  <section id="top" class="relative overflow-hidden bg-azur px-4 pt-28 pb-28 sm:px-6 md:pt-36 md:pb-36">
    <div class="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-12 md:gap-6">
      <div class="md:col-span-7">
        <p class="font-hand text-2xl -rotate-2 sm:text-3xl">{{ hero.hello }}</p>
        <h1 class="mt-1 font-display text-[clamp(4.2rem,15vw,10.5rem)] leading-[0.82] tracking-[-0.01em]">
          <span class="block">{{ person.firstName }}</span>
          <span
            class="block text-white [-webkit-text-stroke:0.045em_var(--color-ink)] [paint-order:stroke_fill]"
          >{{ person.middleName }}</span>
        </h1>

        <p class="mt-12 max-w-xl text-xl leading-relaxed sm:text-[1.35rem]">{{ hero.lead }}</p>

        <ul class="mt-6 flex flex-wrap gap-2.5">
          <li
            v-for="(tag, i) in hero.tags"
            :key="tag"
            class="chip shadow-[0_3px_0_rgb(20_20_20/0.15)]"
            :class="tagColors[i % tagColors.length]"
            :style="{ transform: `rotate(${tagTilt[i % tagTilt.length]}deg)` }"
          >
            {{ tag }}
          </li>
        </ul>

        <div class="mt-9 flex flex-wrap gap-3">
          <a href="#travail" class="btn bg-ink text-white hover:bg-cherry">Voir mon travail ↓</a>
          <a :href="contact.github" target="_blank" rel="noopener" class="btn bg-white hover:bg-sun">Mon GitHub ↗</a>
        </div>
      </div>

      <div class="relative mx-auto w-full max-w-[25rem] md:col-span-5 md:max-w-none">
        <!-- rond jaune derrière le sticker -->
        <div class="absolute inset-[8%_4%_14%_10%] rounded-full bg-sun" aria-hidden="true"></div>

        <img
          v-drag="{ rotate: -4, touch: false }"
          :src="asset(person.sticker)"
          :alt="person.stickerAlt"
          width="720"
          height="802"
          class="stuck relative w-full"
          draggable="false"
          fetchpriority="high"
        />

        <div class="pointer-events-none absolute -top-8 -left-2 flex rotate-[-8deg] items-start gap-1 sm:-left-10">
          <span class="font-hand text-3xl font-bold">{{ hero.stickerNote }}</span>
          <HandArrow variant="curve" class="mt-5 h-16 w-20" />
        </div>
        <p class="pointer-events-none absolute right-2 -bottom-8 hidden rotate-2 font-hand text-lg md:block">
          {{ hero.dragHint }}
        </p>
      </div>
    </div>

    <p class="mx-auto mt-16 flex max-w-6xl items-center gap-3 font-hand text-lg motion-reduce:hidden sm:text-xl">
      <LadyBug class="h-7 w-7 shrink-0 rotate-[30deg]" />
      {{ hero.bugHint }}
    </p>
  </section>
</template>
