import { getAllCategories, getCategoryBlockCounts } from "@/lib/blocks"
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

  // Get tool pages - hardcoded list of tools
  const toolPages = [
    { name: "Theme Generator", url: "/tools/theme-generator" },
    { name: "Shadow Composer", url: "/tools/shadow-composer" },
    { name: "Easing Composer", url: "/tools/easing-composer" },
    { name: "Spacing Generator", url: "/tools/spacing-generator" },
    { name: "Typography Composer", url: "/tools/typography-composer" },
    { name: "Background Decorations", url: "/tools/background-decorations" },
    { name: "About Tools", url: "/tools-information" },
  ]

  // Get block categories
  const categories = getAllCategories()
  const categoryCounts = getCategoryBlockCounts()
  const blockCategories = categories.map((category: string) => ({
    name: category,
    count: categoryCounts[category] || 0,
  }))

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
      toolPages={toolPages}
      blockCategories={blockCategories}
    />
  )
}
