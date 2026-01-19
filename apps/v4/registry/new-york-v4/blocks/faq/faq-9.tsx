"use client"

import { useState } from "react"

import { DynamicIcon, type IconName } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

interface FaqCategory {
  name: string
  icon: IconName
  questions: Array<{ question: string; answer: string }>
}

interface Faq9Props {
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

const faq9Defaults = {
  badge: "Help Center",
  title: "Travel Support",
  description: "Browse by category to find the answers you need",
  categories: [
    {
      name: "Booking",
      icon: "CalendarDays" as IconName,
      questions: [
        {
          question: "How far in advance should I book?",
          answer:
            "We recommend booking at least 2-3 months in advance for popular destinations, especially during peak seasons. Last-minute deals are available but offer limited choices.",
        },
        {
          question: "Can I book for a group?",
          answer:
            "Yes! We offer special group booking rates for parties of 10 or more. Contact our team for customized packages and exclusive group discounts.",
        },
        {
          question: "How do I add special requests to my booking?",
          answer:
            "You can add special requests like room preferences, dietary requirements, or accessibility needs during checkout or by contacting us after booking.",
        },
      ],
    },
    {
      name: "Visa & Documents",
      icon: "FileText" as IconName,
      questions: [
        {
          question: "Do I need a visa for my destination?",
          answer:
            "Visa requirements vary by nationality and destination. Our booking system will alert you to any visa requirements, and we can assist with visa applications for select destinations.",
        },
        {
          question: "What passport validity is required?",
          answer:
            "Most countries require your passport to be valid for at least 6 months beyond your travel dates. Check specific requirements for your destination during booking.",
        },
        {
          question: "Can you help with visa applications?",
          answer:
            "Yes, we offer visa assistance services for many destinations. We'll guide you through the application process and help gather required documents.",
        },
      ],
    },
    {
      name: "Luggage",
      icon: "Luggage" as IconName,
      questions: [
        {
          question: "What's the baggage allowance?",
          answer:
            "Baggage allowances vary by airline and ticket class. Economy typically includes 1 checked bag (23kg) and 1 carry-on. Check your booking confirmation for specific allowances.",
        },
        {
          question: "Can I add extra luggage?",
          answer:
            "Yes, extra baggage can be added during booking or later through your booking management page. Pre-booking extra luggage is usually cheaper than airport rates.",
        },
        {
          question: "What items are prohibited in luggage?",
          answer:
            "Prohibited items include flammable materials, sharp objects in carry-on, and certain electronics with lithium batteries. Check airline guidelines for a complete list.",
        },
      ],
    },
    {
      name: "Payment",
      icon: "CreditCard" as IconName,
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit/debit cards, PayPal, bank transfers, and select buy-now-pay-later options. All transactions are securely encrypted.",
        },
        {
          question: "Can I pay in installments?",
          answer:
            "Yes! We offer flexible payment plans for bookings over $500. Pay a deposit to secure your trip and complete payments before departure.",
        },
        {
          question: "When will I be charged?",
          answer:
            "Full payment is typically required at booking. For trips booked more than 60 days in advance, you can choose to pay a deposit and the balance later.",
        },
      ],
    },
  ],
}

export function Faq9({ content = {}, classNames = {} }: Faq9Props) {
  const {
    badge = faq9Defaults.badge,
    title = faq9Defaults.title,
    description = faq9Defaults.description,
    categories = faq9Defaults.categories,
  } = content

  const [activeCategory, setActiveCategory] = useState(categories[0]?.name)

  const activeQuestions =
    categories.find((c) => c.name === activeCategory)?.questions || []

  return (
    <section className={cn("bg-muted py-24", classNames.root)}>
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

        {/* Category Tabs */}
        <SlideUp delay={0.1} distance={20}>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.name)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all",
                  activeCategory === category.name
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-background text-muted-foreground hover:bg-background/80 hover:text-foreground"
                )}
              >
                <DynamicIcon name={category.icon} className="h-4 w-4" />
                {category.name}
              </button>
            ))}
          </div>
        </SlideUp>

        {/* Questions */}
        <div className="mx-auto max-w-2xl">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className="w-full"
            key={activeCategory}
          >
            {activeQuestions.map((q, idx) => (
              <SlideUp
                key={`${activeCategory}-${idx}`}
                delay={0.05 * idx}
                distance={15}
              >
                <AccordionItem
                  value={`item-${idx}`}
                  className="bg-background mb-3 overflow-hidden rounded-lg border-none shadow-sm"
                >
                  <AccordionTrigger className="text-foreground hover:bg-muted/50 px-5 py-4 text-left font-medium hover:no-underline">
                    {q.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-5 pb-4">
                    {q.answer}
                  </AccordionContent>
                </AccordionItem>
              </SlideUp>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
