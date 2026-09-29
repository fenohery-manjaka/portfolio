<script setup>
// Une capture présentée comme une fenêtre de navigateur, légèrement penchée.
defineProps({
  src: { type: String, required: true },
  alt: { type: String, default: '' },
  tilt: { type: Number, default: 0 },
})
const asset = (p) => `${import.meta.env.BASE_URL}${p}`
</script>

<template>
  <figure
    class="rotate-(--tilt) overflow-hidden rounded-2xl bg-white text-ink shadow-[0_18px_40px_-18px_rgb(20_20_20/0.45)] transition duration-500 hover:rotate-0 hover:scale-[1.02]"
    :style="{ '--tilt': `${tilt}deg` }"
  >
    <div class="flex items-center gap-1.5 border-b-2 border-ink/10 px-4 py-2.5" aria-hidden="true">
      <span class="h-3 w-3 rounded-full bg-cherry"></span>
      <span class="h-3 w-3 rounded-full bg-sun"></span>
      <span class="h-3 w-3 rounded-full bg-mint"></span>
    </div>
    <img :src="asset(src)" :alt="alt" loading="lazy" decoding="async" class="block aspect-[16/10] w-full object-cover" />
  </figure>
</template>
