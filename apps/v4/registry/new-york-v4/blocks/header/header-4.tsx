"use client"

import { useState } from "react"
import Link from "next/link"
import { AnimatePresence, motion } from "motion/react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const header4Defaults = {
  logo: {
    text: "Terra Botanica",
    href: "#",
  },
  navigation: [
    {
      label: "Plants",
      href: "#",
      children: [
        {
          label: "Indoor Plants",
          href: "#",
          description: "Lush greenery for your home",
        },
        {
          label: "Outdoor Plants",
          href: "#",
          description: "Garden-ready varieties",
        },
        {
          label: "Succulents",
          href: "#",
          description: "Low-maintenance beauties",
        },
        {
          label: "Rare Finds",
          href: "#",
          description: "Unique collector plants",
        },
      ],
    },
    {
      label: "Care",
      href: "#",
      children: [
        { label: "Watering Guide", href: "#", description: "Keep your plants hydrated" },
        {
          label: "Light Requirements",
          href: "#",
          description: "Find the perfect spot",
        },
        {
          label: "Soil & Potting",
          href: "#",
          description: "The foundation of plant health",
        },
      ],
    },
    { label: "Workshops", href: "#" },
    {
      label: "About",
      href: "#",
      children: [
        { label: "Our Story", href: "#", description: "How we started" },
        {
          label: "The Team",
          href: "#",
          description: "Meet our plant experts",
        },
        { label: "Sustainability", href: "#", description: "Our green promise" },
        { label: "Journal", href: "#", description: "Plant tips and stories" },
      ],
    },
  ],
  cta: { label: "Visit Nursery", href: "#" },
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

        {/* Navigation with Mega Menus and SlideDown animation */}
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
                {item.children && (
                  <motion.span
                    animate={{ rotate: openMenu === item.label ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <DynamicIcon name="ChevronDown" className="h-4 w-4" />
                  </motion.span>
                )}
              </Link>

              {/* Mega Menu Dropdown with SlideDown animation */}
              <AnimatePresence>
                {item.children && openMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.4, 0.25, 1],
                    }}
                    className="bg-background border-border absolute top-full left-0 w-80 rounded-lg border p-4 shadow-lg"
                  >
                    <div className="grid gap-1">
                      {item.children.map((child, j) => (
                        <motion.div
                          key={j}
                          initial={{ opacity: 0, y: -8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.3,
                            delay: j * 0.05,
                            ease: [0.25, 0.4, 0.25, 1],
                          }}
                        >
                          <Link
                            href={child.href}
                            className="hover:bg-muted group rounded-md p-3 transition-colors block"
                          >
                            <div className="text-foreground group-hover:text-brand text-sm font-medium transition-colors">
                              {child.label}
                            </div>
                            <div className="text-muted-foreground text-xs">
                              {child.description}
                            </div>
                          </Link>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
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
            <Button
              size="sm"
              className={cn("bg-brand hover:bg-brand/90", classNames.cta)}
              asChild
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}

// Re-export for backwards compatibility
export { Header4 as Header4ServicePlants }
