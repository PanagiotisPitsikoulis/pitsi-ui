"use client"

import { useState } from "react"

import { DynamicIcon, type IconName } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { ScrollFade } from "@/registry/new-york-v4/animations/scroll-fade/scroll-fade"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface FaqCategory {
  name: string
  icon: IconName
  questions: Array<{ question: string; answer: string }>
}

interface Faq11Props {
  content?: {
    badge?: string
    title?: string
    description?: string
    categories?: FaqCategory[]
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

const faq11Defaults = {
  badge: "FAQ",
  title: "Answers to Your Travel Questions",
  description:
    "Select a topic to find detailed answers about your upcoming adventure",
  categories: [
    {
      name: "Before You Travel",
      icon: "ClipboardList" as IconName,
      questions: [
        {
          question: "What should I pack for my trip?",
          answer:
            "Packing depends on your destination and activities. We send a customized packing list based on your itinerary, local weather forecasts, and planned activities. Generally, pack versatile clothing, comfortable walking shoes, and any medications you need.",
        },
        {
          question: "How early should I arrive at the airport?",
          answer:
            "For international flights, arrive 3 hours before departure. For domestic flights, 2 hours is sufficient. During peak travel seasons, consider arriving even earlier. Check-in online to save time at the airport.",
        },
        {
          question: "Do I need travel adapters?",
          answer:
            "Plug types vary by country. Your booking confirmation includes information about the electrical standards at your destination. We recommend universal travel adapters for convenience.",
        },
      ],
    },
    {
      name: "During Your Trip",
      icon: "Plane" as IconName,
      questions: [
        {
          question: "How can I reach you during my trip?",
          answer:
            "Our 24/7 support is available via the mobile app, WhatsApp, phone, or email. For emergencies, use the SOS button in the app for immediate assistance. Local emergency contacts are also in your travel documents.",
        },
        {
          question: "What if I lose my luggage?",
          answer:
            "Report lost luggage immediately to your airline at the airport. File a claim with the reference number provided. If you have our travel insurance, contact us to start a claim for essentials while your luggage is located.",
        },
        {
          question: "Can I extend my stay?",
          answer:
            "Yes! Contact us as soon as possible to check availability. Extensions are subject to hotel availability and may have different rates. We'll handle all the rebooking and any visa considerations.",
        },
      ],
    },
    {
      name: "After Your Return",
      icon: "Home" as IconName,
      questions: [
        {
          question: "How do I submit expense claims?",
          answer:
            "For insurance claims, submit receipts and documentation through your account within 30 days of return. For reimbursements due to service issues, contact support with details and we'll process your claim promptly.",
        },
        {
          question: "Can I leave a review?",
          answer:
            "We'd love to hear about your experience! You'll receive a review invitation after your trip. Reviews help other travelers and provide valuable feedback to our partners.",
        },
        {
          question: "How do I earn loyalty points?",
          answer:
            "Points are automatically credited to your account within 7 days of completing your trip. Check your rewards balance in the app. Points can be redeemed for discounts, upgrades, and exclusive experiences.",
        },
      ],
    },
  ],
}

export function Faq11({ content = {}, classNames = {} }: Faq11Props) {
  const {
    badge = faq11Defaults.badge,
    title = faq11Defaults.title,
    description = faq11Defaults.description,
    categories = faq11Defaults.categories,
  } = content

  const [activeCategory, setActiveCategory] = useState(categories[0]?.name)
  const [activeQuestion, setActiveQuestion] = useState(
    categories[0]?.questions[0]?.question
  )

  const currentCategory = categories.find((c) => c.name === activeCategory)
  const currentAnswer = currentCategory?.questions.find(
    (q) => q.question === activeQuestion
  )?.answer

  return (
    <section className={cn("bg-background py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <SlideUp delay={0} distance={20}>
          <BlockHeader
            badge={badge}
            title={title}
            description={description}
            spacing="default"
            classNames={classNames.header}
          />
        </SlideUp>

        {/* Two Column Layout */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Left: Categories and Questions */}
          <div className="space-y-6">
            {categories.map((category, catIndex) => (
              <SlideUp
                key={category.name}
                delay={0.1 + catIndex * 0.1}
                distance={20}
              >
                <div>
                  {/* Category Header */}
                  <button
                    onClick={() => {
                      setActiveCategory(category.name)
                      setActiveQuestion(category.questions[0]?.question)
                    }}
                    className={cn(
                      "mb-3 flex items-center gap-2 text-sm font-semibold tracking-wide uppercase transition-colors",
                      activeCategory === category.name
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <DynamicIcon name={category.icon} className="h-4 w-4" />
                    {category.name}
                  </button>

                  {/* Questions */}
                  {activeCategory === category.name && (
                    <div className="space-y-2">
                      {category.questions.map((q) => (
                        <button
                          key={q.question}
                          onClick={() => setActiveQuestion(q.question)}
                          className={cn(
                            "w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-all",
                            activeQuestion === q.question
                              ? "bg-primary text-primary-foreground shadow-md"
                              : "bg-muted text-foreground hover:bg-muted/80"
                          )}
                        >
                          {q.question}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </SlideUp>
            ))}
          </div>

          {/* Right: Answer Panel */}
          <ScrollFade>
            <div className="bg-muted/50 border-border sticky top-24 rounded-2xl border p-8 lg:p-10">
              {activeQuestion && (
                <>
                  <div className="bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium">
                    <DynamicIcon
                      name={currentCategory?.icon || ("HelpCircle" as IconName)}
                      className="h-3 w-3"
                    />
                    {activeCategory}
                  </div>
                  <h3 className="text-foreground mb-4 text-xl font-semibold">
                    {activeQuestion}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentAnswer}
                  </p>
                </>
              )}
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  )
}
