"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqBoat() {
  const faqs = [
    {
      question: "What's included in a charter rental?",
      answer: "All charters include a fully licensed captain, fuel, safety equipment, water, ice, and basic amenities. Premium packages add catering, water sports equipment, fishing gear, and a crew member. We provide everything you need for a worry-free day on the water.",
    },
    {
      question: "Do I need boating experience to rent a yacht?",
      answer: "No experience necessary! All our vessels come with a professional captain who handles navigation and operations. You just relax and enjoy the journey. For those interested in learning, we also offer bareboat charters with proper certification.",
    },
    {
      question: "What happens if weather conditions are unsafe?",
      answer: "Safety is our top priority. If weather becomes hazardous, we'll reschedule at no charge or provide a full refund. We monitor conditions closely and will notify you 24-48 hours in advance if changes are needed.",
    },
    {
      question: "Can we bring our own food and drinks?",
      answer: "Absolutely! You're welcome to bring your own provisions. All vessels have refrigeration, ice makers, and cooking facilities. We also partner with local caterers if you'd prefer professional catering services for your event.",
    },
    {
      question: "How far in advance should I book?",
      answer: "For weekends and holidays, we recommend booking 4-6 weeks in advance. Weekday charters can often be arranged with 1-2 weeks notice. Last-minute availability sometimes opens up, so don't hesitate to contact us!",
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
