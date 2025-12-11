"use client"

import type { ReactNode } from "react"
import { memo, useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { MainNav } from "@/components/navigation/main-nav"
import { MobileNav } from "@/components/navigation/mobile-nav"
import { Icons } from "@/components/shared/icons"
import { Button } from "@/registry/new-york-v4/ui/button"

export const SiteHeaderClient = memo(function SiteHeaderClient({
  commandMenu,
  userNav,
  githubLink,
  pageTree,
  navItems,
  siteName,
  componentPages,
  animationPages,
  allBlockSubcategories,
}: {
  commandMenu: ReactNode
  userNav: ReactNode
  githubLink: ReactNode
  pageTree: any
  navItems: any[]
  siteName: string
  componentPages: Array<{ name: string; url: string }>
  animationPages: Array<{ name: string; url: string }>
  allBlockSubcategories: Array<{
    category: string
    name: string
    count: number
  }>
}) {
  const [hasScrolled, setHasScrolled] = useState(false)
  const rafRef = useRef<number | null>(null)

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) return

    rafRef.current = requestAnimationFrame(() => {
      setHasScrolled(window.scrollY > 10)
      rafRef.current = null
    })
  }, [])

  useEffect(() => {
    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", handleScroll)
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [handleScroll])

  const containerClassName =
    "flex h-(--header-height) items-center px-6 lg:px-3"

  const headerClassName = cn(
    "sticky top-0 z-[99] w-full",
    hasScrolled ? "bg-page" : "bg-transparent"
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
            <span className="display font-semibold tracking-tight">
              Pitsi UI
            </span>
          </Link>
        </Button>
        <MainNav
          items={navItems}
          componentPages={componentPages}
          animationPages={animationPages}
          allBlockSubcategories={allBlockSubcategories}
          className="hidden lg:flex"
        />
        <div className="ml-auto flex items-center gap-1 md:flex-1 md:justify-end md:gap-2">
          <div key="command-menu-desktop" className="hidden w-full flex-1 md:flex md:w-auto md:flex-none">
            {commandMenu}
          </div>
          <div key="github-mobile" className="flex md:hidden">{githubLink}</div>
          <div key="command-menu-mobile" className="flex md:hidden">{commandMenu}</div>
          <div key="github-desktop" className="hidden items-center gap-2 md:flex">{githubLink}</div>
          <div key="user-nav">{userNav}</div>
        </div>
      </div>
    </header>
  )
})
