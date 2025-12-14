export const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://pitsiui.com"

export const staticPages = [
  { url: "", priority: 1 },
  { url: "/privacy", priority: 0.3 },
  { url: "/terms", priority: 0.3 },
  { url: "/roadmap", priority: 0.5 },
  { url: "/changelog", priority: 0.5 },
  { url: "/blocks", priority: 0.8 },
  { url: "/blog", priority: 0.8 },
  { url: "/tools", priority: 0.8 },
  { url: "/tools/theme-generator", priority: 0.7 },
  { url: "/tools/shadow-composer", priority: 0.7 },
  { url: "/tools/page-builder", priority: 0.6 },
  { url: "/tools/project-preview-composer", priority: 0.6 },
  { url: "/tools/spacing-generator", priority: 0.6 },
  { url: "/tools/typography-composer", priority: 0.6 },
  { url: "/templates", priority: 0.8 },
  { url: "/signin", priority: 0.3 },
  { url: "/signup", priority: 0.3 },
] as const

export type SitemapEntry = {
  url: string
  lastModified: Date
  changeFrequency: "weekly" | "daily" | "monthly" | "yearly" | "always" | "never"
  priority: number
}

export function createSitemapEntry(
  path: string,
  priority: number,
  changeFrequency: SitemapEntry["changeFrequency"] = "weekly"
): SitemapEntry {
  return {
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }
}
