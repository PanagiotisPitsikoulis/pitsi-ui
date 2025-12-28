"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

export function MainNav({
  items,
  className,
}: {
  items: { href: string; label: string }[]
  componentPages?: Array<{ name: string; url: string }>
  animationPages?: Array<{ name: string; url: string }>
  toolPages?: Array<{ name: string; url: string }>
  blockCategories?: Array<{ name: string; count: number }>
  className?: string
}) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  return (
    <nav className={cn("flex items-center gap-1", className)}>
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-muted-foreground hover:text-foreground inline-flex h-9 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
            isActive(item.href) && "text-foreground"
          )}
        >
          {item.label}
        </Link>
      ))}
    </nav>
  )
}
