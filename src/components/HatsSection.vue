<script setup>
import { computed, ref } from 'vue'
import { hats } from '../content/profile.js'

const choices = [...hats.options.map((o) => ({ id: o.id, label: o.label })), { id: 'both', label: 'Les deux' }]
const current = ref('dev')

const items = computed(() =>
  hats.options
    .filter((o) => current.value === 'both' || o.id === current.value)
    .flatMap((o) => o.items.map((it) => ({ ...it, hat: o.id }))),
)

const capColor = computed(() => ({ dev: '#8fd0ff', lead: '#d9253b', both: '#ffd23f' })[current.value])
</script>

<template>
  <section id="casquettes" class="relative -mt-12 rounded-t-[3rem] bg-ink px-4 pt-20 pb-28 text-white sm:px-6 md:pt-28">
    <div class="mx-auto max-w-6xl">
      <div class="flex flex-wrap items-center gap-6">
        <!-- la casquette change de couleur -->
        <svg viewBox="0 0 120 80" class="h-16 w-24 shrink-0 -rotate-6 sm:h-20 sm:w-28" aria-hidden="true">
          <path d="M14 58 C 14 22, 40 8, 62 8 C 86 8, 104 26, 104 58 Z" :fill="capColor" stroke="#fff" stroke-width="4" class="transition-[fill] duration-500" />
          <path d="M60 58 C 80 56, 104 58, 118 70 C 96 74, 70 70, 52 64 Z" :fill="capColor" stroke="#fff" stroke-width="4" class="transition-[fill] duration-500" />
          <circle cx="60" cy="9" r="5" fill="#fff" />
        </svg>
        <h2 class="text-[clamp(2.4rem,6.5vw,4.4rem)] leading-[0.98] font-extrabold tracking-[-0.03em]">{{ hats.title }}</h2>
      </div>
      <p class="mt-5 max-w-2xl text-xl leading-relaxed text-white/85">{{ hats.intro }}</p>

      <div
        class="mt-10 inline-flex flex-wrap gap-1 rounded-full bg-white/10 p-1.5"
        role="radiogroup"
        aria-label="Choisir une casquette"
      >
        <button
          v-for="c in choices"
          :key="c.id"
          type="button"
          role="radio"
          :aria-checked="current === c.id"
          class="rounded-full px-5 py-2.5 text-lg font-bold transition-colors duration-200"
          :class="current === c.id ? 'bg-sun text-ink' : 'text-white hover:bg-white/15'"
          @click="current = c.id"
        >
          {{ c.label }}
        </button>
      </div>

      <TransitionGroup
        tag="ul"
        class="relative mt-10 grid gap-4 sm:grid-cols-2"
        enter-from-class="opacity-0 scale-90 rotate-3"
        leave-to-class="opacity-0 scale-90"
        enter-active-class="transition duration-300 ease-out"
        leave-active-class="transition duration-150 absolute"
        move-class="transition duration-300"
      >
        <li
          v-for="it in items"
          :key="it.hat + it.verb"
          class="rounded-3xl p-6 sm:p-7"
          :class="it.hat === 'dev' ? 'bg-azur text-ink' : 'bg-cherry text-white'"
        >
          <p class="text-2xl font-extrabold tracking-[-0.02em] sm:text-3xl">{{ it.verb }}</p>
          <p class="mt-2 text-lg leading-relaxed">{{ it.text }}</p>
        </li>
      </TransitionGroup>
    </div>
  </section>
</template>
