import {
  getAllMainCategories,
  getSubcategories,
  getSubcategoryBlockCounts,
} from "@/lib/blocks"
import { siteConfig } from "@/lib/config"
import { source } from "@/lib/source"
import { SiteFooterClient } from "@/components/layout/site-footer-client"

export async function SiteFooter() {
  "use cache"
  const pageTree = source.pageTree
  const navItems = siteConfig.navItems

  // Get ALL documentation pages from pageTree
  const allDocsPages: Array<{ name: string; url: string }> = []

  pageTree.children.forEach((child) => {
    if (child.type === "page") {
      allDocsPages.push({
        name: String(child.name),
        url: child.url,
      })
    } else if (child.type === "folder") {
      // Get pages from folders
      child.children.forEach((subChild) => {
        if (subChild.type === "page") {
          allDocsPages.push({
            name: String(subChild.name),
            url: subChild.url,
          })
        }
      })
    }
  })

  // Get component pages
  const componentsFolder = pageTree.children.find(
    (child) => child.name === "Components"
  )
  const componentPages =
    componentsFolder?.type === "folder"
      ? componentsFolder.children
          .filter((child) => child.type === "page")
          .map((child) => ({
            name: String(child.name),
            url: child.url,
          }))
      : []

  // Get animation pages
  const animationsFolder = pageTree.children.find(
    (child) => child.name === "Animations"
  )
  const animationPages =
    animationsFolder?.type === "folder"
      ? animationsFolder.children
          .filter((child) => child.type === "page")
          .map((child) => ({
            name: String(child.name),
            url: child.url,
          }))
      : []

  // Get ALL block categories with ALL subcategories
  const mainCategories = await getAllMainCategories()
  const blockCategories = await Promise.all(
    mainCategories.map(async (category: string) => {
      const subcategories = await getSubcategories(category)
      const subcategoryCounts = await getSubcategoryBlockCounts(category)

      return {
        name: category,
        subcategories: subcategories.map((subcategory: string) => ({
          name: subcategory,
          count: subcategoryCounts[subcategory] || 0,
        })),
      }
    })
  )

  // Flatten all subcategories for easy access
  const allBlockSubcategories = blockCategories.flatMap((category: { name: string; subcategories: { name: string; count: number }[] }) =>
    category.subcategories.map((sub: { name: string; count: number }) => ({
      category: category.name,
      name: sub.name,
      count: sub.count,
    }))
  )

  return (
    <SiteFooterClient
      githubUrl={siteConfig.links.github}
      twitterUrl={siteConfig.links.twitter}
      siteName={siteConfig.name}
      navItems={navItems}
      allDocsPages={allDocsPages}
      componentPages={componentPages}
      animationPages={animationPages}
      blockCategories={blockCategories}
      allBlockSubcategories={allBlockSubcategories}
    />
  )
}
