"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const header7Defaults = {
  logo: {
    text: "Shrink",
    href: "#",
  },
  navigation: [
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
  ],
  cta: { label: "Sign Up", href: "#" },
}

export function Header7({ content = {}, classNames = {} }: HeaderBlockProps) {
  const {
    logo = header7Defaults.logo,
    navigation = header7Defaults.navigation,
    cta = header7Defaults.cta,
  } = content

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "bg-background border-border sticky top-0 z-50 border-b transition-all duration-300",
        classNames.root
      )}
    >
      <div
        className={cn(
          "container flex items-center justify-between px-6 transition-all duration-300",
          isScrolled ? "h-14" : "h-20",
          classNames.container
        )}
      >
        {/* Logo */}
        <Link
          href={logo?.href ?? "#"}
          className={cn(
            "font-bold transition-all duration-300",
            isScrolled ? "text-lg" : "text-2xl",
            classNames.logo
          )}
        >
          {logo?.text}
        </Link>

        {/* Navigation */}
        <nav
          className={cn(
            "hidden items-center transition-all duration-300 md:flex",
            isScrolled ? "gap-4" : "gap-8",
            classNames.nav?.root
          )}
        >
          {navigation.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={cn(
                "text-muted-foreground hover:text-foreground font-medium transition-all duration-300",
                isScrolled ? "text-sm" : "text-base",
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
            size={isScrolled ? "sm" : "default"}
            className={cn("transition-all duration-300", classNames.cta)}
            asChild
          >
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        )}
      </div>
    </header>
  )
}
