"use client"

import Link from "next/link"

import { type FooterBlockProps } from "@/lib/blocks/footer.types"
import { cn } from "@/lib/utils"

const footer6Defaults = {
  logo: {
    text: "AppName",
    href: "#",
  },
  tagline: "Download our app and start your journey today.",
  appStores: {
    ios: { href: "#", label: "Download on the App Store" },
    android: { href: "#", label: "Get it on Google Play" },
  },
  qrCode: {
    label: "Scan to download",
    description: "Point your camera at the code",
  },
  columns: [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#" },
        { label: "Pricing", href: "#" },
        { label: "Download", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Blog", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", href: "#" },
        { label: "Contact", href: "#" },
        { label: "Status", href: "#" },
      ],
    },
  ],
  copyright: "2024 AppName. All rights reserved.",
}

export function Footer6({ content = {}, classNames = {} }: FooterBlockProps) {
  const {
    logo = footer6Defaults.logo,
    columns = footer6Defaults.columns,
    copyright = footer6Defaults.copyright,
  } = content

  return (
    <footer className={cn("bg-muted", classNames.root)}>
      <div className={cn("container px-6 py-16", classNames.container)}>
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left: App Download */}
          <div>
            <Link
              href={logo?.href ?? "#"}
              className={cn("text-2xl font-bold", classNames.logo)}
            >
              {logo?.text}
            </Link>
            <p className="text-muted-foreground mt-4 max-w-md">
              {footer6Defaults.tagline}
            </p>

            <div className="mt-8 flex flex-wrap items-start gap-6">
              {/* App Store Badges */}
              <div className="flex flex-col gap-3">
                <Link
                  href={footer6Defaults.appStores.ios.href}
                  className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-3 rounded-lg px-4 py-2 transition-colors"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">Download on the</div>
                    <div className="text-sm font-semibold">App Store</div>
                  </div>
                </Link>
                <Link
                  href={footer6Defaults.appStores.android.href}
                  className="bg-foreground text-background hover:bg-foreground/90 inline-flex items-center gap-3 rounded-lg px-4 py-2 transition-colors"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181-.181-.292-.431-.292-.71V2.524c0-.279.111-.529.292-.71zm10.831 10.832l2.556-2.556 4.97 2.864c.601.346.601.91 0 1.256l-4.97 2.864-2.556-2.556L12 14.186l2.44-1.54zM5.215 0l9.469 5.463-2.556 2.556L5.215 0zm0 24l6.913-8.019 2.556 2.556L5.215 24z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs opacity-80">GET IT ON</div>
                    <div className="text-sm font-semibold">Google Play</div>
                  </div>
                </Link>
              </div>

              {/* QR Code */}
              <div className="bg-background flex flex-col items-center rounded-lg p-4">
                <div className="bg-foreground mb-2 h-24 w-24 rounded">
                  {/* QR Code placeholder */}
                  <svg
                    className="text-background h-full w-full p-2"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                  >
                    <rect x="10" y="10" width="30" height="30" />
                    <rect x="60" y="10" width="30" height="30" />
                    <rect x="10" y="60" width="30" height="30" />
                    <rect x="45" y="45" width="10" height="10" />
                    <rect x="60" y="60" width="10" height="10" />
                    <rect x="80" y="60" width="10" height="10" />
                    <rect x="60" y="80" width="10" height="10" />
                    <rect x="80" y="80" width="10" height="10" />
                  </svg>
                </div>
                <div className="text-foreground text-xs font-medium">
                  {footer6Defaults.qrCode.label}
                </div>
                <div className="text-muted-foreground text-xs">
                  {footer6Defaults.qrCode.description}
                </div>
              </div>
            </div>
          </div>

          {/* Right: Link Columns */}
          <div className="grid gap-8 sm:grid-cols-3">
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
