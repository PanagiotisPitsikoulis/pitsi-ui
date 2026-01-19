"use client"

import { useState } from "react"

import { DynamicIcon, type IconName } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface FaqItem {
  icon: IconName
  question: string
  answer: string
}

interface Faq12Props {
  content?: {
    badge?: string
    title?: string
    description?: string
    questions?: FaqItem[]
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

const faq12Defaults = {
  badge: "Quick Answers",
  title: "Common Travel Questions",
  description: "Click on a question to reveal the answer",
  questions: [
    {
      icon: "CreditCard" as IconName,
      question: "What payment methods are accepted?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, Amex), PayPal, Apple Pay, Google Pay, and bank transfers for bookings over $1000.",
    },
    {
      icon: "Shield" as IconName,
      question: "Is travel insurance included?",
      answer:
        "Basic coverage is included with all packages. We recommend upgrading to comprehensive insurance for full protection including medical, cancellation, and baggage coverage.",
    },
    {
      icon: "Clock" as IconName,
      question: "When should I book?",
      answer:
        "For best rates and availability, book 2-4 months in advance. Peak season destinations (summer, holidays) should be booked 4-6 months ahead.",
    },
    {
      icon: "RefreshCw" as IconName,
      question: "Can I change my dates?",
      answer:
        "Yes, dates can be changed up to 14 days before departure for most bookings. Changes within 14 days may incur a fee depending on availability.",
    },
    {
      icon: "Wallet" as IconName,
      question: "How do deposits work?",
      answer:
        "Pay 20% deposit to secure your booking, with the balance due 30 days before departure. Full payment is required for bookings within 30 days.",
    },
    {
      icon: "Headphones" as IconName,
      question: "How can I get support?",
      answer:
        "Our travel experts are available 24/7 via phone, email, live chat, or WhatsApp. Premium customers also get a dedicated travel concierge.",
    },
    {
      icon: "Globe" as IconName,
      question: "Do you arrange visas?",
      answer:
        "We provide visa guidance and can assist with applications for many destinations. Some countries require you to apply directly at the embassy.",
    },
    {
      icon: "Plane" as IconName,
      question: "Are flights included?",
      answer:
        "Flight-inclusive packages clearly state this. For accommodation-only bookings, we can help arrange flights separately or you can book your own.",
    },
    {
      icon: "Users" as IconName,
      question: "Do you offer group discounts?",
      answer:
        "Yes! Groups of 8+ travelers receive 10-15% off. Contact us for custom group packages with exclusive perks and dedicated coordinators.",
    },
  ],
}

export function Faq12({ content = {}, classNames = {} }: Faq12Props) {
  const {
    badge = faq12Defaults.badge,
    title = faq12Defaults.title,
    description = faq12Defaults.description,
    questions = faq12Defaults.questions,
  } = content

  const [openIndex, setOpenIndex] = useState<number | null>(null)

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

        {/* Grid of FAQs */}
        <div className="mx-auto grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {questions.map((faq, idx) => (
            <SlideUp key={idx} delay={0.05 + idx * 0.03} distance={20}>
              <div
                className={cn(
                  "bg-background group cursor-pointer rounded-xl p-6 shadow-sm transition-all duration-300",
                  openIndex === idx ? "ring-primary ring-2" : "hover:shadow-md"
                )}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                {/* Icon */}
                <div
                  className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
                    openIndex === idx
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary"
                  )}
                >
                  <DynamicIcon name={faq.icon} className="h-6 w-6" />
                </div>

                {/* Question */}
                <h3 className="text-foreground mb-2 font-semibold">
                  {faq.question}
                </h3>

                {/* Answer (expanded) */}
                <div
                  className={cn(
                    "grid transition-all duration-300",
                    openIndex === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="text-muted-foreground pt-2 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {/* Expand indicator */}
                <div className="mt-3 flex items-center gap-1 text-xs font-medium">
                  <span
                    className={cn(
                      "transition-colors",
                      openIndex === idx
                        ? "text-primary"
                        : "text-muted-foreground"
                    )}
                  >
                    {openIndex === idx ? "Click to close" : "Click to expand"}
                  </span>
                  <DynamicIcon
                    name="ChevronDown"
                    className={cn(
                      "h-3 w-3 transition-transform",
                      openIndex === idx
                        ? "text-primary rotate-180"
                        : "text-muted-foreground"
                    )}
                  />
                </div>
              </div>
            </SlideUp>
          ))}
        </div>
      </div>
    </section>
  )
}
