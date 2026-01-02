"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const header4Defaults = {
  logo: {
    text: "MegaCorp",
    href: "#",
  },
  navigation: [
    {
      label: "Products",
      href: "#",
      children: [
        {
          label: "Analytics",
          href: "#",
          description: "Powerful insights for your data",
        },
        {
          label: "Automation",
          href: "#",
          description: "Streamline your workflows",
        },
        {
          label: "Security",
          href: "#",
          description: "Enterprise-grade protection",
        },
        {
          label: "Integrations",
          href: "#",
          description: "Connect your favorite tools",
        },
      ],
    },
    {
      label: "Solutions",
      href: "#",
      children: [
        { label: "For Startups", href: "#", description: "Scale from day one" },
        {
          label: "For Enterprise",
          href: "#",
          description: "Custom solutions at scale",
        },
        {
          label: "For Agencies",
          href: "#",
          description: "Manage multiple clients",
        },
      ],
    },
    { label: "Pricing", href: "#" },
    {
      label: "Resources",
      href: "#",
      children: [
        { label: "Blog", href: "#", description: "Latest news and updates" },
        {
          label: "Documentation",
          href: "#",
          description: "Guides and API reference",
        },
        { label: "Community", href: "#", description: "Join the conversation" },
        { label: "Webinars", href: "#", description: "Learn from experts" },
      ],
    },
  ],
  cta: { label: "Start Free Trial", href: "#" },
}

export function Header4({ content = {}, classNames = {} }: HeaderBlockProps) {
  const { logo = header4Defaults.logo, cta = header4Defaults.cta } = content

  const megaNavigation = header4Defaults.navigation
  const [openMenu, setOpenMenu] = useState<string | null>(null)

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
        {/* Logo */}
        <Link
          href={logo?.href ?? "#"}
          className={cn("text-xl font-bold", classNames.logo)}
        >
          {logo?.text}
        </Link>

        {/* Navigation with Mega Menus */}
        <nav
          className={cn(
            "hidden items-center gap-1 md:flex",
            classNames.nav?.root
          )}
        >
          {megaNavigation.map((item, i) => (
            <div
              key={i}
              className="relative"
              onMouseEnter={() => item.children && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors",
                  classNames.nav?.link
                )}
              >
                {item.label}
                {item.children && <ChevronDown className="h-4 w-4" />}
              </Link>

              {/* Mega Menu Dropdown */}
              {item.children && openMenu === item.label && (
                <div className="bg-background border-border absolute top-full left-0 w-80 rounded-lg border p-4 shadow-lg">
                  <div className="grid gap-2">
                    {item.children.map((child, j) => (
                      <Link
                        key={j}
                        href={child.href}
                        className="hover:bg-muted rounded-md p-3 transition-colors"
                      >
                        <div className="text-foreground text-sm font-medium">
                          {child.label}
                        </div>
                        <div className="text-muted-foreground text-xs">
                          {child.description}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="text-muted-foreground hover:text-foreground hidden text-sm font-medium md:block"
          >
            Sign in
          </Link>
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
