"use client"

import Link from "next/link"

import { type FooterBlockProps } from "@/lib/blocks/footer.types"
import { cn } from "@/lib/utils"
import {
  SmoothParallaxContainer,
  SmoothParallaxLayer,
} from "@/registry/new-york-v4/animations/smooth-parallax-scroll/smooth-parallax-scroll"

const footer7Defaults = {
  logo: {
    text: "Green Therapy",
    href: "#",
  },
  description:
    "Your trusted source for premium indoor and outdoor plants, expert care guides, and sustainable gardening solutions.",
  columns: [
    {
      title: "Shop",
      links: [
        { label: "Indoor Plants", href: "#" },
        { label: "Outdoor Plants", href: "#" },
        { label: "Succulents", href: "#" },
        { label: "Rare Plants", href: "#" },
        { label: "Planters", href: "#" },
        { label: "Care Tools", href: "#" },
      ],
    },
    {
      title: "Collections",
      links: [
        { label: "Low Light", href: "#" },
        { label: "Pet Friendly", href: "#" },
        { label: "Air Purifying", href: "#" },
        { label: "Tropical", href: "#" },
        { label: "Beginner Friendly", href: "#" },
        { label: "Gift Sets", href: "#" },
      ],
    },
    {
      title: "Learn",
      links: [
        { label: "Care Guides", href: "#" },
        { label: "Plant Blog", href: "#" },
        { label: "Video Tutorials", href: "#" },
        { label: "Plant Quiz", href: "#" },
        { label: "Workshops", href: "#" },
        { label: "Seasonal Tips", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Our Story", href: "#" },
        { label: "Sustainability", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Partners", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Shipping Info", href: "#" },
        { label: "Returns", href: "#" },
        { label: "Plant Guarantee", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "Contact Us", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "Accessibility", href: "#" },
        { label: "Sitemap", href: "#" },
        { label: "Do Not Sell", href: "#" },
      ],
    },
  ],
  copyright: "2024 Green Therapy. All rights reserved.",
}

export function Footer7({ content = {}, classNames = {} }: FooterBlockProps) {
  const {
    logo = footer7Defaults.logo,
    columns = footer7Defaults.columns,
    copyright = footer7Defaults.copyright,
  } = content

  return (
    <footer
      className={cn("bg-background border-border border-t", classNames.root)}
    >
      <SmoothParallaxContainer height="200vh" className="min-h-0">
        <div className={cn("container px-6 py-16", classNames.container)}>
          {/* Logo & Description with Parallax */}
          <SmoothParallaxLayer yRange={[-50, 0]} className="mb-12">
            <div className="max-w-sm">
              <Link
                href={logo?.href ?? "#"}
                className={cn(
                  "text-primary text-2xl font-bold",
                  classNames.logo
                )}
              >
                {logo?.text}
              </Link>
              <p className="text-muted-foreground mt-4 text-sm">
                {footer7Defaults.description}
              </p>
            </div>
          </SmoothParallaxLayer>

          {/* Comprehensive Link Grid with Staggered Parallax */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
            {columns.map((column, i) => (
              <SmoothParallaxLayer
                key={i}
                yRange={[-(30 + i * 10), 0]}
                className="will-change-transform"
              >
                <div>
                  <h4 className="text-foreground mb-4 text-sm font-semibold">
                    {column.title}
                  </h4>
                  <ul className="text-muted-foreground space-y-2 text-sm">
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
              </SmoothParallaxLayer>
            ))}
          </div>
        </div>
      </SmoothParallaxContainer>

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

// Backward compatibility export
export { Footer7 as FooterParallaxPlants }
