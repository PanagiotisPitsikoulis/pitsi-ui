"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderServicePsychologist() {
  return (
    <header className="py-6">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-xl font-light tracking-wide text-foreground">
            Mindful
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Approach</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Resources</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </nav>
          <Button variant="outline" className="rounded-full font-light">Book Session</Button>
        </div>
      </div>
    </header>
  )
}
