"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"

import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const header3Defaults = {
  logo: {
    text: "Greenhouse",
    href: "#",
  },
  navigation: [
    { label: "Collection", href: "#" },
    { label: "Care Tips", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Workshops", href: "#" },
    { label: "Contact", href: "#" },
  ],
  cta: { label: "Book a Visit", href: "#" },
}

export function Header3({ content = {}, classNames = {} }: HeaderBlockProps) {
  const {
    logo = header3Defaults.logo,
    navigation = header3Defaults.navigation,
    cta = header3Defaults.cta,
  } = content

  const [isScrolled, setIsScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  // Track scroll progress for scale animation
  const { scrollY } = useScroll()

  // Scale transforms - header shrinks as user scrolls
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.95])
  const headerHeight = useTransform(scrollY, [0, 100], [80, 64])
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85])
  const navGap = useTransform(scrollY, [0, 100], [32, 20])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      ref={headerRef}
      style={{ height: headerHeight }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-colors duration-300",
        isScrolled
          ? "bg-background/95 border-border border-b shadow-sm"
          : "bg-transparent",
        classNames.root
      )}
    >
      <motion.div
        style={{ scale: headerScale }}
        className={cn(
          "container flex h-full items-center justify-between px-6",
          classNames.container
        )}
      >
        {/* Logo with scale animation */}
        <motion.div style={{ scale: logoScale }}>
          <Link
            href={logo?.href ?? "#"}
            className={cn(
              "text-2xl font-bold transition-colors",
              isScrolled ? "text-foreground" : "text-foreground",
              classNames.logo
            )}
          >
            {logo?.text}
          </Link>
        </motion.div>

        {/* Navigation */}
        <motion.nav
          style={{ gap: navGap }}
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
                "text-sm font-medium transition-all duration-300",
                isScrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-muted-foreground hover:text-foreground",
                classNames.nav?.link
              )}
            >
              {item.label}
            </Link>
          ))}
        </motion.nav>

        {/* CTA */}
        {cta && (
          <motion.div style={{ scale: logoScale }}>
            <Button
              variant={isScrolled ? "default" : "default"}
              size={isScrolled ? "sm" : "default"}
              className={cn(
                "bg-brand hover:bg-brand/90 transition-all",
                classNames.cta
              )}
              asChild
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </motion.div>
        )}
      </motion.div>
    </motion.header>
  )
}

// Re-export for backwards compatibility
export { Header3 as Header3ServicePlants }
