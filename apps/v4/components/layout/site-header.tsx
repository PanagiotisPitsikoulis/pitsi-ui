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
  const pageTree = source.pageTree
  const navItems = siteConfig.navItems

  // Get block categories and subcategories
  const mainCategories = await getAllMainCategories()
  const blockCategories = await Promise.all(
    mainCategories.map(async (category) => {
      const subcategories = await getSubcategories(category)
      const subcategoryCounts = await getSubcategoryBlockCounts(category)

      return {
        name: category,
        subcategories: subcategories.map((subcategory) => ({
          name: subcategory,
          count: subcategoryCounts[subcategory] || 0,
        })),
      }
    })
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
      userNav={<UserNavServer />}
      githubLink={<GitHubLink />}
      pageTree={pageTree}
      navItems={navItems}
      siteName={siteConfig.name}
    />
  )
}
