"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"

import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const header7Defaults = {
  logo: {
    text: "Rootscape",
    href: "#",
  },
  navigation: [
    { label: "Plants", href: "#" },
    { label: "Planters", href: "#" },
    { label: "Care", href: "#" },
    { label: "About", href: "#" },
  ],
  cta: { label: "Shop Now", href: "#" },
}

export function Header7({ content = {}, classNames = {} }: HeaderBlockProps) {
  const {
    logo = header7Defaults.logo,
    navigation = header7Defaults.navigation,
    cta = header7Defaults.cta,
  } = content

  const headerRef = useRef<HTMLElement>(null)
  const [isScrolled, setIsScrolled] = useState(false)

  // Use scroll for sticky reveal effect (inverted StickyFooter behavior)
  const { scrollY } = useScroll()

  // Header height and padding transform based on scroll
  const headerHeight = useTransform(scrollY, [0, 100], [80, 56])
  const headerPadding = useTransform(scrollY, [0, 100], [24, 16])
  const logoSize = useTransform(scrollY, [0, 100], [1.5, 1.125])
  const navSpacing = useTransform(scrollY, [0, 100], [32, 16])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      ref={headerRef}
      style={{ height: headerHeight }}
      className={cn(
        "bg-background border-border sticky top-0 z-50 border-b transition-shadow duration-300",
        isScrolled && "shadow-sm",
        classNames.root
      )}
    >
      <motion.div
        style={{ paddingLeft: headerPadding, paddingRight: headerPadding }}
        className={cn(
          "container mx-auto flex h-full items-center justify-between",
          classNames.container
        )}
      >
        {/* Logo with size animation */}
        <motion.div style={{ fontSize: logoSize }} className="leading-none">
          <Link
            href={logo?.href ?? "#"}
            className={cn(
              "font-bold transition-colors",
              classNames.logo
            )}
            style={{ fontSize: "inherit" }}
          >
            {logo?.text}
          </Link>
        </motion.div>

        {/* Navigation with spacing animation */}
        <motion.nav
          style={{ gap: navSpacing }}
          className={cn(
            "hidden items-center md:flex",
            classNames.nav?.root
          )}
        >
          {navigation.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={cn(
                "text-muted-foreground hover:text-foreground relative font-medium transition-all duration-300",
                isScrolled ? "text-sm" : "text-base",
                // Underline hover effect
                "after:bg-brand after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full",
                classNames.nav?.link
              )}
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>

        {/* CTA with size transition */}
        {cta && (
          <Button
            size={isScrolled ? "sm" : "default"}
            className={cn(
              "bg-brand hover:bg-brand/90 transition-all duration-300",
              classNames.cta
            )}
            asChild
          >
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        )}
      </motion.div>

      {/* Progress indicator bar at bottom of header */}
      <motion.div
        className="bg-brand absolute bottom-0 left-0 h-0.5 origin-left"
        style={{
          scaleX: useTransform(scrollY, [0, 1000], [0, 1]),
        }}
      />
    </motion.header>
  )
}

// Re-export for backwards compatibility
export { Header7 as Header7ServicePlants }
