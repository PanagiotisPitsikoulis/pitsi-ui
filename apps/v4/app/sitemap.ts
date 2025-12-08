import type { MetadataRoute } from "next"

import { getBlogPostSlugs, getBlogCategories, getTotalPages } from "@/lib/blog/source"
import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { source } from "@/lib/source"

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || "https://pitsiui.com"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = []

  // Static pages
  const staticPages = [
    { url: "", priority: 1 },
    { url: "/privacy", priority: 0.3 },
    { url: "/terms", priority: 0.3 },
    { url: "/roadmap", priority: 0.5 },
    { url: "/changelog", priority: 0.5 },
    { url: "/blocks", priority: 0.8 },
    { url: "/blog", priority: 0.8 },
  ]

  staticPages.forEach(({ url, priority }) => {
    entries.push({
      url: `${BASE_URL}${url}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority,
    })
  })

  // Docs pages
  const docsParams = source.generateParams()
  docsParams.forEach((param) => {
    const slug = param.slug?.join("/") || ""
    entries.push({
      url: `${BASE_URL}/docs${slug ? `/${slug}` : ""}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    })
  })

  // Blog posts
  const blogSlugs = getBlogPostSlugs()
  blogSlugs.forEach((slug) => {
    entries.push({
      url: `${BASE_URL}/blog/${slug}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    })
  })

  // Blog pagination
  const totalBlogPages = getTotalPages()
  for (let i = 2; i <= totalBlogPages; i++) {
    entries.push({
      url: `${BASE_URL}/blog/page/${i}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.5,
    })
  }

  // Blog categories
  const categories = getBlogCategories()
  categories.forEach((category) => {
    entries.push({
      url: `${BASE_URL}/blog/category/${category}`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    })

    const categoryPages = getTotalPages(category)
    for (let i = 2; i <= categoryPages; i++) {
      entries.push({
        url: `${BASE_URL}/blog/category/${category}/page/${i}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.4,
      })
    }
  })

  // Blocks - get all categories and subcategories
  const blockCategories = (await queryRegistry({
    returnType: "categories",
    types: ["registry:block", "registry:internal"],
  })) as string[]

  for (const category of blockCategories) {
    const subcategories = (await queryRegistry({
      returnType: "subcategories",
      mainCategory: category,
    })) as string[]

    for (const subcategory of subcategories) {
      entries.push({
        url: `${BASE_URL}/blocks/category/${category}/subcategory/${subcategory}`,
        lastModified: new Date(),
        changeFrequency: "weekly",
        priority: 0.7,
      })

      // Individual blocks
      const blocks = (await queryRegistry({
        returnType: "items",
        mainCategory: category,
        subcategory,
      })) as RegistryItem[]

      blocks.forEach((block) => {
        entries.push({
          url: `${BASE_URL}/block/${category}/${subcategory}/${block.name}`,
          lastModified: new Date(),
          changeFrequency: "weekly",
          priority: 0.6,
        })
      })
    }
  }

  return entries
}
