"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqProductSkincare() {
  const faqs = [
    {
      question: "Are your products suitable for sensitive skin?",
      answer: "Yes! Our formulas are dermatologist-tested, hypoallergenic, and free from common irritants like fragrances, parabens, and sulfates. We offer a sensitive skin collection specifically designed for reactive skin types. All products undergo rigorous patch testing.",
    },
    {
      question: "How long until I see results?",
      answer: "Most customers notice improvements within 2-4 weeks of consistent use. Anti-aging and treatment products may take 6-8 weeks to show full results. We recommend taking before photos and following our skincare routine guide for optimal outcomes.",
    },
    {
      question: "Can I use multiple products from different collections?",
      answer: "Absolutely! Our products are designed to work together. We recommend starting with our core routine (cleanser, treatment, moisturizer, SPF) then adding targeted treatments. Our skincare consultants can help you build a customized regimen.",
    },
    {
      question: "Do you test on animals?",
      answer: "Never. We're certified cruelty-free by Leaping Bunny and PETA. We use advanced in-vitro testing methods and human clinical trials to ensure safety and efficacy. Many of our products are also vegan-friendly.",
    },
    {
      question: "What's your return policy if a product doesn't work for me?",
      answer: "We offer a 60-day satisfaction guarantee. If you're not completely happy with your purchase, return it for a full refund or exchange, even if the product is partially used. Your skin's happiness is our priority!",
    },
  ]

  return (
    <section>
      <div className="container px-6">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.3em] uppercase font-medium mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">
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
