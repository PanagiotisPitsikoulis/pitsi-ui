"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderProductSkincare() {
  return (
    <header className="py-6">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-2xl font-light tracking-widest text-foreground">
            GLOW
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link href="#" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">Shop</Link>
            <Link href="#" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">Ingredients</Link>
            <Link href="#" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">Routine</Link>
            <Link href="#" className="text-sm tracking-wide text-muted-foreground hover:text-foreground transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex font-light">Login</Button>
            <Button variant="outline" className="font-light">Discover</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
