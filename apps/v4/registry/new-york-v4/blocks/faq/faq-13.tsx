"use client"

import Link from "next/link"

import { DynamicIcon, type IconName } from "@/lib/blocks/dynamic-icon"
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
import { Button } from "@/registry/new-york-v4/ui/button"

interface ContactOption {
  icon: IconName
  title: string
  description: string
  action: string
  href: string
}

interface Faq13Props {
  content?: {
    badge?: string
    title?: string
    description?: string
    questions?: Array<{ question: string; answer: string }>
    contactTitle?: string
    contactDescription?: string
    contactOptions?: ContactOption[]
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

const faq13Defaults = {
  badge: "Support",
  title: "Frequently Asked Questions",
  description: "Everything you need to know about planning your perfect trip",
  questions: [
    {
      question: "What destinations do you specialize in?",
      answer:
        "We specialize in curated experiences across Europe, Asia, the Americas, and island destinations. Our local experts design unique itineraries that go beyond typical tourist routes, offering authentic cultural experiences and hidden gems.",
    },
    {
      question: "How flexible are your travel packages?",
      answer:
        "Our packages are highly customizable. Start with one of our curated itineraries and modify dates, accommodations, activities, and add-ons to match your preferences. We also create fully bespoke journeys from scratch.",
    },
    {
      question: "What's your best price guarantee?",
      answer:
        "If you find the exact same itinerary at a lower price within 48 hours of booking, we'll match it and give you an additional 5% credit toward future travel. Quality and value are our priorities.",
    },
    {
      question: "Do you handle all the logistics?",
      answer:
        "Yes! From airport transfers and accommodation to restaurant reservations and activity bookings, we handle every detail. You'll receive a comprehensive digital travel guide with all confirmations, local tips, and 24/7 concierge support.",
    },
    {
      question: "What if I need to cancel my trip?",
      answer:
        "We understand plans change. Our flexible cancellation policy offers full refunds up to 45 days before departure, 75% refund up to 30 days, and 50% up to 14 days. Travel insurance provides additional protection.",
    },
  ],
  contactTitle: "Still have questions?",
  contactDescription:
    "Our travel experts are ready to help plan your dream trip",
  contactOptions: [
    {
      icon: "MessageCircle" as IconName,
      title: "Live Chat",
      description: "Chat with our team",
      action: "Start Chat",
      href: "#",
    },
    {
      icon: "Mail" as IconName,
      title: "Email Us",
      description: "Get a response within 24h",
      action: "Send Email",
      href: "mailto:support@travel.com",
    },
    {
      icon: "Phone" as IconName,
      title: "Call Us",
      description: "Mon-Fri, 9am-6pm",
      action: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
  ],
}

export function Faq13({ content = {}, classNames = {} }: Faq13Props) {
  const {
    badge = faq13Defaults.badge,
    title = faq13Defaults.title,
    description = faq13Defaults.description,
    questions = faq13Defaults.questions,
    contactTitle = faq13Defaults.contactTitle,
    contactDescription = faq13Defaults.contactDescription,
    contactOptions = faq13Defaults.contactOptions,
  } = content

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

        <div className="mx-auto max-w-4xl">
          {/* FAQ accordion */}
          <ScrollFade>
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className="mb-16 w-full"
            >
              {questions.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className="border-border bg-muted/30 mb-3 overflow-hidden rounded-xl border px-2"
                >
                  <AccordionTrigger className="text-foreground px-4 py-5 text-left text-base font-medium hover:no-underline">
                    <div className="flex items-center gap-3">
                      <span className="bg-primary/10 text-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm font-semibold">
                        {idx + 1}
                      </span>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground px-4 pb-5 pl-16">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollFade>

          {/* Contact CTA Section */}
          <SlideUp delay={0.2} distance={25}>
            <div className="bg-muted rounded-3xl p-8 md:p-12">
              <div className="mb-8 text-center">
                <h3 className="text-foreground mb-2 text-2xl font-bold">
                  {contactTitle}
                </h3>
                <p className="text-muted-foreground">{contactDescription}</p>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {contactOptions.map((option, idx) => (
                  <div
                    key={idx}
                    className="bg-background group rounded-2xl p-6 text-center shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl transition-colors">
                      <DynamicIcon name={option.icon} className="h-6 w-6" />
                    </div>
                    <h4 className="text-foreground mb-1 font-semibold">
                      {option.title}
                    </h4>
                    <p className="text-muted-foreground mb-4 text-sm">
                      {option.description}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={option.href}>{option.action}</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  )
}
