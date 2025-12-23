"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqServiceRealEstate() {
  const faqs = [
    {
      question: "What are your commission rates and fees?",
      answer: "Our standard commission is 2.5% for sellers and 2.5% for buyers, totaling 5% of the sale price. We offer competitive rates for luxury properties and repeat clients. All fees are disclosed upfront with no hidden costs. Our services include professional photography, staging consultation, and comprehensive marketing.",
    },
    {
      question: "How long does it typically take to sell a home?",
      answer: "The average time to sell is 30-60 days, depending on market conditions, pricing, and property condition. Properly priced homes with strong marketing often receive offers within the first two weeks. We'll provide a customized timeline based on your specific property and local market analysis.",
    },
    {
      question: "Do you help with buying and selling simultaneously?",
      answer: "Yes! We specialize in coordinating simultaneous transactions to minimize stress and timing issues. We can arrange contingent offers, bridge loans, temporary housing, and closing date coordination. Our goal is to make your transition as seamless as possible.",
    },
    {
      question: "What makes your marketing approach different?",
      answer: "We use professional photography, drone footage, 3D virtual tours, and targeted digital advertising on all major platforms. Your listing appears on 100+ websites. We host open houses, create custom property websites, and leverage our extensive network of buyers and agents.",
    },
    {
      question: "Should I make repairs before listing my home?",
      answer: "It depends on the market and your home's condition. We'll conduct a pre-listing walkthrough and recommend which improvements offer the best ROI. Small updates like fresh paint and landscaping usually pay off. Major renovations may not be necessary. We'll create a customized strategy for your property.",
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
