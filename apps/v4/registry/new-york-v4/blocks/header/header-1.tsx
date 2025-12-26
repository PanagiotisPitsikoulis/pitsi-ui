"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { Button } from "@/registry/new-york-v4/ui/button"

export function HeaderServicePlants() {
  return (
    <header className="sticky top-0 z-50 h-20 bg-transparent">
      <div className="container flex h-full items-center px-6">
        <div className="flex w-full items-center justify-between">
          <Link href="#" className="flex items-center gap-2">
            <Image
              draggable={false}
              src="/placeholders/blocks/service-plants/assets/logo.svg"
              alt="Green Therapy"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="text-foreground text-xl font-semibold">
              Green Therapy
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground text-base transition-colors"
            >
              Shop
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground text-base transition-colors"
            >
              Plant Care
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground text-base transition-colors"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground text-base transition-colors"
            >
              Blog
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground text-base transition-colors"
            >
              Gallery
            </Link>
            <Link
              href="#"
              className="text-muted-foreground hover:text-foreground text-base transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              size="lg"
              className="group bg-brand-complementary hover:bg-brand-complementary/90 relative overflow-hidden rounded-full pr-12"
            >
              Schedule Visit
              <div className="bg-background text-brand-complementary absolute inset-y-0 right-1 my-auto flex aspect-square size-8 items-center justify-center overflow-hidden rounded-full">
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
