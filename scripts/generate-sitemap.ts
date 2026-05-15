import { writeFile } from "node:fs/promises"
import { resolve } from "node:path"

const SITE_URL = "https://antoinesteyer.com"
const ROUTES = ["/", "/formation", "/experiences", "/contact"]

export async function generateSitemap(distDir = "dist") {
  const lastmod = new Date().toISOString().slice(0, 10)
  const urls = ROUTES.map(
    (path) =>
      `  <url>\n    <loc>${SITE_URL}${path === "/" ? "" : path}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
  ).join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`

  await writeFile(resolve(distDir, "sitemap.xml"), xml, "utf8")
  console.log(`\n  generated sitemap.xml (${ROUTES.length} routes)`)
}
