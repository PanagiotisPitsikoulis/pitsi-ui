"use client"

import Image from "next/image"
import Link from "next/link"

import {
  footerDefaults,
  type FooterBlockProps,
} from "@/lib/blocks/footer.types"
import { Leaf } from "@/lib/icons"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import { Input } from "@/registry/new-york-v4/ui/input"

// Block-specific defaults that extend the shared defaults
const footer1Defaults = {
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
  brandDescription:
    "Bringing nature indoors since 2018. We source the healthiest, most beautiful plants from sustainable growers worldwide.",
  contactInfo: {
    address: "123 Garden Street, Portland, OR 97201",
    phone: "(555) 123-4567",
    email: "hello@wildplants.com",
  },
  newsletter: {
    icon: "Leaf",
    title: "Join Our Plant Community",
    description:
      "Get care tips, exclusive discounts, and first access to new plant arrivals.",
    placeholder: "Enter your email",
    buttonLabel: "Subscribe",
    note: "Join 50,000+ plant lovers. Unsubscribe anytime.",
  },
  columns: [
    {
      title: "Shop",
      links: [
        { label: "All Plants", href: "#" },
        { label: "Indoor Plants", href: "#" },
        { label: "Outdoor Plants", href: "#" },
        { label: "Rare & Exotic", href: "#" },
        { label: "Planters & Pots", href: "#" },
      ],
    },
    {
      title: "Collections",
      links: [
        { label: "Low Light", href: "#" },
        { label: "Pet Friendly", href: "#" },
        { label: "Air Purifying", href: "#" },
        { label: "Succulents", href: "#" },
        { label: "Tropical", href: "#" },
      ],
    },
    {
      title: "Learn",
      links: [
        { label: "Care Guides", href: "#" },
        { label: "Plant Blog", href: "#" },
        { label: "Video Tutorials", href: "#" },
        { label: "Plant Finder Quiz", href: "#" },
        { label: "Workshops", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Shipping Info", href: "#" },
        { label: "Returns & Refunds", href: "#" },
        { label: "Plant Guarantee", href: "#" },
        { label: "FAQs", href: "#" },
        { label: "Contact Us", href: "#" },
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
      ],
    },
  ],
  copyright: "2024 Green Therapy. All rights reserved.",
  bottomLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
  social: [
    { platform: "twitter" as const, href: "#" },
    { platform: "instagram" as const, href: "#" },
    { platform: "facebook" as const, href: "#" },
    { platform: "youtube" as const, href: "#" },
  ],
}

// Social icon components
const SocialIcons = {
  twitter: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    </svg>
  ),
  instagram: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  facebook: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  ),
  youtube: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  ),
  linkedin: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
    </svg>
  ),
  github: (
    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  ),
}

export function Footer1({ content = {}, classNames = {} }: FooterBlockProps) {
  // Merge content with defaults
  const {
    logo = footer1Defaults.logo,
    columns = footer1Defaults.columns,
    social = footer1Defaults.social,
    copyright = footer1Defaults.copyright,
    bottomLinks = footer1Defaults.bottomLinks,
  } = content

  return (
    <footer
      className={cn("border-border bg-background border-t", classNames.root)}
    >
      {/* Newsletter Section */}
      <div className="border-border border-b py-16">
        <div className={cn("container px-6", classNames.container)}>
          <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
            <div className="bg-muted mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full">
              <Leaf className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-foreground mb-2 text-2xl font-bold md:text-3xl">
              {footer1Defaults.newsletter.title}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              {footer1Defaults.newsletter.description}
            </p>
            <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row">
              <Input
                type="email"
                placeholder={footer1Defaults.newsletter.placeholder}
                className="h-12 flex-1 rounded-full !bg-transparent pl-6"
              />
              <Button className="h-12 rounded-full px-8">
                {footer1Defaults.newsletter.buttonLabel}
              </Button>
            </div>
            <p className="text-muted-foreground mt-4 text-xs">
              {footer1Defaults.newsletter.note}
            </p>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className={cn("container px-6", classNames.container)}>
          <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-7">
            {/* Brand Column */}
            <div className="md:col-span-3 lg:col-span-2">
              <div
                className={cn("mb-4 flex items-center gap-2", classNames.logo)}
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
                  <h3 className="text-foreground text-xl font-bold">
                    {logo.text}
                  </h3>
                )}
              </div>
              <p className="text-muted-foreground mb-6 max-w-xs text-sm">
                {footer1Defaults.brandDescription}
              </p>
              <div className="text-muted-foreground space-y-2 text-sm">
                <p>{footer1Defaults.contactInfo.address}</p>
                <p>{footer1Defaults.contactInfo.phone}</p>
                <p>{footer1Defaults.contactInfo.email}</p>
              </div>
            </div>

            {/* Link Columns */}
            {columns.map((column, i) => (
              <div key={i} className={classNames.column?.root}>
                <h4
                  className={cn(
                    "text-foreground mb-4 font-semibold",
                    classNames.column?.title
                  )}
                >
                  {column.title}
                </h4>
                <ul
                  className={cn(
                    "text-muted-foreground space-y-3 text-sm",
                    classNames.column?.links
                  )}
                >
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className={cn(
                          "hover:text-primary transition-colors",
                          classNames.column?.link
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
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-border border-t py-8">
        <div className={cn("container px-6", classNames.container)}>
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div
              className={cn(
                "text-muted-foreground flex flex-wrap items-center justify-center gap-6 text-sm md:justify-start",
                classNames.bottomLinks
              )}
            >
              {copyright && <p>&copy; {copyright}</p>}
              {bottomLinks?.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className={cn("flex items-center gap-4", classNames.social)}>
              {social?.map((item, i) => (
                <Link
                  key={i}
                  href={item.href}
                  className={cn(
                    "text-muted-foreground hover:text-primary transition-colors",
                    classNames.socialLink
                  )}
                  aria-label={item.platform}
                >
                  {SocialIcons[item.platform]}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Re-export for backwards compatibility
export { Footer1 as FooterServicePlants }
