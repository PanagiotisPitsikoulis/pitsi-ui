"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderServiceTattoo() {
  return (
    <header className="py-5 border-b-2 border-foreground bg-background">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-3xl font-black text-foreground uppercase tracking-tight">
            Inkwell
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">Portfolio</Link>
            <Link href="#" className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">Artists</Link>
            <Link href="#" className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">Shop</Link>
            <Link href="#" className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </nav>
          <Button className="bg-foreground text-background hover:bg-foreground/90 font-black uppercase rounded-none">Book Ink</Button>
        </div>
      </div>
    </header>
  )
}
