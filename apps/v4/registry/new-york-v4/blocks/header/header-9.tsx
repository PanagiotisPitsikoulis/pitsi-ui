"use client"

import Link from "next/link"

import {
  headerDefaults,
  type HeaderBlockProps,
} from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"

import { HeroButton } from "../../ui/hero-button"

// Block-specific defaults for fitness pill navbar
const header9Defaults = {
  logo: {
    text: "ELITE",
    href: "/",
  },
  navigation: [
    { label: "Programs", href: "#" },
    { label: "Trainers", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "About", href: "#" },
  ],
  cta: { label: "Get Started", href: "#" },
}

export function Header9({ content = {}, classNames = {} }: HeaderBlockProps) {
  const {
    logo = header9Defaults.logo,
    navigation = header9Defaults.navigation,
    cta = header9Defaults.cta,
  } = content

  return (
    <header className={cn("sticky top-0 z-50", classNames.root)}>
      <div className={cn("container px-4 pt-6", classNames.container)}>
        <nav className="bg-muted flex items-center justify-between rounded-full px-4 py-2">
          <Link
            href={logo?.href ?? "/"}
            className={cn(
              "pl-2 text-lg font-bold tracking-tight",
              classNames.logo
            )}
          >
            {logo?.text}
          </Link>
          <div
            className={cn(
              "hidden items-center gap-1 md:flex",
              classNames.nav?.root
            )}
          >
            {navigation.map((link, i) => (
              <Link
                key={i}
                href={link.href}
                className={cn(
                  "text-muted-foreground hover:text-foreground px-4 py-2 text-sm font-medium transition-colors",
                  classNames.nav?.link
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
          {cta && (
            <Link href={cta.href} className={classNames.cta}>
              <HeroButton>{cta.label}</HeroButton>
            </Link>
          )}
        </nav>
      </div>
    </header>
  )
}
