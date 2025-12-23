"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqProductPlants() {
  const faqs = [
    {
      question: "How do I know which plant is right for my space?",
      answer: "Consider your space's light levels, humidity, and temperature. Low-light spaces work well with pothos, snake plants, and ZZ plants. Bright indirect light is perfect for monsteras and fiddle leaf figs. Our plant quiz can help you find the perfect match!",
    },
    {
      question: "How are plants packaged for shipping?",
      answer: "Each plant is carefully wrapped in protective materials and secured in custom boxes designed to prevent movement during transit. We include moisture packs and clear care instructions with every order.",
    },
    {
      question: "What if my plant arrives damaged?",
      answer: "We offer a 30-day guarantee on all plants. If your plant arrives damaged or doesn't thrive within the first month, we'll replace it free of charge. Just send us a photo and we'll take care of the rest.",
    },
    {
      question: "How often should I water my plants?",
      answer: "Watering frequency depends on the plant type, pot size, and environment. Most indoor plants prefer to dry out slightly between waterings. We include a detailed care card with each plant, and our app sends watering reminders!",
    },
    {
      question: "Do you offer plant care services?",
      answer: "Yes! We offer virtual plant consultations, repotting services, and even a plant hospital for struggling plants. Check our services page for more details and pricing.",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">FAQ</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Common Questions
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
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
