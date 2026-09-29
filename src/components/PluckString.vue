<script setup>
/*
 * Un filet de séparation qui se comporte comme une corde pincée.
 *
 * Quand le pointeur traverse la ligne (ou qu'on la touche), on calcule la
 * forme d'une corde pincée au point de contact : un triangle, décomposé en
 * série de Fourier. Chaque harmonique oscille à n × f1 et s'amortit
 * un peu plus vite que la précédente. Aucun effet si l'utilisateur
 * a demandé à réduire les animations.
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps({
  height: { type: Number, default: 36 },
  strength: { type: Number, default: 1 },
  stroke: { type: Number, default: 1 },
  pluckOnView: { type: Boolean, default: true },
})

const HARMONICS = 8
const F1 = 4.2 // Hz (volontairement lent pour rester lisible à l'œil)
const TAU = 1.1 // s, amortissement du fondamental
const LIFETIME = 4000 // ms

const root = ref(null)
const width = ref(0)
const d = ref('')

let plucks = []
let raf = 0
let lastSide = 0
let lastY = 0
let lastT = 0
let reduced = false
let resizeObserver
let viewObserver

const mid = () => props.height / 2
const maxAmp = () => mid() - 2

function flat() {
  d.value = `M0 ${mid()} L${width.value} ${mid()}`
}

function pluck(x, h) {
  const L = width.value
  if (reduced || L < 10 || !h) return
  const a = Math.min(Math.max(x / L, 0.04), 0.96)
  const coeffs = new Float64Array(HARMONICS)
  for (let i = 0; i < HARMONICS; i++) {
    const n = i + 1
    coeffs[i] = (2 * h * Math.sin(n * Math.PI * a)) / (n * n * Math.PI * Math.PI * a * (1 - a))
  }
  plucks.push({ coeffs, t0: performance.now() })
  if (plucks.length > 4) plucks.shift()
  if (!raf) raf = requestAnimationFrame(frame)
}

function frame(now) {
  const L = width.value
  const m = mid()
  plucks = plucks.filter((p) => now - p.t0 < LIFETIME)
  if (!plucks.length) {
    flat()
    raf = 0
    return
  }

  const modes = new Float64Array(HARMONICS)
  for (const p of plucks) {
    const t = (now - p.t0) / 1000
    for (let i = 0; i < HARMONICS; i++) {
      const tau = TAU / (1 + 0.5 * i)
      modes[i] += p.coeffs[i] * Math.cos(2 * Math.PI * F1 * (i + 1) * t) * Math.exp(-t / tau)
    }
  }

  const step = Math.max(4, L / 140)
  const limit = maxAmp()
  let path = `M0 ${m}`
  for (let x = step; x < L; x += step) {
    let y = 0
    for (let i = 0; i < HARMONICS; i++) y += modes[i] * Math.sin(((i + 1) * Math.PI * x) / L)
    y = Math.max(-limit, Math.min(limit, y))
    path += ` L${x.toFixed(1)} ${(m + y).toFixed(2)}`
  }
  d.value = `${path} L${L} ${m}`
  raf = requestAnimationFrame(frame)
}

function local(e) {
  const r = root.value.getBoundingClientRect()
  return { x: e.clientX - r.left, y: e.clientY - r.top }
}

function track(e, leaving = false) {
  if (e.pointerType === 'touch') return
  const { x, y } = local(e)
  const now = performance.now()
  const side = Math.sign(y - mid()) || lastSide

  if (lastSide && side && side !== lastSide) {
    const speed = Math.abs(y - lastY) / Math.max(now - lastT, 8) // px/ms
    const h = Math.min(maxAmp(), 4 + speed * 8) * props.strength * side
    pluck(x, h)
  }

  lastSide = leaving ? 0 : side
  lastY = y
  lastT = now
}

function onEnter(e) {
  if (e.pointerType === 'touch') return
  const { y } = local(e)
  lastSide = Math.sign(y - mid())
  lastY = y
  lastT = performance.now()
}

function onDown(e) {
  const { x, y } = local(e)
  const side = y < mid() ? 1 : -1
  pluck(x, maxAmp() * 0.7 * props.strength * side)
}

onMounted(() => {
  reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

  resizeObserver = new ResizeObserver(([entry]) => {
    width.value = entry.contentRect.width
    if (!raf) flat()
  })
  resizeObserver.observe(root.value)

  if (props.pluckOnView && !reduced && 'IntersectionObserver' in window) {
    viewObserver = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        viewObserver.disconnect()
        setTimeout(() => pluck(width.value * 0.28, maxAmp() * 0.45 * props.strength), 350)
      },
      { threshold: 1 },
    )
    viewObserver.observe(root.value)
  }
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  resizeObserver?.disconnect()
  viewObserver?.disconnect()
})
</script>

<template>
  <div
    ref="root"
    class="relative w-full select-none"
    :style="{ height: `${height}px`, touchAction: 'pan-y' }"
    aria-hidden="true"
    @pointerenter="onEnter"
    @pointermove="track"
    @pointerleave="track($event, true)"
    @pointerdown="onDown"
  >
    <svg
      class="absolute inset-0 h-full w-full overflow-visible"
      :viewBox="`0 0 ${Math.max(width, 1)} ${height}`"
      preserveAspectRatio="none"
    >
      <path :d="d" fill="none" stroke="currentColor" :stroke-width="stroke" stroke-linecap="round" />
    </svg>
  </div>
</template>
