<script setup>
import ProjectCover from './ProjectCover.vue'
import SectionHead from './SectionHead.vue'
import { personal } from '../content/profile.js'
</script>

<template>
  <section id="projets" class="mx-auto max-w-6xl px-4 pt-24 sm:px-6 md:pt-32 lg:px-10">
    <SectionHead :label="personal.label" :title="personal.title" />

    <article
      v-for="p in personal.projects"
      :key="p.id"
      class="group mt-14 grid gap-8 md:mt-20 md:grid-cols-12 md:gap-8"
      :aria-labelledby="`p-${p.id}`"
    >
      <div v-reveal class="md:col-span-6 md:col-start-1">
        <ProjectCover :src="p.cover" :alt="p.coverAlt" :name="p.name" ratio="4/3" />
      </div>

      <div class="md:col-span-6">
        <p class="label">{{ p.kind }}</p>
        <h3 :id="`p-${p.id}`" v-reveal class="mt-3 text-[clamp(2.4rem,5vw,3.6rem)] leading-none italic">
          {{ p.name }}
        </h3>
        <div class="mt-6 space-y-4 text-lg leading-relaxed">
          <p v-for="(para, i) in p.summary" :key="i" v-reveal="i * 60">{{ para }}</p>
        </div>

        <blockquote v-if="p.quote" v-reveal class="mt-8 border-t border-ink pt-5">
          <p class="text-2xl leading-snug italic">
            <span class="text-carmine">«&nbsp;</span>{{ p.quote }}<span class="text-carmine">&nbsp;»</span>
          </p>
          <footer class="label mt-3">{{ p.quoteSource }}</footer>
        </blockquote>

        <div class="mt-8 flex flex-wrap items-baseline justify-between gap-4">
          <p class="flex flex-wrap gap-x-4 gap-y-1">
            <span v-for="s in p.stack" :key="s" class="label text-ink!">{{ s }}</span>
          </p>
          <a v-if="p.repo" :href="p.repo" target="_blank" rel="noopener" class="ink-link text-lg italic">
            Voir le code ↗
          </a>
        </div>
      </div>
    </article>
  </section>
</template>
