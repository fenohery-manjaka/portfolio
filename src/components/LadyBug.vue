<script setup>
// Petite coccinelle vue de dessus, tête vers le haut.
defineProps({ legs: { type: Boolean, default: true } })
</script>

<template>
  <svg viewBox="0 0 40 44" aria-hidden="true">
    <g v-if="legs" stroke="#141414" stroke-width="2.2" stroke-linecap="round" class="legs">
      <path d="M9 18 L3 15" /><path d="M8 25 L2 26" /><path d="M10 32 L4 36" />
      <path d="M31 18 L37 15" /><path d="M32 25 L38 26" /><path d="M30 32 L36 36" />
    </g>
    <g stroke="#141414" stroke-width="1.8" stroke-linecap="round" fill="none">
      <path d="M17 7 C 15 3, 12 2, 10 2" /><path d="M23 7 C 25 3, 28 2, 30 2" />
    </g>
    <circle cx="20" cy="11" r="7" fill="#141414" />
    <circle cx="17" cy="9.5" r="1.6" fill="#fff" /><circle cx="23" cy="9.5" r="1.6" fill="#fff" />
    <ellipse cx="20" cy="26" rx="13" ry="14.5" fill="#d9253b" stroke="#141414" stroke-width="2" />
    <path d="M20 12 V40" stroke="#141414" stroke-width="2" />
    <g fill="#141414">
      <circle cx="13.5" cy="21" r="2.6" /><circle cx="26.5" cy="21" r="2.6" />
      <circle cx="12.5" cy="30" r="2.2" /><circle cx="27.5" cy="30" r="2.2" />
      <circle cx="17" cy="35" r="1.6" /><circle cx="23" cy="35" r="1.6" />
    </g>
  </svg>
</template>
