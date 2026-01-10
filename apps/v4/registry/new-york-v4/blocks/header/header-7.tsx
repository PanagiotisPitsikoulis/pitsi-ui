"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useScroll, useTransform } from "motion/react"

import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { StickyFooter } from "@/registry/new-york-v4/animations/sticky-footer/sticky-footer"
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

  // Use scroll for progress indicator (sticky behavior from StickyFooter inverted)
  const { scrollY } = useScroll()

  // Progress indicator transform
  const progressScaleX = useTransform(scrollY, [0, 1000], [0, 1])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <StickyFooter
      className={cn(
        "bg-background border-border sticky top-0 z-50 border-b transition-all duration-300",
        isScrolled ? "h-14 shadow-sm" : "h-20",
        classNames.root
      )}
    >
      <header ref={headerRef} className="relative h-full w-full">
        <div
          className={cn(
            "container mx-auto flex h-full items-center justify-between transition-all duration-300",
            isScrolled ? "px-4" : "px-6",
            classNames.container
          )}
        >
          {/* Logo with size animation */}
          <div className="leading-none">
            <Link
              href={logo?.href ?? "#"}
              className={cn(
                "font-bold transition-all duration-300",
                isScrolled ? "text-lg" : "text-xl",
                classNames.logo
              )}
            >
              {logo?.text}
            </Link>
          </div>

          {/* Navigation with spacing animation */}
          <nav
            className={cn(
              "hidden items-center md:flex transition-all duration-300",
              isScrolled ? "gap-4" : "gap-8",
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
          </nav>

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
        </div>

        {/* Progress indicator bar at bottom of header */}
        <motion.div
          className="bg-brand absolute bottom-0 left-0 h-0.5 origin-left"
          style={{
            scaleX: progressScaleX,
          }}
        />
      </header>
    </StickyFooter>
  )
}

// Re-export for backwards compatibility
export { Header7 as Header7ServicePlants }
