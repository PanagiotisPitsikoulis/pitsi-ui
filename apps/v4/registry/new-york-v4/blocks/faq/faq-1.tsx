"use client"

import { faqDefaults, type FaqBlockProps } from "@/lib/blocks/faq.types"
import { cn } from "@/lib/utils"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

// Block-specific defaults that override the generic defaults
const blockDefaults = {
  badge: "Questions",
  title: "Everything You Need to Know",
  items: [
    {
      question: "How do I know which plant is right for my space?",
      answer:
        "Consider your space's light levels, humidity, and temperature. Low-light spaces work well with pothos, snake plants, and ZZ plants. Bright indirect light is perfect for monsteras and fiddle leaf figs. Our plant quiz can help you find the perfect match!",
    },
    {
      question: "How are plants packaged for shipping?",
      answer:
        "Each plant is carefully wrapped in protective materials and secured in custom boxes designed to prevent movement during transit. We include moisture packs and clear care instructions with every order.",
    },
    {
      question: "What if my plant arrives damaged?",
      answer:
        "We offer a 30-day guarantee on all plants. If your plant arrives damaged or doesn't thrive within the first month, we'll replace it free of charge. Just send us a photo and we'll take care of the rest.",
    },
    {
      question: "How often should I water my plants?",
      answer:
        "Watering frequency depends on the plant type, pot size, and environment. Most indoor plants prefer to dry out slightly between waterings. We include a detailed care card with each plant, and our app sends watering reminders!",
    },
    {
      question: "Do you offer plant care services?",
      answer:
        "Yes! We offer virtual plant consultations, repotting services, and even a plant hospital for struggling plants. Check our services page for more details and pricing.",
    },
  ],
}

export function Faq1({ content = {}, classNames = {} }: FaqBlockProps) {
  // Merge content with block-specific defaults, falling back to generic defaults
  const {
    badge = blockDefaults.badge ?? faqDefaults.badge,
    title = blockDefaults.title ?? faqDefaults.title,
    items = blockDefaults.items ?? faqDefaults.items,
  } = content

  return (
    <section className={cn("relative overflow-x-clip", classNames.root)}>
      {/* Left decoration */}
      <div
        className="pointer-events-none absolute top-0 -left-32 h-[500px] w-[500px] -rotate-12 opacity-50 select-none"
        style={{
          backgroundImage:
            "url('/placeholders/blocks/service-plants/assets/decoration-bg-1.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />
      {/* Right decoration */}
      <div
        className="pointer-events-none absolute top-48 -right-32 h-[500px] w-[500px] rotate-12 opacity-50 select-none"
        style={{
          backgroundImage:
            "url('/placeholders/blocks/service-plants/assets/decoration-bg-2.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />
      <div className={cn("relative z-10 container px-6", classNames.container)}>
        <div className={cn("mb-20 text-center", classNames.header?.root)}>
          {badge && (
            <p
              className={cn(
                "text-primary mb-4 text-sm font-medium tracking-[0.3em] uppercase",
                classNames.header?.badge
              )}
            >
              {badge}
            </p>
          )}
          <h2
            className={cn(
              "font-display text-foreground text-3xl font-bold md:text-5xl",
              classNames.header?.title
            )}
          >
            {title}
          </h2>
        </div>
        <div className="mx-auto max-w-2xl">
          <Accordion
            type="single"
            collapsible
            defaultValue="item-0"
            className={cn("w-full", classNames.accordion)}
          >
            {items.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className={cn("border-border", classNames.item?.root)}
              >
                <AccordionTrigger
                  className={cn(
                    "text-foreground hover:text-primary text-left text-lg",
                    classNames.item?.trigger
                  )}
                >
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent
                  className={cn(
                    "text-muted-foreground h-24 text-base",
                    classNames.item?.content
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

// Re-export for backwards compatibility
export { Faq1 as FaqServicePlants }
