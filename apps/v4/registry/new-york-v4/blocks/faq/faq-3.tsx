"use client"

import { useState } from "react"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import FuzzyText from "@/registry/new-york-v4/animations/fuzzy-text/fuzzy-text"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Input } from "@/registry/new-york-v4/ui/input"

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

const faq3Defaults = {
  title: "Help Center",
  description: "Search for answers or browse our FAQ",
  questions: [
    {
      question: "How do I create an account?",
      answer:
        "Click the Sign Up button in the top right corner and follow the registration steps.",
    },
    {
      question: "How can I reset my password?",
      answer:
        "Go to the login page and click 'Forgot Password'. We'll send you a reset link.",
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept all major credit cards, PayPal, and bank transfers.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel anytime from your account settings. No questions asked.",
    },
    {
      question: "Is there a free trial available?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features.",
    },
    {
      question: "How do I contact support?",
      answer:
        "You can reach us via email, live chat, or phone during business hours.",
    },
  ],
}

export function Faq3({ content = {}, classNames = {} }: FaqBlockProps) {
  const {
    title = faq3Defaults.title,
    description = faq3Defaults.description,
    questions = faq3Defaults.questions,
  } = content

  const [searchQuery, setSearchQuery] = useState("")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const filteredQuestions = questions.filter(
    (q) =>
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const highlightText = (text: string) => {
    if (!searchQuery) return text
    const regex = new RegExp(`(${searchQuery})`, "gi")
    const parts = text.split(regex)
    return parts.map((part, i) =>
      regex.test(part) ? (
        <mark key={i} className="text-foreground bg-yellow-200">
          {part}
        </mark>
      ) : (
        part
      )
    )
  }

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        {/* Header with FuzzyText title */}
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <div className="mb-4 flex justify-center">
            <FuzzyText
              fontSize="clamp(1.875rem, 5vw, 2.5rem)"
              fontWeight={700}
              fontFamily="var(--font-heading), system-ui, sans-serif"
              color="hsl(var(--foreground))"
              enableHover={true}
              baseIntensity={0.1}
              hoverIntensity={0.3}
              fuzzRange={15}
              direction="horizontal"
              className="cursor-pointer"
            >
              {title}
            </FuzzyText>
          </div>
          {description && (
            <p
              className={cn(
                "text-muted-foreground",
                classNames.header?.description
              )}
            >
              {description}
            </p>
          )}
        </div>

        {/* Search */}
        <SlideUp delay={0.1} distance={20}>
          <div className="relative mx-auto mb-12 max-w-2xl">
            <DynamicIcon
              name="Search"
              className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2"
            />
            <Input
              type="text"
              placeholder="Search for answers..."
              className="h-12 pl-12"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </SlideUp>

        {/* Questions */}
        <div className="mx-auto max-w-2xl space-y-3">
          {filteredQuestions.map((q, i) => (
            <SlideUp key={i} delay={0.15 + i * 0.05} distance={20}>
              <div className="border-border overflow-hidden rounded-lg border">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="text-foreground hover:bg-muted flex w-full items-center justify-between p-4 text-left font-medium transition-colors"
                >
                  <span>{highlightText(q.question)}</span>
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
                    {highlightText(q.answer)}
                  </div>
                )}
              </div>
            </SlideUp>
          ))}

          {filteredQuestions.length === 0 && (
            <div className="text-muted-foreground py-8 text-center">
              No results found for "{searchQuery}"
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
