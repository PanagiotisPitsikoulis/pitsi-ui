"use client"

import Image from "next/image"
import { Heart, Share2 } from "lucide-react"

import { cn } from "@/lib/utils"

interface PreviewProps {
  shadowStyle: string
  className?: string
}

const artImages = [
  "/placeholders/art/1.webp",
  "/placeholders/art/2.webp",
  "/placeholders/art/3.webp",
  "/placeholders/art/4.webp",
  "/placeholders/art/5.webp",
  "/placeholders/art/6.webp",
  "/placeholders/art/7.webp",
  "/placeholders/art/8.webp",
  "/placeholders/art/9.webp",
  "/placeholders/art/10.webp",
  "/placeholders/art/11.webp",
  "/placeholders/art/1.webp",
]

// Image gallery preview (masonry grid with real images)
export function NavbarPreview({ shadowStyle, className }: PreviewProps) {
  // Split images into 4 columns for masonry layout
  const columns = [
    [artImages[0], artImages[4], artImages[8]],
    [artImages[1], artImages[5], artImages[9]],
    [artImages[2], artImages[6], artImages[10]],
    [artImages[3], artImages[7], artImages[11]],
  ]

  return (
    <div className={cn("flex h-full flex-col bg-background", className)}>
      <div
        className="relative z-10 bg-background px-5 py-4"
        style={{ boxShadow: shadowStyle }}
      >
        <span className="text-foreground text-base font-normal">Artistry — Gallery</span>
      </div>
      <div className="mt-[-20px] flex-1 overflow-hidden px-4 py-3">
        <div className="flex gap-3">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-1 flex-col gap-3">
              {column.map((src, rowIndex) => {
                // Varying heights for masonry effect
                const heightClass = [
                  ["h-44", "h-36", "h-28"],
                  ["h-32", "h-40", "h-48"],
                  ["h-52", "h-32", "h-36"],
                  ["h-36", "h-48", "h-32"],
                ][colIndex][rowIndex]
                return (
                  <div
                    key={rowIndex}
                    className={cn("relative shrink-0 overflow-hidden rounded-sm", heightClass)}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Split layout with sidebar over image
export function SideMenuPreview({ shadowStyle, className }: PreviewProps) {
  return (
    <div className={cn("relative h-full bg-background", className)}>
      {/* Background image */}
      <Image
        src="/placeholders/art/12.webp"
        alt=""
        fill
        className="object-cover"
        sizes="400px"
      />
      {/* Sidebar overlay */}
      <div
        className="absolute inset-y-0 left-0 flex w-44 flex-col justify-center gap-4 bg-background p-6"
        style={{ boxShadow: shadowStyle }}
      >
        {["Collection", "Artists", "Exhibits", "Visit"].map((item) => (
          <span key={item} className="text-foreground text-lg font-light">
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

// Gallery with bottom drawer overlay
export function BottomDrawerPreview({ shadowStyle, className }: PreviewProps) {
  const columns = [
    [artImages[0], artImages[4], artImages[8]],
    [artImages[1], artImages[5], artImages[9]],
    [artImages[2], artImages[6], artImages[10]],
    [artImages[3], artImages[7], artImages[11]],
  ]

  return (
    <div className={cn("relative flex h-full flex-col bg-background", className)}>
      {/* Masonry grid */}
      <div className="mb-[-20px] flex-1 overflow-hidden px-4 py-3">
        <div className="flex gap-3">
          {columns.map((column, colIndex) => (
            <div key={colIndex} className="flex flex-1 flex-col gap-3">
              {column.map((src, rowIndex) => {
                const heightClass = [
                  ["h-44", "h-36", "h-28"],
                  ["h-32", "h-40", "h-48"],
                  ["h-52", "h-32", "h-36"],
                  ["h-36", "h-48", "h-32"],
                ][colIndex][rowIndex]
                return (
                  <div
                    key={rowIndex}
                    className={cn("relative shrink-0 overflow-hidden rounded-sm", heightClass)}
                  >
                    <Image
                      src={src}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="120px"
                    />
                  </div>
                )
              })}
            </div>
          ))}
        </div>
      </div>
      {/* Bottom drawer overlay - Google Maps style */}
      <div
        className="relative z-10 bg-background px-5 pb-6 pt-3"
        style={{ boxShadow: shadowStyle }}
      >
        {/* Handle */}
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-muted-foreground/30" />

        {/* Title row */}
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-foreground text-lg font-semibold">Ethereal Dreams</h3>
            <p className="text-muted-foreground text-sm">Oil on canvas by Maria Chen</p>
          </div>
          <div className="flex gap-2">
            <div className="flex size-9 items-center justify-center rounded-full bg-muted">
              <Heart className="size-4 text-foreground" />
            </div>
            <div className="flex size-9 items-center justify-center rounded-full bg-muted">
              <Share2 className="size-4 text-foreground" />
            </div>
          </div>
        </div>

        {/* Info row */}
        <div className="mt-3 flex items-center gap-4 text-sm">
          <span className="text-foreground font-medium">$12,400</span>
          <span className="text-muted-foreground">2024</span>
          <span className="text-muted-foreground">·</span>
          <span className="text-muted-foreground">Abstract</span>
        </div>

      </div>
    </div>
  )
}

// Modal centered over split layout
export function ModalPreview({ shadowStyle, className }: PreviewProps) {
  return (
    <div className={cn("relative flex h-full bg-background", className)}>
      {/* Left side - light background */}
      <div className="flex w-1/2 flex-col p-6">
        <span className="text-foreground text-lg font-semibold tracking-tight">NOVA</span>
        <span className="text-muted-foreground mt-auto text-sm">Gallery</span>
      </div>
      {/* Right side - image with padding */}
      <div className="relative w-1/2 p-4">
        <div className="relative h-full w-full overflow-hidden">
          <Image
            src="/placeholders/art/5.webp"
            alt=""
            fill
            className="object-cover"
            sizes="200px"
          />
        </div>
      </div>
      {/* Modal overlapping both sides */}
      <div
        className="absolute left-1/2 top-1/2 z-10 w-64 -translate-x-1/2 -translate-y-1/2 bg-background p-6"
        style={{ boxShadow: shadowStyle }}
      >
        <svg className="text-foreground mb-4 size-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
          <path d="m15 5 4 4" />
        </svg>
        <h3 className="text-foreground text-base font-medium">Join our exclusive collector's preview.</h3>
        <p className="text-muted-foreground mt-2 text-sm">Be first to see new artworks</p>
      </div>
    </div>
  )
}

export type PreviewType = "navbar" | "sidemenu" | "drawer" | "modal"

export const previewComponents: Record<
  PreviewType,
  {
    label: string
    component: React.ComponentType<PreviewProps>
  }
> = {
  navbar: { label: "Navigation Bar", component: NavbarPreview },
  sidemenu: { label: "Side Menu", component: SideMenuPreview },
  drawer: { label: "Bottom Drawer", component: BottomDrawerPreview },
  modal: { label: "Modal", component: ModalPreview },
}
