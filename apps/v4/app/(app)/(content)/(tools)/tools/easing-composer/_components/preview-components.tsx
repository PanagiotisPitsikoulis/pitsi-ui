"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Heart, X, ChevronRight, ChevronLeft, Bell } from "lucide-react"

import { cn } from "@/lib/utils"

interface PreviewProps {
  easingCSS: string
  duration: number
  className?: string
  isPlaying?: boolean
}

const artImages = [
  "/placeholders/art/1.webp",
  "/placeholders/art/2.webp",
  "/placeholders/art/3.webp",
  "/placeholders/art/4.webp",
  "/placeholders/art/5.webp",
  "/placeholders/art/6.webp",
]

// Animated carousel with sliding cards
export function CardSlidePreview({ easingCSS, duration, className, isPlaying = true }: PreviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [translateX, setTranslateX] = useState(0)

  const cards = [
    { image: artImages[0], title: "Featured Artwork", subtitle: "Abstract collection", likes: "2.4k" },
    { image: artImages[1], title: "New Release", subtitle: "Contemporary art", likes: "1.8k" },
    { image: artImages[2], title: "Trending Now", subtitle: "Modern masters", likes: "3.2k" },
    { image: artImages[3], title: "Editor's Pick", subtitle: "Curated selection", likes: "956" },
  ]

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cards.length)
    }, duration + 1500)

    return () => clearInterval(interval)
  }, [duration, cards.length, isPlaying])

  useEffect(() => {
    setTranslateX(-currentIndex * 100)
  }, [currentIndex])

  const goTo = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={cn("relative h-full overflow-hidden bg-background", className)}>
      {/* Background blur */}
      <div className="absolute inset-0">
        <Image
          src={cards[currentIndex].image}
          alt=""
          fill
          className="object-cover blur-2xl opacity-30 scale-110"
          sizes="400px"
          style={{
            transition: `opacity ${duration}ms ${easingCSS}`,
          }}
        />
      </div>

      {/* Carousel container */}
      <div className="absolute inset-0 flex items-center justify-center p-6 overflow-hidden">
        <div className="relative w-72 h-80 overflow-hidden">
          <div
            className="flex h-full"
            style={{
              width: `${cards.length * 100}%`,
              transform: `translateX(${translateX / cards.length}%)`,
              transition: `transform ${duration}ms ${easingCSS}`,
            }}
          >
            {cards.map((card, i) => (
              <div key={i} className="h-full shrink-0" style={{ width: `${100 / cards.length}%` }}>
                <div className="h-full w-full overflow-hidden rounded-2xl border bg-card shadow-2xl mx-auto" style={{ maxWidth: "288px" }}>
                  <div className="relative h-44">
                    <Image src={card.image} alt="" fill className="object-cover" sizes="288px" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-foreground">{card.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{card.subtitle}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="size-8 rounded-full bg-brand/10 flex items-center justify-center">
                        <Heart className="size-4 text-brand" />
                      </div>
                      <span className="text-xs text-muted-foreground">{card.likes} likes</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={cn(
              "size-2 rounded-full",
              i === currentIndex ? "bg-brand w-6" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            style={{
              transition: `all ${duration / 2}ms ${easingCSS}`,
            }}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={() => goTo((currentIndex - 1 + cards.length) % cards.length)}
        className="absolute left-3 top-1/2 -translate-y-1/2 size-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center border shadow-sm hover:bg-background"
      >
        <ChevronLeft className="size-4 text-foreground" />
      </button>
      <button
        onClick={() => goTo((currentIndex + 1) % cards.length)}
        className="absolute right-3 top-1/2 -translate-y-1/2 size-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center border shadow-sm hover:bg-background"
      >
        <ChevronRight className="size-4 text-foreground" />
      </button>
    </div>
  )
}

// Modal that fades and scales in
export function ModalFadePreview({ easingCSS, duration, className, isPlaying = true }: PreviewProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isPlaying) {
      setIsVisible(true)
      return
    }

    const showTimer = setTimeout(() => setIsVisible(true), 300)

    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => setIsVisible(true), duration + 500)
    }, (duration * 2) + 1500)

    return () => {
      clearTimeout(showTimer)
      clearInterval(interval)
    }
  }, [duration, isPlaying])

  return (
    <div className={cn("relative h-full overflow-hidden bg-background", className)}>
      {/* Background content */}
      <div className="absolute inset-0 p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-foreground">Gallery</span>
          <Bell className="size-5 text-muted-foreground" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {artImages.slice(0, 4).map((src, i) => (
            <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
              <Image src={src} alt="" fill className="object-cover" sizes="150px" />
            </div>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        style={{
          opacity: isVisible ? 1 : 0,
          transition: `opacity ${duration}ms ${easingCSS}`,
        }}
      />

      {/* Modal */}
      <div
        className="absolute inset-0 flex items-center justify-center p-8"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.9)",
          transition: `opacity ${duration}ms ${easingCSS}, transform ${duration}ms ${easingCSS}`,
        }}
      >
        <div className="w-full max-w-xs rounded-2xl bg-card p-6 shadow-2xl">
          <div className="flex items-start justify-between">
            <div className="size-10 rounded-full bg-brand/10 flex items-center justify-center">
              <Heart className="size-5 text-brand" />
            </div>
            <button className="rounded-full p-1 hover:bg-muted">
              <X className="size-4 text-muted-foreground" />
            </button>
          </div>
          <h3 className="mt-4 text-lg font-semibold text-foreground">Save to Collection</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Add this artwork to your favorites with smooth animation.
          </p>
          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-lg bg-muted px-4 py-2 text-sm font-medium text-foreground">
              Cancel
            </button>
            <button className="flex-1 rounded-lg bg-brand px-4 py-2 text-sm font-medium text-brand-foreground">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Bottom drawer that slides up
export function DrawerSlidePreview({ easingCSS, duration, className, isPlaying = true }: PreviewProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isPlaying) {
      setIsVisible(true)
      return
    }

    const showTimer = setTimeout(() => setIsVisible(true), 300)

    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => setIsVisible(true), duration + 500)
    }, (duration * 2) + 1500)

    return () => {
      clearTimeout(showTimer)
      clearInterval(interval)
    }
  }, [duration, isPlaying])

  return (
    <div className={cn("relative h-full overflow-hidden bg-background", className)}>
      {/* Background - full image */}
      <div className="absolute inset-0">
        <Image src={artImages[2]} alt="" fill className="object-cover" sizes="400px" />
      </div>

      {/* Bottom drawer */}
      <div
        className="absolute inset-x-0 bottom-0 rounded-t-3xl bg-card shadow-2xl"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(100%)",
          transition: `transform ${duration}ms ${easingCSS}`,
        }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3">
          <div className="h-1 w-12 rounded-full bg-muted-foreground/30" />
        </div>

        <div className="p-6">
          <h3 className="text-xl font-semibold text-foreground">Ethereal Dreams</h3>
          <p className="mt-1 text-sm text-muted-foreground">Oil on canvas · Maria Chen</p>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-lg font-semibold text-foreground">$12,400</span>
            <span className="text-sm text-muted-foreground">2024</span>
            <span className="rounded-full bg-muted px-2 py-0.5 text-xs text-muted-foreground">Abstract</span>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="flex-1 rounded-xl bg-brand py-3 text-sm font-medium text-brand-foreground">
              Purchase
            </button>
            <button className="rounded-xl bg-muted p-3">
              <Heart className="size-5 text-foreground" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// List items with staggered animation
export function ListStaggerPreview({ easingCSS, duration, className, isPlaying = true }: PreviewProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isPlaying) {
      setIsVisible(true)
      return
    }

    const showTimer = setTimeout(() => setIsVisible(true), 300)

    const interval = setInterval(() => {
      setIsVisible(false)
      setTimeout(() => setIsVisible(true), duration + 800)
    }, (duration * 2) + 2000)

    return () => {
      clearTimeout(showTimer)
      clearInterval(interval)
    }
  }, [duration, isPlaying])

  const items = [
    { title: "New Collection", subtitle: "12 artworks added" },
    { title: "Exhibition Opening", subtitle: "Tomorrow at 6 PM" },
    { title: "Price Update", subtitle: "3 items updated" },
    { title: "New Follower", subtitle: "Sarah started following you" },
  ]

  return (
    <div className={cn("relative h-full overflow-hidden bg-background p-6", className)}>
      <h3 className="mb-4 text-lg font-semibold text-foreground">Notifications</h3>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 rounded-xl border bg-card p-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: `opacity ${duration}ms ${easingCSS} ${i * 80}ms, transform ${duration}ms ${easingCSS} ${i * 80}ms`,
            }}
          >
            <div className="size-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
              <Bell className="size-4 text-brand" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-foreground truncate">{item.title}</p>
              <p className="text-sm text-muted-foreground truncate">{item.subtitle}</p>
            </div>
            <ChevronRight className="size-4 text-muted-foreground shrink-0" />
          </div>
        ))}
      </div>
    </div>
  )
}

export type PreviewType = "card" | "modal" | "drawer" | "list"

export const previewComponents: Record<
  PreviewType,
  {
    label: string
    description: string
    component: React.ComponentType<PreviewProps>
  }
> = {
  card: {
    label: "Carousel",
    description: "Animated card carousel with smooth sliding transitions. Great for showcasing content galleries and featured items.",
    component: CardSlidePreview,
  },
  modal: {
    label: "Modal",
    description: "Dialog that fades and scales into view with a backdrop overlay. Perfect for confirmations and focused interactions.",
    component: ModalFadePreview,
  },
  drawer: {
    label: "Drawer",
    description: "Bottom sheet that slides up from the screen edge. Ideal for mobile-friendly actions and detail views.",
    component: DrawerSlidePreview,
  },
  list: {
    label: "List",
    description: "Staggered list animation where items appear sequentially. Creates a cascading reveal effect for notifications and feeds.",
    component: ListStaggerPreview,
  },
}
