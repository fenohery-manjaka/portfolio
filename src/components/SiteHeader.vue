<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { person } from '../content/profile.js'

const links = [
  { href: '#travail', label: 'Travail' },
  { href: '#methode', label: 'Méthode' },
  { href: '#outils', label: 'Outils' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#contact', label: 'Contact' },
]

const scrolled = ref(false)
const open = ref(false)

function onScroll() {
  scrolled.value = window.scrollY > 24
}

function onKey(e) {
  if (e.key === 'Escape') open.value = false
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
})
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-40 transition-colors duration-300"
    :class="scrolled || open ? 'border-b border-rule bg-paper/95 backdrop-blur-sm' : 'border-b border-transparent'"
  >
    <div class="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-10">
      <a href="#top" class="group flex items-baseline gap-2" @click="open = false">
        <span class="text-lg leading-none">{{ person.firstNames }}</span>
        <span
          class="hidden h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-carmine transition-transform duration-300 group-hover:scale-150 sm:inline-block"
        ></span>
      </a>

      <nav class="hidden md:block" aria-label="Navigation principale">
        <ul class="flex items-center gap-7">
          <li v-for="link in links" :key="link.href">
            <a :href="link.href" class="label transition-colors hover:text-carmine">{{ link.label }}</a>
          </li>
        </ul>
      </nav>

      <button
        type="button"
        class="label -mr-2 px-2 py-2 md:hidden"
        :aria-expanded="open"
        aria-controls="menu-mobile"
        @click="open = !open"
      >
        {{ open ? 'Fermer' : 'Menu' }}
      </button>
    </div>

    <nav v-show="open" id="menu-mobile" class="border-t border-rule md:hidden" aria-label="Navigation mobile">
      <ul class="mx-auto max-w-6xl px-4 py-3 sm:px-6">
        <li v-for="link in links" :key="link.href">
          <a
            :href="link.href"
            class="block py-2.5 text-2xl italic transition-colors hover:text-carmine"
            @click="open = false"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>
