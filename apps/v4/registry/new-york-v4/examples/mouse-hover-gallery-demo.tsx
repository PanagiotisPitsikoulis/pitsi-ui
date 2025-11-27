"use client"

import { MouseHoverGallery } from "@/registry/new-york-v4/animations/mouse-hover-gallery/mouse-hover-gallery"

const projects = [
  {
    title: "C2 Montreal",
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=200&fit=crop",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=300&h=200&fit=crop",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=300&h=200&fit=crop",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=300&h=200&fit=crop",
    color: "#706D63",
  },
]

export default function MouseHoverGalleryDemo() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <MouseHoverGallery projects={projects} className="w-full" />
    </main>
  )
}
