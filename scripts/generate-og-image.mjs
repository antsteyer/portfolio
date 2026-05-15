import { Resvg } from "@resvg/resvg-js"
import { writeFile } from "node:fs/promises"
import { resolve } from "node:path"

const WIDTH = 1200
const HEIGHT = 630

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#7FFFD4"/>
      <stop offset="100%" stop-color="#26946f"/>
    </linearGradient>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  <text x="80" y="220" font-family="Helvetica, Arial, sans-serif" font-size="120" font-weight="700" fill="#0b1f1a">ANT</text>
  <text x="80" y="370" font-family="Helvetica, Arial, sans-serif" font-size="64" font-weight="600" fill="#0b1f1a">Antoine Steyer</text>
  <text x="80" y="440" font-family="Helvetica, Arial, sans-serif" font-size="36" font-weight="400" fill="#0b1f1a">Ingenieur Full Stack &#8226; Developpeur Front-End</text>
  <text x="80" y="500" font-family="Helvetica, Arial, sans-serif" font-size="28" font-weight="400" fill="#0b1f1a" opacity="0.75">Accessibilite &#8226; UX &#8226; Vue 3</text>
  <text x="80" y="580" font-family="Helvetica, Arial, sans-serif" font-size="24" font-weight="400" fill="#0b1f1a" opacity="0.6">antoinesteyer.com</text>
</svg>`

const resvg = new Resvg(svg, {
  fitTo: { mode: "width", value: WIDTH },
  font: { loadSystemFonts: true }
})
const png = resvg.render().asPng()

await writeFile(resolve("public", "og-image.png"), png)
console.log(`generated public/og-image.png (${png.length} bytes)`)
