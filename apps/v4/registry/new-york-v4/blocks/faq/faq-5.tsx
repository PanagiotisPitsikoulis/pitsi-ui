"use client"

import { useState } from "react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"

interface FaqBlockProps {
  content?: {
    title?: string
    categories?: Array<{
      name: string
      count: number
      questions: Array<{ question: string; answer: string }>
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string }
  }
}

const faq5Defaults = {
  title: "Frequently Asked Questions",
  categories: [
    {
      name: "Getting Started",
      count: 4,
      questions: [
        {
          question: "How do I sign up?",
          answer:
            "Click the Get Started button and follow the simple registration process.",
        },
        {
          question: "Is there a free plan?",
          answer:
            "Yes, we offer a free plan with basic features to help you get started.",
        },
        {
          question: "How long is the free trial?",
          answer:
            "Our free trial lasts 14 days with full access to all premium features.",
        },
        {
          question: "Do I need a credit card to sign up?",
          answer:
            "No, you can sign up and try our product without a credit card.",
        },
      ],
    },
    {
      name: "Billing & Payments",
      count: 3,
      questions: [
        {
          question: "What payment methods do you accept?",
          answer:
            "We accept all major credit cards, PayPal, and wire transfers for enterprise.",
        },
        {
          question: "Can I change my plan later?",
          answer: "Yes, you can upgrade or downgrade your plan at any time.",
        },
        {
          question: "Do you offer refunds?",
          answer: "We offer a 30-day money-back guarantee on all paid plans.",
        },
      ],
    },
    {
      name: "Technical",
      count: 3,
      questions: [
        {
          question: "What browsers are supported?",
          answer:
            "We support all modern browsers including Chrome, Firefox, Safari, and Edge.",
        },
        {
          question: "Is there an API available?",
          answer:
            "Yes, we offer a full REST API with comprehensive documentation.",
        },
        {
          question: "How do I report a bug?",
          answer:
            "You can report bugs through our support portal or via email to support@example.com.",
        },
      ],
    },
  ],
}

export function Faq5({ content = {}, classNames = {} }: FaqBlockProps) {
  const { title = faq5Defaults.title, categories = faq5Defaults.categories } =
    content

  const [activeCategory, setActiveCategory] = useState(categories[0].name)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const activeQuestions =
    categories.find((c) => c.name === activeCategory)?.questions || []

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header */}
        <BlockHeader
          title={title}
          spacing="none"
          className="mb-8"
          classNames={classNames.header}
        />

        {/* Category Tabs */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => {
                setActiveCategory(category.name)
                setOpenIndex(null)
              }}
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all",
                activeCategory === category.name
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              )}
            >
              {category.name}
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs",
                  activeCategory === category.name
                    ? "bg-primary-foreground/20"
                    : "bg-muted-foreground/20"
                )}
              >
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Questions */}
        <div className="mx-auto max-w-2xl space-y-3">
          {activeQuestions.map((q, i) => (
            <div
              key={i}
              className="border-border overflow-hidden rounded-lg border"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="text-foreground hover:bg-muted flex w-full items-center justify-between p-4 text-left font-medium transition-colors"
              >
                {q.question}
                <DynamicIcon
                  name="ChevronDown"
                  className={cn(
                    "h-5 w-5 shrink-0 transition-transform",
                    openIndex === i && "rotate-180"
                  )}
                />
              </button>
              {openIndex === i && (
                <div className="border-border text-muted-foreground border-t px-4 py-3">
                  {q.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
