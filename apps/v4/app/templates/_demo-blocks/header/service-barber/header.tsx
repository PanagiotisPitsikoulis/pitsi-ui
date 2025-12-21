"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderServiceBarber() {
  return (
    <header className="py-5 border-b-2 border-border bg-background">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-2xl font-serif font-bold text-foreground">
            The Parlor
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">Services</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">Barbers</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">Gallery</Link>
            <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wider">Contact</Link>
          </nav>
          <Button className="bg-foreground text-background hover:bg-foreground/90 font-bold">Book Appointment</Button>
        </div>
      </div>
    </header>
  )
}
