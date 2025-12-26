"use client"

import Image from "next/image"
import { BookOpen, HeartHandshake, MessageCircle, Sparkles } from "lucide-react"

import { useBlockContext } from "@/app/(app)/(content)/(blocks)/_components"

export function FeaturesServicePlants4() {
  const { containerBg } = useBlockContext()
  const circleBg = containerBg === "page" ? "bg-muted" : "bg-background"
  const features = [
    {
      title: "Care Tips",
      description:
        "Personalized advice tailored to your specific plant collection.",
      icon: Sparkles,
    },
    {
      title: "Expert Support",
      description:
        "Direct access to certified horticulturists when you need help.",
      icon: MessageCircle,
    },
    {
      title: "Plant Guides",
      description: "Comprehensive documentation for every species we carry.",
      icon: BookOpen,
    },
    {
      title: "Community",
      description: "Connect with fellow plant lovers and share your journey.",
      icon: HeartHandshake,
    },
    {
      title: "Video Tutorials",
      description:
        "Step-by-step visual guides for proper plant care techniques.",
      icon: BookOpen,
    },
    {
      title: "Live Q&A",
      description: "Weekly interactive sessions with our plant care experts.",
      icon: MessageCircle,
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="grid items-center gap-8 md:gap-16 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full">
              {/* Background circle */}
              <div
                className={`border-border absolute inset-x-[15%] top-[30%] bottom-[5%] rounded-full border ${circleBg}`}
              />
              {/* Image */}
              <Image
                draggable={false}
                src="/placeholders/blocks/service-plants/assets/item-3.webp"
                alt="Featured plant"
                fill
                className="pointer-events-none z-10 -translate-y-[10%] scale-110 object-contain select-none"
              />
            </div>
          </div>
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <p className="text-brand mb-2 text-sm font-medium tracking-[0.3em] uppercase">
              Expert Care
            </p>
            <h2 className="font-display text-foreground text-3xl font-bold text-balance md:text-5xl lg:text-6xl">
              Guidance
            </h2>
            <p className="text-muted-foreground mt-4 max-w-lg text-lg">
              Our horticulturists help your plants thrive with personalized tips
              and troubleshooting.
            </p>
            <div className="mt-14 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
              {features.map((feature, idx) => {
                const Icon = feature.icon
                return (
                  <div
                    key={idx}
                    className="border-border bg-card flex items-start gap-3 rounded-3xl p-4 shadow-sm dark:border"
                  >
                    <div className="bg-brand/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
                      <Icon className="text-brand h-5 w-5" />
                    </div>
                    <div className="flex flex-col gap-1">
                      <h3 className="text-foreground text-base font-semibold">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
