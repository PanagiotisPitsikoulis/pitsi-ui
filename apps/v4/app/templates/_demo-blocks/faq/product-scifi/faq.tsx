"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqProductScifi() {
  const faqs = [
    {
      question: "Are your products compatible with standard Earth power systems?",
      answer: "All our devices include universal quantum adapters that work with any power source from 1V to 1000V, AC or DC. They also feature wireless plasma charging and can be powered by ambient energy in most environments. Earth electrical systems are fully supported.",
    },
    {
      question: "What kind of warranty do you offer on advanced tech?",
      answer: "We provide a 5-year universal warranty covering manufacturing defects and component failures. Premium coverage includes accidental damage, quantum degradation, and free upgrades to next-gen technology. Extended warranties available for deep space missions.",
    },
    {
      question: "How do I update firmware on my quantum device?",
      answer: "Updates are delivered automatically via quantum entanglement network, requiring no user intervention. Critical security patches install instantly. You can also manually download updates from our neural network portal or sync with any compatible quantum hub.",
    },
    {
      question: "Is this technology safe for organic lifeforms?",
      answer: "Absolutely! All products undergo rigorous bio-compatibility testing across 47 known species types. We use bio-shielded quantum cores, emit zero harmful radiation, and comply with Galactic Safety Standards. Medical-grade certifications available on request.",
    },
    {
      question: "Can I return products if they don't meet my needs?",
      answer: "We offer a 90-day satisfaction guarantee across all galaxies. Return shipping via quantum portal is free. Items must be in original condition with all accessories. Opened software and custom-configured AI systems may be subject to a restocking fee.",
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
