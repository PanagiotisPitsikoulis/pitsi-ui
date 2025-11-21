"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"
import { Button } from "@/registry/new-york-v4/ui/button"

export function MainNav({
  items,
  className,
  ...props
}: React.ComponentProps<"nav"> & {
  items: { href: string; label: string }[]
}) {
  const pathname = usePathname()

  const isActive = (href: string) => {
    // For home page, use exact match only
    if (href === "/") {
      return pathname === "/"
    }
    // For other paths, use startsWith to match nested routes
    return pathname.startsWith(href)
  }

  return (
    <nav className={cn("items-center", className)} {...props}>
      {items.map((item) => (
        <Button key={item.href} variant="ghost" asChild size="sm">
          <Link
            href={item.href}
            className={cn(
              "text-muted-foreground hover:text-foreground",
              isActive(item.href) && "text-foreground"
            )}
          >
            {item.label}
          </Link>
        </Button>
      ))}
    </nav>
  )
}
