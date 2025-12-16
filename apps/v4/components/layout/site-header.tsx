import {
  getAllMainCategories,
  getSubcategories,
  getSubcategoryBlockCounts,
} from "@/lib/blocks"
import { siteConfig } from "@/lib/config"
import { source } from "@/lib/source"
import { GitHubLink } from "@/components/documentation/integrations/github-link"
import { SiteHeaderClient } from "@/components/layout/site-header-client"
import { CommandMenu } from "@/components/navigation/command-menu"
import { UserNavServer } from "@/components/navigation/user-nav-server"

export async function SiteHeader() {
  return <SiteHeaderInternal userNav={<UserNavServer />} />
}

export async function SiteHeaderInternal({
  userNav,
}: {
  userNav: React.ReactNode
}) {
  const pageTree = source.pageTree
  const navItems = siteConfig.navItems

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

  // Get block categories and subcategories
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
    <SiteHeaderClient
      commandMenu={
        <CommandMenu
          tree={pageTree}
          blockCategories={blockCategories}
          navItems={navItems}
        />
      }
      userNav={userNav}
      githubLink={<GitHubLink />}
      pageTree={pageTree}
      navItems={navItems}
      siteName={siteConfig.name}
      componentPages={componentPages}
      animationPages={animationPages}
      allBlockSubcategories={allBlockSubcategories}
    />
  )
}
