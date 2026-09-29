<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const links = [
  { href: '#travail', label: 'Travail' },
  { href: '#casquettes', label: 'Casquettes' },
  { href: '#outils', label: 'Outils' },
  { href: '#parcours', label: 'Parcours' },
]

const open = ref(false)
const onKey = (e) => e.key === 'Escape' && (open.value = false)
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<template>
  <header class="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-6">
    <nav
      class="mx-auto flex max-w-5xl items-center justify-between gap-3 rounded-full bg-white/95 py-2 pr-2 pl-5 shadow-[0_6px_24px_-10px_rgb(20_20_20/0.35)] backdrop-blur"
      aria-label="Navigation principale"
    >
      <a href="#top" class="font-display text-xl leading-none" @click="open = false">
        Fenohery<span class="text-cherry">.</span>
      </a>

      <ul class="hidden items-center gap-1 md:flex">
        <li v-for="l in links" :key="l.href">
          <a :href="l.href" class="rounded-full px-3.5 py-2 font-bold transition-colors hover:bg-azur">{{ l.label }}</a>
        </li>
      </ul>

      <div class="flex items-center gap-2">
        <a href="#contact" class="btn bg-ink !py-2 !text-base text-white hover:bg-cherry">Me contacter</a>
        <button
          type="button"
          class="rounded-full px-3 py-2 font-bold md:hidden"
          :aria-expanded="open"
          aria-controls="menu-mobile"
          @click="open = !open"
        >
          {{ open ? 'Fermer' : 'Menu' }}
        </button>
      </div>
    </nav>

    <Transition
      enter-from-class="opacity-0 -translate-y-2"
      leave-to-class="opacity-0 -translate-y-2"
      enter-active-class="transition duration-200"
      leave-active-class="transition duration-150"
    >
      <ul
        v-if="open"
        id="menu-mobile"
        class="mx-auto mt-2 max-w-5xl rounded-3xl bg-white p-3 shadow-[0_10px_30px_-12px_rgb(20_20_20/0.4)] md:hidden"
      >
        <li v-for="l in links" :key="l.href">
          <a :href="l.href" class="block rounded-2xl px-4 py-3 font-display text-2xl hover:bg-azur" @click="open = false">
            {{ l.label }}
          </a>
        </li>
      </ul>
    </Transition>
  </header>
</template>
