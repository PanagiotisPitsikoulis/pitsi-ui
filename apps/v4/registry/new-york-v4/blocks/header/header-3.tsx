"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { ScrollScale } from "@/registry/new-york-v4/animations/scroll-scale/scroll-scale"
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/95 border-border h-16 border-b shadow-sm"
          : "bg-transparent h-20",
        classNames.root
      )}
    >
      <div
        className={cn(
          "container flex h-full items-center justify-between px-6 transition-transform duration-300",
          isScrolled ? "scale-95" : "scale-100",
          classNames.container
        )}
      >
        {/* Logo with ScrollScale animation */}
        <ScrollScale
          scrollBased={false}
          delay={0}
          duration={0.6}
          startScale={0.9}
          endScale={1}
        >
          <Link
            href={logo?.href ?? "#"}
            className={cn(
              "text-2xl font-bold transition-all duration-300",
              isScrolled ? "text-foreground scale-85" : "text-foreground",
              classNames.logo
            )}
          >
            {logo?.text}
          </Link>
        </ScrollScale>

        {/* Navigation */}
        <nav
          className={cn(
            "hidden items-center md:flex transition-all duration-300",
            isScrolled ? "gap-5" : "gap-8",
            classNames.nav?.root
          )}
        >
          {navigation.map((item, i) => (
            <ScrollScale
              key={i}
              scrollBased={false}
              delay={0.05 * i}
              duration={0.5}
              startScale={0.9}
              endScale={1}
            >
              <Link
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-all duration-300",
                  "text-muted-foreground hover:text-foreground",
                  classNames.nav?.link
                )}
              >
                {item.label}
              </Link>
            </ScrollScale>
          ))}
        </nav>

        {/* CTA with ScrollScale */}
        {cta && (
          <ScrollScale
            scrollBased={false}
            delay={0.2}
            duration={0.6}
            startScale={0.9}
            endScale={1}
          >
            <Button
              variant="default"
              size={isScrolled ? "sm" : "default"}
              className={cn(
                "bg-brand hover:bg-brand/90 transition-all",
                classNames.cta
              )}
              asChild
            >
              <Link href={cta.href}>{cta.label}</Link>
            </Button>
          </ScrollScale>
        )}
      </div>
    </header>
  )
}

// Re-export for backwards compatibility
export { Header3 as Header3ServicePlants }
