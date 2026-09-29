// Génère les images temporaires des projets (public/images/projects/*.svg).
// Elles sont faites pour être remplacées par de vraies captures.
import { writeFileSync } from 'node:fs'

const INK = '#1d1b17'
const SOFT = '#8a8174'
const BG = '#e8e0d0'
const RED = '#b3263a'

function frame(w, h, name, file, inner) {
  const pad = Math.round(w * 0.07)
  const winW = w - pad * 2
  const winH = h - pad * 2 - 70
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}">
  <rect width="${w}" height="${h}" fill="${BG}"/>
  <g fill="none" stroke="${INK}" stroke-width="1.5">
    <rect x="${pad}" y="${pad}" width="${winW}" height="${winH}" fill="#f2ede3"/>
    <line x1="${pad}" y1="${pad + 34}" x2="${pad + winW}" y2="${pad + 34}"/>
  </g>
  <g fill="none" stroke="${INK}" stroke-width="1.2">
    <circle cx="${pad + 18}" cy="${pad + 17}" r="5"/><circle cx="${pad + 36}" cy="${pad + 17}" r="5"/><circle cx="${pad + 54}" cy="${pad + 17}" r="5"/>
  </g>
  <g transform="translate(${pad} ${pad + 34})">${inner(winW, winH - 34)}</g>
  <text x="${pad}" y="${h - pad + 8}" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="44" fill="${INK}">${name}</text>
  <text x="${w - pad}" y="${h - pad + 4}" text-anchor="end" font-family="ui-monospace, Menlo, monospace" font-size="17" letter-spacing="1" fill="${SOFT}">CAPTURE À VENIR · ${file}</text>
</svg>
`
}

const rows = (w, h) => {
  let s = `<line x1="${w * 0.24}" y1="0" x2="${w * 0.24}" y2="${h}" stroke="${INK}" stroke-width="1.2"/>`
  for (let i = 0; i < 5; i++) s += `<rect x="24" y="${30 + i * 40}" width="${w * 0.24 - 60}" height="10" fill="${i === 0 ? RED : SOFT}" opacity="${i === 0 ? 1 : 0.5}"/>`
  const n = 9
  for (let i = 0; i < n; i++) {
    const y = 24 + i * ((h - 40) / n)
    s += `<circle cx="${w * 0.24 + 34}" cy="${y + 14}" r="7" fill="none" stroke="${INK}" stroke-width="1.2"/>`
    s += `<rect x="${w * 0.24 + 58}" y="${y + 6}" width="${w * 0.18}" height="8" fill="${INK}" opacity="0.8"/>`
    s += `<rect x="${w * 0.24 + 58}" y="${y + 20}" width="${w * 0.42}" height="6" fill="${SOFT}" opacity="0.5"/>`
    s += `<rect x="${w - 110}" y="${y + 8}" width="70" height="14" fill="none" stroke="${i % 3 === 0 ? RED : SOFT}" stroke-width="1.2"/>`
    s += `<line x1="${w * 0.24}" y1="${y + 36}" x2="${w}" y2="${y + 36}" stroke="${SOFT}" stroke-width="0.8" opacity="0.6"/>`
  }
  return s
}

const calendar = (w, h) => {
  let s = ''
  const cols = 7, rowsN = 5, x0 = 30, y0 = 30
  const cw = (w - 60) / cols, ch = (h - 60) / rowsN
  for (let r = 0; r <= rowsN; r++) s += `<line x1="${x0}" y1="${y0 + r * ch}" x2="${x0 + cols * cw}" y2="${y0 + r * ch}" stroke="${SOFT}" stroke-width="1"/>`
  for (let c = 0; c <= cols; c++) s += `<line x1="${x0 + c * cw}" y1="${y0}" x2="${x0 + c * cw}" y2="${y0 + rowsN * ch}" stroke="${SOFT}" stroke-width="1"/>`
  const booked = [[1, 0], [3, 1], [4, 1], [0, 2], [5, 2], [2, 3], [6, 3], [3, 4]]
  for (const [c, r] of booked) s += `<rect x="${x0 + c * cw + 8}" y="${y0 + r * ch + 8}" width="${cw - 16}" height="${ch * 0.4}" fill="${c === 3 && r === 1 ? RED : INK}" opacity="${c === 3 && r === 1 ? 1 : 0.75}"/>`
  return s
}

const commits = (w, h) => {
  let s = ''
  const y = h / 2
  s += `<line x1="40" y1="${y}" x2="${w - 40}" y2="${y}" stroke="${INK}" stroke-width="1.5"/>`
  s += `<path d="M ${w * 0.3} ${y} C ${w * 0.36} ${y}, ${w * 0.36} ${y - 90}, ${w * 0.42} ${y - 90} L ${w * 0.62} ${y - 90} C ${w * 0.68} ${y - 90}, ${w * 0.68} ${y}, ${w * 0.74} ${y}" fill="none" stroke="${RED}" stroke-width="1.5"/>`
  for (let i = 0; i < 9; i++) s += `<circle cx="${60 + i * ((w - 120) / 8)}" cy="${y}" r="8" fill="#f2ede3" stroke="${INK}" stroke-width="1.5"/>`
  for (let i = 0; i < 3; i++) s += `<circle cx="${w * (0.46 + i * 0.07)}" cy="${y - 90}" r="7" fill="${RED}"/>`
  for (let i = 0; i < 4; i++) s += `<rect x="60" y="${y + 50 + i * 26}" width="${w * (0.5 - i * 0.08)}" height="7" fill="${SOFT}" opacity="0.55"/>`
  return s
}

const modules = (w, h) => {
  let s = ''
  const cells = [[0, 0, 2, 1], [2, 0, 1, 1], [0, 1, 1, 1], [1, 1, 1, 1], [2, 1, 1, 1]]
  const gw = (w - 80) / 3, gh = (h - 80) / 2
  cells.forEach(([c, r, sw, sh], i) => {
    const filled = i === 0
    s += `<rect x="${40 + c * gw + 6}" y="${40 + r * gh + 6}" width="${gw * sw - 12}" height="${gh * sh - 12}" fill="${filled ? 'none' : 'none'}" stroke="${filled ? RED : INK}" stroke-width="1.5" ${i > 1 ? 'stroke-dasharray="6 6"' : ''}/>`
  })
  s += `<text x="${40 + gw * 0.08}" y="${40 + gh * 0.5}" font-family="ui-monospace, Menlo, monospace" font-size="16" fill="${RED}">outil n°1</text>`
  s += `<text x="${40 + gw * 1.08}" y="${40 + gh * 1.5}" font-family="ui-monospace, Menlo, monospace" font-size="16" fill="${SOFT}">+ à venir</text>`
  return s
}

const out = 'public/images/projects/'
writeFileSync(out + 'symbiomail.svg', frame(1600, 1100, 'SymbioMail', 'symbiomail', rows))
writeFileSync(out + 'symbiobooking.svg', frame(1600, 1000, 'SymbioBooking', 'symbiobooking', calendar))
writeFileSync(out + 'symbioproject.svg', frame(1600, 1000, 'SymbioProject', 'symbioproject', commits))
writeFileSync(out + 'mjtools.svg', frame(1200, 900, 'MJTools', 'mjtools', modules))
console.log('placeholders written')
