"use client"

import { useState } from "react"

import { cn } from "@/lib/utils"

interface FaqBlockProps {
  content?: {
    title?: string
    description?: string
    categories?: Array<{
      name: string
      questions: Array<{ question: string; answer: string }>
    }>
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const faq2Defaults = {
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about our services.",
  categories: [
    {
      name: "General",
      questions: [
        {
          question: "What is your return policy?",
          answer:
            "We offer a 30-day return policy for all unused items in original packaging.",
        },
        {
          question: "How long does shipping take?",
          answer:
            "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 day delivery.",
        },
      ],
    },
    {
      name: "Billing",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, PayPal, and Apple Pay.",
        },
        {
          question: "Can I change my subscription plan?",
          answer:
            "Yes, you can upgrade or downgrade your plan at any time from your account settings.",
        },
      ],
    },
    {
      name: "Support",
      questions: [
        {
          question: "How can I contact support?",
          answer:
            "You can reach our support team via email at support@example.com or through live chat.",
        },
        {
          question: "What are your support hours?",
          answer:
            "Our support team is available Monday to Friday, 9 AM to 6 PM EST.",
        },
      ],
    },
  ],
}

export function Faq2({ content = {}, classNames = {} }: FaqBlockProps) {
  const {
    title = faq2Defaults.title,
    description = faq2Defaults.description,
    categories = faq2Defaults.categories,
  } = content

  const [selectedQuestion, setSelectedQuestion] = useState<string | null>(
    categories[0]?.questions[0]?.question || null
  )

  const allQuestions = categories.flatMap((cat) =>
    cat.questions.map((q) => ({ ...q, category: cat.name }))
  )

  const selectedAnswer = allQuestions.find(
    (q) => q.question === selectedQuestion
  )?.answer

  return (
    <section className={cn("bg-background", classNames.root)}>
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

        {/* Two Column Layout */}
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          {/* Questions List */}
          <div className="space-y-6">
            {categories.map((category) => (
              <div key={category.name}>
                <h3 className="text-muted-foreground mb-3 text-sm font-semibold uppercase">
                  {category.name}
                </h3>
                <div className="space-y-2">
                  {category.questions.map((q) => (
                    <button
                      key={q.question}
                      onClick={() => setSelectedQuestion(q.question)}
                      className={cn(
                        "w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors",
                        selectedQuestion === q.question
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-foreground hover:bg-muted/80"
                      )}
                    >
                      {q.question}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Answer Panel */}
          <div className="border-border rounded-xl border p-6 lg:p-8">
            {selectedQuestion && (
              <>
                <h4 className="text-foreground mb-4 text-lg font-semibold">
                  {selectedQuestion}
                </h4>
                <p className="text-muted-foreground">{selectedAnswer}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
