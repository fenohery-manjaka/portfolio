// Recadre la photo source autour du sujet et l'exporte en WebP.
// Usage : node scripts/prepare-photo.mjs chemin/vers/photo.jpg
import sharp from 'sharp'

const input = process.argv[2] ?? 'photo.jpg'
const meta = await sharp(input).metadata()
console.log('source', meta.width, meta.height)

// Cadrage 5:6 sur la moitié basse (le sujet est en bas de l'image d'origine).
const width = Math.round(meta.width * 0.76)
const height = Math.round((width * 6) / 5)
const left = Math.round(meta.width * 0.068)
const top = meta.height - height

await sharp(input)
  .extract({ left, top, width, height })
  .resize(800, 960)
  .webp({ quality: 82 })
  .toFile('public/images/fenohery.webp')
console.log('ok', { left, top, width, height })
