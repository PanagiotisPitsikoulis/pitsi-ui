"use client"

import Link from "next/link"

import { type HeaderBlockProps } from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import LetterGlitch from "@/registry/new-york-v4/animations/letter-glitch/letter-glitch"
import { BorderBeam } from "@/registry/new-york-v4/ui/border-beam"

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

// Neon fitness colors for LetterGlitch
const neonColors = ["#00ff88", "#ff00ff", "#00ffff"]

export function Header9({ content = {}, classNames = {} }: HeaderBlockProps) {
  const {
    logo = header9Defaults.logo,
    navigation = header9Defaults.navigation,
    cta = header9Defaults.cta,
  } = content

  return (
    <header className={cn("sticky top-0 z-50", classNames.root)}>
      <div className={cn("container px-4 pt-6", classNames.container)}>
        <nav className="bg-muted relative flex items-center justify-between overflow-hidden rounded-full px-4 py-2">
          {/* BorderBeam animation around the pill navbar */}
          <BorderBeam
            size={60}
            duration={8}
            colorFrom="#00ff88"
            colorTo="#ff00ff"
            borderWidth={2}
          />

          {/* Logo with LetterGlitch background */}
          <Link
            href={logo?.href ?? "/"}
            className={cn(
              "relative overflow-hidden rounded-md pl-2 text-lg font-bold tracking-tight",
              classNames.logo
            )}
          >
            <span className="relative z-10 mix-blend-difference">
              {logo?.text}
            </span>
            <div className="absolute inset-0 opacity-30">
              <LetterGlitch
                glitchColors={neonColors}
                glitchSpeed={100}
                centerVignette={false}
                outerVignette={false}
                smooth={true}
                characters="ELITE01"
              />
            </div>
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

// Backward compatibility export
export default Header9
