"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqArt() {
  const faqs = [
    {
      question: "How do you authenticate and verify artwork provenance?",
      answer: "Each piece comes with a certificate of authenticity signed by the artist and gallery. We maintain detailed provenance records, condition reports, and use blockchain verification for high-value works to ensure complete transparency.",
    },
    {
      question: "What is your return and exchange policy?",
      answer: "We offer a 14-day return window for most artworks. Pieces must be returned in original condition with packaging. Custom commissions and framed works are final sale unless there's a defect or damage during shipping.",
    },
    {
      question: "Do you offer art consultation services?",
      answer: "Yes! Our curators provide complimentary consultations to help you select pieces that match your space, style, and budget. We also offer interior design collaboration and art advisory services for serious collectors.",
    },
    {
      question: "How are artworks packaged and shipped?",
      answer: "We use museum-grade packaging with custom crating for larger pieces. All shipments are fully insured and tracked. Fragile works include climate-controlled shipping, and we coordinate white-glove delivery for valuable collections.",
    },
    {
      question: "Can I commission a custom piece from one of your artists?",
      answer: "Absolutely! Many of our artists accept commissions. We'll connect you directly with the artist to discuss your vision, timeline, and pricing. Commission deposits are typically 50% upfront, with the balance due upon completion.",
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
