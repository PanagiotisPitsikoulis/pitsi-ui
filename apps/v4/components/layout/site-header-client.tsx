"use client"

import type { ReactNode } from "react"
import { useEffect, useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { MainNav } from "@/components/navigation/main-nav"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { Icons } from "@/components/shared/icons"
import { SiteConfig } from "@/components/shared/site-config"
import { Button } from "@/registry/new-york-v4/ui/button"
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
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const containerClassName = "flex h-(--header-height) items-center px-6 lg:px-3"

  const headerClassName = cn(
    "sticky top-0 z-[99] w-full",
    "bg-background/80 backdrop-blur-md lg:bg-transparent lg:backdrop-blur-none",
    hasScrolled && "lg:bg-page"
  )

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
          className="hidden h-8 gap-2 px-2 lg:flex"
        >
          <Link href="/">
            <Icons.logo className="size-5" />
            <span className="display font-semibold tracking-tight">Pitsi UI</span>
          </Link>
        </Button>
        <MainNav items={navItems} className="hidden lg:flex" />
        <div className="ml-auto flex items-center gap-1 md:gap-2 md:flex-1 md:justify-end">
          <div className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
            {commandMenu}
          </div>
          <div className="flex md:hidden">
            {githubLink}
          </div>
          <div className="flex md:hidden">
            {commandMenu}
          </div>
          <div className="flex md:hidden">
            <ThemeToggle mode="light-dark" className="w-auto" />
          </div>
          <div className="hidden items-center gap-2 md:flex">
            <ThemeToggle mode="light-dark-system" className="w-auto" />
            {githubLink}
            <SiteConfig className="3xl:flex hidden" />
          </div>
          {userNav}
        </div>
      </div>
    </header>
  )
}
