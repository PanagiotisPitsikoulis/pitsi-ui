"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import {
  headerDefaults,
  type HeaderBlockProps,
} from "@/lib/blocks/header.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

// Block-specific defaults that extend the shared defaults
const header1Defaults = {
  logo: {
    image: {
      src: "/placeholders/blocks/service-plants/assets/logo.svg",
      alt: "Green Therapy",
      width: 40,
      height: 40,
    },
    text: "Green Therapy",
    href: "#",
  },
  navigation: [
    { label: "Shop", href: "#" },
    { label: "Plant Care", href: "#" },
    { label: "About", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "Contact", href: "#" },
  ],
  cta: { label: "Schedule Visit", href: "#" },
}

export function Header1({ content = {}, classNames = {} }: HeaderBlockProps) {
  // Merge content with defaults
  const {
    logo = header1Defaults.logo,
    navigation = header1Defaults.navigation,
    cta = header1Defaults.cta,
  } = content

  return (
    <header
      className={cn("sticky top-0 z-50 h-20 bg-transparent", classNames.root)}
    >
      <div
        className={cn(
          "container flex h-full items-center px-6",
          classNames.container
        )}
      >
        <div className="flex w-full items-center justify-between">
          <Link
            href={logo?.href ?? "#"}
            className={cn("flex items-center gap-2", classNames.logo)}
          >
            {logo?.image && (
              <Image
                draggable={false}
                src={logo.image.src}
                alt={logo.image.alt}
                width={logo.image.width ?? 40}
                height={logo.image.height ?? 40}
                className="h-10 w-10"
              />
            )}
            {logo?.text && (
              <span className="text-foreground text-xl font-semibold">
                {logo.text}
              </span>
            )}
          </Link>
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
                  "text-muted-foreground hover:text-foreground text-base transition-colors",
                  classNames.nav?.link
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {cta && (
              <Button
                size="lg"
                className={cn(
                  "group bg-brand-complementary hover:bg-brand-complementary/90 relative overflow-hidden rounded-full pr-12",
                  classNames.cta
                )}
                asChild
              >
                <Link href={cta.href}>
                  {cta.label}
                  <div className="bg-background text-brand-complementary absolute inset-y-0 right-1 my-auto flex aspect-square size-8 items-center justify-center overflow-hidden rounded-full">
                    <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-6" />
                    <ArrowRight className="absolute size-4 -translate-x-6 transition-transform duration-300 ease-out group-hover:translate-x-0" />
                  </div>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

// Re-export for backwards compatibility
export { Header1 as HeaderServicePlants }
