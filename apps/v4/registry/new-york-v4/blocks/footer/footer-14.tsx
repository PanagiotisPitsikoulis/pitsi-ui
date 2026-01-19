"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type FooterBlockProps } from "@/lib/blocks/footer.types"
import { cn } from "@/lib/utils"
import Aurora from "@/registry/new-york-v4/animations/aurora/aurora"
import { Button } from "@/registry/new-york-v4/ui/button"

const footer14Defaults = {
  cta: {
    title: "Ready for Your Next Adventure?",
    description:
      "Let us help you discover the world's most incredible destinations. From pristine beaches to mountain peaks, your dream trip awaits.",
    primaryButton: { label: "Plan Your Trip", href: "#" },
    secondaryButton: { label: "View Destinations", href: "#" },
  },
  logo: {
    text: "Wanderlust",
    href: "#",
  },
  columns: [
    {
      title: "Destinations",
      links: [
        { label: "Europe", href: "#" },
        { label: "Asia", href: "#" },
        { label: "Americas", href: "#" },
        { label: "Africa", href: "#" },
      ],
    },
    {
      title: "Experiences",
      links: [
        { label: "Adventure Tours", href: "#" },
        { label: "Beach Holidays", href: "#" },
        { label: "City Breaks", href: "#" },
        { label: "Cruises", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Travel Guides", href: "#" },
        { label: "Visa Info", href: "#" },
        { label: "Travel Insurance", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
  ],
  copyright: "2025 Wanderlust Travel. All rights reserved.",
}

// Azure palette colors for Aurora
const azureAuroraColors = ["#0369a1", "#0284c7", "#0ea5e9"]

export function Footer14({ content = {}, classNames = {} }: FooterBlockProps) {
  const {
    logo = footer14Defaults.logo,
    columns = footer14Defaults.columns,
    copyright = footer14Defaults.copyright,
  } = content

  const cta = footer14Defaults.cta

  return (
    <footer className={cn("bg-background", classNames.root)}>
      {/* Big CTA Section with Aurora Background */}
      <div className="relative overflow-hidden">
        {/* Aurora Background */}
        <div className="absolute inset-0 opacity-70">
          <Aurora
            colorStops={azureAuroraColors}
            amplitude={1.2}
            blend={0.6}
            speed={0.8}
          />
        </div>

        {/* Overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

        {/* Content */}
        <div
          className={cn(
            "relative z-10 container px-6 py-20 md:py-28",
            classNames.container
          )}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
              {cta.title}
            </h2>
            <p className="mb-8 text-lg text-white/80">{cta.description}</p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                className="group bg-white text-sky-800 hover:bg-white/90"
                asChild
              >
                <Link href={cta.primaryButton.href}>
                  {cta.primaryButton.label}
                  <DynamicIcon
                    name="ArrowRight01"
                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-white hover:bg-white/10"
                asChild
              >
                <Link href={cta.secondaryButton.href}>
                  {cta.secondaryButton.label}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-border border-t py-12">
        <div className={cn("container px-6", classNames.container)}>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {/* Brand */}
            <div className={cn("lg:col-span-1", classNames.logo)}>
              <Link
                href={logo?.href ?? "#"}
                className="text-primary text-xl font-bold"
              >
                {logo?.text}
              </Link>
            </div>

            {/* Link Columns */}
            {columns.map((column, i) => (
              <div key={i}>
                <h4 className="text-foreground mb-4 font-semibold">
                  {column.title}
                </h4>
                <ul className="text-muted-foreground space-y-3 text-sm">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className="hover:text-primary transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-border border-t py-6">
        <div className={cn("container px-6", classNames.container)}>
          <p className="text-muted-foreground text-center text-sm">
            &copy; {copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer14
