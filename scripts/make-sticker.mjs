// Détoure la photo (fond blanc ou transparent) et en fait un sticker avec contour blanc.
// Usage : node scripts/make-sticker.mjs chemin/vers/photo.jpg
import sharp from 'sharp'

const input = process.argv[2]
if (!input) throw new Error('Usage : node scripts/make-sticker.mjs photo.jpg')

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true })
const { width: W, height: H } = info
const px = (i) => [data[i * 4], data[i * 4 + 1], data[i * 4 + 2]]
const isBg = (i) => {
  if (data[i * 4 + 3] < 40) return true // déjà transparent
  const [r, g, b] = px(i)
  return Math.min(r, g, b) > 228 && Math.max(r, g, b) - Math.min(r, g, b) < 24
}

// Remplissage depuis les bords : seul le blanc relié au bord est du fond.
const bg = new Uint8Array(W * H)
const stack = []
for (let x = 0; x < W; x++) stack.push(x, (H - 1) * W + x)
for (let y = 0; y < H; y++) stack.push(y * W, y * W + W - 1)
while (stack.length) {
  const i = stack.pop()
  if (bg[i] || !isBg(i)) continue
  bg[i] = 1
  const x = i % W, y = (i - x) / W
  if (x > 0) stack.push(i - 1)
  if (x < W - 1) stack.push(i + 1)
  if (y > 0) stack.push(i - W)
  if (y < H - 1) stack.push(i + W)
}

// Masque du sujet, adouci d'un pixel.
const mask = Buffer.alloc(W * H)
let minX = W, minY = H, maxX = 0, maxY = 0
for (let i = 0; i < W * H; i++) {
  if (bg[i]) continue
  mask[i] = 255
  const x = i % W, y = (i - x) / W
  minX = Math.min(minX, x); maxX = Math.max(maxX, x); minY = Math.min(minY, y); maxY = Math.max(maxY, y)
}
const soft = await sharp(mask, { raw: { width: W, height: H, channels: 1 } }).blur(0.8).extractChannel(0).raw().toBuffer()

const subject = Buffer.from(data)
for (let i = 0; i < W * H; i++) subject[i * 4 + 3] = Math.min(soft[i], data[i * 4 + 3])

// Recadrage sur le sujet + marge pour le contour du sticker.
const M = 28
const left = Math.max(0, minX), top = Math.max(0, minY)
const cw = maxX - left + 1, ch = maxY - top + 1
const cropped = await sharp(subject, { raw: { width: W, height: H, channels: 4 } })
  .extract({ left, top, width: cw, height: ch })
  .extend({ top: M, bottom: M, left: M, right: M, background: { r: 0, g: 0, b: 0, alpha: 0 } })
  .png()
  .toBuffer()

// Contour : alpha dilaté (flou puis seuil), rempli de blanc.
const CW = cw + M * 2, CH = ch + M * 2
const alpha = await sharp(cropped).extractChannel(3).blur(9).threshold(8).extractChannel(0).raw().toBuffer()
const outline = Buffer.alloc(CW * CH * 4)
for (let i = 0; i < CW * CH; i++) {
  outline[i * 4] = outline[i * 4 + 1] = outline[i * 4 + 2] = 255
  outline[i * 4 + 3] = alpha[i]
}
const outlineSmooth = await sharp(outline, { raw: { width: CW, height: CH, channels: 4 } }).blur(0.6).png().toBuffer()

const merged = await sharp(outlineSmooth).composite([{ input: cropped }]).png().toBuffer()
await sharp(merged)
  .resize({ width: 720 })
  .webp({ quality: 86, alphaQuality: 90 })
  .toFile('public/images/fenohery-sticker.webp')

const meta = await sharp('public/images/fenohery-sticker.webp').metadata()
console.log('sticker', meta.width, meta.height)
