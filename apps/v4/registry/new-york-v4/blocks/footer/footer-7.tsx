"use client"

import Link from "next/link"

import { type FooterBlockProps } from "@/lib/blocks/footer.types"
import { cn } from "@/lib/utils"

const footer7Defaults = {
  logo: {
    text: "Sitemap Co.",
    href: "#",
  },
  description: "Your comprehensive solution for all things digital.",
  columns: [
    {
      title: "Products",
      links: [
        { label: "Analytics", href: "#" },
        { label: "Automation", href: "#" },
        { label: "Commerce", href: "#" },
        { label: "Data", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "API", href: "#" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "Enterprise", href: "#" },
        { label: "Small Business", href: "#" },
        { label: "Startups", href: "#" },
        { label: "Agencies", href: "#" },
        { label: "E-commerce", href: "#" },
        { label: "SaaS", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "#" },
        { label: "Tutorials", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Case Studies", href: "#" },
        { label: "Webinars", href: "#" },
        { label: "Templates", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Press", href: "#" },
        { label: "Partners", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Investors", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Community", href: "#" },
        { label: "Status", href: "#" },
        { label: "Security", href: "#" },
        { label: "Feedback", href: "#" },
        { label: "Bug Reports", href: "#" },
      ],
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Cookie Policy", href: "#" },
        { label: "GDPR", href: "#" },
        { label: "Accessibility", href: "#" },
        { label: "Licenses", href: "#" },
      ],
    },
  ],
  copyright: "2024 Sitemap Co. All rights reserved.",
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
      <div className={cn("container px-6 py-16", classNames.container)}>
        {/* Logo & Description */}
        <div className="mb-12 max-w-sm">
          <Link
            href={logo?.href ?? "#"}
            className={cn("text-2xl font-bold", classNames.logo)}
          >
            {logo?.text}
          </Link>
          <p className="text-muted-foreground mt-4 text-sm">
            {footer7Defaults.description}
          </p>
        </div>

        {/* Comprehensive Link Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {columns.map((column, i) => (
            <div key={i}>
              <h4 className="text-foreground mb-4 text-sm font-semibold">
                {column.title}
              </h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
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
