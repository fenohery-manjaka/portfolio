<script setup>
import HandArrow from './HandArrow.vue'
import ScreenShot from './ScreenShot.vue'
import { work } from '../content/profile.js'

const f = work.featured
const cardBg = { sun: 'bg-sun', azur: 'bg-azur', mint: 'bg-mint', cherry: 'bg-cherry text-white' }
</script>

<template>
  <section id="travail" class="relative -mt-12 rounded-t-[3rem] bg-white px-4 pt-20 pb-28 sm:px-6 md:pt-28">
    <div class="mx-auto max-w-6xl">
      <header class="flex flex-wrap items-end gap-x-6 gap-y-2">
        <h2 class="text-[clamp(2.4rem,6.5vw,4.4rem)] leading-[0.98] font-extrabold tracking-[-0.03em]">{{ work.title }}</h2>
        <p class="flex items-center gap-1 pb-2 font-hand text-2xl text-cherry">
          <HandArrow variant="left" class="h-8 w-14" />
          {{ work.note }}
        </p>
      </header>

      <!-- SymbioMail -->
      <article class="mt-12 rounded-[2.5rem] bg-cherry p-6 text-white sm:p-8 md:mt-16 md:p-12" aria-labelledby="p-symbiomail">
        <div class="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p class="text-sm font-bold tracking-wide text-white/80 uppercase">{{ f.kind }}</p>
            <h3 id="p-symbiomail" class="mt-2 font-display text-[clamp(3rem,7vw,5rem)] leading-none">{{ f.name }}</h3>
            <p class="chip mt-4 bg-white text-cherry">{{ f.role }}</p>
            <div class="mt-6 space-y-4 text-lg leading-relaxed">
              <p v-for="(p, i) in f.summary" :key="i">{{ p }}</p>
            </div>
            <p class="mt-6 flex flex-wrap gap-2">
              <span v-for="s in f.stack" :key="s" class="chip bg-ink text-white">{{ s }}</span>
            </p>
          </div>
          <ScreenShot :src="f.cover" :alt="f.coverAlt" :tilt="2.5" />
        </div>

        <ol class="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <li
            v-for="(s, i) in f.streams"
            :key="s.title"
            class="rounded-3xl bg-white p-5 text-ink"
          >
            <span class="text-4xl font-extrabold text-cherry">{{ i + 1 }}</span>
            <h4 class="mt-1 text-lg leading-tight font-extrabold">{{ s.title }}</h4>
            <ul class="mt-3 space-y-1 text-[0.98rem]">
              <li v-for="item in s.items" :key="item">· {{ item }}</li>
            </ul>
          </li>
        </ol>
        <p class="mt-8 font-hand text-xl sm:text-2xl">{{ f.footnote }}</p>

        <!-- Mini étude de cas (affichée quand le contenu est renseigné) -->
        <div v-if="f.caseStudy?.problem" class="mt-10 grid gap-4 md:grid-cols-2">
          <div class="rounded-3xl bg-ink p-6">
            <p class="text-sm font-extrabold tracking-wide text-sun uppercase">Un problème difficile</p>
            <p class="mt-3 text-lg leading-relaxed">{{ f.caseStudy.problem }}</p>
          </div>
          <div v-if="f.caseStudy.solution" class="rounded-3xl bg-white p-6 text-ink">
            <p class="text-sm font-extrabold tracking-wide text-cherry uppercase">Ce que j’ai fait</p>
            <p class="mt-3 text-lg leading-relaxed">{{ f.caseStudy.solution }}</p>
          </div>
        </div>
      </article>

      <!-- Autres produits -->
      <div class="mt-8 grid gap-8 md:grid-cols-2">
        <article
          v-for="p in work.projects"
          :key="p.id"
          class="flex flex-col rounded-[2.5rem] p-6 sm:p-8"
          :class="cardBg[p.color]"
          :aria-labelledby="`p-${p.id}`"
        >
          <ScreenShot :src="p.cover" :alt="p.coverAlt" :tilt="p.color === 'sun' ? -2 : 2" />
          <p class="mt-8 text-sm font-bold tracking-wide uppercase opacity-75">{{ p.kind }}</p>
          <h3 :id="`p-${p.id}`" class="mt-1 font-display text-[clamp(2.4rem,5vw,3.4rem)] leading-none">{{ p.name }}</h3>
          <p class="chip mt-4 self-start bg-ink text-white">{{ p.role }}</p>
          <p class="mt-5 text-lg leading-relaxed">{{ p.summary }}</p>
          <ul class="mt-6 flex flex-wrap gap-2">
            <li v-for="pt in p.points" :key="pt" class="chip bg-white">{{ pt }}</li>
          </ul>
        </article>
      </div>

      <!-- Post-it -->
      <aside
        class="stuck relative mx-auto mt-14 w-72 -rotate-3 bg-[#fff27a] px-6 pt-8 pb-7 sm:w-80"
        aria-label="Autre projet"
      >
        <span class="absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rotate-2 bg-white/70" aria-hidden="true"></span>
        <p class="text-3xl font-extrabold">{{ work.postIt.name }}</p>
        <p class="mt-2 font-hand text-xl leading-snug">{{ work.postIt.text }}</p>
      </aside>
    </div>
  </section>
</template>
