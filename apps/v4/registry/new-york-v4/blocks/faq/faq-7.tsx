"use client"

import { type FaqBlockProps } from "@/lib/blocks/faq.types"
import { cn } from "@/lib/utils"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

const faq7Defaults = {
  badge: "FAQ",
  title: "Frequently asked questions",
  description: "Everything you need to know about the component library",
  faqs: [
    {
      question: "Is this really free?",
      answer:
        "Yes! All core components are free and open source under the MIT license. You can use them in personal and commercial projects.",
    },
    {
      question: "Do I need to install a package?",
      answer:
        "No. This is not a traditional component library. You copy the code directly into your project, giving you full ownership and customization control.",
    },
    {
      question: "Can I use this with other frameworks?",
      answer:
        "The components are built for React. However, since you own the code, you can adapt them to work with other frameworks.",
    },
    {
      question: "How do I customize the components?",
      answer:
        "Components are built with Tailwind CSS and CSS variables. You can customize colors, spacing, and other properties by modifying the code or updating your Tailwind config.",
    },
    {
      question: "What's included in the Pro version?",
      answer:
        "Pro includes premium components, blocks, templates, Figma files, priority support, and lifetime updates. It's a one-time purchase.",
    },
  ],
}

export function Faq7({ content = {}, classNames = {} }: FaqBlockProps) {
  const {
    badge = faq7Defaults.badge,
    title = faq7Defaults.title,
    description = faq7Defaults.description,
    faqs = faq7Defaults.faqs,
  } = content as typeof faq7Defaults

  return (
    <section className={cn("py-24", classNames.root)}>
      <div className={cn("container px-6", classNames.container)}>
        {/* Header */}
        <BlockHeader
          badge={badge}
          title={title}
          description={description}
          spacing="none"
          className="mx-auto mb-16 max-w-2xl"
          classNames={classNames.header}
        />

        {/* FAQ accordion */}
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger
                  className={cn(
                    "text-left text-base font-medium",
                    classNames.faq?.question
                  )}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className={cn(
                    "text-muted-foreground",
                    classNames.faq?.answer
                  )}
                >
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
