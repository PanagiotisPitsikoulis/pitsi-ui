"use client"

import { useState } from "react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"
import { Input } from "@/registry/new-york-v4/ui/input"

interface Faq10Props {
  content?: {
    badge?: string
    title?: string
    description?: string
    searchPlaceholder?: string
    questions?: Array<{ question: string; answer: string; tags?: string[] }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: {
      root?: string
      badge?: string
      title?: string
      description?: string
    }
  }
}

const faq10Defaults = {
  badge: "Search FAQ",
  title: "Find Your Answers",
  description:
    "Search our knowledge base for quick answers to your travel questions",
  searchPlaceholder: "Search for flights, hotels, cancellation, visa...",
  questions: [
    {
      question: "How do I check my flight status?",
      answer:
        "You can check your flight status in the 'My Trips' section of your account, through our mobile app, or by entering your booking reference on our homepage. We also send real-time updates via email and SMS.",
      tags: ["flight", "status", "booking"],
    },
    {
      question: "What happens if my flight is delayed or cancelled?",
      answer:
        "If your flight is delayed or cancelled, we'll notify you immediately and offer rebooking options at no extra cost. For significant delays, you may be entitled to compensation. Our 24/7 support team is available to assist.",
      tags: ["flight", "delay", "cancellation", "refund"],
    },
    {
      question: "How do I request a refund?",
      answer:
        "To request a refund, go to 'My Bookings', select the trip, and click 'Request Refund'. Refunds are typically processed within 7-10 business days. The amount depends on your ticket type and cancellation timing.",
      tags: ["refund", "cancellation", "money"],
    },
    {
      question: "Can I change my hotel booking dates?",
      answer:
        "Yes, most hotel bookings can be modified up to 24-48 hours before check-in, depending on the rate type. Log into your account, find your booking, and select 'Modify Dates'. Changes may affect the total price.",
      tags: ["hotel", "modification", "dates", "booking"],
    },
    {
      question: "Do you offer airport transfers?",
      answer:
        "Yes! We offer airport transfers in most major cities. You can add a transfer during booking or afterwards through 'My Trips'. Options include private cars, shared shuttles, and luxury vehicles.",
      tags: ["airport", "transfer", "transportation"],
    },
    {
      question: "What visa support do you provide?",
      answer:
        "We provide visa guidance for most destinations, including requirement checks, document checklists, and application assistance. Some destinations offer visa-on-arrival or e-visa options we can help arrange.",
      tags: ["visa", "documents", "passport"],
    },
    {
      question: "How does your price match guarantee work?",
      answer:
        "If you find a lower price for the exact same trip within 24 hours of booking, we'll refund the difference. Submit your claim through our website with proof of the lower price.",
      tags: ["price", "guarantee", "refund", "money"],
    },
    {
      question: "What travel insurance options do you offer?",
      answer:
        "We offer three insurance tiers: Basic (trip cancellation only), Standard (includes medical and luggage), and Premium (comprehensive coverage with no excess). Coverage can be added during or after booking.",
      tags: ["insurance", "medical", "coverage"],
    },
  ],
}

export function Faq10({ content = {}, classNames = {} }: Faq10Props) {
  const {
    badge = faq10Defaults.badge,
    title = faq10Defaults.title,
    description = faq10Defaults.description,
    searchPlaceholder = faq10Defaults.searchPlaceholder,
    questions = faq10Defaults.questions,
  } = content

  const [searchQuery, setSearchQuery] = useState("")

  const filteredQuestions = questions.filter((q) => {
    const query = searchQuery.toLowerCase()
    return (
      q.question.toLowerCase().includes(query) ||
      q.answer.toLowerCase().includes(query) ||
      q.tags?.some((tag) => tag.toLowerCase().includes(query))
    )
  })

  const highlightText = (text: string) => {
    if (!searchQuery) return text
    const regex = new RegExp(`(${searchQuery})`, "gi")
    const parts = text.split(regex)
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="bg-primary/20 text-foreground rounded px-0.5">
          {part}
        </mark>
      ) : (
        part
      )
    )
  }

  return (
    <section className={cn("bg-background py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <SlideUp delay={0} distance={20}>
          <BlockHeader
            badge={badge}
            title={title}
            description={description}
            spacing="compact"
            classNames={classNames.header}
          />
        </SlideUp>

        {/* Search */}
        <SlideUp delay={0.1} distance={20}>
          <div className="relative mx-auto mb-12 max-w-xl">
            <DynamicIcon
              name="Search"
              className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2"
            />
            <Input
              type="text"
              placeholder={searchPlaceholder}
              className="bg-muted h-14 rounded-xl pl-12 text-base"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-muted-foreground hover:text-foreground absolute top-1/2 right-4 -translate-y-1/2"
              >
                <DynamicIcon name="X" className="h-5 w-5" />
              </button>
            )}
          </div>
        </SlideUp>

        {/* Results count */}
        {searchQuery && (
          <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-center text-sm">
            Found {filteredQuestions.length} result
            {filteredQuestions.length !== 1 ? "s" : ""} for "{searchQuery}"
          </p>
        )}

        {/* Questions */}
        <ScrollFade>
          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible className="w-full">
              {filteredQuestions.map((q, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-border"
                >
                  <AccordionTrigger className="text-foreground text-left text-base font-medium">
                    {highlightText(q.question)}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {highlightText(q.answer)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {filteredQuestions.length === 0 && (
              <div className="py-12 text-center">
                <DynamicIcon
                  name="SearchX"
                  className="text-muted-foreground/50 mx-auto mb-4 h-12 w-12"
                />
                <p className="text-muted-foreground">
                  No results found for "{searchQuery}"
                </p>
                <p className="text-muted-foreground/70 mt-1 text-sm">
                  Try different keywords or browse all questions
                </p>
              </div>
            )}
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
