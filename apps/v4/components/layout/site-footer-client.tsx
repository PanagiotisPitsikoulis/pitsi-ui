"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

interface SiteFooterClientProps {
  githubUrl: string
  twitterUrl: string
  siteName: string
}

export function SiteFooterClient({
  githubUrl,
  twitterUrl,
  siteName,
}: SiteFooterClientProps) {
  const pathname = usePathname()
  const isHomepage = pathname === "/"

  // Only show footer on homepage
  if (!isHomepage) {
    return null
  }

  const footerClassName = "bg-page py-16 md:py-32"

  const containerClassName =
    "max-w-5xl mx-auto relative grid grid-cols-1 gap-y-10 md:grid-cols-[repeat(6,1fr)_16px] px-6 lg:px-3"

  return (
    <footer className={footerClassName}>
      <div className={cn("container", containerClassName)}>
        {/* Resources */}
        <div className="text-foreground flex flex-col items-start text-[13px] leading-none tracking-[-0.15px]">
          <div className="flex h-[22px] items-center">
            <h6 className="font-medium">Resources</h6>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/docs"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Documentation
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/docs/components"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Components
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/blocks"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Blocks
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/docs/animations"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Animations
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/themes"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Themes
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/docs/changelog"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Changelog
            </Link>
          </div>
        </div>

        {/* Company */}
        <div className="text-foreground flex flex-col items-start text-[13px] leading-none tracking-[-0.15px]">
          <div className="flex h-[22px] items-center">
            <h6 className="font-medium">Company</h6>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Home
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              GitHub
            </a>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/pricing"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Pricing
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <a
              href={twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Twitter
            </a>
          </div>
        </div>

        {/* Developers */}
        <div className="text-foreground flex flex-col items-start text-[13px] leading-none tracking-[-0.15px]">
          <div className="flex h-[22px] items-center">
            <h6 className="font-medium">Developers</h6>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/docs"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Get Started
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/docs/cli"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              CLI
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/docs/mcp"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              MCP Server
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <a
              href={`${githubUrl}/issues`}
              target="_blank"
              rel="noreferrer"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Issues
            </a>
          </div>
          <div className="flex h-[24px] items-center">
            <a
              href={`${githubUrl}/discussions`}
              target="_blank"
              rel="noreferrer"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Discussions
            </a>
          </div>
        </div>

        {/* UI Library */}
        <div className="text-foreground flex flex-col items-start text-[13px] leading-none tracking-[-0.15px]">
          <div className="flex h-[22px] items-center">
            <h6 className="font-medium">UI Library</h6>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/docs/components/accordion"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Accordion
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/docs/components/button"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Button
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/docs/components/dialog"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Dialog
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/docs/components/input"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Input
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/docs/components/select"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Select
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/docs/components"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              View All
            </Link>
          </div>
        </div>

        {/* Templates */}
        <div className="text-foreground flex flex-col items-start text-[13px] leading-none tracking-[-0.15px]">
          <div className="flex h-[22px] items-center">
            <h6 className="font-medium">Templates</h6>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/blocks/application"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Application
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/blocks/marketing"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Marketing
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/blocks/e-commerce"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              E-commerce
            </Link>
          </div>
          <div className="flex h-[24px] items-center">
            <Link
              href="/blocks/full-pages"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Full Pages
            </Link>
          </div>
        </div>

        {/* Community */}
        <div className="text-foreground flex flex-col items-start text-[13px] leading-none tracking-[-0.15px]">
          <div className="flex h-[22px] items-center">
            <h6 className="font-medium">Community</h6>
          </div>
          <div className="flex h-[24px] items-center">
            <a
              href={twitterUrl}
              target="_blank"
              rel="noreferrer"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Twitter
            </a>
          </div>
          <div className="flex h-[24px] items-center">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              GitHub
            </a>
          </div>
          <div className="flex h-[24px] items-center">
            <a
              href={`${githubUrl}/discussions`}
              target="_blank"
              rel="noreferrer"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Discussions
            </a>
          </div>
          <div className="flex h-[24px] items-center">
            <a
              href="https://discord.gg/pitsi"
              target="_blank"
              rel="noreferrer"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              Discord
            </a>
          </div>
        </div>

        {/* Logo in top right */}
        <div className="absolute right-0 top-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-foreground"
          >
            <path d="M12 1 21.5 6.5V17.5L13 22.4211V11.4234L3.49793 5.92225 12 1ZM2.5 7.6555V17.5L11 22.4211V12.5765L2.5 7.6555Z" />
          </svg>
        </div>
      </div>
    </footer>
  )
}
