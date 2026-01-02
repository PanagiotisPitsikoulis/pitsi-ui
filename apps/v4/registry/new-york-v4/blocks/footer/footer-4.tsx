"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { type FooterBlockProps } from "@/lib/blocks/footer.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

const footer4Defaults = {
  cta: {
    title: "Ready to get started?",
    description: "Join thousands of satisfied customers using our platform.",
    primaryButton: { label: "Start Free Trial", href: "#" },
    secondaryButton: { label: "Talk to Sales", href: "#" },
  },
  logo: {
    text: "Company",
    href: "#",
  },
  columns: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Templates", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy", href: "#" },
        { label: "Terms", href: "#" },
        { label: "Security", href: "#" },
        { label: "Cookies", href: "#" },
      ],
    },
  ],
  copyright: "2024 Company. All rights reserved.",
}

export function Footer4({ content = {}, classNames = {} }: FooterBlockProps) {
  const {
    logo = footer4Defaults.logo,
    columns = footer4Defaults.columns,
    copyright = footer4Defaults.copyright,
  } = content

  const cta = footer4Defaults.cta

  return (
    <footer className={cn("bg-background", classNames.root)}>
      {/* Big CTA Section */}
      <div className="bg-primary text-primary-foreground">
        <div
          className={cn("container px-6 py-16 md:py-24", classNames.container)}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
              {cta.title}
            </h2>
            <p className="text-primary-foreground/80 mb-8 text-lg">
              {cta.description}
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" variant="secondary" className="group" asChild>
                <Link href={cta.primaryButton.href}>
                  {cta.primaryButton.label}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
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
              <Link href={logo?.href ?? "#"} className="text-xl font-bold">
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
                        className="hover:text-foreground transition-colors"
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
