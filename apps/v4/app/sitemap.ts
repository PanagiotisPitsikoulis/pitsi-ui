import type { MetadataRoute } from "next"

import { getAllCategories, getBlockIdsByCategory } from "@/lib/blocks"
import {
  getBlogCategories,
  getBlogPostSlugs,
  getTotalPages,
} from "@/lib/blog/source"
import { BASE_URL, createSitemapEntry, staticPages } from "@/lib/sitemap/config"
import { source } from "@/lib/source"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries: MetadataRoute.Sitemap = []

  // Static pages
  staticPages.forEach(({ url, priority }) => {
    entries.push(createSitemapEntry(url, priority))
  })

  // Docs pages
  const docsParams = source.generateParams()
  docsParams.forEach((param) => {
    const slug = param.slug?.join("/") || ""
    entries.push(createSitemapEntry(`/docs${slug ? `/${slug}` : ""}`, 0.9))
  })

  // Blog posts
  const blogSlugs = getBlogPostSlugs()
  blogSlugs.forEach((slug) => {
    entries.push(createSitemapEntry(`/blog/${slug}`, 0.7))
  })

  // Blog pagination
  const totalBlogPages = getTotalPages()
  for (let i = 2; i <= totalBlogPages; i++) {
    entries.push(createSitemapEntry(`/blog/page/${i}`, 0.5))
  }

  // Blog categories
  const categories = getBlogCategories()
  categories.forEach((category) => {
    entries.push(createSitemapEntry(`/blog/category/${category}`, 0.6))

    const categoryPages = getTotalPages(category)
    for (let i = 2; i <= categoryPages; i++) {
      entries.push(
        createSitemapEntry(`/blog/category/${category}/page/${i}`, 0.4)
      )
    }
  })

  // Blocks - get all categories
  const blockCategories = getAllCategories()

  // Add "all" category page
  entries.push(createSitemapEntry("/blocks/all", 0.8))

  for (const category of blockCategories) {
    // Category page
    entries.push(createSitemapEntry(`/blocks/${category}`, 0.7))

    // Individual blocks
    const blockIds = getBlockIdsByCategory(category)
    blockIds.forEach((blockName) => {
      entries.push(createSitemapEntry(`/block/${category}/${blockName}`, 0.6))
    })
  }

  return entries
}
