"use client"

import { type FaqBlockProps } from "@/lib/blocks/faq.types"
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

const faq8Defaults = {
  badge: "Travel FAQ",
  title: "Questions About Your Journey",
  description:
    "Find answers to common questions about booking, destinations, and travel policies.",
  faqs: [
    {
      question: "How do I book a trip?",
      answer:
        "Booking is simple! Browse our destinations, select your preferred dates and accommodation, and complete the secure checkout. You'll receive a confirmation email within minutes with all your travel details.",
    },
    {
      question: "What's included in my travel package?",
      answer:
        "Our packages typically include flights, accommodation, airport transfers, and selected activities. Each package page details exactly what's included. You can also customize your trip by adding extras like travel insurance or premium excursions.",
    },
    {
      question: "Can I modify my booking after confirmation?",
      answer:
        "Yes, most bookings can be modified up to 48 hours before departure. Changes may include date adjustments, accommodation upgrades, or adding travelers. Some modifications may incur a small fee depending on the change.",
    },
    {
      question: "What documents do I need for international travel?",
      answer:
        "You'll need a valid passport with at least 6 months validity beyond your travel dates. Some destinations require visas, which we'll inform you about during booking. We also recommend having copies of your booking confirmation, travel insurance, and any required health documentation.",
    },
    {
      question: "How does travel insurance work?",
      answer:
        "We partner with leading insurance providers to offer comprehensive coverage including trip cancellation, medical emergencies, lost luggage, and flight delays. You can add insurance during checkout or within 24 hours of booking.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Free cancellation is available up to 30 days before departure for most packages. Cancellations within 30 days may incur a fee based on the booking type. We recommend travel insurance for maximum flexibility and peace of mind.",
    },
  ],
}

export function Faq8({ content = {}, classNames = {} }: FaqBlockProps) {
  const {
    badge = faq8Defaults.badge,
    title = faq8Defaults.title,
    description = faq8Defaults.description,
    faqs = faq8Defaults.faqs,
  } = content as typeof faq8Defaults

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

        {/* FAQ accordion */}
        <ScrollFade>
          <div className="mx-auto max-w-2xl">
            <Accordion
              type="single"
              collapsible
              defaultValue="item-0"
              className={cn("w-full", classNames.accordion)}
            >
              {faqs.map((faq, idx) => (
                <AccordionItem
                  key={idx}
                  value={`item-${idx}`}
                  className={cn("border-border", classNames.item?.root)}
                >
                  <AccordionTrigger
                    className={cn(
                      "text-foreground hover:text-primary text-left text-base font-medium",
                      classNames.item?.trigger
                    )}
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent
                    className={cn(
                      "text-muted-foreground",
                      classNames.item?.content
                    )}
                  >
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
