<script setup>
import { computed } from 'vue'
import SectionHead from './SectionHead.vue'
import { closing, contact } from '../content/profile.js'

const channels = computed(() =>
  [
    contact.email && { label: 'E-mail', value: contact.email, href: `mailto:${contact.email}` },
    contact.linkedin && {
      label: 'LinkedIn',
      value: contact.linkedin.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, ''),
      href: contact.linkedin,
    },
    contact.github && { label: 'GitHub', value: contact.githubLabel, href: contact.github },
  ].filter(Boolean),
)
</script>

<template>
  <section id="contact" class="mx-auto max-w-6xl px-4 pt-24 pb-10 sm:px-6 md:pt-32 lg:px-10">
    <SectionHead :label="closing.label" :title="closing.title" :intro="closing.text" />

    <ul class="mt-10 md:mt-14 md:ml-[25%] md:pl-2">
      <li v-for="(c, i) in channels" :key="c.label" v-reveal="i * 70" class="border-t border-rule last:border-b">
        <a
          :href="c.href"
          :target="c.href.startsWith('http') ? '_blank' : undefined"
          :rel="c.href.startsWith('http') ? 'noopener' : undefined"
          class="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 py-5"
        >
          <span class="label">{{ c.label }}</span>
          <span
            class="text-[clamp(1.35rem,3.4vw,2.1rem)] break-all italic transition-colors duration-300 group-hover:text-carmine"
          >
            {{ c.value }} <span aria-hidden="true" class="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </a>
      </li>
    </ul>
  </section>
</template>
