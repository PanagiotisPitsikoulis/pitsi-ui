"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqServiceBarber() {
  const faqs = [
    {
      question: "Do I need an appointment or do you accept walk-ins?",
      answer: "We welcome both! Appointments are recommended to guarantee your preferred time and barber. Walk-ins are accommodated based on availability. You can book online 24/7 or call us. We also offer same-day appointments if you need a quick cut.",
    },
    {
      question: "What's included in a premium haircut service?",
      answer: "Our premium cut includes consultation, shampoo, precision cutting, hot towel treatment, shoulder massage, styling, and finishing products. We take our time to ensure every detail is perfect. Complimentary beard trim touch-ups are included with every haircut.",
    },
    {
      question: "How often should I get a haircut?",
      answer: "For most styles, we recommend every 3-4 weeks to maintain shape and length. Skin fades and tight styles need refreshing every 1-2 weeks. Longer styles can go 4-6 weeks. We'll create a schedule tailored to your hair type and desired look.",
    },
    {
      question: "Do you offer beard grooming and shaping services?",
      answer: "Absolutely! We specialize in beard trims, shaping, and full grooming services. This includes hot towel prep, precision trimming, line-ups, conditioning treatments, and styling. We'll help you find the perfect beard style for your face shape.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards, debit cards, and digital payments including Apple Pay and Google Pay. Gratuities can be added to card payments or given directly to your barber. Gift cards are also available for purchase.",
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
