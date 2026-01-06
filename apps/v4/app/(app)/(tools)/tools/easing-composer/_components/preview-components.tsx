"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

import { Bell, ChevronLeft, ChevronRight, Heart, X } from "@/lib/icons"
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
export function CardSlidePreview({
  easingCSS,
  duration,
  className,
  isPlaying = true,
}: PreviewProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [translateX, setTranslateX] = useState(0)

  const cards = [
    {
      image: artImages[0],
      title: "Featured Artwork",
      subtitle: "Abstract collection",
      likes: "2.4k",
    },
    {
      image: artImages[1],
      title: "New Release",
      subtitle: "Contemporary art",
      likes: "1.8k",
    },
    {
      image: artImages[2],
      title: "Trending Now",
      subtitle: "Modern masters",
      likes: "3.2k",
    },
    {
      image: artImages[3],
      title: "Editor's Pick",
      subtitle: "Curated selection",
      likes: "956",
    },
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
    <div
      className={cn("bg-background relative h-full overflow-hidden", className)}
    >
      {/* Background blur */}
      <div className="absolute inset-0">
        <Image
          src={cards[currentIndex].image}
          alt=""
          fill
          className="scale-110 object-cover opacity-30 blur-2xl"
          sizes="400px"
          style={{
            transition: `opacity ${duration}ms ${easingCSS}`,
          }}
        />
      </div>

      {/* Carousel container */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden p-6">
        <div className="relative h-80 w-72 overflow-hidden">
          <div
            className="flex h-full"
            style={{
              width: `${cards.length * 100}%`,
              transform: `translateX(${translateX / cards.length}%)`,
              transition: `transform ${duration}ms ${easingCSS}`,
            }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                className="h-full shrink-0"
                style={{ width: `${100 / cards.length}%` }}
              >
                <div
                  className="bg-card mx-auto h-full w-full overflow-hidden rounded-2xl border shadow-2xl"
                  style={{ maxWidth: "288px" }}
                >
                  <div className="relative h-44">
                    <Image
                      src={card.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="288px"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-foreground font-semibold">
                      {card.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 text-sm">
                      {card.subtitle}
                    </p>
                    <div className="mt-3 flex items-center gap-2">
                      <div className="bg-brand/10 flex size-8 items-center justify-center rounded-full">
                        <Heart className="text-brand size-4" />
                      </div>
                      <span className="text-muted-foreground text-xs">
                        {card.likes} likes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute right-0 bottom-4 left-0 flex justify-center gap-2">
        {cards.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={cn(
              "size-2 rounded-full",
              i === currentIndex
                ? "bg-brand w-6"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
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
        className="bg-background/80 hover:bg-background absolute top-1/2 left-3 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border shadow-sm backdrop-blur"
      >
        <ChevronLeft className="text-foreground size-4" />
      </button>
      <button
        onClick={() => goTo((currentIndex + 1) % cards.length)}
        className="bg-background/80 hover:bg-background absolute top-1/2 right-3 flex size-8 -translate-y-1/2 items-center justify-center rounded-full border shadow-sm backdrop-blur"
      >
        <ChevronRight className="text-foreground size-4" />
      </button>
    </div>
  )
}

// Modal that fades and scales in
export function ModalFadePreview({
  easingCSS,
  duration,
  className,
  isPlaying = true,
}: PreviewProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isPlaying) {
      setIsVisible(true)
      return
    }

    const showTimer = setTimeout(() => setIsVisible(true), 300)

    const interval = setInterval(
      () => {
        setIsVisible(false)
        setTimeout(() => setIsVisible(true), duration + 500)
      },
      duration * 2 + 1500
    )

    return () => {
      clearTimeout(showTimer)
      clearInterval(interval)
    }
  }, [duration, isPlaying])

  return (
    <div
      className={cn("bg-background relative h-full overflow-hidden", className)}
    >
      {/* Background content */}
      <div className="absolute inset-0 p-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-foreground text-lg font-semibold">Gallery</span>
          <Bell className="text-muted-foreground size-5" />
        </div>
        <div className="grid grid-cols-2 gap-3">
          {artImages.slice(0, 4).map((src, i) => (
            <div
              key={i}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="150px"
              />
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
        <div className="bg-card w-full max-w-xs rounded-2xl p-6 shadow-2xl">
          <div className="flex items-start justify-between">
            <div className="bg-brand/10 flex size-10 items-center justify-center rounded-full">
              <Heart className="text-brand size-5" />
            </div>
            <button className="hover:bg-muted rounded-full p-1">
              <X className="text-muted-foreground size-4" />
            </button>
          </div>
          <h3 className="text-foreground mt-4 text-lg font-semibold">
            Save to Collection
          </h3>
          <p className="text-muted-foreground mt-2 text-sm">
            Add this artwork to your favorites with smooth animation.
          </p>
          <div className="mt-4 flex gap-2">
            <button className="bg-muted text-foreground flex-1 rounded-lg px-4 py-2 text-sm font-medium">
              Cancel
            </button>
            <button className="bg-brand text-brand-foreground flex-1 rounded-lg px-4 py-2 text-sm font-medium">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Bottom drawer that slides up
export function DrawerSlidePreview({
  easingCSS,
  duration,
  className,
  isPlaying = true,
}: PreviewProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isPlaying) {
      setIsVisible(true)
      return
    }

    const showTimer = setTimeout(() => setIsVisible(true), 300)

    const interval = setInterval(
      () => {
        setIsVisible(false)
        setTimeout(() => setIsVisible(true), duration + 500)
      },
      duration * 2 + 1500
    )

    return () => {
      clearTimeout(showTimer)
      clearInterval(interval)
    }
  }, [duration, isPlaying])

  return (
    <div
      className={cn("bg-background relative h-full overflow-hidden", className)}
    >
      {/* Background - full image */}
      <div className="absolute inset-0">
        <Image
          src={artImages[2]}
          alt=""
          fill
          className="object-cover"
          sizes="400px"
        />
      </div>

      {/* Bottom drawer */}
      <div
        className="bg-card absolute inset-x-0 bottom-0 rounded-t-3xl shadow-2xl"
        style={{
          transform: isVisible ? "translateY(0)" : "translateY(100%)",
          transition: `transform ${duration}ms ${easingCSS}`,
        }}
      >
        {/* Handle */}
        <div className="flex justify-center pt-3">
          <div className="bg-muted-foreground/30 h-1 w-12 rounded-full" />
        </div>

        <div className="p-6">
          <h3 className="text-foreground text-xl font-semibold">
            Ethereal Dreams
          </h3>
          <p className="text-muted-foreground mt-1 text-sm">
            Oil on canvas · Maria Chen
          </p>

          <div className="mt-4 flex items-center gap-4">
            <span className="text-foreground text-lg font-semibold">
              $12,400
            </span>
            <span className="text-muted-foreground text-sm">2024</span>
            <span className="bg-muted text-muted-foreground rounded-full px-2 py-0.5 text-xs">
              Abstract
            </span>
          </div>

          <div className="mt-4 flex gap-2">
            <button className="bg-brand text-brand-foreground flex-1 rounded-xl py-3 text-sm font-medium">
              Purchase
            </button>
            <button className="bg-muted rounded-xl p-3">
              <Heart className="text-foreground size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// List items with staggered animation
export function ListStaggerPreview({
  easingCSS,
  duration,
  className,
  isPlaying = true,
}: PreviewProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!isPlaying) {
      setIsVisible(true)
      return
    }

    const showTimer = setTimeout(() => setIsVisible(true), 300)

    const interval = setInterval(
      () => {
        setIsVisible(false)
        setTimeout(() => setIsVisible(true), duration + 800)
      },
      duration * 2 + 2000
    )

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
    <div
      className={cn(
        "bg-background relative h-full overflow-hidden p-6",
        className
      )}
    >
      <h3 className="text-foreground mb-4 text-lg font-semibold">
        Notifications
      </h3>

      <div className="space-y-3">
        {items.map((item, i) => (
          <div
            key={i}
            className="bg-card flex items-center gap-3 rounded-xl border p-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transition: `opacity ${duration}ms ${easingCSS} ${i * 80}ms, transform ${duration}ms ${easingCSS} ${i * 80}ms`,
            }}
          >
            <div className="bg-brand/10 flex size-10 shrink-0 items-center justify-center rounded-full">
              <Bell className="text-brand size-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-foreground truncate font-medium">
                {item.title}
              </p>
              <p className="text-muted-foreground truncate text-sm">
                {item.subtitle}
              </p>
            </div>
            <ChevronRight className="text-muted-foreground size-4 shrink-0" />
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
    description:
      "Animated card carousel with smooth sliding transitions. Great for showcasing content galleries and featured items.",
    component: CardSlidePreview,
  },
  modal: {
    label: "Modal",
    description:
      "Dialog that fades and scales into view with a backdrop overlay. Perfect for confirmations and focused interactions.",
    component: ModalFadePreview,
  },
  drawer: {
    label: "Drawer",
    description:
      "Bottom sheet that slides up from the screen edge. Ideal for mobile-friendly actions and detail views.",
    component: DrawerSlidePreview,
  },
  list: {
    label: "List",
    description:
      "Staggered list animation where items appear sequentially. Creates a cascading reveal effect for notifications and feeds.",
    component: ListStaggerPreview,
  },
}
