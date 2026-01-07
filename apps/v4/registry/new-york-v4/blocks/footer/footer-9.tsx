"use client"

import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { type FooterBlockProps } from "@/lib/blocks/footer.types"
import { cn } from "@/lib/utils"

const footer9Defaults = {
  logo: {
    text: "pitsi/ui",
  },
  description: "Beautiful, accessible components for modern web applications.",
  sections: [
    {
      title: "Documentation",
      links: [
        { label: "Getting Started", href: "/docs" },
        { label: "Components", href: "/docs/components" },
        { label: "Blocks", href: "/blocks" },
        { label: "Examples", href: "/examples" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "GitHub", href: "https://github.com" },
        { label: "Discord", href: "https://discord.com" },
        { label: "Twitter", href: "https://twitter.com" },
        { label: "Blog", href: "/blog" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
        { label: "License", href: "/license" },
      ],
    },
  ],
  socials: [
    { icon: "Github01Icon", href: "https://github.com", label: "GitHub" },
    { icon: "NewTwitterIcon", href: "https://twitter.com", label: "Twitter" },
    { icon: "DiscordIcon", href: "https://discord.com", label: "Discord" },
  ],
  copyright: "© 2024 pitsi/ui. All rights reserved.",
}

export function Footer9({ content = {}, classNames = {} }: FooterBlockProps) {
  const {
    logo = footer9Defaults.logo,
    description = footer9Defaults.description,
    sections = footer9Defaults.sections,
    socials = footer9Defaults.socials,
    copyright = footer9Defaults.copyright,
  } = content as typeof footer9Defaults

  return (
    <footer className={cn("border-border border-t py-16", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            {logo?.text && (
              <Link href="/" className="text-foreground text-xl font-bold">
                {logo.text}
              </Link>
            )}
            {description && (
              <p
                className={cn(
                  "text-muted-foreground mt-4 max-w-sm text-sm",
                  classNames.description
                )}
              >
                {description}
              </p>
            )}
            {/* Socials */}
            {socials && socials.length > 0 && (
              <div className="mt-6 flex gap-4">
                {socials.map((social, idx) => (
                  <Link
                    key={idx}
                    href={social.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.label}
                  >
                    <DynamicIcon name={social.icon} className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Link sections */}
          {sections.map((section, idx) => (
            <div key={idx}>
              <h3
                className={cn(
                  "text-foreground mb-4 text-sm font-semibold",
                  classNames.section?.title
                )}
              >
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.href}
                      className={cn(
                        "text-muted-foreground hover:text-foreground text-sm transition-colors",
                        classNames.section?.link
                      )}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-border mt-12 border-t pt-8">
          <p
            className={cn(
              "text-muted-foreground text-center text-sm",
              classNames.copyright
            )}
          >
            {copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
