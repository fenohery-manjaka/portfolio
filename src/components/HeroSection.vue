<script setup>
import HandArrow from './HandArrow.vue'
import { contact, hero, person } from '../content/profile.js'

const asset = (p) => `${import.meta.env.BASE_URL}${p}`
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

        <p class="mt-5 flex max-w-xl flex-wrap gap-x-2 gap-y-1 text-[0.95rem] font-bold">
          <template v-for="(f, i) in hero.facts" :key="f">
            <span>{{ f }}</span>
            <span v-if="i < hero.facts.length - 1" class="text-cherry" aria-hidden="true">·</span>
          </template>
        </p>

        <div class="mt-7 max-w-xl rounded-3xl bg-white/70 p-5">
          <p class="text-sm font-extrabold tracking-wide uppercase">{{ hero.scopeTitle }}</p>
          <ul class="mt-3 space-y-1.5 text-[1.02rem]">
            <li v-for="[from, to] in hero.scope" :key="from">
              {{ from }} <span class="font-bold text-cherry" aria-hidden="true">→</span><span class="sr-only">, </span> {{ to }}
            </li>
          </ul>
        </div>

        <div class="mt-9 flex flex-wrap gap-3">
          <a href="#travail" class="btn bg-ink text-white hover:bg-cherry">Voir mes projets ↓</a>
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

        <div class="pointer-events-none absolute -top-14 right-0 flex rotate-[6deg] flex-col items-end">
          <span class="font-hand text-3xl font-bold">{{ hero.stickerNote }}</span>
          <HandArrow variant="downleft" class="-mt-1 mr-24 h-14 w-16" />
        </div>
        <p class="pointer-events-none absolute right-2 -bottom-8 hidden rotate-2 font-hand text-lg md:block">
          {{ hero.dragHint }}
        </p>
      </div>
    </div>

  </section>
</template>
