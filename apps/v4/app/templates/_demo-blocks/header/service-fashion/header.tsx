"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderServiceFashion() {
  return (
    <header className="py-6 bg-foreground text-background">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-2xl font-light tracking-[0.3em] text-background">
            ATELIER
          </Link>
          <nav className="hidden md:flex items-center gap-12">
            <Link href="#" className="text-xs uppercase tracking-widest text-background/70 hover:text-background transition-colors">Collections</Link>
            <Link href="#" className="text-xs uppercase tracking-widest text-background/70 hover:text-background transition-colors">Lookbook</Link>
            <Link href="#" className="text-xs uppercase tracking-widest text-background/70 hover:text-background transition-colors">Atelier</Link>
            <Link href="#" className="text-xs uppercase tracking-widest text-background/70 hover:text-background transition-colors">Contact</Link>
          </nav>
          <Button variant="outline" className="bg-transparent text-background border-background hover:bg-background hover:text-foreground rounded-none">Shop Now</Button>
        </div>
      </div>
    </header>
  )
}
