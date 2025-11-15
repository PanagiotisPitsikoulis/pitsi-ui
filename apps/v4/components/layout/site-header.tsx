import Link from "next/link"

import { getColors } from "@/lib/colors"
import { siteConfig } from "@/lib/config"
import { source } from "@/lib/source"
import { GitHubLink } from "@/components/documentation/integrations/github-link"
import { CommandMenu } from "@/components/navigation/command-menu"
import { MainNav } from "@/components/navigation/main-nav"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { UserNavServer } from "@/components/navigation/user-nav-server"
import { Icons } from "@/components/shared/icons"
import { SiteConfig } from "@/components/shared/site-config"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { ThemeToggle } from "@/registry/new-york-v4/ui/theme-toggle"

const blocks = [
  {
    name: "hero-section-one",
    description: "Hero section with image and CTA buttons",
    categories: ["hero"],
  },
  {
    name: "hero-section-two",
    description: "Hero section with centered content",
    categories: ["hero"],
  },
  {
    name: "hero-section-four",
    description: "Hero section with background image",
    categories: ["hero"],
  },
  {
    name: "hero-section-five",
    description: "Hero section with gradient background",
    categories: ["hero"],
  },
  {
    name: "features-one",
    description: "Features section with table",
    categories: ["features"],
  },
  {
    name: "features-two",
    description: "Features bento grid layout",
    categories: ["features"],
  },
  {
    name: "features-three",
    description: "Features with toggle group",
    categories: ["features"],
  },
  {
    name: "features-four",
    description: "Features with interactive elements",
    categories: ["features"],
  },
  {
    name: "features-six",
    description: "Features grid with cards",
    categories: ["features"],
  },
  {
    name: "features-seven",
    description: "Features with large card and grid",
    categories: ["features"],
  },
  {
    name: "features-eight",
    description: "Features with image showcase",
    categories: ["features"],
  },
  {
    name: "features-ten",
    description: "Features with illustrations",
    categories: ["features"],
  },
  {
    name: "features-eleven",
    description: "Features with AI assistant demo",
    categories: ["features"],
  },
  {
    name: "features-7",
    description: "Features with 3D perspective image",
    categories: ["features"],
  },
  {
    name: "features-9",
    description: "Features with background image",
    categories: ["features"],
  },
  {
    name: "features-12",
    description: "Features with interactive accordion",
    categories: ["features"],
  },
  {
    name: "integrations-4",
    description: "Integrations hub layout",
    categories: ["integrations"],
  },
  {
    name: "integrations-5",
    description: "Integrations circular layout",
    categories: ["integrations"],
  },
  {
    name: "pricing-section-two",
    description: "Pricing cards with three tiers",
    categories: ["pricing"],
  },
  {
    name: "pricing-comparator-one",
    description: "Pricing comparison table",
    categories: ["pricing"],
  },
]

export function SiteHeader() {
  const colors = getColors()
  const pageTree = source.pageTree

  return (
    <header className="bg-page sticky top-0 z-50 w-full">
      <div className="mx-auto flex h-(--header-height) max-w-5xl items-center px-6 **:data-[slot=separator]:!h-4">
        <MobileNav
          tree={pageTree}
          items={siteConfig.navItems}
          className="flex lg:hidden"
        />
        <Button
          asChild
          variant="ghost"
          size="icon"
          className="hidden size-8 lg:flex"
        >
          <Link href="/">
            <Icons.logo className="size-5" />
            <span className="sr-only">{siteConfig.name}</span>
          </Link>
        </Button>
        <MainNav items={siteConfig.navItems} className="hidden lg:flex" />
        <div className="ml-auto flex items-center gap-1 md:flex-1 md:justify-end">
          <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
            <CommandMenu
              tree={pageTree}
              colors={colors}
              blocks={blocks}
              navItems={siteConfig.navItems}
            />
          </div>
          <ThemeToggle mode="light-dark-system" className="ml-2 w-auto" />
          <Separator orientation="vertical" className="ml-2 hidden lg:block" />
          <GitHubLink />
          <Separator orientation="vertical" className="3xl:flex hidden" />
          <SiteConfig className="3xl:flex hidden" />
          <Separator orientation="vertical" className="mx-2" />
          <UserNavServer />
        </div>
      </div>
    </header>
  )
}
