"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/new-york-v4/ui/accordion"

export function FaqServiceMarketing() {
  const faqs = [
    {
      question: "What's included in your marketing packages?",
      answer: "Our packages include strategy development, content creation, campaign execution, and performance analytics. Services range from social media management and SEO to paid advertising and email marketing. We customize each package to your goals, budget, and industry.",
    },
    {
      question: "How long does it take to see results from marketing campaigns?",
      answer: "SEO typically shows results in 3-6 months, while paid ads can generate leads immediately. Social media growth is gradual over 2-4 months. We provide monthly reports tracking KPIs, and most clients see measurable improvements within the first 90 days.",
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No! We offer month-to-month services with no long-term contracts. While we recommend 6-12 month commitments for best results, you're free to adjust or cancel with 30 days notice. Our goal is to deliver value that keeps you coming back.",
    },
    {
      question: "What industries do you specialize in?",
      answer: "We work across industries including e-commerce, SaaS, healthcare, professional services, and hospitality. Our team has experience in B2B and B2C marketing. Each campaign is customized with industry-specific strategies, competitor analysis, and audience targeting.",
    },
    {
      question: "How do you measure ROI and campaign success?",
      answer: "We track metrics aligned with your goals: conversions, lead quality, revenue, engagement, and brand awareness. You'll receive detailed monthly reports with actionable insights. We use analytics tools to attribute revenue directly to marketing efforts and optimize based on data.",
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
