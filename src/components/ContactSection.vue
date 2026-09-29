<script setup>
import { computed } from 'vue'
import { bugs } from '../stores/bugs.js'
import { closing, contact, person } from '../content/profile.js'

const buttons = computed(() =>
  [
    contact.email && { label: `✉️ ${contact.email}`, href: `mailto:${contact.email}`, cls: 'bg-sun text-ink hover:bg-white' },
    contact.linkedin && { label: 'LinkedIn ↗', href: contact.linkedin, cls: 'bg-azur text-ink hover:bg-white' },
    { label: `GitHub · ${contact.githubLabel} ↗`, href: contact.github, cls: 'bg-white text-ink hover:bg-sun' },
  ].filter(Boolean),
)
const year = new Date().getFullYear()
</script>

<template>
  <section id="contact" class="relative -mt-12 rounded-t-[3rem] bg-ink px-4 pt-20 pb-10 text-white sm:px-6 md:pt-28">
    <div class="mx-auto max-w-6xl">
      <h2 class="font-display text-[clamp(4rem,14vw,10rem)] leading-[0.85]">
        {{ closing.title.replace(' ?', '') }}<span class="text-cherry">&nbsp;?</span>
      </h2>
      <p class="mt-10 max-w-xl text-xl leading-relaxed text-white/85">{{ closing.text }}</p>

      <div class="mt-10 flex flex-wrap gap-3">
        <a
          v-for="b in buttons"
          :key="b.href"
          :href="b.href"
          :target="b.href.startsWith('http') ? '_blank' : undefined"
          :rel="b.href.startsWith('http') ? 'noopener' : undefined"
          class="btn !px-6 !py-4 !text-lg"
          :class="b.cls"
        >
          {{ b.label }}
        </a>
      </div>

      <footer class="mt-24 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
        <p>© {{ year }} {{ person.fullName }} · Fait avec Vue.js et Tailwind CSS</p>
        <p class="font-hand text-base">
          🐞 bugs écrasés sur ce site : <span class="font-bold text-sun">{{ bugs.squashed }}</span>
        </p>
      </footer>
    </div>
  </section>
</template>
