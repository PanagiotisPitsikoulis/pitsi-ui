"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

import { DynamicIcon } from "@/lib/blocks/dynamic-icon"
import { cn } from "@/lib/utils"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import Stack from "@/registry/new-york-v4/animations/stack/stack"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import { Button } from "@/registry/new-york-v4/ui/button"

interface FaqBlockProps {
  content?: {
    title?: string
    description?: string
    questions?: Array<{ question: string; answer: string }>
    supportTitle?: string
    supportDescription?: string
    supportCta?: { label: string; href: string }
  }
  classNames?: {
    root?: string
    container?: string
    header?: { title?: string; description?: string }
  }
}

const faq6Defaults = {
  title: "FAQ",
  description: "Have questions? We have answers.",
  questions: [
    {
      question: "How quickly can I get started?",
      answer:
        "You can get started in less than 5 minutes. Simply sign up, verify your email, and you're ready to go.",
    },
    {
      question: "Do you offer enterprise solutions?",
      answer:
        "Yes! We offer customized enterprise plans with dedicated support, SLA guarantees, and advanced features.",
    },
    {
      question: "What integrations do you support?",
      answer:
        "We integrate with over 100+ popular tools including Slack, Zapier, Salesforce, and more.",
    },
    {
      question: "How do I cancel my subscription?",
      answer:
        "You can cancel anytime from your account settings. No hidden fees or cancellation charges.",
    },
  ],
  supportTitle: "Still have questions?",
  supportDescription:
    "Our support team is here to help you with anything you need.",
  supportTeam: [
    { image: "/elements/landscape/plants/1.webp", name: "Sarah" },
    { image: "/elements/landscape/plants/2.webp", name: "Mike" },
    { image: "/elements/landscape/plants/3.webp", name: "Emma" },
  ],
  supportCta: { label: "Contact Support", href: "#" },
}

// Card component for Stack animation displaying support team member
function SupportTeamCard({ person }: { person: { image: string; name: string } }) {
  return (
    <div className="bg-card h-full w-full rounded-2xl p-4 shadow-lg">
      <div className="relative aspect-square w-full overflow-hidden rounded-xl">
        <Image
          src={person.image}
          alt={person.name}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-card-foreground mt-3 text-center text-sm font-semibold">
        {person.name}
      </p>
    </div>
  )
}

export function Faq6({ content = {}, classNames = {} }: FaqBlockProps) {
  const {
    title = faq6Defaults.title,
    description = faq6Defaults.description,
    questions = faq6Defaults.questions,
    supportTitle = faq6Defaults.supportTitle,
    supportDescription = faq6Defaults.supportDescription,
    supportCta = faq6Defaults.supportCta,
  } = content

  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // Create cards for the Stack animation
  const stackCards = faq6Defaults.supportTeam.map((person, index) => (
    <SupportTeamCard key={index} person={person} />
  ))

  return (
    <section className={cn("bg-background", classNames.root)}>
      <div
        className={cn("container px-6 py-16 md:py-24", classNames.container)}
      >
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <SlideUp delay={0} distance={20}>
            <BlockHeader
              title={title}
              description={description}
              spacing="compact"
              classNames={classNames.header}
            />
          </SlideUp>

          {/* Questions */}
          <div className="mb-12 space-y-3">
            {questions.map((q, i) => (
              <SlideUp key={i} delay={0.1 + i * 0.05} distance={20}>
                <div className="border-border overflow-hidden rounded-lg border">
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
              </SlideUp>
            ))}
          </div>

          {/* Support CTA with Stack animation */}
          <SlideUp delay={0.3} distance={25}>
            <div className="border-border bg-muted rounded-2xl border p-8">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Stack of Support Team */}
                <div className="relative mx-auto h-[200px] w-[180px]">
                  <Stack
                    cards={stackCards}
                    autoplay
                    autoplayDelay={3000}
                    pauseOnHover
                    sendToBackOnClick
                    mobileClickOnly
                    sensitivity={150}
                  />
                </div>

                {/* Support Info */}
                <div className="flex flex-col items-center justify-center text-center md:items-start md:text-left">
                  <h3 className="text-foreground mb-2 text-xl font-bold">
                    {supportTitle}
                  </h3>
                  <p className="text-muted-foreground mb-6">{supportDescription}</p>

                  <Button asChild>
                    <Link href={supportCta.href}>
                      <DynamicIcon name="MessageCircle" className="mr-2 h-4 w-4" />
                      {supportCta.label}
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}
