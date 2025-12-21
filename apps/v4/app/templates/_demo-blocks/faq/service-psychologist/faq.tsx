"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqServicePsychologist() {
  const faqs = [
    {
      question: "How do I know if therapy is right for me?",
      answer: "If you're experiencing persistent stress, anxiety, depression, relationship issues, or major life transitions, therapy can help. You don't need a crisis to benefit from therapy. Many people seek support for personal growth, self-awareness, and developing coping strategies for life's challenges.",
    },
    {
      question: "Do you accept insurance and what are your rates?",
      answer: "We're in-network with most major insurance providers including Aetna, Blue Cross, Cigna, and UnitedHealthcare. Self-pay rates range from $150-$250 per session. We provide superbills for out-of-network reimbursement. Sliding scale fees are available based on financial need.",
    },
    {
      question: "Is therapy confidential?",
      answer: "Yes, everything discussed in therapy is completely confidential. Exceptions include imminent danger to yourself or others, suspected child or elder abuse, or court orders. We follow HIPAA regulations and will never share your information without written consent.",
    },
    {
      question: "Do you offer in-person, virtual, or both types of sessions?",
      answer: "We offer both in-person sessions at our office and secure telehealth sessions via video. Many clients prefer the flexibility of virtual therapy. Both formats are equally effective, and you can switch between them based on your schedule and preferences.",
    },
    {
      question: "How long does therapy typically last?",
      answer: "It varies based on your goals and needs. Some people benefit from short-term therapy (8-12 sessions) for specific issues. Others engage in longer-term therapy for deeper work. We'll regularly assess progress together and adjust frequency as needed. You're always in control of your treatment timeline.",
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
