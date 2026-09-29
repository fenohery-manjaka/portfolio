<script setup>
/*
 * Easter egg : de temps en temps, une coccinelle traverse l'écran.
 * Un clic (ou un tap) l'écrase. Clin d'œil au debugging.
 */
import { onBeforeUnmount, onMounted, ref } from 'vue'
import LadyBug from './LadyBug.vue'
import { bugs } from '../stores/bugs.js'

const MAX_BUGS = 5
const FIRST_DELAY = 7000
const NEXT_DELAY = 22000
const SPEED = 85 // px/s

const messages = [
  'Bien vu ! Un bug de moins. C’est un peu mon métier, ça.',
  'Et de deux. Vous avez l’œil.',
  'Trois bugs ! On fait une revue de code ensemble ?',
  'Quatre… vous êtes sûr·e de ne pas être développeur·se ?',
  'Bon, je crois qu’il n’y en a plus. Pour l’instant.',
]

const bug = ref(null) // { x, y, angle, squashed }
const toast = ref('')
let spawned = 0
let raf = 0
let timer = 0
let toastTimer = 0
let trip = null

function schedule(delay) {
  clearTimeout(timer)
  if (spawned >= MAX_BUGS) return
  timer = setTimeout(spawn, delay)
}

function edgePoint(side, W, H) {
  const m = 40
  if (side === 0) return { x: Math.random() * W, y: -m }
  if (side === 1) return { x: W + m, y: Math.random() * H }
  if (side === 2) return { x: Math.random() * W, y: H + m }
  return { x: -m, y: Math.random() * H }
}

function spawn() {
  if (document.hidden) return schedule(4000)
  const W = window.innerWidth
  const H = window.innerHeight
  const side = Math.floor(Math.random() * 4)
  const from = edgePoint(side, W, H)
  const to = edgePoint((side + 2) % 4, W, H)
  const dist = Math.hypot(to.x - from.x, to.y - from.y)
  trip = { from, to, duration: (dist / SPEED) * 1000, start: performance.now(), wobble: 30 + Math.random() * 40 }
  spawned++
  bug.value = { x: from.x, y: from.y, angle: 0, squashed: false }
  raf = requestAnimationFrame(step)
}

function position(t) {
  const { from, to, wobble } = trip
  const dx = to.x - from.x
  const dy = to.y - from.y
  const len = Math.hypot(dx, dy) || 1
  const nx = -dy / len
  const ny = dx / len
  const off = Math.sin(t * Math.PI * 4) * wobble
  return { x: from.x + dx * t + nx * off, y: from.y + dy * t + ny * off }
}

function step(now) {
  if (!bug.value || bug.value.squashed) return
  const t = (now - trip.start) / trip.duration
  if (t >= 1) {
    bug.value = null
    schedule(NEXT_DELAY)
    return
  }
  const p = position(t)
  const q = position(Math.min(t + 0.01, 1))
  bug.value.x = p.x
  bug.value.y = p.y
  bug.value.angle = (Math.atan2(q.y - p.y, q.x - p.x) * 180) / Math.PI + 90
  raf = requestAnimationFrame(step)
}

function squash() {
  if (!bug.value || bug.value.squashed) return
  cancelAnimationFrame(raf)
  bug.value.squashed = true
  bugs.squashed++
  toast.value = messages[Math.min(bugs.squashed, messages.length) - 1]
  clearTimeout(toastTimer)
  toastTimer = setTimeout(() => (toast.value = ''), 3800)
  setTimeout(() => (bug.value = null), 900)
  schedule(NEXT_DELAY)
}

onMounted(() => {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return
  schedule(FIRST_DELAY)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  clearTimeout(timer)
  clearTimeout(toastTimer)
})
</script>

<template>
  <div class="pointer-events-none fixed inset-0 z-[60] overflow-hidden" aria-hidden="true">
    <button
      v-if="bug"
      type="button"
      tabindex="-1"
      class="pointer-events-auto absolute -mt-6 -ml-6 grid h-12 w-12 cursor-crosshair place-items-center"
      :style="{ transform: `translate(${bug.x}px, ${bug.y}px)` }"
      @pointerdown.prevent="squash"
    >
      <span v-if="!bug.squashed" class="block h-9 w-9" :style="{ transform: `rotate(${bug.angle}deg)` }">
        <LadyBug class="bug-walk h-full w-full" />
      </span>
      <span v-else class="splat block h-12 w-12 rounded-full bg-cherry"></span>
    </button>
  </div>

  <Transition
    enter-from-class="opacity-0 translate-y-4"
    leave-to-class="opacity-0 translate-y-4"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-300"
  >
    <div
      v-if="toast"
      role="status"
      class="fixed bottom-5 left-1/2 z-[70] w-[min(92vw,30rem)] -translate-x-1/2 rounded-3xl bg-white px-5 py-4 text-center font-bold shadow-[0_14px_40px_-12px_rgb(20_20_20/0.5)]"
    >
      🐞 {{ toast }}
    </div>
  </Transition>
</template>

<style scoped>
.bug-walk :deep(.legs) {
  animation: legs 0.18s steps(2) infinite;
  transform-origin: center;
}
@keyframes legs {
  from { transform: scaleY(1); }
  to { transform: scaleY(0.86); }
}
.splat {
  animation: splat 0.9s ease-out forwards;
  clip-path: polygon(50% 0, 62% 30%, 98% 22%, 72% 50%, 100% 78%, 62% 68%, 50% 100%, 38% 70%, 2% 80%, 28% 50%, 0 20%, 38% 30%);
}
@keyframes splat {
  0% { transform: scale(0.3); opacity: 1; }
  30% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0; }
}
</style>
