"use client"

import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import {
  PerspectiveContainer,
  PerspectiveSection,
} from "@/registry/new-york-v4/animations/perspective-section-transition/perspective-section-transition"
import { Button } from "@/registry/new-york-v4/ui/button"

interface TestimonialsBlockProps {
  content?: {
    title?: string
    description?: string
    caseStudies?: Array<{
      company: string
      logo: string
      quote: string
      author: {
        name: string
        role: string
        avatar: string
      }
      metrics: Array<{
        value: string
        label: string
      }>
      href: string
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const testimonials6Defaults = {
  title: "Case Studies",
  description: "See how leading companies achieved remarkable results.",
  caseStudies: [
    {
      company: "TechCorp",
      logo: "",
      quote:
        "We reduced our time-to-market by 50% and increased team velocity significantly.",
      author: {
        name: "Sarah Johnson",
        role: "VP of Engineering",
        avatar: "/avatars/01.webp",
      },
      metrics: [
        { value: "50%", label: "Faster delivery" },
        { value: "3x", label: "Team velocity" },
        { value: "99.9%", label: "Uptime" },
      ],
      href: "#",
    },
    {
      company: "ScaleUp",
      logo: "",
      quote:
        "Revenue grew 200% in the first year. This platform was instrumental to our success.",
      author: {
        name: "Michael Chen",
        role: "CEO",
        avatar: "/avatars/02.webp",
      },
      metrics: [
        { value: "200%", label: "Revenue growth" },
        { value: "45%", label: "Cost reduction" },
        { value: "10x", label: "ROI" },
      ],
      href: "#",
    },
    {
      company: "GlobalTrade",
      logo: "",
      quote:
        "Customer satisfaction scores improved dramatically after implementation.",
      author: {
        name: "Emily Rodriguez",
        role: "Head of Customer Success",
        avatar: "/avatars/03.webp",
      },
      metrics: [
        { value: "92%", label: "CSAT score" },
        { value: "60%", label: "Faster resolution" },
        { value: "4.8", label: "App rating" },
      ],
      href: "#",
    },
  ],
}

function CaseStudyCard({
  study,
  className,
}: {
  study: (typeof testimonials6Defaults.caseStudies)[0]
  className?: string
}) {
  return (
    <div
      className={cn(
        "border-background group flex flex-col rounded-xl border p-6 shadow-lg transition-shadow",
        className
      )}
    >
      {/* Company Header */}
      <div className="mb-6">
        <div className="bg-muted mb-4 flex h-12 items-center justify-center rounded-lg px-4">
          <span className="text-foreground font-semibold tracking-wider">
            {study.company}
          </span>
        </div>
      </div>

      {/* Quote */}
      <blockquote className="text-foreground mb-6 flex-1">
        &ldquo;{study.quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="mb-6 flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full">
          <Image
            src={study.author.avatar}
            alt={study.author.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-foreground text-sm font-medium">
            {study.author.name}
          </p>
          <p className="text-muted-foreground text-xs">{study.author.role}</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="bg-muted mb-6 grid grid-cols-3 gap-4 rounded-lg p-4">
        {study.metrics.map((metric, j) => (
          <div key={j} className="text-center">
            <div className="text-primary flex items-center justify-center gap-1">
              <DynamicIcon name="TrendingUp" className="h-3 w-3" />
              <span className="text-lg font-bold">{metric.value}</span>
            </div>
            <p className="text-muted-foreground text-xs">{metric.label}</p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <Button variant="default" className="group/btn w-full" asChild>
        <Link href={study.href}>
          Read full story
          <DynamicIcon
            name="ArrowRight"
            className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1"
          />
        </Link>
      </Button>
    </div>
  )
}

export function Testimonials6({
  content = {},
  classNames = {},
}: TestimonialsBlockProps) {
  const {
    title = testimonials6Defaults.title,
    description = testimonials6Defaults.description,
    caseStudies = testimonials6Defaults.caseStudies,
  } = content

  return (
    <section className={cn("bg-background", classNames.root)}>
      {/* Header Section */}
      <div
        className={cn("container px-6 pt-16 md:pt-24", classNames.container)}
      >
        <div className="mb-12 text-center">
          <h2
            className={cn(
              "text-foreground display mb-4 text-3xl font-bold md:text-6xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "text-muted-foreground mx-auto max-w-2xl",
              classNames.header?.description
            )}
          >
            {description}
          </p>
        </div>
      </div>

      {/* Perspective Section Transition */}
      <PerspectiveContainer
        height={`${(caseStudies.length + 1) * 100}vh`}
        className="bg-background"
      >
        {/* Sticky intro section */}
        <PerspectiveSection
          sticky
          scaleRange={[1, 0.9]}
          rotateRange={[0, -3]}
          className="bg-muted/30"
        >
          <div className="container px-6">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-muted-foreground text-lg">
                Scroll down to explore our case studies
              </p>
              <div className="mt-8 flex justify-center">
                <DynamicIcon
                  name="ChevronDown"
                  className="text-muted-foreground h-8 w-8 animate-bounce"
                />
              </div>
            </div>
          </div>
        </PerspectiveSection>

        {/* Case Study Sections */}
        {caseStudies.map((study, i) => (
          <PerspectiveSection
            key={i}
            sticky
            scaleRange={[1, 0.85]}
            rotateRange={[0, -5]}
            className={i % 2 === 0 ? "bg-card" : "bg-muted/50"}
          >
            <div className="container px-6">
              <div className="mx-auto max-w-lg">
                <CaseStudyCard study={study} className="bg-card shadow-2xl" />
              </div>
            </div>
          </PerspectiveSection>
        ))}
      </PerspectiveContainer>

      {/* Bottom CTA Section */}
      <div className="container px-6 pb-16 md:pb-24">
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Ready to become our next success story?
          </p>
          <Button size="lg" asChild>
            <Link href="#">
              Get Started
              <DynamicIcon name="ArrowRight" className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
