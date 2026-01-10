"use client"

import { useState } from "react"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import FlowingMenu from "@/registry/new-york-v4/animations/flowing-menu/flowing-menu"
import { Button } from "@/registry/new-york-v4/ui/button"

const header2Defaults = {
  logo: {
    text: "Botanical",
    href: "#",
  },
  leftNavigation: [
    { label: "Plants", href: "#" },
    { label: "Care Guide", href: "#" },
    { label: "Workshop", href: "#" },
  ],
  rightNavigation: [
    { label: "Journal", href: "#" },
    { label: "About", href: "#" },
    { label: "Visit", href: "#" },
  ],
  cta: { label: "Shop Now", href: "#" },
}

// Menu items for FlowingMenu in mobile overlay
const flowingMenuItems = [
  {
    link: "#",
    text: "Plants",
    image:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=300&q=80",
  },
  {
    link: "#",
    text: "Care Guide",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=300&q=80",
  },
  {
    link: "#",
    text: "Workshop",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&q=80",
  },
  {
    link: "#",
    text: "Journal",
    image:
      "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=300&q=80",
  },
  {
    link: "#",
    text: "About",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&q=80",
  },
]

export function Header2({ content = {}, classNames = {} }: HeaderBlockProps) {
  const {
    logo = header2Defaults.logo,
    navigation = [
      ...header2Defaults.leftNavigation,
      ...header2Defaults.rightNavigation,
    ],
    cta = header2Defaults.cta,
  } = content

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const leftNav = navigation.slice(0, 3)
  const rightNav = navigation.slice(3)

  return (
    <>
      <header
        className={cn(
          "bg-background border-border sticky top-0 z-50 border-b",
          classNames.root
        )}
      >
        <div
          className={cn(
            "container flex h-16 items-center justify-between px-6",
            classNames.container
          )}
        >
          {/* Left Navigation */}
          <nav
            className={cn(
              "hidden items-center gap-6 md:flex",
              classNames.nav?.root
            )}
          >
            {leftNav.map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground relative text-sm font-medium transition-colors",
                  "after:bg-brand after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full",
                  classNames.nav?.link
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <DynamicIcon name="Menu" className="h-5 w-5" />
            <span className="sr-only">Open menu</span>
          </Button>

          {/* Centered Logo */}
          <Link
            href={logo?.href ?? "#"}
            className={cn(
              "absolute left-1/2 -translate-x-1/2 text-xl font-bold",
              classNames.logo
            )}
          >
            {logo?.text}
          </Link>

          {/* Right Navigation + CTA */}
          <div className="flex items-center gap-6">
            <nav
              className={cn(
                "hidden items-center gap-6 md:flex",
                classNames.nav?.root
              )}
            >
              {rightNav.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className={cn(
                    "text-muted-foreground hover:text-foreground relative text-sm font-medium transition-colors",
                    "after:bg-brand after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full",
                    classNames.nav?.link
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            {cta && (
              <Button size="sm" className={classNames.cta} asChild>
                <Link href={cta.href}>{cta.label}</Link>
              </Button>
            )}
          </div>
        </div>
      </header>

      {/* Full-Screen FlowingMenu Overlay for Mobile */}
      {isMenuOpen && (
        <div className="bg-background fixed inset-0 z-50 flex flex-col md:hidden">
          {/* Close Button Header */}
          <div className="container flex h-16 items-center justify-between px-6">
            <Link
              href={logo?.href ?? "#"}
              className="text-xl font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              {logo?.text}
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(false)}
            >
              <DynamicIcon name="X" className="h-6 w-6" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>

          {/* FlowingMenu */}
          <div className="flex-1">
            <FlowingMenu
              items={flowingMenuItems}
              speed={12}
              textColor="hsl(var(--foreground))"
              bgColor="hsl(var(--background))"
              marqueeBgColor="hsl(var(--brand))"
              marqueeTextColor="hsl(var(--brand-foreground))"
              borderColor="hsl(var(--border))"
            />
          </div>
        </div>
      )}
    </>
  )
}

// Re-export for backwards compatibility
export { Header2 as Header2ServicePlants }
