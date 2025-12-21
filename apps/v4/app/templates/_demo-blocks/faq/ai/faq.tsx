"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqAi() {
  const faqs = [
    {
      question: "How does your AI platform ensure data privacy?",
      answer: "We use end-to-end encryption and process all data in secure, isolated environments. Your data never leaves your control, and we're fully compliant with GDPR, CCPA, and SOC 2 standards. We also offer on-premise deployment options for enterprise clients.",
    },
    {
      question: "What makes your AI different from other solutions?",
      answer: "Our AI is built on cutting-edge transformer architecture with custom training on domain-specific data. We combine multiple AI models for accuracy, offer real-time learning capabilities, and provide explainable AI features so you understand every decision.",
    },
    {
      question: "How long does it take to integrate your AI into existing systems?",
      answer: "Most integrations are completed in 2-4 weeks. We provide RESTful APIs, SDKs for popular languages, and comprehensive documentation. Our team offers white-glove onboarding support to ensure seamless integration with your workflow.",
    },
    {
      question: "Can I customize the AI models for my specific use case?",
      answer: "Absolutely! We offer fine-tuning services where you can train our models on your proprietary data. You can adjust parameters, add custom rules, and create specialized workflows tailored to your industry and requirements.",
    },
    {
      question: "What kind of support and maintenance do you provide?",
      answer: "All plans include 24/7 technical support, regular model updates, and performance monitoring. Enterprise clients get dedicated account managers, SLA guarantees, and priority access to new features and beta programs.",
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
