"use client"

import Link from "next/link"

import { type FooterBlockProps } from "@/lib/blocks/footer.types"
import { cn } from "@/lib/utils"
import { Marquee } from "@/registry/new-york-v4/ui/marquee"

const footer8Defaults = {
  logo: {
    text: "Green Therapy",
    href: "#",
  },
  tagline: "Growing happiness together",
  stats: [
    { label: "Plants Delivered", value: "50K+" },
    { label: "Happy Customers", value: "25K+" },
    { label: "Care Guides", value: "500+" },
    { label: "Plant Species", value: "1,200+" },
    { label: "Countries Shipped", value: "45+" },
    { label: "5-Star Reviews", value: "10K+" },
  ],
  social: [
    {
      platform: "twitter" as const,
      href: "#",
      label: "Twitter",
      followers: "45.2K",
    },
    {
      platform: "instagram" as const,
      href: "#",
      label: "Instagram",
      followers: "128K",
    },
    {
      platform: "facebook" as const,
      href: "#",
      label: "Facebook",
      followers: "89.5K",
    },
    {
      platform: "youtube" as const,
      href: "#",
      label: "YouTube",
      followers: "67K",
    },
  ],
  bottomLinks: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Contact", href: "#" },
  ],
  copyright: "2024 Green Therapy. All rights reserved.",
}

const SocialIcons = {
  twitter: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
    </svg>
  ),
  instagram: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  ),
  facebook: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
    </svg>
  ),
  youtube: (
    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
    </svg>
  ),
}

// Stat card component for the marquee
function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-primary/10 border-primary/20 flex flex-col items-center justify-center rounded-xl border px-8 py-6">
      <span className="text-primary text-3xl font-bold">{value}</span>
      <span className="text-muted-foreground mt-1 text-sm">{label}</span>
    </div>
  )
}

export function Footer8({ content = {}, classNames = {} }: FooterBlockProps) {
  const {
    logo = footer8Defaults.logo,
    bottomLinks = footer8Defaults.bottomLinks,
    copyright = footer8Defaults.copyright,
  } = content

  // Social uses block-specific defaults with followers data
  const social = footer8Defaults.social

  return (
    <footer
      className={cn("bg-background border-border border-t", classNames.root)}
    >
      <div className={cn("container px-6 py-16", classNames.container)}>
        {/* Header */}
        <div className="mb-12 text-center">
          <Link
            href={logo?.href ?? "#"}
            className={cn("text-primary text-3xl font-bold", classNames.logo)}
          >
            {logo?.text}
          </Link>
          <p className="text-muted-foreground mt-2 text-lg">
            {footer8Defaults.tagline}
          </p>
        </div>

        {/* Stats Marquee */}
        <div className="mb-12">
          <Marquee pauseOnHover className="[--duration:30s]">
            {footer8Defaults.stats.map((stat, i) => (
              <StatCard key={i} label={stat.label} value={stat.value} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="mt-4 [--duration:35s]">
            {footer8Defaults.stats.map((stat, i) => (
              <StatCard key={i} label={stat.label} value={stat.value} />
            ))}
          </Marquee>
        </div>

        {/* Social Icons */}
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-4 md:grid-cols-4">
          {social?.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className="group bg-muted hover:bg-primary flex flex-col items-center gap-2 rounded-xl p-6 transition-all hover:scale-105"
            >
              <div className="text-foreground group-hover:text-primary-foreground transition-colors">
                {SocialIcons[item.platform as keyof typeof SocialIcons]}
              </div>
              <div className="text-foreground group-hover:text-primary-foreground text-sm font-medium transition-colors">
                {item.label}
              </div>
              <div className="text-muted-foreground group-hover:text-primary-foreground/70 text-xs transition-colors">
                {item.followers} followers
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-border border-t py-6">
        <div className={cn("container px-6", classNames.container)}>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-muted-foreground text-sm">&copy; {copyright}</p>
            <div className="flex items-center gap-6">
              {bottomLinks?.map((link, i) => (
                <Link
                  key={i}
                  href={link.href}
                  className="text-muted-foreground hover:text-primary text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Backward compatibility export
export { Footer8 as FooterMarqueePlants }
