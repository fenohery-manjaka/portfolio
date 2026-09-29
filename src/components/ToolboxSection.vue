<script setup>
import HandArrow from './HandArrow.vue'
import { toolbox } from '../content/profile.js'

const colors = {
  cherry: 'bg-cherry text-white',
  azur: 'bg-azur',
  sun: 'bg-sun',
  mint: 'bg-mint',
  white: 'bg-white',
  ink: 'bg-ink text-white',
}
const shapes = {
  pill: 'rounded-full px-5 py-2.5',
  round: 'grid aspect-square w-[4.2rem] place-items-center rounded-full p-1 text-center sm:w-24',
  square: 'rounded-2xl px-4 py-4',
  tag: 'rounded-lg px-4 py-2 [clip-path:polygon(10%_0,100%_0,100%_100%,10%_100%,0_50%)] pl-6',
}
</script>

<template>
  <section id="outils" class="relative -mt-12 rounded-t-[3rem] bg-sun px-4 pt-20 pb-28 sm:px-6 md:pt-28">
    <div class="mx-auto max-w-6xl">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <h2 class="font-display text-[clamp(2.8rem,8vw,5.5rem)] leading-[0.9]">{{ toolbox.title }}</h2>
        <p class="flex items-end gap-1 font-hand text-2xl">
          {{ toolbox.hint }}
          <HandArrow variant="down" class="h-14 w-10" />
        </p>
      </div>

      <!-- Le laptop couvert de stickers -->
      <div class="mt-8">
        <div class="relative mx-auto aspect-[3/4] max-w-4xl rounded-[1.6rem] border-[10px] border-[#2a2a2a] bg-ink sm:aspect-[16/10] sm:rounded-[2.2rem] sm:border-[14px]">
          <span
            class="absolute top-1/2 left-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/10 font-display text-xl text-white/40 sm:h-20 sm:w-20 sm:text-2xl"
            aria-hidden="true"
          >
            fm
          </span>
          <ul class="absolute inset-2 sm:inset-4" aria-label="Technologies">
            <li
              v-for="s in toolbox.stickers"
              :key="s.label"
              v-drag="{ rotate: s.r, bound: true }"
              class="stuck absolute font-display text-[0.95rem] leading-tight sm:text-xl"
              :class="[colors[s.color], shapes[s.shape]]"
              :style="{ left: `${s.x}%`, top: `${s.y}%` }"
            >
              {{ s.label }}
              <span v-if="s.note" class="block font-hand text-sm font-bold text-cherry">{{ s.note }}</span>
            </li>
          </ul>
        </div>
        <div class="mx-auto h-4 max-w-5xl rounded-b-[2rem] bg-[#2a2a2a] sm:h-5" aria-hidden="true"></div>
      </div>

      <div class="mt-16 grid gap-10 md:grid-cols-2">
        <div>
          <h3 class="font-hand text-2xl font-bold">Au quotidien&nbsp;:</h3>
          <p class="mt-3 flex flex-wrap items-center gap-x-2 gap-y-3">
            <span v-for="(d, i) in toolbox.daily" :key="d" class="inline-flex items-center gap-2">
              <span class="chip bg-ink !px-4 !py-2 !text-lg text-white">{{ d }}</span>
              <span v-if="i < toolbox.daily.length - 1" class="font-display text-2xl" aria-hidden="true">+</span>
            </span>
          </p>
        </div>
        <div>
          <h3 class="font-hand text-2xl font-bold">Des terrains que je connais bien&nbsp;:</h3>
          <ul class="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
            <li v-for="t in toolbox.familiar" :key="t" class="flex items-start gap-2 text-lg">
              <svg viewBox="0 0 24 24" class="mt-1 h-5 w-5 shrink-0 text-cherry" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M3 13 C 6 15, 8 18, 9 20 C 12 12, 16 7, 22 3" />
              </svg>
              {{ t }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
