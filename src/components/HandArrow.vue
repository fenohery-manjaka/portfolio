<script setup>
// Flèches dessinées "à la main" pour les annotations.
const props = defineProps({
  variant: { type: String, default: 'curve' },
})

const paths = {
  // part d'en haut à gauche, boucle, finit en bas à droite
  curve: {
    viewBox: '0 0 120 90',
    line: 'M6 10 C 40 0, 70 10, 66 36 C 63 56, 40 52, 48 40 C 58 26, 96 44, 108 78',
    head: 'M94 72 L108 80 L110 63',
  },
  // courbe douce vers le bas
  down: {
    viewBox: '0 0 80 110',
    line: 'M20 6 C 60 20, 62 60, 38 98',
    head: 'M28 86 L37 100 L50 90',
  },
  // vers la gauche
  left: {
    viewBox: '0 0 130 60',
    line: 'M124 40 C 96 8, 50 6, 10 30',
    head: 'M24 18 L9 31 L26 40',
  },
}
const p = paths[props.variant] ?? paths.curve
</script>

<template>
  <svg :viewBox="p.viewBox" fill="none" stroke="currentColor" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    <path :d="p.line" />
    <path :d="p.head" />
  </svg>
</template>
