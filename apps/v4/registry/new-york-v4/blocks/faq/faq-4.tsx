"use client"

import { useState } from "react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"

interface FaqBlockProps {
  content?: {
    title?: string
    description?: string
    questions?: Array<{ question: string; answer: string }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const faq4Defaults = {
  title: "Common Questions",
  description: "Everything you need to know about our product.",
  questions: [
    {
      question: "What makes your product different?",
      answer:
        "Our product combines cutting-edge technology with user-friendly design to deliver an unmatched experience.",
    },
    {
      question: "Is there a mobile app?",
      answer:
        "Yes! Our mobile app is available on both iOS and Android devices, with full feature parity.",
    },
    {
      question: "How secure is my data?",
      answer:
        "We use bank-level encryption and follow industry best practices to keep your data safe and secure.",
    },
    {
      question: "Can I integrate with other tools?",
      answer:
        "Absolutely! We offer integrations with 50+ popular tools and services, plus a robust API.",
    },
    {
      question: "What happens if I need to cancel?",
      answer:
        "You can cancel anytime with no penalties. We'll even help you export your data.",
    },
  ],
}

export function Faq4({ content = {}, classNames = {} }: FaqBlockProps) {
  const {
    title = faq4Defaults.title,
    description = faq4Defaults.description,
    questions = faq4Defaults.questions,
  } = content

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className={cn("bg-muted", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <div className="mb-12 text-center">
          <h2
            className={cn(
              "text-foreground mb-4 text-3xl font-bold md:text-4xl",
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

        {/* Card-style Accordions */}
        <div className="mx-auto max-w-3xl space-y-4">
          {questions.map((q, i) => (
            <div
              key={i}
              className={cn(
                "bg-background overflow-hidden rounded-xl shadow-sm transition-shadow",
                openIndex === i && "shadow-md"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex w-full items-center gap-4 p-5 text-left"
              >
                <div
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors",
                    openIndex === i
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  <DynamicIcon name="HelpCircle" className="h-5 w-5" />
                </div>
                <span className="text-foreground flex-1 font-medium">
                  {q.question}
                </span>
                <DynamicIcon
                  name="ChevronDown"
                  className={cn(
                    "text-muted-foreground h-5 w-5 shrink-0 transition-transform",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="text-muted-foreground border-t px-5 pt-4 pb-5">
                  <p className="pl-14">{q.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
