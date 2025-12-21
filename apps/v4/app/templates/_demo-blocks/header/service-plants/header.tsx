"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderServicePlants() {
  return (
    <header className="py-5">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-xl font-semibold text-foreground">
            Green Therapy
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Services</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Plant Care</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Consultation</Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline">Schedule Visit</Button>
          </div>
        </div>
      </div>
    </header>
  )
}
