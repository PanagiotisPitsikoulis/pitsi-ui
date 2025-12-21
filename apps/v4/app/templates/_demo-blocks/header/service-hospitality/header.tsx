"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderServiceHospitality() {
  return (
    <header className="py-6 border-b border-border/50">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-2xl font-serif font-semibold text-foreground tracking-wide">
            Haven
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link href="#" className="text-sm font-serif text-muted-foreground hover:text-foreground transition-colors">Rooms & Suites</Link>
            <Link href="#" className="text-sm font-serif text-muted-foreground hover:text-foreground transition-colors">Dining</Link>
            <Link href="#" className="text-sm font-serif text-muted-foreground hover:text-foreground transition-colors">Experiences</Link>
            <Link href="#" className="text-sm font-serif text-muted-foreground hover:text-foreground transition-colors">Events</Link>
          </nav>
          <Button variant="default" className="font-serif">Reserve Now</Button>
        </div>
      </div>
    </header>
  )
}
