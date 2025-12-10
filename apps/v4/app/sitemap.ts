import type { MetadataRoute } from "next"

import { getBlogPostSlugs, getBlogCategories, getTotalPages } from "@/lib/blog/source"
import { queryRegistry, type RegistryItem } from "@/lib/registry-utils"
import { BASE_URL, staticPages, createSitemapEntry } from "@/lib/sitemap/config"
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
      entries.push(createSitemapEntry(`/blog/category/${category}/page/${i}`, 0.4))
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
      entries.push(
        createSitemapEntry(`/blocks/category/${category}/subcategory/${subcategory}`, 0.7)
      )

      // Individual blocks
      const blocks = (await queryRegistry({
        returnType: "items",
        mainCategory: category,
        subcategory,
      })) as RegistryItem[]

      blocks.forEach((block) => {
        entries.push(
          createSitemapEntry(`/block/${category}/${subcategory}/${block.name}`, 0.6)
        )
      })
    }
  }

  return entries
}
