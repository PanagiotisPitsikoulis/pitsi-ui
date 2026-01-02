"use client"

import Link from "next/link"

import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const header2Defaults = {
  logo: {
    text: "Acme",
    href: "#",
  },
  leftNavigation: [
    { label: "Products", href: "#" },
    { label: "Solutions", href: "#" },
    { label: "Pricing", href: "#" },
  ],
  rightNavigation: [
    { label: "Blog", href: "#" },
    { label: "Docs", href: "#" },
    { label: "Support", href: "#" },
  ],
  cta: { label: "Get Started", href: "#" },
}

export function Header2({ content = {}, classNames = {} }: HeaderBlockProps) {
  const {
    logo = header2Defaults.logo,
    navigation = [
      ...header2Defaults.leftNavigation,
      ...header2Defaults.rightNavigation,
    ],
    cta = header2Defaults.cta,
  } = content

  const leftNav = navigation.slice(0, 3)
  const rightNav = navigation.slice(3)

  return (
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
                "text-muted-foreground hover:text-foreground text-sm font-medium transition-colors",
                classNames.nav?.link
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

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
                  "text-muted-foreground hover:text-foreground text-sm font-medium transition-colors",
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
  )
}
