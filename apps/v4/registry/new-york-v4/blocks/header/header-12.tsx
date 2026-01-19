"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const header12Defaults = {
  logo: {
    text: "Horizon Travel",
    href: "#",
  },
  navigation: [
    { label: "Destinations", href: "#" },
    { label: "Adventures", href: "#" },
    { label: "Packages", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Contact", href: "#" },
  ],
  cta: { label: "Plan Your Trip", href: "#" },
}

export function Header12({ content = {}, classNames = {} }: HeaderBlockProps) {
  const {
    logo = header12Defaults.logo,
    navigation = header12Defaults.navigation,
    cta = header12Defaults.cta,
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
        "fixed top-0 right-0 left-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 supports-[backdrop-filter]:bg-background/80 h-16 shadow-lg backdrop-blur"
          : "h-24 bg-transparent",
        classNames.root
      )}
    >
      <div
        className={cn(
          "container flex h-full items-center justify-between px-6 transition-all duration-500",
          classNames.container
        )}
      >
        {/* Logo */}
        <Link
          href={logo?.href ?? "#"}
          className={cn(
            "flex items-center gap-3 transition-all duration-300",
            classNames.logo
          )}
        >
          <div
            className={cn(
              "bg-brand flex items-center justify-center rounded-full transition-all duration-300",
              isScrolled ? "h-9 w-9" : "h-11 w-11"
            )}
          >
            <DynamicIcon
              name="Navigation"
              className={cn(
                "text-brand-foreground transition-all duration-300",
                isScrolled ? "h-4 w-4" : "h-5 w-5"
              )}
            />
          </div>
          <span
            className={cn(
              "font-bold tracking-tight transition-all duration-300",
              isScrolled
                ? "text-foreground text-lg"
                : "text-foreground text-xl",
              !isScrolled && "drop-shadow-md"
            )}
          >
            {logo?.text}
          </span>
        </Link>

        {/* Navigation */}
        <nav
          className={cn(
            "hidden items-center transition-all duration-300 md:flex",
            isScrolled ? "gap-6" : "gap-8",
            classNames.nav?.root
          )}
        >
          {navigation.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={cn(
                "relative font-medium transition-all duration-300",
                isScrolled
                  ? "text-muted-foreground hover:text-brand text-sm"
                  : "text-foreground/90 hover:text-brand text-base",
                !isScrolled && "drop-shadow-sm",
                // Animated underline
                "after:bg-brand after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full",
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
            className={cn(
              "bg-brand hover:bg-brand/90 transition-all duration-300",
              !isScrolled && "shadow-lg",
              classNames.cta
            )}
            asChild
          >
            <Link href={cta.href}>
              <DynamicIcon name="Calendar" className="mr-2 h-4 w-4" />
              {cta.label}
            </Link>
          </Button>
        )}
      </div>
    </header>
  )
}

export { Header12 as HeaderServiceTravel12 }
