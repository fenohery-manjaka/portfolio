// Génère les images temporaires des projets (public/images/projects/*.svg), format 16:10.
// Elles sont faites pour être remplacées par de vraies captures.
import { writeFileSync } from 'node:fs'

const INK = '#141414'
const GREY = '#c9d2dc'
const W = 1600
const H = 1000

const wrap = (name, accent, body) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  ${body(accent)}
  <g transform="translate(${W - 90} ${H - 70})">
    <rect x="-470" y="-44" width="470" height="64" rx="32" fill="${accent}"/>
    <text x="-235" y="-2" text-anchor="middle" font-family="Arial Rounded MT Bold, Arial, sans-serif" font-weight="700" font-size="28" fill="${accent === '#d9253b' ? '#fff' : INK}">${name} · capture à venir</text>
  </g>
</svg>
`

const inbox = (a) => {
  let s = `<rect x="0" y="0" width="360" height="${H}" fill="#f3f6fa"/>`
  for (let i = 0; i < 6; i++) s += `<rect x="60" y="${90 + i * 70}" width="${i === 0 ? 220 : 180}" height="26" rx="13" fill="${i === 0 ? a : GREY}"/>`
  for (let i = 0; i < 8; i++) {
    const y = 80 + i * 105
    s += `<circle cx="450" cy="${y + 30}" r="26" fill="${[a, '#ffd23f', '#8fd0ff', '#2ec98a'][i % 4]}"/>`
    s += `<rect x="500" y="${y + 8}" width="${260 + (i % 3) * 60}" height="20" rx="10" fill="${INK}"/>`
    s += `<rect x="500" y="${y + 40}" width="${620 - (i % 4) * 70}" height="16" rx="8" fill="${GREY}"/>`
    s += `<rect x="1360" y="${y + 14}" width="150" height="34" rx="17" fill="none" stroke="${i % 3 === 0 ? a : GREY}" stroke-width="5"/>`
  }
  return s
}

const calendar = (a) => {
  let s = ''
  const cols = 7, rows = 5, x0 = 80, y0 = 80, cw = 200, ch = 150
  for (let r = 0; r < rows; r++)
    for (let c = 0; c < cols; c++)
      s += `<rect x="${x0 + c * cw + 6}" y="${y0 + r * ch + 6}" width="${cw - 12}" height="${ch - 12}" rx="18" fill="#f3f6fa"/>`
  const booked = [[1, 0, a], [3, 1, '#d9253b'], [4, 1, '#8fd0ff'], [0, 2, '#2ec98a'], [5, 2, a], [2, 3, '#8fd0ff'], [6, 3, '#d9253b'], [3, 4, a]]
  for (const [c, r, col] of booked) s += `<rect x="${x0 + c * cw + 20}" y="${y0 + r * ch + 20}" width="${cw - 40}" height="50" rx="25" fill="${col}"/>`
  return s
}

const commits = (a) => {
  const y = 420
  let s = `<line x1="100" y1="${y}" x2="1500" y2="${y}" stroke="${INK}" stroke-width="10" stroke-linecap="round"/>`
  s += `<path d="M 480 ${y} C 560 ${y}, 560 ${y - 180}, 640 ${y - 180} L 960 ${y - 180} C 1040 ${y - 180}, 1040 ${y}, 1120 ${y}" fill="none" stroke="${a}" stroke-width="10"/>`
  for (let i = 0; i < 9; i++) s += `<circle cx="${140 + i * 165}" cy="${y}" r="26" fill="#fff" stroke="${INK}" stroke-width="10"/>`
  for (let i = 0; i < 3; i++) s += `<circle cx="${700 + i * 120}" cy="${y - 180}" r="24" fill="${a}"/>`
  for (let i = 0; i < 4; i++) s += `<rect x="140" y="${y + 120 + i * 60}" width="${900 - i * 150}" height="22" rx="11" fill="${GREY}"/>`
  return s
}

const modules = (a) => {
  const cells = [
    [80, 80, 900, 460, a, 'outil n°1'],
    [1020, 80, 500, 460, null, '+'],
    [80, 580, 460, 300, null, '+'],
    [580, 580, 460, 300, null, '+'],
    [1080, 580, 440, 300, null, '+'],
  ]
  return cells
    .map(([x, y, w, h, fill, label]) =>
      fill
        ? `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="36" fill="${fill}"/><text x="${x + 50}" y="${y + 100}" font-family="Arial Rounded MT Bold, Arial, sans-serif" font-weight="700" font-size="56" fill="${INK}">${label}</text>`
        : `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="36" fill="none" stroke="${GREY}" stroke-width="8" stroke-dasharray="26 20"/><text x="${x + w / 2}" y="${y + h / 2 + 30}" text-anchor="middle" font-family="Arial, sans-serif" font-weight="700" font-size="90" fill="${GREY}">${label}</text>`,
    )
    .join('')
}

const out = 'public/images/projects/'
writeFileSync(out + 'symbiomail.svg', wrap('SymbioMail', '#d9253b', inbox))
writeFileSync(out + 'symbiobooking.svg', wrap('SymbioBooking', '#ffd23f', calendar))
writeFileSync(out + 'symbioproject.svg', wrap('SymbioProject', '#8fd0ff', commits))
writeFileSync(out + 'mjtools.svg', wrap('MJTools', '#2ec98a', modules))
console.log('placeholders written')
