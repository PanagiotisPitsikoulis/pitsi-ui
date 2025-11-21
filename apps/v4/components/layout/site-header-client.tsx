"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { MainNav } from "@/components/navigation/main-nav"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { Icons } from "@/components/shared/icons"
import { SiteConfig } from "@/components/shared/site-config"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Separator } from "@/registry/new-york-v4/ui/separator"
import { ThemeToggle } from "@/registry/new-york-v4/ui/theme-toggle"

export function SiteHeaderClient({
  commandMenu,
  userNav,
  githubLink,
  pageTree,
  navItems,
  siteName,
}: {
  commandMenu: ReactNode
  userNav: ReactNode
  githubLink: ReactNode
  pageTree: any
  navItems: any[]
  siteName: string
}) {
  const pathname = usePathname()
  const isHomepage = pathname === "/"

  const containerClassName = cn(
    isHomepage ? "max-w-5xl mx-auto" : "",
    "flex h-(--header-height) items-center px-6 lg:px-3 **:data-[slot=separator]:!h-4"
  )

  const headerClassName = cn("bg-page sticky top-0 z-[100] w-full")

  return (
    <header className={headerClassName}>
      <div className={cn("container", containerClassName)}>
        <MobileNav
          tree={pageTree}
          items={navItems}
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
            <span className="sr-only">{siteName}</span>
          </Link>
        </Button>
        <MainNav items={navItems} className="hidden lg:flex" />
        <div className="ml-auto flex items-center gap-1 md:flex-1 md:justify-end">
          <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
            {commandMenu}
          </div>
          <Separator
            orientation="vertical"
            className="mx-1 hidden md:block"
          />
          <div className="flex items-center gap-1 md:hidden">
            {githubLink}
            {commandMenu}
            <ThemeToggle mode="light-dark" className="w-auto" />
          </div>
          <div className="hidden items-center gap-1 md:flex">
            <ThemeToggle mode="light-dark-system" className="w-auto" />
            <Separator orientation="vertical" className="ml-1 hidden lg:block" />
            {githubLink}
            <Separator orientation="vertical" className="3xl:flex hidden" />
            <SiteConfig className="3xl:flex hidden" />
          </div>
          <Separator orientation="vertical" className="mx-1" />
          {userNav}
        </div>
      </div>
    </header>
  )
}
