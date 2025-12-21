"use client"

import Link from "next/link"
import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderServiceGym() {
  return (
    <header className="py-4 border-b-4 border-primary">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="text-3xl font-black tracking-tight text-foreground uppercase">
            FORGE
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="text-sm font-bold uppercase text-muted-foreground hover:text-primary transition-colors">Classes</Link>
            <Link href="#" className="text-sm font-bold uppercase text-muted-foreground hover:text-primary transition-colors">Trainers</Link>
            <Link href="#" className="text-sm font-bold uppercase text-muted-foreground hover:text-primary transition-colors">Memberships</Link>
            <Link href="#" className="text-sm font-bold uppercase text-muted-foreground hover:text-primary transition-colors">Schedule</Link>
          </nav>
          <Button size="lg" className="bg-primary text-primary-foreground font-black uppercase">Join Now</Button>
        </div>
      </div>
    </header>
  )
}
