"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqServiceHospitality() {
  const faqs = [
    {
      question: "What's your cancellation policy?",
      answer: "Free cancellation up to 48 hours before check-in for most rates. Cancellations within 48 hours incur a one-night charge. Non-refundable rates offer discounts but cannot be cancelled or modified. We recommend travel insurance for maximum flexibility.",
    },
    {
      question: "Do you offer early check-in or late checkout?",
      answer: "Standard check-in is 3pm and checkout is 11am. We'll accommodate early check-in and late checkout based on availability at no extra charge. Guaranteed early check-in or late checkout can be reserved in advance for a nominal fee.",
    },
    {
      question: "Is breakfast included with my room?",
      answer: "Our room-only rates don't include breakfast, but you can add it for $25 per person. Suites and premium packages include complimentary breakfast. Our restaurant serves a la carte breakfast daily, and room service is available from 6am-noon.",
    },
    {
      question: "Do you have parking and what's the cost?",
      answer: "We offer secure self-parking for $35 per night and valet parking for $50 per night. Electric vehicle charging stations are available. Oversized vehicles and RVs can be accommodated with advance notice. In/out privileges included.",
    },
    {
      question: "Are pets allowed at your property?",
      answer: "Yes! We're pet-friendly and welcome dogs and cats under 50 lbs for a $75 per stay fee. We provide pet beds, bowls, treats, and a welcome package. Our concierge can recommend nearby parks, pet-friendly restaurants, and veterinary services.",
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
