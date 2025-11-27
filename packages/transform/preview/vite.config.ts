import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import * as path from "path"
import * as fs from "fs"

const outputDir = path.resolve(__dirname, "../output")

interface ComponentInfo {
  category: string
  site: string
  page: string
  filename: string
  path: string
}

interface WorkflowSite {
  category: string
  site: string
  screenshots: string[]
  videos: string[]
  theme: object | null
  components: ComponentInfo[]
}

interface WorkflowManifest {
  sites: WorkflowSite[]
}

function getFilesInDir(dir: string, extension?: string): string[] {
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((f) => {
    if (extension) return f.endsWith(extension)
    return true
  })
}

function generateWorkflowManifest(): WorkflowManifest {
  const manifest: WorkflowManifest = { sites: [] }
  const siteMap = new Map<string, WorkflowSite>()

  // Helper to get or create site
  const getOrCreateSite = (category: string, site: string): WorkflowSite => {
    const key = `${category}/${site}`
    if (!siteMap.has(key)) {
      siteMap.set(key, {
        category,
        site,
        screenshots: [],
        videos: [],
        theme: null,
        components: [],
      })
    }
    return siteMap.get(key)!
  }

  // Scan screenshots
  const screenshotsDir = path.join(outputDir, "screenshots")
  if (fs.existsSync(screenshotsDir)) {
    for (const category of fs.readdirSync(screenshotsDir)) {
      const categoryPath = path.join(screenshotsDir, category)
      if (!fs.statSync(categoryPath).isDirectory()) continue

      for (const site of fs.readdirSync(categoryPath)) {
        const sitePath = path.join(categoryPath, site)
        if (!fs.statSync(sitePath).isDirectory()) continue

        const siteData = getOrCreateSite(category, site)
        siteData.screenshots = getFilesInDir(sitePath, ".png")
      }
    }
  }

  // Scan videos
  const videosDir = path.join(outputDir, "videos")
  if (fs.existsSync(videosDir)) {
    for (const category of fs.readdirSync(videosDir)) {
      const categoryPath = path.join(videosDir, category)
      if (!fs.statSync(categoryPath).isDirectory()) continue

      for (const site of fs.readdirSync(categoryPath)) {
        const sitePath = path.join(categoryPath, site)
        if (!fs.statSync(sitePath).isDirectory()) continue

        const siteData = getOrCreateSite(category, site)
        siteData.videos = getFilesInDir(sitePath, ".webm")
      }
    }
  }

  // Scan themes
  const themesDir = path.join(outputDir, "themes")
  if (fs.existsSync(themesDir)) {
    for (const category of fs.readdirSync(themesDir)) {
      const categoryPath = path.join(themesDir, category)
      if (!fs.statSync(categoryPath).isDirectory()) continue

      for (const site of fs.readdirSync(categoryPath)) {
        const sitePath = path.join(categoryPath, site)
        if (!fs.statSync(sitePath).isDirectory()) continue

        const themeFile = path.join(sitePath, "theme.json")
        if (fs.existsSync(themeFile)) {
          const siteData = getOrCreateSite(category, site)
          try {
            siteData.theme = JSON.parse(fs.readFileSync(themeFile, "utf-8"))
          } catch {
            siteData.theme = null
          }
        }
      }
    }
  }

  // Scan components
  const componentsDir = path.join(outputDir, "components")
  if (fs.existsSync(componentsDir)) {
    for (const category of fs.readdirSync(componentsDir)) {
      const categoryPath = path.join(componentsDir, category)
      if (!fs.statSync(categoryPath).isDirectory()) continue

      for (const site of fs.readdirSync(categoryPath)) {
        const sitePath = path.join(categoryPath, site)
        if (!fs.statSync(sitePath).isDirectory()) continue

        const siteData = getOrCreateSite(category, site)
        const files = getFilesInDir(sitePath, ".tsx")

        for (const file of files) {
          const page = file.replace(/Page\.tsx$/, "").toLowerCase()
          siteData.components.push({
            category,
            site,
            page,
            filename: file,
            path: `${category}/${site}/${file}`,
          })
        }
      }
    }
  }

  manifest.sites = Array.from(siteMap.values()).sort((a, b) => {
    if (a.category !== b.category) return a.category.localeCompare(b.category)
    return a.site.localeCompare(b.site)
  })

  return manifest
}

function serveOutputPlugin() {
  return {
    name: "serve-output",
    configureServer(server: any) {
      // Serve output files (screenshots, videos, themes, components, manifest.json)
      server.middlewares.use("/output", (req: any, res: any, next: any) => {
        const filePath = path.join(outputDir, req.url)

        if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
          const ext = path.extname(filePath).toLowerCase()
          const contentTypes: Record<string, string> = {
            ".png": "image/png",
            ".jpg": "image/jpeg",
            ".jpeg": "image/jpeg",
            ".webm": "video/webm",
            ".mp4": "video/mp4",
            ".json": "application/json",
            ".tsx": "text/plain",
            ".ts": "text/plain",
            ".css": "text/css",
          }

          res.setHeader("Content-Type", contentTypes[ext] || "application/octet-stream")
          fs.createReadStream(filePath).pipe(res)
        } else {
          next()
        }
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), serveOutputPlugin()],
})
