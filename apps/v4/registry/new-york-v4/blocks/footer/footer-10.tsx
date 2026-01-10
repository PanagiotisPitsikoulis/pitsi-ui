"use client"

import Link from "next/link"
import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { type FooterBlockProps } from "@/lib/blocks/footer.types"
import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/registry/new-york-v4/ui/dropdown-menu"

// Block-specific defaults matching the actual site footer
const footer10Defaults = {
  logo: {
    text: "Acme",
    href: "/",
  },
  sections: {
    documentation: {
      title: "Documentation",
      links: [
        { label: "Introduction", href: "/docs" },
        { label: "Installation", href: "/docs/installation" },
        { label: "Configuration", href: "/docs/configuration" },
        { label: "Theming", href: "/docs/theming" },
        { label: "CLI", href: "/docs/cli" },
      ],
    },
    pages: {
      title: "Pages",
      links: [
        { label: "Home", href: "/" },
        { label: "Components", href: "/docs/components" },
        { label: "Blocks", href: "/blocks" },
        { label: "Tools", href: "/tools" },
        { label: "Changelog", href: "/changelog" },
        { label: "Blog", href: "/blog" },
        { label: "Roadmap", href: "/roadmap" },
      ],
    },
    changelog: {
      title: "Changelog",
      links: [
        { label: "Latest Updates", href: "/changelog" },
        { label: "v0.2.0", href: "/changelog#v0.2.0" },
        { label: "v0.1.5", href: "/changelog#v0.1.5" },
        { label: "v0.1.4", href: "/changelog#v0.1.4" },
        { label: "v0.1.3", href: "/changelog#v0.1.3" },
      ],
    },
    connect: {
      title: "Connect",
      links: [
        { label: "GitHub", href: "https://github.com", external: true },
        { label: "Twitter", href: "https://twitter.com", external: true },
        { label: "Get Started", href: "/docs" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    legal: {
      title: "Legal",
      links: [
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
    account: {
      title: "Account",
      links: [
        { label: "Sign In", href: "/login" },
        { label: "Sign Up", href: "/signup" },
        { label: "Dashboard", href: "/dashboard" },
        { label: "Pricing", href: "/pricing" },
      ],
    },
  },
  blocks: [
    { name: "hero", label: "Hero" },
    { name: "features", label: "Features" },
    { name: "pricing", label: "Pricing" },
    { name: "testimonials", label: "Testimonials" },
    { name: "faq", label: "FAQ" },
    { name: "contact", label: "Contact" },
    { name: "footer", label: "Footer" },
    { name: "header", label: "Header" },
  ],
  components: [
    { name: "button", label: "Button", url: "/docs/components/button" },
    { name: "card", label: "Card", url: "/docs/components/card" },
    { name: "dialog", label: "Dialog", url: "/docs/components/dialog" },
    { name: "input", label: "Input", url: "/docs/components/input" },
    { name: "select", label: "Select", url: "/docs/components/select" },
    { name: "tabs", label: "Tabs", url: "/docs/components/tabs" },
  ],
  animations: [
    { name: "aurora", label: "Aurora", url: "/docs/animations/aurora" },
    { name: "noise", label: "Noise", url: "/docs/animations/noise" },
    { name: "ballpit", label: "Ballpit", url: "/docs/animations/ballpit" },
  ],
  copyright: "© 2025 Acme. All rights reserved.",
}

// Logo Icon Component
function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M12 1 21.5 6.5V17.5L13 22.4211V11.4234L3.49793 5.92225 12 1ZM2.5 7.6555V17.5L11 22.4211V12.5765L2.5 7.6555Z" />
    </svg>
  )
}

// Theme Toggle Component
function ThemeToggle({ className }: { className?: string }) {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={cn("h-8 gap-2 px-2", className)}
        >
          {theme === "light" && <Sun className="size-4" />}
          {theme === "dark" && <Moon className="size-4" />}
          {theme === "system" && <Monitor className="size-4" />}
          <span className="text-xs capitalize">{theme}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          <Sun className="mr-2 size-4" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          <Moon className="mr-2 size-4" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          <Monitor className="mr-2 size-4" />
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Footer10({ content = {}, classNames = {} }: FooterBlockProps) {
  const {
    logo = footer10Defaults.logo,
    copyright = footer10Defaults.copyright,
  } = content as typeof footer10Defaults

  const sections = footer10Defaults.sections
  const blocks = footer10Defaults.blocks
  const components = footer10Defaults.components
  const animations = footer10Defaults.animations

  return (
    <footer
      className={cn("relative bg-transparent pt-12 pb-6", classNames.root)}
    >
      <div className={cn("container px-6", classNames.container)}>
        {/* General Section */}
        <div className="mb-12">
          <h5 className="border-border mb-6 border-b text-sm font-semibold">
            General
          </h5>
          <div className="grid grid-cols-2 gap-6 text-[13px] leading-relaxed tracking-[-0.15px] md:grid-cols-6">
            {/* Documentation */}
            <div className="flex flex-col items-start">
              <h6 className="mb-2 font-medium">
                {sections.documentation.title}
              </h6>
              {sections.documentation.links.map((link) => (
                <div key={link.href} className="py-px">
                  <Link
                    href={link.href}
                    className="opacity-60 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Pages */}
            <div className="flex flex-col items-start">
              <h6 className="mb-2 font-medium">{sections.pages.title}</h6>
              {sections.pages.links.map((link) => (
                <div key={link.href} className="py-px">
                  <Link
                    href={link.href}
                    className="opacity-60 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Changelog */}
            <div className="flex flex-col items-start">
              <h6 className="mb-2 font-medium">{sections.changelog.title}</h6>
              {sections.changelog.links.map((link) => (
                <div key={link.href} className="py-px">
                  <Link
                    href={link.href}
                    className="opacity-60 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Connect */}
            <div className="flex flex-col items-start">
              <h6 className="mb-2 font-medium">{sections.connect.title}</h6>
              {sections.connect.links.map((link) =>
                link.external ? (
                  <div key={link.href} className="py-px">
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      {link.label}
                    </a>
                  </div>
                ) : (
                  <div key={link.href} className="py-px">
                    <Link
                      href={link.href}
                      className="opacity-60 transition-opacity hover:opacity-100"
                    >
                      {link.label}
                    </Link>
                  </div>
                )
              )}
            </div>

            {/* Legal */}
            <div className="flex flex-col items-start">
              <h6 className="mb-2 font-medium">{sections.legal.title}</h6>
              {sections.legal.links.map((link) => (
                <div key={link.href} className="py-px">
                  <Link
                    href={link.href}
                    className="opacity-60 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Account */}
            <div className="flex flex-col items-start">
              <h6 className="mb-2 font-medium">{sections.account.title}</h6>
              {sections.account.links.map((link) => (
                <div key={link.href} className="py-px">
                  <Link
                    href={link.href}
                    className="opacity-60 transition-opacity hover:opacity-100"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Blocks Section */}
        <div className="mb-12 hidden md:block">
          <h5 className="border-border mb-6 border-b text-sm font-semibold">
            Blocks
          </h5>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[13px] leading-relaxed tracking-[-0.15px] md:grid-cols-6">
            {blocks.map((block) => (
              <div key={block.name} className="py-px">
                <Link
                  href={`/blocks/${block.name}`}
                  className="opacity-60 transition-opacity hover:opacity-100"
                >
                  {block.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Components Section */}
        <div className="mb-12 hidden md:block">
          <h5 className="border-border mb-6 border-b text-sm font-semibold">
            Components
          </h5>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[13px] leading-relaxed tracking-[-0.15px] md:grid-cols-6">
            {components.map((component) => (
              <div key={component.name} className="py-px">
                <Link
                  href={component.url}
                  className="opacity-60 transition-opacity hover:opacity-100"
                >
                  {component.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Animations Section */}
        <div className="mb-12 hidden md:block">
          <h5 className="border-border mb-6 border-b text-sm font-semibold">
            Animations
          </h5>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1 text-[13px] leading-relaxed tracking-[-0.15px] md:grid-cols-6">
            {animations.map((animation) => (
              <div key={animation.name} className="py-px">
                <Link
                  href={animation.url}
                  className="opacity-60 transition-opacity hover:opacity-100"
                >
                  {animation.label}
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom section with logo and copyright */}
        <div className="border-border flex items-center justify-between border-t pt-6">
          <p className="text-muted-foreground text-xs">{copyright}</p>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <LogoIcon className="text-foreground" />
          </div>
        </div>
      </div>
    </footer>
  )
}
