"use client"

import Image from "next/image"
import Link from "next/link"

import { ArrowRight } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderServicePlants() {
  return (
    <header className="sticky top-0 z-50 bg-background/95 py-5 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container px-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <Image
              src="/placeholders/blocks/service-plants/assets/logo.svg"
              alt="Green Therapy"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-xl font-semibold text-foreground">
              Green Therapy
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#"
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              Plant Care
            </Link>
            <Link
              href="#"
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              Gallery
            </Link>
            <Link
              href="#"
              className="text-base text-muted-foreground transition-colors hover:text-foreground"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              size="lg"
              className="group relative overflow-hidden rounded-full bg-brand-complementary pr-12 hover:bg-brand-complementary/90"
            >
              Schedule Visit
              <div className="absolute inset-y-0 right-1 my-auto flex aspect-square size-8 items-center justify-center overflow-hidden rounded-full bg-background text-brand-complementary">
                <ArrowRight className="size-4 transition-transform duration-300 ease-out group-hover:translate-x-6" />
                <ArrowRight className="absolute size-4 -translate-x-6 transition-transform duration-300 ease-out group-hover:translate-x-0" />
              </div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
