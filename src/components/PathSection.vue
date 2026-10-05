<script setup>
import { path } from '../content/profile.js'

const tones = ['bg-white', 'bg-sun', 'bg-cherry text-white', 'bg-ink text-white']
const tilts = [-2, 1.5, -1, 2]
</script>

<template>
  <section id="parcours" class="relative -mt-12 rounded-t-[3rem] bg-azur px-4 pt-20 pb-28 sm:px-6 md:pt-28">
    <div class="mx-auto max-w-6xl">
      <h2 class="text-[clamp(2.4rem,6.5vw,4.4rem)] leading-[0.98] font-extrabold tracking-[-0.03em]">{{ path.title }}</h2>
      <p class="mt-2 font-hand text-2xl -rotate-1">{{ path.note }}</p>

      <ol class="relative mt-14 grid gap-6 md:grid-cols-4 md:gap-5">
        <!-- le chemin en pointillés -->
        <span class="absolute top-0 bottom-0 left-8 border-l-4 border-dashed border-ink/60 md:hidden" aria-hidden="true"></span>
        <span class="absolute top-10 right-8 left-8 hidden border-t-4 border-dashed border-ink/60 md:block" aria-hidden="true"></span>

        <li
          v-for="(s, i) in path.stops"
          :key="s.when"
          class="relative ml-16 rotate-(--tilt) rounded-3xl p-6 transition duration-300 hover:rotate-0 md:ml-0"
          :class="tones[i % tones.length]"
          :style="{ '--tilt': `${tilts[i % tilts.length]}deg` }"
        >
          <span
            class="absolute top-6 -left-12 h-6 w-6 rounded-full border-4 border-ink bg-white md:hidden"
            aria-hidden="true"
          ></span>
          <p class="text-3xl leading-none font-extrabold tracking-[-0.02em] sm:text-4xl">{{ s.when }}</p>
          <p class="mt-3 text-lg leading-tight font-extrabold">{{ s.what }}</p>
          <p class="mt-2 leading-relaxed opacity-90">{{ s.detail }}</p>
        </li>
      </ol>
    </div>
  </section>
</template>
