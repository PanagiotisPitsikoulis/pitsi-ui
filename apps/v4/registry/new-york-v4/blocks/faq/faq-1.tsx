"use client"

import { faqDefaults, type FaqBlockProps } from "@/lib/blocks/faq.types"
import { cn } from "@/lib/utils"
import { ScrollExpand } from "@/registry/new-york-v4/animations/scroll-expand/scroll-expand"
import { SlideUp } from "@/registry/new-york-v4/animations/slide-up/slide-up"
import { BlockHeader } from "@/registry/new-york-v4/lib/block-header"
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
          backgroundImage: "url('/elements/decoration-bg/plants/1.svg')",
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
          backgroundImage: "url('/elements/decoration-bg/plants/2.svg')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        aria-hidden="true"
      />
      <div className={cn("relative z-10 container px-6", classNames.container)}>
        <SlideUp delay={0} distance={20}>
          <BlockHeader
            badge={badge}
            title={title}
            badgeColor="primary"
            classNames={classNames.header}
          />
        </SlideUp>
        <ScrollExpand
          marginX="2rem"
          borderRadius="1.5rem"
          className="mx-auto max-w-2xl"
        >
          <div className="bg-card border-border rounded-3xl border p-6 shadow-sm">
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
        </ScrollExpand>
      </div>
    </section>
  )
}

// Re-export for backwards compatibility
export { Faq1 as FaqServicePlants }
