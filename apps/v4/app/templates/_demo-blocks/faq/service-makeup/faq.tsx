"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqServiceMakeup() {
  const faqs = [
    {
      question: "How far in advance should I book for a special event?",
      answer: "For weddings and major events, we recommend booking 3-6 months in advance, especially for peak season (May-October). Regular appointments can be booked 2-4 weeks ahead. We do accommodate last-minute requests when possible, so don't hesitate to reach out!",
    },
    {
      question: "Do you offer trials for bridal makeup?",
      answer: "Yes! We highly recommend a trial 1-3 months before your wedding. This allows us to perfect your look, test products, and ensure longevity. Trials last 90 minutes and include consultation, application, and adjustments. The trial fee is credited toward your wedding day service.",
    },
    {
      question: "What products do you use and are they safe for sensitive skin?",
      answer: "We use professional brands like MAC, Bobbi Brown, Charlotte Tilbury, and NARS. All products are hypoallergenic and we offer vegan/cruelty-free options. If you have sensitive skin or allergies, let us know in advance and we'll customize our product selection.",
    },
    {
      question: "Do you travel for events or only work in your studio?",
      answer: "We offer both! Studio appointments are available daily by appointment. For weddings and events, we travel to your location within 50 miles at no extra charge. Longer distances incur a travel fee. On-location services include full professional lighting and setup.",
    },
    {
      question: "How long does makeup application take?",
      answer: "A standard makeup application takes 45-60 minutes. Bridal and editorial looks may take up to 90 minutes. Group bookings are scheduled with staggered start times to ensure everyone is ready on time. We always build in buffer time for photos and touch-ups.",
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
