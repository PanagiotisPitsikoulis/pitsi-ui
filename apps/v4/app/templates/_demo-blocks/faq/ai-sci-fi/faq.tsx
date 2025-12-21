"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqAiSciFi() {
  const faqs = [
    {
      question: "What neural interface protocols does your AI support?",
      answer: "Our quantum AI supports all major neural protocols including NeuroLink X, BrainBridge, and CortexConnect. We use advanced signal processing to ensure compatibility across biological and synthetic interfaces with minimal latency.",
    },
    {
      question: "Is your AI sentient or self-aware?",
      answer: "No, our AI operates on advanced machine learning and quantum computing, but it's not sentient. It simulates consciousness-level responses through sophisticated pattern recognition and predictive modeling, always remaining under human control.",
    },
    {
      question: "How does quantum processing enhance your AI capabilities?",
      answer: "Quantum processors allow us to analyze millions of parallel scenarios simultaneously, making predictions and decisions exponentially faster than classical systems. This enables real-time analysis of complex multidimensional problems.",
    },
    {
      question: "What safeguards prevent AI system failures or rogue behavior?",
      answer: "We implement triple-redundant containment protocols, ethical constraint frameworks, and human-in-the-loop verification for critical decisions. Our AI includes hard-coded failsafes that cannot be overridden, even by the system itself.",
    },
    {
      question: "Can your AI interface with legacy 21st-century systems?",
      answer: "Yes! We maintain backward compatibility through our temporal translation layer, which converts modern quantum protocols to legacy binary systems. We also offer bridge modules for smooth integration with classical computing infrastructure.",
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
