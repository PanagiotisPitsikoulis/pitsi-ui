"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderArt() {
  return (
    <header className="py-8">
      <div className="container px-6">
        <div className="flex flex-col items-center gap-8">
          <Link href="#" className="text-3xl font-light tracking-[0.2em] text-foreground">
            ARTHAUS
          </Link>
          <nav className="flex items-center gap-12">
            <Link href="#" className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-1">Collections</Link>
            <Link href="#" className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-1">Artists</Link>
            <Link href="#" className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-1">Exhibitions</Link>
            <Link href="#" className="text-sm uppercase tracking-wide text-muted-foreground hover:text-foreground transition-colors border-b border-transparent hover:border-foreground pb-1">Visit</Link>
          </nav>
          <Button variant="outline" className="rounded-none border-2">Inquire</Button>
        </div>
      </div>
    </header>
  )
}
