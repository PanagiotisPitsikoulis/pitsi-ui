"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderServiceMakeup() {
  return (
    <header className="py-5 bg-gradient-to-b from-primary/5 to-transparent">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-2xl font-light tracking-wide text-foreground italic">
            Luxe
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Portfolio</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Artists</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Academy</Link>
          </nav>
          <Button className="rounded-full bg-gradient-to-r from-primary to-primary/70">Book Session</Button>
        </div>
      </div>
    </header>
  )
}
