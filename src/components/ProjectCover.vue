<script setup>
defineProps({
  src: { type: String, default: '' },
  alt: { type: String, default: '' },
  name: { type: String, default: '' },
  ratio: { type: String, default: '16/10' },
})

const asset = (path) => `${import.meta.env.BASE_URL}${path}`
</script>

<template>
  <div class="overflow-hidden border border-rule bg-paper-deep" :style="{ aspectRatio: ratio }">
    <img
      v-if="src"
      :src="asset(src)"
      :alt="alt"
      loading="lazy"
      decoding="async"
      class="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
    />
    <div v-else class="flex h-full items-center justify-center">
      <span class="text-3xl italic text-ink-soft">{{ name }}</span>
    </div>
  </div>
</template>
