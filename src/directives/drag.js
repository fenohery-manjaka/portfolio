// v-drag : rend un élément déplaçable à la souris ou au doigt, comme un sticker.
//   v-drag="{ rotate: -4 }"            rotation de repos
//   v-drag="{ bound: true }"           reste dans son parent
//   v-drag="{ touch: false }"          pas de drag au doigt (laisse la page défiler)

let topZ = 20

export const drag = {
  mounted(el, { value = {} }) {
    const coarse = window.matchMedia?.('(pointer: coarse)').matches
    if (coarse && value.touch === false) {
      el.style.transform = `rotate(${value.rotate ?? 0}deg)`
      return
    }

    const s = { x: 0, y: 0, r: value.rotate ?? 0, active: false, sx: 0, sy: 0, ox: 0, oy: 0, min: null, max: null }

    const apply = () => {
      const lift = s.active ? ' scale(1.06)' : ''
      el.style.transform = `translate(${s.x}px, ${s.y}px) rotate(${s.r + (s.active ? 4 : 0)}deg)${lift}`
    }

    el.style.touchAction = 'none'
    el.style.cursor = 'grab'
    el.style.userSelect = 'none'
    apply()

    el.addEventListener('dragstart', (e) => e.preventDefault())

    // Un sticker qui dépasse de son parent au départ (petits écrans) est ramené dedans.
    if (value.bound) {
      const fit = () => {
        if (!el.parentElement || s.active) return
        const p = el.parentElement.getBoundingClientRect()
        const r = el.getBoundingClientRect()
        if (r.right > p.right) s.x -= r.right - p.right
        if (r.bottom > p.bottom) s.y -= r.bottom - p.bottom
        apply()
      }
      requestAnimationFrame(fit)
      document.fonts?.ready.then(fit)
    }

    el.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return
      s.active = true
      s.sx = e.clientX
      s.sy = e.clientY
      s.ox = s.x
      s.oy = s.y

      if (value.bound && el.parentElement) {
        const p = el.parentElement.getBoundingClientRect()
        const r = el.getBoundingClientRect()
        s.min = { x: p.left - r.left + s.x, y: p.top - r.top + s.y }
        s.max = { x: p.right - r.right + s.x, y: p.bottom - r.bottom + s.y }
      }

      el.setPointerCapture(e.pointerId)
      el.style.zIndex = String(++topZ)
      el.style.cursor = 'grabbing'
      el.style.transition = 'transform 0.15s ease-out, filter 0.15s'
      el.classList.add('is-dragging')
      apply()
    })

    el.addEventListener('pointermove', (e) => {
      if (!s.active) return
      el.style.transition = 'filter 0.15s'
      let x = s.ox + e.clientX - s.sx
      let y = s.oy + e.clientY - s.sy
      if (s.min) {
        x = Math.min(Math.max(x, s.min.x), s.max.x)
        y = Math.min(Math.max(y, s.min.y), s.max.y)
      }
      s.x = x
      s.y = y
      apply()
    })

    const release = () => {
      if (!s.active) return
      s.active = false
      el.style.cursor = 'grab'
      el.style.transition = 'transform 0.4s cubic-bezier(0.3, 1.6, 0.6, 1), filter 0.3s'
      el.classList.remove('is-dragging')
      apply()
    }
    el.addEventListener('pointerup', release)
    el.addEventListener('pointercancel', release)
  },
}
