<script setup>
import PluckString from './PluckString.vue'
import { person } from '../content/profile.js'

// Six cordes, de la plus fine à la plus grave.
const strings = [0.6, 0.75, 0.9, 1.1, 1.35, 1.6]
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mx-auto max-w-6xl px-4 pt-10 pb-12 sm:px-6 lg:px-10">
    <div class="text-ink-soft">
      <PluckString
        v-for="(w, i) in strings"
        :key="i"
        :height="14"
        :stroke="w"
        :strength="0.9"
        :pluck-on-view="false"
      />
    </div>

    <div class="mt-10 grid gap-8 md:grid-cols-12">
      <p class="text-2xl italic md:col-span-5">Merci d’être passé.</p>
      <div class="space-y-3 md:col-span-7">
        <p class="label">Colophon</p>
        <p class="max-w-lg text-base leading-relaxed text-ink-soft">
          Construit avec Vue.js et Tailwind CSS. Textes en Newsreader, étiquettes en Martian Mono.
          Les filets de cette page se comportent comme des cordes pincées : passez le curseur à travers
          (ou touchez-les). Leur mouvement est calculé en série de Fourier, un clin d’œil à la
          formation en télécoms.
        </p>
        <p class="label pt-2">© {{ year }} {{ person.fullName }}</p>
      </div>
    </div>
  </footer>
</template>
