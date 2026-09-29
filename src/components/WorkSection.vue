<script setup>
import ProjectCover from './ProjectCover.vue'
import SectionHead from './SectionHead.vue'
import { work } from '../content/profile.js'

const f = work.featured
</script>

<template>
  <section id="travail" class="mx-auto max-w-6xl px-4 pt-20 sm:px-6 md:pt-28 lg:px-10">
    <SectionHead :label="work.label" :title="work.title" :intro="work.intro" />

    <!-- Projet principal -->
    <article class="group mt-14 md:mt-20" :aria-labelledby="`p-${f.id}`">
      <div class="grid gap-8 md:grid-cols-12 md:gap-8">
        <div class="md:col-span-5">
          <p class="label">{{ f.kind }}</p>
          <h3 :id="`p-${f.id}`" v-reveal class="mt-3 text-[clamp(2.6rem,6vw,4.5rem)] leading-none italic">
            {{ f.name }}
          </h3>
          <p class="label mt-4 text-carmine!">{{ f.role }}</p>
          <div class="mt-6 space-y-4 text-lg leading-relaxed">
            <p v-for="(p, i) in f.summary" :key="i" v-reveal="i * 60">{{ p }}</p>
          </div>
          <p class="mt-6 flex flex-wrap gap-x-4 gap-y-1">
            <span class="label">Stack</span>
            <span v-for="s in f.stack" :key="s" class="label text-ink!">{{ s }}</span>
          </p>
        </div>
        <div v-reveal="120" class="md:col-span-7">
          <ProjectCover :src="f.cover" :alt="f.coverAlt" :name="f.name" ratio="16/11" />
        </div>
      </div>

      <div class="mt-12 md:mt-16">
        <ol class="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
          <li
            v-for="(stream, i) in f.streams"
            :key="stream.title"
            v-reveal="i * 70"
            class="border-t border-ink pt-4 pb-8"
          >
            <p class="label"><span class="text-carmine">{{ String.fromCharCode(97 + i) }}.</span></p>
            <h4 class="mt-2 text-2xl leading-tight italic">{{ stream.title }}</h4>
            <ul class="mt-4 space-y-1.5 text-[1.05rem] text-ink-soft">
              <li v-for="item in stream.items" :key="item">{{ item }}</li>
            </ul>
          </li>
        </ol>
        <p class="text-base text-ink-soft italic">{{ f.footnote }}</p>
      </div>
    </article>

    <!-- Autres produits -->
    <div class="mt-20 grid gap-14 md:mt-28 md:grid-cols-2 md:gap-10">
      <article
        v-for="(p, i) in work.projects"
        :key="p.id"
        v-reveal="i * 100"
        class="group flex flex-col"
        :aria-labelledby="`p-${p.id}`"
      >
        <ProjectCover :src="p.cover" :alt="p.coverAlt" :name="p.name" />
        <div class="mt-6 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
          <h3 :id="`p-${p.id}`" class="text-4xl italic">{{ p.name }}</h3>
          <p class="label">{{ p.kind }}</p>
        </div>
        <p class="label mt-3 text-carmine!">{{ p.role }}</p>
        <p class="mt-4 text-lg leading-relaxed">{{ p.summary }}</p>
        <ul class="mt-5 border-t border-rule">
          <li
            v-for="point in p.points"
            :key="point"
            class="flex gap-3 border-b border-rule py-2.5 text-[1.05rem] text-ink-soft"
          >
            <span class="text-carmine" aria-hidden="true">·</span>{{ point }}
          </li>
        </ul>
      </article>
    </div>

    <div v-if="work.others.length" class="mt-14 md:mt-20">
      <div
        v-for="o in work.others"
        :key="o.name"
        v-reveal
        class="grid gap-2 border-y border-rule py-6 md:grid-cols-12 md:gap-8"
      >
        <p class="label md:col-span-3 md:pt-2">Aussi</p>
        <p class="text-lg md:col-span-9">
          <span class="text-2xl italic">{{ o.name }}.</span>{{ ' ' }}<span class="text-ink-soft">{{ o.note }}</span>
        </p>
      </div>
    </div>
  </section>
</template>
