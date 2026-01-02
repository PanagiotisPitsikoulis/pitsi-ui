"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const header3Defaults = {
  logo: {
    text: "Brand",
    href: "#",
  },
  navigation: [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Contact", href: "#" },
  ],
  cta: { label: "Book a Call", href: "#" },
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
          ? "bg-background/80 border-border border-b backdrop-blur-lg"
          : "bg-transparent",
        classNames.root
      )}
    >
      <div
        className={cn(
          "container flex h-20 items-center justify-between px-6",
          classNames.container
        )}
      >
        {/* Logo */}
        <Link
          href={logo?.href ?? "#"}
          className={cn(
            "text-2xl font-bold transition-colors",
            isScrolled ? "text-foreground" : "text-white",
            classNames.logo
          )}
        >
          {logo?.text}
        </Link>

        {/* Navigation */}
        <nav
          className={cn(
            "hidden items-center gap-8 md:flex",
            classNames.nav?.root
          )}
        >
          {navigation.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isScrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-white/80 hover:text-white",
                classNames.nav?.link
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        {cta && (
          <Button
            variant={isScrolled ? "default" : "secondary"}
            size="sm"
            className={cn("transition-all", classNames.cta)}
            asChild
          >
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        )}
      </div>
    </header>
  )
}
