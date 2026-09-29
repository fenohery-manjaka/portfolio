<script setup>
import ScreenShot from './ScreenShot.vue'
import { workshop } from '../content/profile.js'

const p = workshop.project
</script>

<template>
  <section id="atelier" class="relative -mt-12 rounded-t-[3rem] bg-mint px-4 pt-20 pb-28 sm:px-6 md:pt-28">
    <div class="mx-auto max-w-6xl">
      <h2 class="font-display text-[clamp(2.8rem,8vw,5.5rem)] leading-[0.9]">{{ workshop.title }}</h2>

      <div class="mt-12 grid items-start gap-12 md:grid-cols-2">
        <div class="relative">
          <ScreenShot :src="p.cover" :alt="p.coverAlt" :tilt="-2.5" />
          <span
            class="absolute -top-4 -right-2 rotate-6 rounded-full bg-sun px-4 py-2 font-hand text-xl font-bold shadow-[0_4px_0_rgb(20_20_20/0.2)]"
          >
            🚧 en chantier
          </span>
        </div>

        <div>
          <p class="text-sm font-bold tracking-wide uppercase opacity-75">{{ p.kind }}</p>
          <h3 class="mt-1 font-display text-[clamp(2.8rem,6vw,4.2rem)] leading-none">{{ p.name }}</h3>
          <div class="mt-6 space-y-4 text-lg leading-relaxed">
            <p v-for="(para, i) in p.summary" :key="i">{{ para }}</p>
          </div>

          <!-- bulle de BD -->
          <figure class="relative mt-10 rounded-[2rem] bg-white p-6 shadow-[0_10px_30px_-14px_rgb(20_20_20/0.5)]">
            <blockquote class="text-xl leading-snug font-bold">«&nbsp;{{ p.quote }}&nbsp;»</blockquote>
            <figcaption class="mt-3 font-hand text-lg">— {{ p.quoteSource }}</figcaption>
            <span class="absolute -bottom-4 left-10 h-8 w-8 rotate-45 bg-white" aria-hidden="true"></span>
          </figure>

          <div class="mt-10 flex flex-wrap items-center gap-3">
            <span v-for="s in p.stack" :key="s" class="chip bg-white">{{ s }}</span>
          </div>
          <a :href="p.repo" target="_blank" rel="noopener" class="btn mt-6 bg-ink text-white hover:bg-cherry">
            Voir le code sur GitHub ↗
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
